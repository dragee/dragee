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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9EcmFnZWUvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0RyYWdlZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9EcmFnZWUvLi9ub2RlX21vZHVsZXMvZGVzYW5kcm8tZ2V0LXN0eWxlLXByb3BlcnR5L2dldC1zdHlsZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9ub2RlX21vZHVsZXMvcmVtb3ZlLWFycmF5LWl0ZW1zL2Rpc3QvcmVtb3ZlLWFycmF5LWl0ZW1zLmVzbS5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9zcmMvYm91bmQuanMiLCJ3ZWJwYWNrOi8vRHJhZ2VlLy4vc3JjL2NoYXJ0LmpzIiwid2VicGFjazovL0RyYWdlZS8uL3NyYy9kcmFnZ2FibGUuanMiLCJ3ZWJwYWNrOi8vRHJhZ2VlLy4vc3JjL2V2ZW50LmpzIiwid2VicGFjazovL0RyYWdlZS8uL3NyYy9nZW9tZXRyeS5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9zcmMvcG9zaXRpb25pbmcuanMiLCJ3ZWJwYWNrOi8vRHJhZ2VlLy4vc3JjL3Njb3BlLmpzIiwid2VicGFjazovL0RyYWdlZS8uL3NyYy90YXJnZXQuanMiLCJ3ZWJwYWNrOi8vRHJhZ2VlLy4vc3JjL3V0aWxzL2NsYXNzZXMuanMiLCJ3ZWJwYWNrOi8vRHJhZ2VlLy4vc3JjL3V0aWxzL2NyZWF0ZWNhbnZhcy5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9zcmMvdXRpbHMvZ2V0ZGVmYXVsdHBhcmVudC5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9zcmMvdXRpbHMvcmFuZ2UuanMiXSwibmFtZXMiOlsiYm91bmRUb1JlY3RhbmdsZSIsInJlY3RhbmdsZSIsInBvaW50Iiwic2l6ZSIsImNhbGNQb2ludCIsImNsb25lIiwicmVjdFAyIiwiZ2V0UDMiLCJwb3NpdGlvbiIsIngiLCJ5IiwiYm91bmRUb0VsZW1lbnQiLCJlbGVtZW50IiwicGFyZW50IiwicmV0RnVuYyIsImJvdW5kIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJyZWZyZXNoIiwiR2VvbWV0cnkiLCJjcmVhdGVSZWN0YW5nbGVGcm9tRWxlbWVudCIsImJvdW5kVG9MaW5lWCIsInN0YXJ0WSIsImVuZFkiLCJib3VuZFRvTGluZVkiLCJzdGFydFgiLCJlbmRYIiwiYm91bmRUb0xpbmUiLCJzdGFydCIsImVuZCIsImFscGhhIiwiTWF0aCIsImF0YW4yIiwiYmV0YSIsIlBJIiwic29tZUsiLCJjb3NCZXRhIiwiY29zIiwic2luQmV0YSIsInNpbiIsInBvaW50MiIsIlBvaW50IiwibmV3RW5kIiwiZ2V0UG9pbnRJbkxpbmVCeUxlbmdodCIsInBvaW50Q3Jvc3NpbmciLCJkaXJlY3RDcm9zc2luZyIsImJvdW5kVG9DaXJjbGUiLCJjZW50ZXIiLCJyYWRpdXMiLCJfc2l6ZSIsImJvdW5kZWRQb2ludCIsImJvdW5kVG9BcmMiLCJzdGFydEFnbGUiLCJlbmRBbmdsZSIsImJvdW5kU3RhcnRBbmdsZSIsImJvdW5kRW5kdEFuZ2xlIiwiYW5nbGUiLCJnZXRBbmdsZSIsIm5vcm1hbGl6ZUFuZ2xlIiwiYm91bmRBbmdsZSIsImdldFBvaW50RnJvbVJhZGlhbFN5c3RlbSIsImlzVG91Y2giLCJ3aW5kb3ciLCJyYW5kb21Db2xvciIsInJuZCIsInJvdW5kIiwicmFuZG9tIiwidG9IZXhTdHJpbmciLCJkaWdpdCIsInN0ciIsInRvU3RyaW5nIiwibGVuZ3RoIiwiZ2V0QXJyYXlXaXRoQm91bmRJbmRleGVzIiwiaW5kZXgiLCJyZXRJbmRleGVzIiwicHVzaCIsIkNoYXJ0IiwiYXJlYSIsImVsZW1lbnRzIiwib3B0aW9ucyIsImFyZWFSZWN0YW5nbGUiLCJPYmplY3QiLCJhc3NpZ24iLCJnZXRDZW50ZXIiLCJnZXRNaW5TaWRlIiwidG91Y2hSYWRpdXMiLCJmaWxsU3R5bGVzIiwicmFuZ2UiLCJtYXAiLCJpbml0QW5nbGVzIiwidG9SYWRpYW4iLCJsaW1pdEltZyIsImxpbWl0SW1nT2Zmc2V0IiwiaXNTZWxlY3RhYmxlIiwib25EcmF3IiwiaW5pdCIsImNhbnZhcyIsImNyZWF0ZUNhbnZhcyIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwiZHJhZ2dhYmxlcyIsImkiLCJoYWxmU2l6ZSIsImdldFNpemVPZkVsZW1lbnQiLCJtdWx0Iiwic3ViIiwiZ2V0Qm91bmRBbmdsZSIsIkRyYWdnYWJsZSIsIm9uTW92ZSIsImRyYXciLCJpc0luaXQiLCJpbml0U2VsZWN0Iiwic2V0QWN0aXZlQXJjIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50cyIsImUiLCJjaGFuZ2VkVG91Y2hlcyIsInBhZ2VYIiwiY2xpZW50WCIsInBhZ2VZIiwiY2xpZW50WSIsImNhbnZhc09mZnNldCIsImdldE9mZnNldCIsImdldEFyY09uUG9pbnQiLCJhY3RpdmVBcmNJbmRleCIsImFuZ2xlcyIsImRyYWdnYWJsZSIsImdldFNpemUiLCJpc0Nsb3NzaW5nIiwic2lnbiIsInVwZGF0ZUFuZ2xlcyIsImNsZWFyUmVjdCIsImZvckVhY2giLCJfZHJhZ2dhYmxlIiwiZHJhd0FyYyIsImVuYWJsZUluZGV4ZXMiLCJpbmRleE9mIiwiZHJhd0xpbWl0SW1nIiwib3B0cyIsImNsb25lT2JqIiwiY2FsbCIsInN0YXJ0QW5nbGUiLCJjb2xvciIsImdldEZpbGxTdHlsZSIsImJlZ2luUGF0aCIsIm1vdmVUbyIsImFyYyIsImxpbmVUbyIsImNsb3NlUGF0aCIsImZpbGxTdHlsZSIsImZpbGwiLCJpbWciLCJBcnJheSIsImhlaWdodCIsImFkZCIsInRyYW5zbGF0ZSIsInJvdGF0ZSIsImRyYXdJbWFnZSIsInNldFRyYW5zZm9ybSIsInNsaWNlIiwiYmFzZUFuZ2xlIiwiZGlmZkFuZ2xlIiwiZ2V0QW5nbGVzRGlmZiIsImdldERpc3RhbmNlIiwib2Zmc2V0IiwiaiIsIm1vdmUiLCJlbmFibGUiLCJEcmFnZWUiLCJFdmVudCIsIm1vdXNlRXZlbnRzIiwidG91Y2hFdmVudHMiLCJ0cmFuc2Zvcm1Qcm9wZXJ0eSIsImdldFN0eWxlUHJvcGVydHkiLCJ0cmFuc2l0aW9uUHJvcGVydHkiLCJnZXRUb3VjaEJ5SUQiLCJ0b3VjaElkIiwiaWRlbnRpZmllciIsInByZXZlbnREb3VibGVJbml0IiwibWVzc2FnZSIsInNvbWUiLCJleGlzdGluZyIsImFkZFRvRGVmYXVsdFNjb3BlIiwiZGVmYXVsdFNjb3BlIiwiYWRkRHJhZ2dhYmxlIiwiZ2V0RGVmYXVsdFBhcmVudCIsInRhcmdldHMiLCJzdGFydEZpbHRlciIsImlzQ29udGVudEJveFNpemUiLCJoYW5kbGVyIiwicXVlcnlTZWxlY3RvciIsIm9uRW5kIiwiaXNSZXZlcnNlIiwiaXNTdG9wT25UcnVlIiwib25TdGFydCIsIm9uQ3JlYXRlIiwiZmlyZSIsIl9lbmFibGUiLCJmaXhQb3NpdGlvbiIsImluaXRQb3NpdGlvbiIsIl9kcmFnU3RhcnQiLCJkcmFnU3RhcnQiLCJiaW5kIiwiX2RyYWdNb3ZlIiwiZHJhZ01vdmUiLCJfZHJhZ0VuZCIsImRyYWdFbmQiLCJfcmVjYWx1bGF0ZSIsIl90cmFuc2Zvcm1Qb3NpdGlvbiIsInRyYW5zZm9ybSIsInN0eWxlIiwidHJhbnNsYXRlQ3NzIiwidWEiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJtc2llIiwidGVzdCIsInJlcGxhY2UiLCJ0aW1lIiwiaXNGaXgiLCJpc1NpbGVudCIsImRldGVybWluZURpcmVjdGlvbiIsIl9zZXRUcmFuc2xhdGUiLCJzZXRQb3NpdGlvbiIsImdldFBvc2l0aW9uIiwibGVmdERpcmVjdGlvbiIsInJpZ2h0RGlyZWN0aW9uIiwidXBEaXJlY3Rpb24iLCJkb3duRGlyZWN0aW9uIiwiZXZlbnQiLCJjdXJyZW50RXZlbnQiLCJpc1RvdWNoRXZlbnQiLCJUb3VjaEV2ZW50IiwiX3N0YXJ0VG91Y2hQb2ludCIsIl9zdGFydFBvc2l0aW9uIiwiX3RvdWNoSWQiLCJzdG9wUHJvcGFnYXRpb24iLCJ0YXJnZXQiLCJIVE1MSW5wdXRFbGVtZW50IiwicHJldmVudERlZmF1bHQiLCJmb2N1cyIsImRvY3VtZW50IiwiaXNEcmFnZ2luZyIsImFkZENsYXNzIiwidG91Y2giLCJ0b3VjaFBvaW50IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlbW92ZUNsYXNzIiwiUmVjdGFuZ2xlIiwicmVzZXQiLCJmdW5jcyIsInByb3RvdHlwZSIsImFyZ3MiLCJmcyIsInJldmVyc2UiLCJyZXRWYWx1ZSIsImYiLCJ1bnNoaWZ0IiwicmVtb3ZlIiwic3BsaWNlIiwiX2YiLCJwIiwiayIsInJlY3QiLCJtaW4iLCJtYXgiLCJpbmNsdWRlUG9pbnQiLCJheGlzIiwic2VsQXhpcyIsImNyb3NzUmVjdGFuZ2xlIiwiYW5kIiwidGhpc0NlbnRlciIsInJlY3RDZW50ZXIiLCJlbCIsImxlZnQiLCJ0b3AiLCJ3aWR0aCIsInAxIiwicDIiLCJkeCIsImR5Iiwic3FydCIsImRpc3RhbmNlIiwiZ2V0WERpZmZlcmVuY2UiLCJhYnMiLCJnZXRZRGlmZmVyZW5jZSIsInRyYW5zZm9ybWVkU3BhY2VEaXN0YW5jZUZhY3RvcnkiLCJwb3ciLCJpbmRleE9mTmVhcmVzdFBvaW50IiwiYXJyIiwidmFsIiwidGVtcCIsImJvdW5kUG9pbnQiLCJMMVAxIiwiTDFQMiIsIkwyUDEiLCJMMlAyIiwiazEiLCJrMiIsImIxIiwiYjIiLCJib3VuZFRvU2VnbWVudCIsIkxQMSIsIkxQMiIsIlAiLCJBIiwiQiIsIkFQIiwiQUIiLCJhYjIiLCJhcF9hYiIsInQiLCJnZXRQb2ludEluTGluZSIsInBlcmNlbnQiLCJsZW5naHQiLCJpc0NvbnNpZGVyVHJhbnNsYXRlIiwicGFyZW50Tm9kZSIsImdldFN1bVZhbHVlT2ZTdHlsZVJ1bGUiLCJydWxlcyIsInJlZHVjZSIsInN1bSIsInJ1bGUiLCJwYXJzZUludCIsImdldENvbXB1dGVkU3R5bGUiLCJlbFJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJwYXJlbnRSZWN0IiwiYWRkUG9pbnRUb0JvdW5kUG9pbnRzIiwiYm91bmRwb2ludHMiLCJpc1JpZ2h0IiwicmVzdWx0IiwiZmlsdGVyIiwiYlBvaW50IiwiZGlmZiIsInRvRGVncmVlIiwiZG1pbiIsImRtYXgiLCJnZXRBbmdsZURpZmYiLCJnZXROZWFyZXN0QW5nbGUiLCJ2YWx1ZSIsIm1pbkFuZ2xlIiwibWF4QW5nbGUiLCJwb3NpdGlvblR5cGUiLCJub3RDcm9zc2luZyIsImZsb2F0TGVmdCIsImZsb2F0UmlnaHQiLCJwb3NpdGlvbkZhY3RvcnkiLCJ0eXBlIiwiX29wdGlvbnMiLCJyZWN0YW5nbGVMaXN0IiwiaW5kZXhlc09mTmV3cyIsImJvdW5kUmVjdCIsInN0YXRpY1JlY3RhbmdsZUluZGV4ZXMiLCJpbmRleGVzIiwiX3JlY3QiLCJyZW1vdmFibGUiLCJpbmRleE9mU3RhdGljIiwic3RhdGljUmVjdCIsIm1vdmVUb0JvdW5kIiwiZ2V0U3F1YXJlIiwicGFkZGluZ1RvcExlZnQiLCJwYWRkaW5nQm90dG9tUmlnaHQiLCJ5R2FwQmV0d2VlbkRyYWdnYWJsZXMiLCJfaW5kZXhlc09mTmV3cyIsImdldFAyIiwiYm91bmRhcnlQb2ludHMiLCJpc1ZhbGlkIiwiYXNzaW5nIiwicGFkZGluZ1RvcFJpZ2h0IiwicGFkZGluZ0JvdHRvbUxlZnQiLCJwYWRkaW5nVG9wTmVnUmlnaHQiLCJwYWRkaW5nQm90dG9tTmVnTGVmdCIsImdldFJpZ2h0VG9wUG9pbnQiLCJfaW5kZXgiLCJnZXRMZWZ0Qm90dG9tUG9pbnQiLCJnZXRQNCIsInNvcnRpbmdGYWN0b3J5Iiwib2xkT2Jqc0xpc3QiLCJuZXdPYmpzIiwiaW5kZXhPZk5ld3MiLCJvYmpzTGlzdCIsImNvbmNhdCIsIm9iaiIsIm5ld0xpc3QiLCJsaXN0T2xkUG9zaXRpb24iLCJuZXdPYmoiLCJzY29wZXMiLCJTY29wZSIsInNjb3BlIiwicmVtb3ZlSXRlbXMiLCJ0aW1lRW5kIiwib25DaGFuZ2UiLCJzaG90VGFyZ2V0cyIsImNhdGNoRHJhZ2dhYmxlIiwic29ydCIsImEiLCJiIiwiZ2V0UmVjdGFuZ2xlIiwiaW5uZXJEcmFnZ2FibGVzIiwicG9zaXRpb25zIiwidGFyZ2V0SW5kZXhlcyIsImZuIiwiY3VycmVudFNjb3BlIiwiYWRkRHJhZ2dhYmxlVG9TY29wZSIsImFkZFRhcmdldFRvU2NvcGUiLCJhZGRUYXJnZXQiLCJUYXJnZXQiLCJzY29wZUZhY3RvcnkiLCJwYXJlbnRFbGVtZW50IiwiZHJhZ2dhYmxlRWxlbWVudHMiLCJ0YXJnZXRFbGVtZW50cyIsImRyYWdnYWJsZU9wdGlvbnMiLCJ0YXJnZXRPcHRpb25zIiwic2NvcGVPcHRpb25zIiwidGltZUV4Y2FuZ2UiLCJzb3J0aW5nIiwicG9zaXRpb25pbmciLCJvbkFkZCIsImJlZm9yZUFkZCIsIm9uUmVtb3ZlIiwicmVjdGFuZ2xlcyIsImluZGV4ZXNPZk5ldyIsInRhcmdldFJlY3RhbmdsZSIsImRyYWdnYWJsZVNxdWFyZSIsIm5ld0RyYWdnYWJsZXNJbmRleCIsImFkZFJlbW92ZU9uTW92ZSIsInB1c2hJbm5lckRyYWdnYWJsZSIsInJlbW92ZUhhbmRsZXIiLCJoYXNDbGFzcyIsImMiLCJyZSIsIlJlZ0V4cCIsImNsYXNzTmFtZSIsInNldFN0eWxlIiwiY3NzVGV4dCIsImtleSIsImhhc093blByb3BlcnR5IiwiYXBwZW5kRmlyc3RDaGlsZCIsIm5vZGUiLCJmaXJzdENoaWxkIiwiaW5zZXJ0QmVmb3JlIiwiYXBwZW5kQ2hpbGQiLCJyZWN0YWdsZSIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJzdG9wIiwic3RlcCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVDQUF1QyxTQUFTO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUssSUFBMEM7QUFDL0M7QUFDQSxFQUFFLG1DQUFRO0FBQ1Y7QUFDQSxHQUFHO0FBQUEsb0dBQUM7QUFDSixDQUFDLE1BQU0sRUFNTjs7QUFFRCxDQUFDOzs7Ozs7Ozs7Ozs7O0FDdEREO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLG9CQUFvQixTQUFTO0FBQzdCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFZSwwRUFBVyxFQUFDOzs7Ozs7Ozs7Ozs7O0FDMUIzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLFNBQVNBLGdCQUFULENBQTBCQyxTQUExQixFQUFxQztBQUMxQyxTQUFPLFVBQVNDLEtBQVQsRUFBZ0JDLElBQWhCLEVBQXNCO0FBQzNCLFFBQU1DLFNBQVMsR0FBR0YsS0FBSyxDQUFDRyxLQUFOLEVBQWxCO0FBQUEsUUFDRUMsTUFBTSxHQUFHTCxTQUFTLENBQUNNLEtBQVYsRUFEWDs7QUFHQSxRQUFJTixTQUFTLENBQUNPLFFBQVYsQ0FBbUJDLENBQW5CLEdBQXVCTCxTQUFTLENBQUNLLENBQXJDLEVBQXdDO0FBQ3JDTCxlQUFTLENBQUNLLENBQVYsR0FBY1IsU0FBUyxDQUFDTyxRQUFWLENBQW1CQyxDQUFsQztBQUNEOztBQUNELFFBQUlSLFNBQVMsQ0FBQ08sUUFBVixDQUFtQkUsQ0FBbkIsR0FBdUJOLFNBQVMsQ0FBQ00sQ0FBckMsRUFBd0M7QUFDdENOLGVBQVMsQ0FBQ00sQ0FBVixHQUFjVCxTQUFTLENBQUNPLFFBQVYsQ0FBbUJFLENBQWpDO0FBQ0Q7O0FBQ0QsUUFBSUosTUFBTSxDQUFDRyxDQUFQLEdBQVdMLFNBQVMsQ0FBQ0ssQ0FBVixHQUFjTixJQUFJLENBQUNNLENBQWxDLEVBQXFDO0FBQ25DTCxlQUFTLENBQUNLLENBQVYsR0FBY0gsTUFBTSxDQUFDRyxDQUFQLEdBQVdOLElBQUksQ0FBQ00sQ0FBOUI7QUFDRDs7QUFDRCxRQUFJSCxNQUFNLENBQUNJLENBQVAsR0FBV04sU0FBUyxDQUFDTSxDQUFWLEdBQWNQLElBQUksQ0FBQ08sQ0FBbEMsRUFBcUM7QUFDbkNOLGVBQVMsQ0FBQ00sQ0FBVixHQUFjSixNQUFNLENBQUNJLENBQVAsR0FBV1AsSUFBSSxDQUFDTyxDQUE5QjtBQUNEOztBQUVELFdBQU9OLFNBQVA7QUFDRCxHQWxCRDtBQW1CRDtBQUVNLFNBQVNPLGNBQVQsQ0FBd0JDLE9BQXhCLEVBQWlDQyxNQUFqQyxFQUF5QztBQUM5QyxNQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFXO0FBQ3pCLFdBQU9DLEtBQUssQ0FBQ0MsS0FBTixDQUFZLElBQVosRUFBa0JDLFNBQWxCLENBQVA7QUFDRCxHQUZEOztBQUdBLE1BQUlGLEtBQUo7O0FBRUFELFNBQU8sQ0FBQ0ksT0FBUixHQUFrQixZQUFXO0FBQzNCSCxTQUFLLEdBQUdmLGdCQUFnQixDQUFDbUIsa0RBQVEsQ0FBQ0MsMEJBQVQsQ0FBb0NSLE9BQXBDLEVBQTZDQyxNQUE3QyxDQUFELENBQXhCO0FBQ0QsR0FGRDs7QUFJQUMsU0FBTyxDQUFDSSxPQUFSO0FBQ0EsU0FBT0osT0FBUDtBQUNEO0FBRU0sU0FBU08sWUFBVCxDQUFzQlosQ0FBdEIsRUFBeUJhLE1BQXpCLEVBQWlDQyxJQUFqQyxFQUF1QztBQUM1QyxTQUFPLFVBQVNyQixLQUFULEVBQWdCQyxJQUFoQixFQUFzQjtBQUMzQixRQUFNQyxTQUFTLEdBQUdGLEtBQUssQ0FBQ0csS0FBTixFQUFsQjtBQUNBRCxhQUFTLENBQUNLLENBQVYsR0FBY0EsQ0FBZDs7QUFDQSxRQUFJYSxNQUFNLEdBQUdsQixTQUFTLENBQUNNLENBQXZCLEVBQTBCO0FBQ3hCTixlQUFTLENBQUNNLENBQVYsR0FBY1ksTUFBZDtBQUNEOztBQUNELFFBQUlDLElBQUksR0FBR25CLFNBQVMsQ0FBQ00sQ0FBVixHQUFjUCxJQUFJLENBQUNPLENBQTlCLEVBQWlDO0FBQy9CTixlQUFTLENBQUNNLENBQVYsR0FBY2EsSUFBSSxHQUFHcEIsSUFBSSxDQUFDTyxDQUExQjtBQUNEOztBQUVELFdBQU9OLFNBQVA7QUFDRCxHQVhEO0FBWUQ7QUFFTSxTQUFTb0IsWUFBVCxDQUFzQmQsQ0FBdEIsRUFBeUJlLE1BQXpCLEVBQWlDQyxJQUFqQyxFQUF1QztBQUM1QyxTQUFPLFVBQVN4QixLQUFULEVBQWdCQyxJQUFoQixFQUFzQjtBQUMzQixRQUFNQyxTQUFTLEdBQUdGLEtBQUssQ0FBQ0csS0FBTixFQUFsQjtBQUNBRCxhQUFTLENBQUNNLENBQVYsR0FBY0EsQ0FBZDs7QUFDQSxRQUFJZSxNQUFNLEdBQUdyQixTQUFTLENBQUNLLENBQXZCLEVBQTBCO0FBQ3hCTCxlQUFTLENBQUNLLENBQVYsR0FBY2dCLE1BQWQ7QUFDRDs7QUFDRCxRQUFJQyxJQUFJLEdBQUd0QixTQUFTLENBQUNLLENBQVYsR0FBY04sSUFBSSxDQUFDTSxDQUE5QixFQUFpQztBQUMvQkwsZUFBUyxDQUFDSyxDQUFWLEdBQWNpQixJQUFJLEdBQUd2QixJQUFJLENBQUNNLENBQTFCO0FBQ0Q7O0FBQ0QsV0FBT0wsU0FBUDtBQUNELEdBVkQ7QUFXRDtBQUVNLFNBQVN1QixXQUFULENBQXFCQyxLQUFyQixFQUE0QkMsR0FBNUIsRUFBaUM7QUFDdEMsTUFBTUMsS0FBSyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0gsR0FBRyxDQUFDbkIsQ0FBSixHQUFRa0IsS0FBSyxDQUFDbEIsQ0FBekIsRUFBNEJtQixHQUFHLENBQUNwQixDQUFKLEdBQVFtQixLQUFLLENBQUNuQixDQUExQyxDQUFkO0FBQUEsTUFDRXdCLElBQUksR0FBR0gsS0FBSyxHQUFHQyxJQUFJLENBQUNHLEVBQUwsR0FBVSxDQUQzQjtBQUFBLE1BRUVDLEtBQUssR0FBRyxFQUZWO0FBQUEsTUFHRUMsT0FBTyxHQUFHTCxJQUFJLENBQUNNLEdBQUwsQ0FBU0osSUFBVCxDQUhaO0FBQUEsTUFJRUssT0FBTyxHQUFHUCxJQUFJLENBQUNRLEdBQUwsQ0FBU04sSUFBVCxDQUpaO0FBTUEsU0FBTyxVQUFTL0IsS0FBVCxFQUFnQkMsSUFBaEIsRUFBc0I7QUFDM0IsUUFBTXFDLE1BQU0sR0FBRyxJQUFJQywrQ0FBSixDQUFVdkMsS0FBSyxDQUFDTyxDQUFOLEdBQVUwQixLQUFLLEdBQUdDLE9BQTVCLEVBQXFDbEMsS0FBSyxDQUFDUSxDQUFOLEdBQVV5QixLQUFLLEdBQUdHLE9BQXZELENBQWY7QUFBQSxRQUNFSSxNQUFNLEdBQUd2QixrREFBUSxDQUFDd0Isc0JBQVQsQ0FBZ0NkLEdBQWhDLEVBQXFDRCxLQUFyQyxFQUE0Q3pCLElBQUksQ0FBQ00sQ0FBakQsQ0FEWDtBQUVBLFFBQUltQyxhQUFhLEdBQUd6QixrREFBUSxDQUFDMEIsY0FBVCxDQUF3QmpCLEtBQXhCLEVBQStCQyxHQUEvQixFQUFvQzNCLEtBQXBDLEVBQTJDc0MsTUFBM0MsQ0FBcEI7QUFFQUksaUJBQWEsR0FBR3pCLGtEQUFRLENBQUNRLFdBQVQsQ0FBcUJDLEtBQXJCLEVBQTRCYyxNQUE1QixFQUFvQ0UsYUFBcEMsQ0FBaEI7QUFDQSxXQUFPQSxhQUFQO0FBQ0QsR0FQRDtBQVFEO0FBRU0sU0FBU0UsYUFBVCxDQUF1QkMsTUFBdkIsRUFBK0JDLE1BQS9CLEVBQXVDO0FBQzVDLFNBQU8sVUFBUzlDLEtBQVQsRUFBZ0IrQyxLQUFoQixFQUF1QjtBQUM1QixRQUFNQyxZQUFZLEdBQUcvQixrREFBUSxDQUFDd0Isc0JBQVQsQ0FBZ0NJLE1BQWhDLEVBQXdDN0MsS0FBeEMsRUFBK0M4QyxNQUEvQyxDQUFyQjtBQUNBLFdBQU9FLFlBQVA7QUFDRCxHQUhEO0FBSUQ7QUFFTSxTQUFTQyxVQUFULENBQW9CSixNQUFwQixFQUE0QkMsTUFBNUIsRUFBb0NJLFNBQXBDLEVBQStDQyxRQUEvQyxFQUF5RDtBQUM5RCxTQUFPLFVBQVNuRCxLQUFULEVBQWdCK0MsS0FBaEIsRUFBdUI7QUFDNUIsUUFBTUssZUFBZSxHQUFHLE9BQU9GLFNBQVAsS0FBcUIsVUFBckIsR0FBa0NBLFNBQVMsRUFBM0MsR0FBZ0RBLFNBQXhFO0FBQ0EsUUFBTUcsY0FBYyxHQUFHLE9BQU9ILFNBQVAsS0FBcUIsVUFBckIsR0FBa0NDLFFBQVEsRUFBMUMsR0FBK0NBLFFBQXRFO0FBRUEsUUFBSUcsS0FBSyxHQUFHckMsa0RBQVEsQ0FBQ3NDLFFBQVQsQ0FBa0JWLE1BQWxCLEVBQTBCN0MsS0FBMUIsQ0FBWjtBQUNBc0QsU0FBSyxHQUFHckMsa0RBQVEsQ0FBQ3VDLGNBQVQsQ0FBd0JGLEtBQXhCLENBQVI7QUFDQUEsU0FBSyxHQUFHckMsa0RBQVEsQ0FBQ3dDLFVBQVQsQ0FBb0JMLGVBQXBCLEVBQXFDQyxjQUFyQyxFQUFxREMsS0FBckQsQ0FBUjtBQUNBLFdBQU9yQyxrREFBUSxDQUFDeUMsd0JBQVQsQ0FBa0NKLEtBQWxDLEVBQXlDUixNQUF6QyxFQUFpREQsTUFBakQsQ0FBUDtBQUNELEdBUkQ7QUFTRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNYyxPQUFPLEdBQUcsa0JBQWtCQyxNQUFsQzs7QUFFQSxTQUFTQyxXQUFULEdBQXVCO0FBQ3JCLE1BQU1DLEdBQUcsR0FBRyxTQUFOQSxHQUFNLEdBQVc7QUFDckIsV0FBT2pDLElBQUksQ0FBQ2tDLEtBQUwsQ0FBV2xDLElBQUksQ0FBQ21DLE1BQUwsS0FBYyxHQUF6QixDQUFQO0FBQ0QsR0FGRDs7QUFHQSxNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFTQyxLQUFULEVBQWdCO0FBQ2xDLFFBQUlDLEdBQUcsR0FBR0QsS0FBSyxDQUFDRSxRQUFOLENBQWUsRUFBZixDQUFWOztBQUNBLFdBQU9ELEdBQUcsQ0FBQ0UsTUFBSixHQUFhLENBQXBCLEVBQXVCO0FBQ3JCRixTQUFHLEdBQUcsTUFBTUEsR0FBWjtBQUNEOztBQUNELFdBQU9BLEdBQVA7QUFDRCxHQU5EOztBQVFBLFNBQU8sTUFBTUYsV0FBVyxDQUFDSCxHQUFHLEVBQUosQ0FBakIsR0FBMkJHLFdBQVcsQ0FBQ0gsR0FBRyxFQUFKLENBQXRDLEdBQWdERyxXQUFXLENBQUNILEdBQUcsRUFBSixDQUFsRTtBQUNEOztBQUVELFNBQVNRLHdCQUFULENBQWtDQyxLQUFsQyxFQUF5Q0YsTUFBekMsRUFBaUQ7QUFDL0MsTUFBTUcsVUFBVSxHQUFHLEVBQW5COztBQUNBLE1BQUlELEtBQUssS0FBSyxDQUFDLENBQWYsRUFBa0I7QUFDaEJDLGNBQVUsQ0FBQ0MsSUFBWCxDQUFnQkYsS0FBaEI7QUFDQUMsY0FBVSxDQUFDQyxJQUFYLENBQWdCLENBQUNGLEtBQUssR0FBRyxDQUFULElBQWNGLE1BQTlCO0FBQ0Q7O0FBRUQsU0FBT0csVUFBUDtBQUNEOztJQUVLRSxLOzs7QUFDSixpQkFBYUMsSUFBYixFQUFtQkMsUUFBbkIsRUFBeUM7QUFBQSxRQUFaQyxPQUFZLHVFQUFKLEVBQUk7O0FBQUE7O0FBQ3ZDLFFBQU1DLGFBQWEsR0FBRzdELGtEQUFRLENBQUNDLDBCQUFULENBQW9DeUQsSUFBcEMsRUFBMENBLElBQTFDLENBQXRCO0FBQ0EsU0FBS0UsT0FBTCxHQUFlRSxNQUFNLENBQUNDLE1BQVAsQ0FBYztBQUMzQm5DLFlBQU0sRUFBRWlDLGFBQWEsQ0FBQ0csU0FBZCxFQURtQjtBQUUzQm5DLFlBQU0sRUFBRWdDLGFBQWEsQ0FBQ0ksVUFBZCxLQUE2QixDQUZWO0FBRzNCQyxpQkFBVyxFQUFFTCxhQUFhLENBQUNJLFVBQWQsS0FBNkIsQ0FIZjtBQUkzQnpCLGdCQUFVLEVBQUU1QixJQUFJLENBQUNHLEVBQUwsR0FBVSxDQUpLO0FBSzNCb0QsZ0JBQVUsRUFBRUMsNERBQUssQ0FBQyxDQUFELEVBQUlULFFBQVEsQ0FBQ1AsTUFBYixDQUFMLENBQTBCaUIsR0FBMUIsQ0FBOEI7QUFBQSxlQUFNekIsV0FBVyxFQUFqQjtBQUFBLE9BQTlCLENBTGU7QUFNM0IwQixnQkFBVSxFQUFFRiw0REFBSyxDQUFDLENBQUMsRUFBRixFQUFNLEdBQU4sRUFBVyxNQUFNVCxRQUFRLENBQUNQLE1BQTFCLENBQUwsQ0FBdUNpQixHQUF2QyxDQUEyQyxVQUFDaEMsS0FBRCxFQUFXO0FBQ2hFLGVBQU9yQyxrREFBUSxDQUFDdUUsUUFBVCxDQUFrQmxDLEtBQWxCLENBQVA7QUFDRCxPQUZXLENBTmU7QUFTM0JtQyxjQUFRLEVBQUUsSUFUaUI7QUFVM0JDLG9CQUFjLEVBQUUsSUFBSW5ELCtDQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsQ0FWVztBQVczQm9ELGtCQUFZLEVBQUU7QUFYYSxLQUFkLEVBWVpkLE9BWlksQ0FBZjs7QUFjQSxTQUFLZSxNQUFMLEdBQWMsS0FBS2YsT0FBTCxDQUFhZSxNQUFiLElBQXVCLFlBQVcsQ0FBRSxDQUFsRDs7QUFDQSxTQUFLakIsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsU0FBS0csYUFBTCxHQUFxQkEsYUFBckI7QUFDQSxTQUFLZSxJQUFMLENBQVVqQixRQUFWO0FBQ0Q7Ozs7eUJBRUlBLFEsRUFBVTtBQUFBOztBQUNiLFdBQUtrQixNQUFMLEdBQWNDLG1FQUFZLENBQUMsS0FBS3BCLElBQU4sRUFBWSxLQUFLRyxhQUFqQixDQUExQjtBQUNBLFdBQUtrQixPQUFMLEdBQWUsS0FBS0YsTUFBTCxDQUFZRyxVQUFaLENBQXVCLElBQXZCLENBQWY7QUFDQSxXQUFLQyxVQUFMLEdBQWtCdEIsUUFBUSxDQUFDVSxHQUFULENBQWEsVUFBQzVFLE9BQUQsRUFBVXlGLENBQVYsRUFBZ0I7QUFDN0MsWUFBTTdDLEtBQUssR0FBRyxLQUFJLENBQUN1QixPQUFMLENBQWFVLFVBQWIsQ0FBd0JZLENBQXhCLENBQWQ7QUFDQSxZQUFNQyxRQUFRLEdBQUduRixrREFBUSxDQUFDb0YsZ0JBQVQsQ0FBMEIzRixPQUExQixFQUFtQzRGLElBQW5DLENBQXdDLEdBQXhDLENBQWpCO0FBQ0EsWUFBTWhHLFFBQVEsR0FBR1csa0RBQVEsQ0FBQ3lDLHdCQUFULENBQ2ZKLEtBRGUsRUFFZixLQUFJLENBQUN1QixPQUFMLENBQWFNLFdBRkUsRUFHZixLQUFJLENBQUNOLE9BQUwsQ0FBYWhDLE1BQWIsQ0FBb0IwRCxHQUFwQixDQUF3QkgsUUFBeEIsQ0FIZSxDQUFqQjtBQUtBLFlBQU12RixLQUFLLEdBQUdvQyx5REFBVSxDQUN0QixLQUFJLENBQUM0QixPQUFMLENBQWFoQyxNQUFiLENBQW9CMEQsR0FBcEIsQ0FBd0JILFFBQXhCLENBRHNCLEVBRXRCLEtBQUksQ0FBQ3ZCLE9BQUwsQ0FBYU0sV0FGUyxFQUd0QixLQUFJLENBQUNxQixhQUFMLENBQW1CTCxDQUFuQixFQUFzQixLQUF0QixDQUhzQixFQUl0QixLQUFJLENBQUNLLGFBQUwsQ0FBbUJMLENBQW5CLEVBQXNCLElBQXRCLENBSnNCLENBQXhCO0FBT0EsZUFBTyxJQUFJTSxvREFBSixDQUFjL0YsT0FBZCxFQUF1QjtBQUM1QkMsZ0JBQU0sRUFBRSxLQUFJLENBQUNnRSxJQURlO0FBRTVCOUQsZUFBSyxFQUFFQSxLQUZxQjtBQUc1QlAsa0JBQVEsRUFBRUEsUUFIa0I7QUFJNUJvRyxnQkFBTSxFQUFFLGtCQUFNO0FBQ1osaUJBQUksQ0FBQ0MsSUFBTDs7QUFDQSxtQkFBTyxJQUFQO0FBQ0Q7QUFQMkIsU0FBdkIsQ0FBUDtBQVNELE9BeEJpQixDQUFsQjtBQTBCQSxXQUFLQyxNQUFMLEdBQWMsSUFBZDs7QUFDQSxVQUFJLEtBQUsvQixPQUFMLENBQWFjLFlBQWpCLEVBQStCO0FBQzdCLGFBQUtrQixVQUFMO0FBQ0Q7O0FBQ0QsV0FBS0YsSUFBTDtBQUNEOzs7aUNBRVk7QUFBQTs7QUFDWCxXQUFLRyxZQUFMLENBQWtCLENBQUMsQ0FBbkI7QUFFQSxXQUFLaEIsTUFBTCxDQUFZaUIsZ0JBQVosQ0FBNkJDLGlEQUFNLENBQUN0RixLQUFwQyxFQUEyQyxVQUFDdUYsQ0FBRCxFQUFPO0FBQ2hELFlBQUlqSCxLQUFLLEdBQUcsSUFBSXVDLCtDQUFKLENBQ1ZvQixPQUFPLEdBQUdzRCxDQUFDLENBQUNDLGNBQUYsQ0FBaUIsQ0FBakIsRUFBb0JDLEtBQXZCLEdBQStCRixDQUFDLENBQUNHLE9BRDlCLEVBRVZ6RCxPQUFPLEdBQUdzRCxDQUFDLENBQUNDLGNBQUYsQ0FBaUIsQ0FBakIsRUFBb0JHLEtBQXZCLEdBQStCSixDQUFDLENBQUNLLE9BRjlCLENBQVo7O0FBS0EsWUFBSSxDQUFDLE1BQUksQ0FBQ0MsWUFBVixFQUF3QjtBQUN0QixnQkFBSSxDQUFDQSxZQUFMLEdBQW9CdEcsa0RBQVEsQ0FBQ3VHLFNBQVQsQ0FBbUIsTUFBSSxDQUFDMUIsTUFBeEIsQ0FBcEI7QUFDRDs7QUFFRDlGLGFBQUssR0FBR0EsS0FBSyxDQUFDdUcsR0FBTixDQUFVLE1BQUksQ0FBQ2dCLFlBQWYsQ0FBUjs7QUFDQSxZQUFNaEQsS0FBSyxHQUFHLE1BQUksQ0FBQ2tELGFBQUwsQ0FBbUJ6SCxLQUFuQixDQUFkOztBQUNBLFlBQUl1RSxLQUFLLEtBQUssQ0FBQyxDQUFmLEVBQWtCO0FBQ2hCLGdCQUFJLENBQUN1QyxZQUFMLENBQW1CLE1BQUksQ0FBQ1ksY0FBTCxLQUF3Qm5ELEtBQXpCLEdBQWtDQSxLQUFsQyxHQUEwQyxDQUFDLENBQTdEO0FBQ0Q7QUFDRixPQWZEO0FBZ0JEOzs7bUNBRWM7QUFBQTs7QUFDYixXQUFLb0QsTUFBTCxHQUFjLEtBQUt6QixVQUFMLENBQWdCWixHQUFoQixDQUFvQixVQUFDc0MsU0FBRCxFQUFlO0FBQy9DLFlBQU14QixRQUFRLEdBQUd3QixTQUFTLENBQUNDLE9BQVYsR0FBb0J2QixJQUFwQixDQUF5QixHQUF6QixDQUFqQjtBQUNBLGVBQU9yRixrREFBUSxDQUFDc0MsUUFBVCxDQUFrQixNQUFJLENBQUNzQixPQUFMLENBQWFoQyxNQUFiLENBQW9CMEQsR0FBcEIsQ0FBd0JILFFBQXhCLENBQWxCLEVBQXFEd0IsU0FBUyxDQUFDdEgsUUFBL0QsQ0FBUDtBQUNELE9BSGEsQ0FBZDtBQUlEOzs7a0NBRWFpRSxLLEVBQU91RCxVLEVBQVk7QUFBQTs7QUFDL0IsVUFBTUMsSUFBSSxHQUFHRCxVQUFVLEdBQUcsQ0FBSCxHQUFPLENBQUMsQ0FBL0I7QUFFQSxhQUFPLFlBQU07QUFDWCxZQUFJM0IsQ0FBQyxHQUFHLENBQUM1QixLQUFLLEdBQUd3RCxJQUFULElBQWlCLE1BQUksQ0FBQ0osTUFBTCxDQUFZdEQsTUFBckM7O0FBQ0EsWUFBSThCLENBQUMsR0FBRyxDQUFSLEVBQVc7QUFDVEEsV0FBQyxJQUFJLE1BQUksQ0FBQ3dCLE1BQUwsQ0FBWXRELE1BQWpCO0FBQ0Q7O0FBQ0QsZUFBT3BELGtEQUFRLENBQUN1QyxjQUFULENBQXdCLE1BQUksQ0FBQ21FLE1BQUwsQ0FBWXhCLENBQVosSUFBaUI0QixJQUFJLEdBQUcsTUFBSSxDQUFDbEQsT0FBTCxDQUFhcEIsVUFBN0QsQ0FBUDtBQUNELE9BTkQ7QUFPRDs7OzJCQUVNO0FBQUE7O0FBQ0wsVUFBSSxDQUFDLEtBQUttRCxNQUFWLEVBQWtCO0FBQ2hCO0FBQ0Q7O0FBRUQsV0FBS29CLFlBQUw7QUFDQSxXQUFLaEMsT0FBTCxDQUFhaUMsU0FBYixDQUF1QixDQUF2QixFQUEwQixDQUExQixFQUE2QixLQUFLbkQsYUFBTCxDQUFtQjdFLElBQW5CLENBQXdCTSxDQUFyRCxFQUF3RCxLQUFLdUUsYUFBTCxDQUFtQjdFLElBQW5CLENBQXdCTyxDQUFoRjtBQUNBLFdBQUswRixVQUFMLENBQWdCZ0MsT0FBaEIsQ0FBd0IsVUFBQ0MsVUFBRCxFQUFhNUQsS0FBYixFQUF1QjtBQUM3QyxjQUFJLENBQUM2RCxPQUFMLENBQWEsTUFBSSxDQUFDcEMsT0FBbEIsRUFBMkIsTUFBSSxDQUFDbkIsT0FBTCxDQUFhaEMsTUFBeEMsRUFBZ0QsTUFBSSxDQUFDZ0MsT0FBTCxDQUFhL0IsTUFBN0QsRUFBcUV5QixLQUFyRTtBQUNELE9BRkQ7QUFJQSxXQUFLMkIsVUFBTCxDQUFnQmdDLE9BQWhCLENBQXdCLFVBQUNDLFVBQUQsRUFBYTVELEtBQWIsRUFBdUI7QUFDN0MsWUFBSThELGFBQUo7O0FBQ0EsWUFBSSxNQUFJLENBQUN4RCxPQUFMLENBQWFjLFlBQWpCLEVBQStCO0FBQzdCMEMsdUJBQWEsR0FBRy9ELHdCQUF3QixDQUFDLE1BQUksQ0FBQ29ELGNBQU4sRUFBc0IsTUFBSSxDQUFDeEIsVUFBTCxDQUFnQjdCLE1BQXRDLENBQXhDOztBQUNBLGNBQUlnRSxhQUFhLENBQUNDLE9BQWQsQ0FBc0IvRCxLQUF0QixNQUFpQyxDQUFDLENBQXRDLEVBQXlDO0FBQ3ZDLGtCQUFJLENBQUNnRSxZQUFMLENBQWtCaEUsS0FBbEI7QUFDRDtBQUNGLFNBTEQsTUFLTztBQUNMLGdCQUFJLENBQUNnRSxZQUFMLENBQWtCaEUsS0FBbEI7QUFDRDtBQUNGLE9BVkQ7QUFXQSxXQUFLcUIsTUFBTDtBQUNEOzs7Z0NBRVdsRixPLEVBQXVCO0FBQUE7O0FBQUEsVUFBZG1FLE9BQWMsdUVBQUosRUFBSTs7QUFDakMsVUFBSSxDQUFDLEtBQUsrQixNQUFWLEVBQWtCO0FBQ2hCO0FBQ0Q7O0FBQ0QsVUFBTTdHLFNBQVMsR0FBR2tCLGtEQUFRLENBQUNDLDBCQUFULENBQW9DUixPQUFwQyxFQUE2Q0EsT0FBN0MsQ0FBbEI7QUFDQSxVQUFNOEgsSUFBSSxHQUFHekQsTUFBTSxDQUFDQyxNQUFQLENBQWM7QUFDekJuQyxjQUFNLEVBQUU5QyxTQUFTLENBQUNrRixTQUFWLEVBRGlCO0FBRXpCbkMsY0FBTSxFQUFFL0MsU0FBUyxDQUFDbUYsVUFBVixLQUF5QixDQUZSO0FBR3pCRSxrQkFBVSxFQUFFLEtBQUtQLE9BQUwsQ0FBYU87QUFIQSxPQUFkLEVBSVZQLE9BSlUsQ0FBYjtBQU1BLFVBQU1pQixNQUFNLEdBQUdDLG1FQUFZLENBQUNyRixPQUFELEVBQVVYLFNBQVYsQ0FBM0I7QUFDQSxVQUFNaUcsT0FBTyxHQUFHRixNQUFNLENBQUNHLFVBQVAsQ0FBa0IsSUFBbEIsQ0FBaEI7QUFDQSxVQUFNd0MsUUFBUSxHQUFHO0FBQ2Y5QixZQUFJLEVBQUUsZ0JBQU07QUFDVlgsaUJBQU8sQ0FBQ2lDLFNBQVIsQ0FBa0IsQ0FBbEIsRUFBcUIsQ0FBckIsRUFBd0JsSSxTQUFTLENBQUNFLElBQVYsQ0FBZU0sQ0FBdkMsRUFBMENSLFNBQVMsQ0FBQ0UsSUFBVixDQUFlTyxDQUF6RDs7QUFDQSxnQkFBSSxDQUFDMEYsVUFBTCxDQUFnQmdDLE9BQWhCLENBQXdCLFVBQUNDLFVBQUQsRUFBYTVELEtBQWIsRUFBdUI7QUFDN0Msa0JBQUksQ0FBQzZELE9BQUwsQ0FBYXBDLE9BQWIsRUFBc0J3QyxJQUFJLENBQUMzRixNQUEzQixFQUFtQzJGLElBQUksQ0FBQzFGLE1BQXhDLEVBQWdEeUIsS0FBaEQ7QUFDRCxXQUZEO0FBR0Q7QUFOYyxPQUFqQjtBQVFBa0UsY0FBUSxDQUFDOUIsSUFBVDtBQUNBLGFBQU84QixRQUFQO0FBQ0Q7OztpQ0FFWWxFLEssRUFBTztBQUNsQixVQUFJLE9BQU8sS0FBS00sT0FBTCxDQUFhTyxVQUFiLENBQXdCYixLQUF4QixDQUFQLEtBQTBDLFVBQTlDLEVBQTBEO0FBQ3hELGFBQUtNLE9BQUwsQ0FBYU8sVUFBYixDQUF3QmIsS0FBeEIsSUFBaUMsS0FBS00sT0FBTCxDQUFhTyxVQUFiLENBQXdCYixLQUF4QixFQUErQm1FLElBQS9CLENBQW9DLElBQXBDLENBQWpDO0FBQ0Q7O0FBQ0QsYUFBTyxLQUFLN0QsT0FBTCxDQUFhTyxVQUFiLENBQXdCYixLQUF4QixDQUFQO0FBQ0Q7Ozs0QkFFT3lCLE8sRUFBU25ELE0sRUFBUUMsTSxFQUFReUIsSyxFQUFPO0FBQ3RDLFVBQU1vRSxVQUFVLEdBQUcsS0FBS2hCLE1BQUwsQ0FBWXBELEtBQVosQ0FBbkI7QUFDQSxVQUFNcEIsUUFBUSxHQUFHLEtBQUt3RSxNQUFMLENBQVksQ0FBQ3BELEtBQUssR0FBQyxDQUFQLElBQVksS0FBS29ELE1BQUwsQ0FBWXRELE1BQXBDLENBQWpCO0FBQ0EsVUFBTXVFLEtBQUssR0FBRyxLQUFLQyxZQUFMLENBQWtCdEUsS0FBbEIsQ0FBZDtBQUVBeUIsYUFBTyxDQUFDOEMsU0FBUjtBQUNBOUMsYUFBTyxDQUFDK0MsTUFBUixDQUFlbEcsTUFBTSxDQUFDdEMsQ0FBdEIsRUFBeUJzQyxNQUFNLENBQUNyQyxDQUFoQztBQUNBd0YsYUFBTyxDQUFDZ0QsR0FBUixDQUFZbkcsTUFBTSxDQUFDdEMsQ0FBbkIsRUFBc0JzQyxNQUFNLENBQUNyQyxDQUE3QixFQUFnQ3NDLE1BQWhDLEVBQXdDNkYsVUFBeEMsRUFBb0R4RixRQUFwRCxFQUE4RCxLQUE5RDtBQUNBNkMsYUFBTyxDQUFDaUQsTUFBUixDQUFlcEcsTUFBTSxDQUFDdEMsQ0FBdEIsRUFBeUJzQyxNQUFNLENBQUNyQyxDQUFoQztBQUNBd0YsYUFBTyxDQUFDa0QsU0FBUjtBQUNBbEQsYUFBTyxDQUFDbUQsU0FBUixHQUFvQlAsS0FBcEI7QUFDQTVDLGFBQU8sQ0FBQ29ELElBQVI7QUFDRDs7O2lDQUVZN0UsSyxFQUFPO0FBQ2xCLFVBQUl2RSxLQUFKLEVBQVdxSixHQUFYOztBQUNBLFVBQUksS0FBS3hFLE9BQUwsQ0FBYVksUUFBakIsRUFBMkI7QUFDekI0RCxXQUFHLEdBQUcsS0FBS3hFLE9BQUwsQ0FBYVksUUFBYixZQUFpQzZELEtBQWpDLEdBQXlDLEtBQUt6RSxPQUFMLENBQWFZLFFBQWIsQ0FBc0JsQixLQUF0QixDQUF6QyxHQUF3RSxLQUFLTSxPQUFMLENBQWFZLFFBQTNGO0FBQ0Q7O0FBRUQsVUFBSTRELEdBQUosRUFBUztBQUNQLFlBQU0vRixLQUFLLEdBQUdyQyxrREFBUSxDQUFDdUMsY0FBVCxDQUF3QixLQUFLbUUsTUFBTCxDQUFZcEQsS0FBWixDQUF4QixDQUFkO0FBQ0F2RSxhQUFLLEdBQUcsSUFBSXVDLCtDQUFKLENBQVUsQ0FBVixFQUFhLENBQUM4RyxHQUFHLENBQUNFLE1BQUwsR0FBYyxDQUEzQixDQUFSO0FBQ0F2SixhQUFLLEdBQUdBLEtBQUssQ0FBQ3dKLEdBQU4sQ0FBVSxLQUFLM0UsT0FBTCxDQUFhYSxjQUF2QixDQUFSO0FBQ0EsYUFBS00sT0FBTCxDQUFheUQsU0FBYixDQUF1QixLQUFLM0UsYUFBTCxDQUFtQjdFLElBQW5CLENBQXdCTSxDQUF4QixHQUE0QixDQUFuRCxFQUFzRCxLQUFLdUUsYUFBTCxDQUFtQjdFLElBQW5CLENBQXdCTyxDQUF4QixHQUE0QixDQUFsRjtBQUNBLGFBQUt3RixPQUFMLENBQWEwRCxNQUFiLENBQW9CcEcsS0FBcEI7QUFDQSxhQUFLMEMsT0FBTCxDQUFhMkQsU0FBYixDQUF1Qk4sR0FBdkIsRUFBNEJySixLQUFLLENBQUNPLENBQWxDLEVBQXFDUCxLQUFLLENBQUNRLENBQTNDO0FBQ0EsYUFBS3dGLE9BQUwsQ0FBYTRELFlBQWIsQ0FBMEIsQ0FBMUIsRUFBNkIsQ0FBN0IsRUFBZ0MsQ0FBaEMsRUFBbUMsQ0FBbkMsRUFBc0MsQ0FBdEMsRUFBeUMsQ0FBekM7QUFDRDtBQUNGOzs7b0NBRWU7QUFDZCxVQUFNakMsTUFBTSxHQUFHLEtBQUtBLE1BQUwsQ0FBWWtDLEtBQVosQ0FBa0IsQ0FBbEIsQ0FBZjtBQUNBLFVBQUlDLFNBQVMsR0FBRyxLQUFLbkMsTUFBTCxDQUFZLENBQVosQ0FBaEI7QUFFQUEsWUFBTSxDQUFDbEQsSUFBUCxDQUFZcUYsU0FBWjtBQUNBLGFBQU9uQyxNQUFNLENBQUNyQyxHQUFQLENBQVcsVUFBQ2hDLEtBQUQsRUFBVztBQUMzQixZQUFNeUcsU0FBUyxHQUFHOUksa0RBQVEsQ0FBQ3VDLGNBQVQsQ0FBd0JGLEtBQUssR0FBR3dHLFNBQWhDLENBQWxCO0FBQ0FBLGlCQUFTLEdBQUd4RyxLQUFaO0FBQ0EsZUFBT3lHLFNBQVA7QUFDRCxPQUpNLENBQVA7QUFLRDs7O2lDQUVZO0FBQ1gsYUFBTyxLQUFLQyxhQUFMLEdBQXFCMUUsR0FBckIsQ0FBeUIsVUFBQ3lFLFNBQUQ7QUFBQSxlQUFlQSxTQUFTLElBQUksSUFBSWxJLElBQUksQ0FBQ0csRUFBYixDQUF4QjtBQUFBLE9BQXpCLENBQVA7QUFDRDs7O3VDQUVrQjtBQUFBOztBQUNqQixhQUFPLEtBQUtnSSxhQUFMLEdBQXFCMUUsR0FBckIsQ0FBeUIsVUFBQ3lFLFNBQUQsRUFBWTVELENBQVosRUFBa0I7QUFDaEQsZUFBT2xGLGtEQUFRLENBQUN1QyxjQUFULENBQXdCLE1BQUksQ0FBQ21FLE1BQUwsQ0FBWXhCLENBQVosSUFBaUI0RCxTQUFTLEdBQUcsQ0FBckQsQ0FBUDtBQUNELE9BRk0sQ0FBUDtBQUdEOzs7a0NBRWEvSixLLEVBQU87QUFDbkIsVUFBTXNELEtBQUssR0FBR3JDLGtEQUFRLENBQUNzQyxRQUFULENBQWtCLEtBQUtzQixPQUFMLENBQWFoQyxNQUEvQixFQUF1QzdDLEtBQXZDLENBQWQ7QUFDQSxVQUFNOEMsTUFBTSxHQUFHN0Isa0RBQVEsQ0FBQ2dKLFdBQVQsQ0FBcUIsS0FBS3BGLE9BQUwsQ0FBYWhDLE1BQWxDLEVBQTBDN0MsS0FBMUMsQ0FBZjs7QUFFQSxVQUFJOEMsTUFBTSxHQUFHLEtBQUsrQixPQUFMLENBQWEvQixNQUExQixFQUFrQztBQUNoQyxlQUFPLENBQUMsQ0FBUjtBQUNEOztBQUVELFVBQUlvSCxNQUFNLEdBQUcsQ0FBQyxDQUFkO0FBQUEsVUFBaUIvRCxDQUFqQjtBQUFBLFVBQW9CZ0UsQ0FBcEI7O0FBQ0EsV0FBS2hFLENBQUMsR0FBRyxDQUFULEVBQVlBLENBQUMsR0FBRyxLQUFLd0IsTUFBTCxDQUFZdEQsTUFBNUIsRUFBb0M4QixDQUFDLEVBQXJDLEVBQXlDO0FBQ3ZDLFlBQUkrRCxNQUFNLEtBQUssQ0FBQyxDQUFaLElBQWlCLEtBQUt2QyxNQUFMLENBQVl1QyxNQUFaLElBQXNCLEtBQUt2QyxNQUFMLENBQVl4QixDQUFaLENBQTNDLEVBQTJEO0FBQ3pEK0QsZ0JBQU0sR0FBRy9ELENBQVQ7QUFDRDtBQUNGOztBQUNELFdBQUtBLENBQUMsR0FBRyxDQUFKLEVBQU9nRSxDQUFDLEdBQUdELE1BQWhCLEVBQXdCL0QsQ0FBQyxHQUFHLEtBQUt3QixNQUFMLENBQVl0RCxNQUF4QyxFQUFnRDhCLENBQUMsSUFBSWdFLENBQUMsR0FBRyxDQUFDaEUsQ0FBQyxHQUFHK0QsTUFBTCxJQUFlLEtBQUt2QyxNQUFMLENBQVl0RCxNQUFwRixFQUE0RjtBQUMxRixZQUFJZixLQUFLLEdBQUcsS0FBS3FFLE1BQUwsQ0FBWXdDLENBQVosQ0FBWixFQUE0QjtBQUMxQjtBQUNEO0FBQ0Y7O0FBQ0QsVUFBSSxFQUFFQSxDQUFGLEdBQU0sQ0FBVixFQUFhO0FBQ1hBLFNBQUMsSUFBSSxLQUFLeEMsTUFBTCxDQUFZdEQsTUFBakI7QUFDRDs7QUFDRCxhQUFPOEYsQ0FBUDtBQUNEOzs7OEJBRVN4QyxNLEVBQVE7QUFBQTs7QUFDaEIsV0FBS0EsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsV0FBS3pCLFVBQUwsQ0FBZ0JnQyxPQUFoQixDQUF3QixVQUFDTixTQUFELEVBQVl6QixDQUFaLEVBQWtCO0FBQ3hDLFlBQU03QyxLQUFLLEdBQUcsTUFBSSxDQUFDcUUsTUFBTCxDQUFZeEIsQ0FBWixDQUFkO0FBQ0EsWUFBTUMsUUFBUSxHQUFHd0IsU0FBUyxDQUFDQyxPQUFWLEdBQW9CdkIsSUFBcEIsQ0FBeUIsR0FBekIsQ0FBakI7QUFDQSxZQUFNaEcsUUFBUSxHQUFHVyxrREFBUSxDQUFDeUMsd0JBQVQsQ0FDZkosS0FEZSxFQUVmLE1BQUksQ0FBQ3VCLE9BQUwsQ0FBYU0sV0FGRSxFQUdmLE1BQUksQ0FBQ04sT0FBTCxDQUFhaEMsTUFBYixDQUFvQjBELEdBQXBCLENBQXdCSCxRQUF4QixDQUhlLENBQWpCO0FBTUF3QixpQkFBUyxDQUFDd0MsSUFBVixDQUFlOUosUUFBZixFQUF5QixDQUF6QixFQUE0QixJQUE1QixFQUFrQyxJQUFsQztBQUNELE9BVkQ7QUFXQSxXQUFLcUcsSUFBTDtBQUNEOzs7aUNBRVlwQyxLLEVBQU87QUFDbEIsVUFBTThELGFBQWEsR0FBRy9ELHdCQUF3QixDQUFDQyxLQUFELEVBQVEsS0FBSzJCLFVBQUwsQ0FBZ0I3QixNQUF4QixDQUE5QztBQUNBLFdBQUtxRCxjQUFMLEdBQXNCbkQsS0FBdEI7QUFDQSxXQUFLMkIsVUFBTCxDQUFnQmdDLE9BQWhCLENBQXdCLFVBQUNOLFNBQUQsRUFBWXpCLENBQVosRUFBa0I7QUFDeEN5QixpQkFBUyxDQUFDeUMsTUFBVixHQUFtQmhDLGFBQWEsQ0FBQ0MsT0FBZCxDQUFzQm5DLENBQXRCLE1BQTZCLENBQUMsQ0FBakQ7QUFDRCxPQUZEO0FBR0EsV0FBS1EsSUFBTDtBQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xTSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU0yRCxNQUFNLEdBQUc7QUFBRUMsT0FBSyxFQUFMQSw4Q0FBS0E7QUFBUCxDQUFmLEMsQ0FBeUI7O0FBRXpCLElBQU01RyxPQUFPLEdBQUcsa0JBQWtCQyxNQUFsQztBQUFBLElBQTBDNEcsV0FBVyxHQUFHO0FBQ3BEOUksT0FBSyxFQUFFLFdBRDZDO0FBRXBEMEksTUFBSSxFQUFFLFdBRjhDO0FBR3BEekksS0FBRyxFQUFFO0FBSCtDLENBQXhEO0FBQUEsSUFJSzhJLFdBQVcsR0FBRztBQUNmL0ksT0FBSyxFQUFFLFlBRFE7QUFFZjBJLE1BQUksRUFBRSxXQUZTO0FBR2Z6SSxLQUFHLEVBQUU7QUFIVSxDQUpuQjtBQUFBLElBU0VxRixNQUFNLEdBQUdyRCxPQUFPLEdBQUc4RyxXQUFILEdBQWlCRCxXQVRuQztBQUFBLElBVUV0RSxVQUFVLEdBQUcsRUFWZjtBQUFBLElBV0V3RSxpQkFBaUIsR0FBR0Msa0VBQWdCLENBQUMsV0FBRCxDQVh0QztBQUFBLElBWUVDLGtCQUFrQixHQUFHRCxrRUFBZ0IsQ0FBQyxZQUFELENBWnZDOztBQWNBLFNBQVNFLFlBQVQsQ0FBc0JuSyxPQUF0QixFQUErQm9LLE9BQS9CLEVBQXdDO0FBQ3RDLE9BQUssSUFBSTNFLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUd6RixPQUFPLENBQUN3RyxjQUFSLENBQXVCN0MsTUFBM0MsRUFBbUQ4QixDQUFDLEVBQXBELEVBQXdEO0FBQ3RELFFBQUl6RixPQUFPLENBQUN3RyxjQUFSLENBQXVCZixDQUF2QixFQUEwQjRFLFVBQTFCLEtBQXlDRCxPQUE3QyxFQUFzRDtBQUNwRCxhQUFPcEssT0FBTyxDQUFDd0csY0FBUixDQUF1QmYsQ0FBdkIsQ0FBUDtBQUNEO0FBQ0Y7O0FBQ0QsU0FBTyxLQUFQO0FBQ0Q7O0FBRUQsU0FBUzZFLGlCQUFULENBQTJCcEQsU0FBM0IsRUFBc0M7QUFDcEMsTUFBTXFELE9BQU8sR0FBRyw0RUFBaEI7O0FBQ0EsTUFBSS9FLFVBQVUsQ0FBQ2dGLElBQVgsQ0FBZ0IsVUFBQ0MsUUFBRDtBQUFBLFdBQWN2RCxTQUFTLENBQUNsSCxPQUFWLEtBQXNCeUssUUFBUSxDQUFDekssT0FBN0M7QUFBQSxHQUFoQixDQUFKLEVBQTJFO0FBQ3pFLFVBQU11SyxPQUFOO0FBQ0Q7O0FBQ0QvRSxZQUFVLENBQUN6QixJQUFYLENBQWdCbUQsU0FBaEI7QUFDRDs7QUFFRCxTQUFTd0QsaUJBQVQsQ0FBMkJ4RCxTQUEzQixFQUFzQztBQUNwQ3lELHFEQUFZLENBQUNDLFlBQWIsQ0FBMEIxRCxTQUExQjtBQUNEOztJQUVLbkIsUzs7O0FBQ0oscUJBQVkvRixPQUFaLEVBQWlDO0FBQUE7O0FBQUEsUUFBWm1FLE9BQVksdUVBQUosRUFBSTs7QUFBQTs7QUFDL0IsUUFBTWxFLE1BQU0sR0FBR2tFLE9BQU8sQ0FBQ2xFLE1BQVIsSUFBa0I0Syx1RUFBZ0IsQ0FBQzdLLE9BQUQsQ0FBakQ7QUFDQSxTQUFLOEssT0FBTCxHQUFlLEVBQWY7QUFDQSxTQUFLM0csT0FBTCxHQUFlRSxNQUFNLENBQUNDLE1BQVAsQ0FBYztBQUMzQnJFLFlBQU0sRUFBRUEsTUFEbUI7QUFFM0JFLFdBQUssRUFBRUosNkRBQWMsQ0FBQ0UsTUFBRCxFQUFTQSxNQUFULENBRk07QUFHM0I4SyxpQkFBVyxFQUFFLEtBSGM7QUFJM0JDLHNCQUFnQixFQUFFLEtBSlM7QUFLM0JwTCxjQUFRLEVBQUU7QUFMaUIsS0FBZCxFQU1adUUsT0FOWSxDQUFmOztBQVFBLFFBQUksT0FBT0EsT0FBTyxDQUFDOEcsT0FBZixLQUEyQixRQUEvQixFQUF5QztBQUN2QyxXQUFLQSxPQUFMLEdBQWVqTCxPQUFPLENBQUNrTCxhQUFSLENBQXNCL0csT0FBTyxDQUFDOEcsT0FBOUIsS0FBMENqTCxPQUF6RDtBQUNELEtBRkQsTUFFTztBQUNMLFdBQUtpTCxPQUFMLEdBQWU5RyxPQUFPLENBQUM4RyxPQUFSLElBQW1CakwsT0FBbEM7QUFDRDs7QUFFRCxTQUFLbUwsS0FBTCxHQUFhLElBQUl2QixNQUFNLENBQUNDLEtBQVgsQ0FBaUIsSUFBakIsRUFBdUI7QUFBRXVCLGVBQVMsRUFBRSxJQUFiO0FBQW1CQyxrQkFBWSxFQUFFO0FBQWpDLEtBQXZCLENBQWI7QUFDQSxTQUFLckYsTUFBTCxHQUFjLElBQUk0RCxNQUFNLENBQUNDLEtBQVgsQ0FBaUIsSUFBakIsQ0FBZDtBQUNBLFNBQUt5QixPQUFMLEdBQWUsSUFBSTFCLE1BQU0sQ0FBQ0MsS0FBWCxDQUFpQixJQUFqQixDQUFmO0FBRUEsU0FBS3NCLEtBQUwsQ0FBV3JDLEdBQVgsQ0FBZTtBQUFBLGFBQU0sS0FBSSxDQUFDWSxJQUFMLENBQVUsS0FBSSxDQUFDOUosUUFBZixFQUF5QixDQUF6QixFQUE0QixJQUE1QixFQUFrQyxJQUFsQyxDQUFOO0FBQUEsS0FBZjs7QUFFQSxRQUFJdUUsT0FBTyxDQUFDZ0gsS0FBWixFQUFtQjtBQUNqQixXQUFLQSxLQUFMLENBQVdyQyxHQUFYLENBQWUzRSxPQUFPLENBQUNnSCxLQUF2QjtBQUNEOztBQUNELFFBQUloSCxPQUFPLENBQUM2QixNQUFaLEVBQW9CO0FBQ2xCLFdBQUtBLE1BQUwsQ0FBWThDLEdBQVosQ0FBZ0IzRSxPQUFPLENBQUM2QixNQUF4QjtBQUNEOztBQUNELFFBQUk3QixPQUFPLENBQUNtSCxPQUFaLEVBQXFCO0FBQ25CLFdBQUtBLE9BQUwsQ0FBYXhDLEdBQWIsQ0FBaUIzRSxPQUFPLENBQUNtSCxPQUF6QjtBQUNEOztBQUNELFNBQUt0TCxPQUFMLEdBQWVBLE9BQWY7QUFDQSxTQUFLRyxLQUFMLEdBQWEsS0FBS2dFLE9BQUwsQ0FBYWhFLEtBQTFCO0FBQ0FtSyxxQkFBaUIsQ0FBQyxJQUFELENBQWpCO0FBQ0F2RSxhQUFTLENBQUN3RixRQUFWLENBQW1CQyxJQUFuQixDQUF3QixJQUF4QjtBQUNBLFNBQUtyRyxJQUFMO0FBQ0Q7Ozs7MkJBRU07QUFDTCxXQUFLc0csT0FBTCxHQUFlLElBQWY7QUFDQSxXQUFLakMsTUFBTCxHQUFjakosa0RBQVEsQ0FBQ3VHLFNBQVQsQ0FBbUIsS0FBSzlHLE9BQXhCLEVBQWlDLEtBQUttRSxPQUFMLENBQWFsRSxNQUE5QyxFQUFzRCxJQUF0RCxDQUFkO0FBQ0EsV0FBS3lMLFdBQUwsR0FBbUIsS0FBS2xDLE1BQXhCO0FBQ0EsV0FBSzVKLFFBQUwsR0FBZ0IsS0FBSzRKLE1BQXJCOztBQUNBLFVBQUksS0FBS3JGLE9BQUwsQ0FBYXZFLFFBQWpCLEVBQTJCO0FBQ3pCLGFBQUsrTCxZQUFMLEdBQW9CLEtBQUt4SCxPQUFMLENBQWF2RSxRQUFqQztBQUNBLGFBQUs4SixJQUFMLENBQVUsS0FBS2lDLFlBQWYsRUFBNkIsQ0FBN0IsRUFBZ0MsSUFBaEMsRUFBc0MsSUFBdEM7QUFDRCxPQUhELE1BR087QUFDTCxhQUFLQSxZQUFMLEdBQW9CLEtBQUtuQyxNQUF6QjtBQUNEOztBQUNELFdBQUtvQyxVQUFMLEdBQWtCLEtBQUtDLFNBQUwsQ0FBZUMsSUFBZixDQUFvQixJQUFwQixDQUFsQjtBQUNBLFdBQUtDLFNBQUwsR0FBaUIsS0FBS0MsUUFBTCxDQUFjRixJQUFkLENBQW1CLElBQW5CLENBQWpCO0FBQ0EsV0FBS0csUUFBTCxHQUFnQixLQUFLQyxPQUFMLENBQWFKLElBQWIsQ0FBa0IsSUFBbEIsQ0FBaEI7QUFFQSxXQUFLYixPQUFMLENBQWE1RSxnQkFBYixDQUE4QjBELFdBQVcsQ0FBQy9JLEtBQTFDLEVBQWlELEtBQUs0SyxVQUF0RDtBQUNBLFdBQUtYLE9BQUwsQ0FBYTVFLGdCQUFiLENBQThCeUQsV0FBVyxDQUFDOUksS0FBMUMsRUFBaUQsS0FBSzRLLFVBQXREOztBQUVBLFVBQUksS0FBS3pMLEtBQUwsQ0FBV0csT0FBZixFQUF3QjtBQUN0QixhQUFLSCxLQUFMLENBQVdHLE9BQVg7QUFDRDtBQUNGOzs7NkJBRVE7QUFDUCxXQUFLa0osTUFBTCxHQUFjakosa0RBQVEsQ0FBQ3VHLFNBQVQsQ0FBbUIsS0FBSzlHLE9BQXhCLEVBQWlDLEtBQUttRSxPQUFMLENBQWFsRSxNQUE5QyxFQUFzRCxJQUF0RCxDQUFkO0FBQ0EsV0FBS3lMLFdBQUwsR0FBbUIsS0FBS2xDLE1BQXhCO0FBQ0EsV0FBSzVKLFFBQUwsR0FBZ0IsS0FBSzRKLE1BQXJCOztBQUNBLFVBQUksS0FBS3JGLE9BQUwsQ0FBYXZFLFFBQWpCLEVBQTJCO0FBQ3pCLGFBQUsrTCxZQUFMLEdBQW9CLEtBQUt4SCxPQUFMLENBQWF2RSxRQUFqQztBQUNBLGFBQUs4SixJQUFMLENBQVUsS0FBS2lDLFlBQWYsRUFBNkIsQ0FBN0IsRUFBZ0MsSUFBaEMsRUFBc0MsSUFBdEM7QUFDRCxPQUhELE1BR087QUFDTCxhQUFLQSxZQUFMLEdBQW9CLEtBQUtuQyxNQUF6QjtBQUNEOztBQUVELFVBQUksS0FBS3JKLEtBQUwsQ0FBV0csT0FBZixFQUF3QjtBQUN0QixhQUFLSCxLQUFMLENBQVdHLE9BQVg7QUFDRDtBQUNGOzs7NEJBRU82TCxXLEVBQWE7QUFDbkIsYUFBTzVMLGtEQUFRLENBQUNvRixnQkFBVCxDQUEwQixLQUFLM0YsT0FBL0IsRUFBd0MsS0FBS21FLE9BQUwsQ0FBYTZHLGdCQUFyRCxDQUFQO0FBQ0Q7OztrQ0FFYTtBQUNaLFdBQUtwTCxRQUFMLEdBQWdCLEtBQUs0SixNQUFMLENBQVlWLEdBQVosQ0FBZ0IsS0FBS3NELGtCQUFMLElBQTJCLElBQUl2SywrQ0FBSixDQUFVLENBQVYsRUFBYSxDQUFiLENBQTNDLENBQWhCO0FBQ0EsYUFBTyxLQUFLakMsUUFBWjtBQUNEOzs7Z0NBRVc7QUFDVixhQUFPLEtBQUtBLFFBQUwsQ0FBY2tKLEdBQWQsQ0FBa0IsS0FBSzNCLE9BQUwsR0FBZXZCLElBQWYsQ0FBb0IsR0FBcEIsQ0FBbEIsQ0FBUDtBQUNEOzs7a0NBRWF0RyxLLEVBQU87QUFDbkIsV0FBSzhNLGtCQUFMLEdBQTBCOU0sS0FBMUI7QUFFQSxVQUFJK00sU0FBUyxHQUFHLEtBQUtyTSxPQUFMLENBQWFzTSxLQUFiLENBQW1CdEMsaUJBQW5CLENBQWhCO0FBQ0EsVUFBSXVDLFlBQVksR0FBRyxrQkFBa0JqTixLQUFLLENBQUNPLENBQXhCLEdBQTRCLEtBQTVCLEdBQW9DUCxLQUFLLENBQUNRLENBQTFDLEdBQThDLFVBQWpFO0FBRUEsVUFBTTBNLEVBQUUsR0FBR3RKLE1BQU0sQ0FBQ3VKLFNBQVAsQ0FBaUJDLFNBQTVCO0FBQ0EsVUFBTUMsSUFBSSxHQUFHSCxFQUFFLENBQUM1RSxPQUFILENBQVcsT0FBWCxDQUFiOztBQUVBLFVBQUkrRSxJQUFKLEVBQVU7QUFDUkosb0JBQVksR0FBRyxnQkFBZ0JqTixLQUFLLENBQUNPLENBQXRCLEdBQTBCLEtBQTFCLEdBQWtDUCxLQUFLLENBQUNRLENBQXhDLEdBQTRDLEtBQTNEOztBQUNBLFlBQUksQ0FBQyxxQkFBcUI4TSxJQUFyQixDQUEwQlAsU0FBMUIsQ0FBTCxFQUEyQztBQUN6Q0EsbUJBQVMsSUFBSUUsWUFBYjtBQUNELFNBRkQsTUFFTztBQUNMRixtQkFBUyxHQUFHQSxTQUFTLENBQUNRLE9BQVYsQ0FBa0Isb0JBQWxCLEVBQXdDTixZQUF4QyxDQUFaO0FBQ0Q7QUFDRixPQVBELE1BT087QUFDTCxZQUFJLENBQUMsdUJBQXVCSyxJQUF2QixDQUE0QlAsU0FBNUIsQ0FBTCxFQUE2QztBQUMzQ0EsbUJBQVMsSUFBSUUsWUFBYjtBQUNELFNBRkQsTUFFTztBQUNMRixtQkFBUyxHQUFHQSxTQUFTLENBQUNRLE9BQVYsQ0FBa0Isc0JBQWxCLEVBQTBDTixZQUExQyxDQUFaO0FBQ0Q7QUFDRjs7QUFFRCxXQUFLdk0sT0FBTCxDQUFhc00sS0FBYixDQUFtQnRDLGlCQUFuQixJQUF3Q3FDLFNBQXhDO0FBQ0Q7Ozt5QkFFSS9NLEssRUFBNEM7QUFBQSxVQUFyQ3dOLElBQXFDLHVFQUFoQyxDQUFnQztBQUFBLFVBQTdCQyxLQUE2Qix1RUFBdkIsS0FBdUI7QUFBQSxVQUFoQkMsUUFBZ0IsdUVBQVAsS0FBTztBQUMvQzFOLFdBQUssR0FBR0EsS0FBSyxDQUFDRyxLQUFOLEVBQVI7O0FBQ0EsVUFBSXNOLEtBQUosRUFBVztBQUNULGFBQUtyQixXQUFMLEdBQW1CcE0sS0FBbkI7QUFDRDs7QUFFRCxXQUFLMk4sa0JBQUwsQ0FBd0IzTixLQUF4QjtBQUVBLFdBQUtNLFFBQUwsR0FBZ0JOLEtBQWhCOztBQUVBLFVBQUk0SyxrQkFBSixFQUF3QjtBQUN0QixhQUFLbEssT0FBTCxDQUFhc00sS0FBYixDQUFtQnBDLGtCQUFuQixJQUF5QzRDLElBQUksR0FBRyxJQUFoRDtBQUNEOztBQUVELFdBQUtJLGFBQUwsQ0FBbUI1TixLQUFLLENBQUN1RyxHQUFOLENBQVUsS0FBSzJELE1BQWYsQ0FBbkI7O0FBQ0EsVUFBSSxDQUFDd0QsUUFBTCxFQUFlO0FBQ2IsYUFBS2hILE1BQUwsQ0FBWXdGLElBQVo7QUFDRDtBQUNGOzs7c0NBRWtCO0FBQ2pCLFdBQUsyQixXQUFMLENBQWlCLEtBQUtDLFdBQUwsRUFBakI7QUFDRDs7O2dDQUVXOU4sSyxFQUFPO0FBQ2pCQSxXQUFLLEdBQUdBLEtBQUssQ0FBQ0csS0FBTixFQUFSO0FBQ0EsV0FBS0csUUFBTCxHQUFnQk4sS0FBaEI7O0FBRUEsVUFBSTRLLGtCQUFKLEVBQXdCO0FBQ3RCLGFBQUtsSyxPQUFMLENBQWFzTSxLQUFiLENBQW1CcEMsa0JBQW5CLElBQXlDLEtBQXpDO0FBQ0Q7O0FBRUQsV0FBS2dELGFBQUwsQ0FBbUI1TixLQUFLLENBQUN1RyxHQUFOLENBQVUsS0FBSzJELE1BQWYsQ0FBbkI7QUFDRDs7O3dDQUVtQjtBQUNsQixVQUFJVSxrQkFBSixFQUF3QjtBQUN0QixhQUFLbEssT0FBTCxDQUFhc00sS0FBYixDQUFtQnBDLGtCQUFuQixJQUF5QyxLQUF6QztBQUNEO0FBQ0Y7Ozt1Q0FFa0I1SyxLLEVBQU87QUFDeEIsV0FBSytOLGFBQUwsR0FBc0IsS0FBS3pOLFFBQUwsQ0FBY0MsQ0FBZCxHQUFrQlAsS0FBSyxDQUFDTyxDQUE5QztBQUNBLFdBQUt5TixjQUFMLEdBQXVCLEtBQUsxTixRQUFMLENBQWNDLENBQWQsR0FBa0JQLEtBQUssQ0FBQ08sQ0FBL0M7QUFDQSxXQUFLME4sV0FBTCxHQUFvQixLQUFLM04sUUFBTCxDQUFjRSxDQUFkLEdBQWtCUixLQUFLLENBQUNRLENBQTVDO0FBQ0EsV0FBSzBOLGFBQUwsR0FBc0IsS0FBSzVOLFFBQUwsQ0FBY0UsQ0FBZCxHQUFrQlIsS0FBSyxDQUFDUSxDQUE5QztBQUNEOzs7OEJBRVMyTixLLEVBQU87QUFDZixXQUFLQyxZQUFMLEdBQW9CRCxLQUFwQjs7QUFDQSxVQUFJLENBQUMsS0FBS2hDLE9BQU4sSUFBa0IsS0FBS3RILE9BQUwsQ0FBYTRHLFdBQWIsSUFBNEIsQ0FBQyxLQUFLNUcsT0FBTCxDQUFhNEcsV0FBYixDQUF5QjBDLEtBQXpCLENBQW5ELEVBQXFGO0FBQ25GO0FBQ0Q7O0FBRUQsVUFBTUUsWUFBWSxHQUFJMUssT0FBTyxJQUFLd0ssS0FBSyxZQUFZdkssTUFBTSxDQUFDMEssVUFBMUQ7QUFFQSxXQUFLQyxnQkFBTCxHQUF3QixJQUFJaE0sK0NBQUosQ0FBVThMLFlBQVksR0FBR0YsS0FBSyxDQUFDakgsY0FBTixDQUFxQixDQUFyQixFQUF3QkMsS0FBM0IsR0FBbUNnSCxLQUFLLENBQUMvRyxPQUEvRCxFQUF3RWlILFlBQVksR0FBR0YsS0FBSyxDQUFDakgsY0FBTixDQUFxQixDQUFyQixFQUF3QkcsS0FBM0IsR0FBbUM4RyxLQUFLLENBQUM3RyxPQUE3SCxDQUF4QjtBQUVBLFdBQUtrSCxjQUFMLEdBQXNCLEtBQUtWLFdBQUwsRUFBdEI7O0FBQ0EsVUFBSU8sWUFBSixFQUFrQjtBQUNoQixhQUFLSSxRQUFMLEdBQWdCTixLQUFLLENBQUNqSCxjQUFOLENBQXFCLENBQXJCLEVBQXdCNkQsVUFBeEM7QUFDRDs7QUFDRG9ELFdBQUssQ0FBQ08sZUFBTjs7QUFDQSxVQUFJLEVBQUVQLEtBQUssQ0FBQ1EsTUFBTixZQUF3Qi9LLE1BQU0sQ0FBQ2dMLGdCQUEvQixJQUNBVCxLQUFLLENBQUNRLE1BQU4sWUFBd0IvSyxNQUFNLENBQUNnTCxnQkFEakMsQ0FBSixFQUN3RDtBQUN0RFQsYUFBSyxDQUFDVSxjQUFOO0FBQ0QsT0FIRCxNQUdPO0FBQ0xWLGFBQUssQ0FBQ1EsTUFBTixDQUFhRyxLQUFiO0FBQ0Q7O0FBRURDLGNBQVEsQ0FBQ2hJLGdCQUFULENBQTBCMEQsV0FBVyxDQUFDTCxJQUF0QyxFQUE0QyxLQUFLcUMsU0FBakQ7QUFDQXNDLGNBQVEsQ0FBQ2hJLGdCQUFULENBQTBCeUQsV0FBVyxDQUFDSixJQUF0QyxFQUE0QyxLQUFLcUMsU0FBakQ7QUFFQXNDLGNBQVEsQ0FBQ2hJLGdCQUFULENBQTBCMEQsV0FBVyxDQUFDOUksR0FBdEMsRUFBMkMsS0FBS2dMLFFBQWhEO0FBQ0FvQyxjQUFRLENBQUNoSSxnQkFBVCxDQUEwQnlELFdBQVcsQ0FBQzdJLEdBQXRDLEVBQTJDLEtBQUtnTCxRQUFoRDtBQUVBLFdBQUtxQyxVQUFMLEdBQWtCLElBQWxCO0FBRUEsV0FBS2hELE9BQUwsQ0FBYUUsSUFBYixDQUFrQmlDLEtBQWxCO0FBQ0FjLHFFQUFRLENBQUMsS0FBS3ZPLE9BQU4sRUFBZSxRQUFmLENBQVI7QUFDQSxXQUFLZ0csTUFBTCxDQUFZd0YsSUFBWixDQUFpQmlDLEtBQWpCO0FBQ0Q7Ozs2QkFFUUEsSyxFQUFPO0FBQ2QsV0FBS0MsWUFBTCxHQUFvQkQsS0FBcEI7QUFDQSxVQUFJZSxLQUFKO0FBRUEsVUFBTWIsWUFBWSxHQUFJMUssT0FBTyxJQUFLd0ssS0FBSyxZQUFZdkssTUFBTSxDQUFDMEssVUFBMUQ7O0FBQ0EsVUFBSUQsWUFBSixFQUFrQjtBQUNoQmEsYUFBSyxHQUFHckUsWUFBWSxDQUFDc0QsS0FBRCxFQUFRLEtBQUtNLFFBQWIsQ0FBcEI7O0FBRUEsWUFBSSxDQUFDUyxLQUFMLEVBQVk7QUFDVjtBQUNEO0FBQ0Y7O0FBRURmLFdBQUssQ0FBQ08sZUFBTjtBQUNBUCxXQUFLLENBQUNVLGNBQU47QUFDQSxVQUFNTSxVQUFVLEdBQUcsSUFBSTVNLCtDQUFKLENBQVU4TCxZQUFZLEdBQUdhLEtBQUssQ0FBQy9ILEtBQVQsR0FBaUJnSCxLQUFLLENBQUMvRyxPQUE3QyxFQUFzRGlILFlBQVksR0FBR2EsS0FBSyxDQUFDN0gsS0FBVCxHQUFpQjhHLEtBQUssQ0FBQzdHLE9BQXpGLENBQW5COztBQUNBLFVBQUl0SCxLQUFLLEdBQUcsS0FBS3dPLGNBQUwsQ0FBb0JoRixHQUFwQixDQUF3QjJGLFVBQVUsQ0FBQzVJLEdBQVgsQ0FBZSxLQUFLZ0ksZ0JBQXBCLENBQXhCLENBQVo7O0FBQ0F2TyxXQUFLLEdBQUcsS0FBS2EsS0FBTCxDQUFXYixLQUFYLEVBQWtCLEtBQUs2SCxPQUFMLEVBQWxCLENBQVI7QUFDQSxXQUFLc0gsVUFBTCxHQUFrQkEsVUFBbEI7QUFDQSxXQUFLL0UsSUFBTCxDQUFVcEssS0FBVixFQUFpQixDQUFqQjtBQUNEOzs7NEJBRU9tTyxLLEVBQU87QUFDYixVQUFNRSxZQUFZLEdBQUkxSyxPQUFPLElBQUt3SyxLQUFLLFlBQVl2SyxNQUFNLENBQUMwSyxVQUExRDs7QUFFQSxVQUFJRCxZQUFZLElBQUksQ0FBQ3hELFlBQVksQ0FBQ3NELEtBQUQsRUFBUSxLQUFLTSxRQUFiLENBQWpDLEVBQXlEO0FBQ3ZEO0FBQ0Q7O0FBRUROLFdBQUssQ0FBQ08sZUFBTjtBQUNBUCxXQUFLLENBQUNVLGNBQU47QUFDQSxXQUFLaEQsS0FBTCxDQUFXSyxJQUFYLENBQWdCaUMsS0FBaEI7QUFFQVksY0FBUSxDQUFDSyxtQkFBVCxDQUE2QjNFLFdBQVcsQ0FBQ0wsSUFBekMsRUFBK0MsS0FBS3FDLFNBQXBEO0FBQ0FzQyxjQUFRLENBQUNLLG1CQUFULENBQTZCNUUsV0FBVyxDQUFDSixJQUF6QyxFQUErQyxLQUFLcUMsU0FBcEQ7QUFFQXNDLGNBQVEsQ0FBQ0ssbUJBQVQsQ0FBNkIzRSxXQUFXLENBQUM5SSxHQUF6QyxFQUE4QyxLQUFLZ0wsUUFBbkQ7QUFDQW9DLGNBQVEsQ0FBQ0ssbUJBQVQsQ0FBNkI1RSxXQUFXLENBQUM3SSxHQUF6QyxFQUE4QyxLQUFLZ0wsUUFBbkQ7QUFFQSxXQUFLcUMsVUFBTCxHQUFrQixLQUFsQjtBQUNBSyx3RUFBVyxDQUFDLEtBQUszTyxPQUFOLEVBQWUsUUFBZixDQUFYO0FBQ0Q7OzttQ0FFYztBQUNiLGFBQU8sSUFBSTRPLG1EQUFKLENBQWMsS0FBS2hQLFFBQW5CLEVBQTZCLEtBQUt1SCxPQUFMLEVBQTdCLENBQVA7QUFDRDs7OzhCQUVTO0FBQ1IsV0FBS0EsT0FBTCxDQUFhLElBQWI7O0FBQ0EsVUFBSSxLQUFLaEgsS0FBTCxDQUFXRyxPQUFmLEVBQXdCO0FBQ3RCLGFBQUtILEtBQUwsQ0FBV0csT0FBWDtBQUNEO0FBQ0Y7Ozs4QkFFUztBQUNSLFdBQUsySyxPQUFMLENBQWF5RCxtQkFBYixDQUFpQzNFLFdBQVcsQ0FBQy9JLEtBQTdDLEVBQW9ELEtBQUs0SyxVQUF6RDtBQUNBLFdBQUtYLE9BQUwsQ0FBYXlELG1CQUFiLENBQWlDNUUsV0FBVyxDQUFDOUksS0FBN0MsRUFBb0QsS0FBSzRLLFVBQXpEO0FBQ0F5QyxjQUFRLENBQUNLLG1CQUFULENBQTZCM0UsV0FBVyxDQUFDTCxJQUF6QyxFQUErQyxLQUFLcUMsU0FBcEQ7QUFDQXNDLGNBQVEsQ0FBQ0ssbUJBQVQsQ0FBNkI1RSxXQUFXLENBQUNKLElBQXpDLEVBQStDLEtBQUtxQyxTQUFwRDtBQUNBc0MsY0FBUSxDQUFDSyxtQkFBVCxDQUE2QjNFLFdBQVcsQ0FBQzlJLEdBQXpDLEVBQThDLEtBQUtnTCxRQUFuRDtBQUNBb0MsY0FBUSxDQUFDSyxtQkFBVCxDQUE2QjVFLFdBQVcsQ0FBQzdJLEdBQXpDLEVBQThDLEtBQUtnTCxRQUFuRDtBQUVBLFdBQUtkLEtBQUwsQ0FBVzBELEtBQVg7QUFDQSxXQUFLN0ksTUFBTCxDQUFZNkksS0FBWjtBQUNEOzs7d0JBRVk7QUFDWCxhQUFPLEtBQUtwRCxPQUFaO0FBQ0QsSztzQkFFVTlCLE0sRUFBUTtBQUNqQixVQUFJQSxNQUFKLEVBQVk7QUFDVmdGLDBFQUFXLENBQUMsS0FBSzNPLE9BQU4sRUFBZSxTQUFmLENBQVg7QUFDRCxPQUZELE1BRU87QUFDTHVPLHVFQUFRLENBQUMsS0FBS3ZPLE9BQU4sRUFBZSxTQUFmLENBQVI7QUFDRDs7QUFFRCxhQUFPLEtBQUt5TCxPQUFMLEdBQWU5QixNQUF0QjtBQUNEOzs7Ozs7QUFHSDVELFNBQVMsQ0FBQ3dGLFFBQVYsR0FBcUIsSUFBSTNCLE1BQU0sQ0FBQ0MsS0FBWCxDQUFpQjlELFNBQWpCLEVBQTRCO0FBQUVxRixXQUFTLEVBQUUsSUFBYjtBQUFtQkMsY0FBWSxFQUFFO0FBQWpDLENBQTVCLENBQXJCO0FBQ0F0RixTQUFTLENBQUN3RixRQUFWLENBQW1CekMsR0FBbkIsQ0FBdUI0QixpQkFBdkI7Ozs7Ozs7Ozs7Ozs7QUN6VUE7QUFBQTs7QUFFQSxTQUFTYixLQUFULENBQWV2RSxPQUFmLEVBQXNDO0FBQUEsTUFBZG5CLE9BQWMsdUVBQUosRUFBSTtBQUNwQyxPQUFLMkssS0FBTCxHQUFhLEVBQWI7QUFDQSxPQUFLeEosT0FBTCxHQUFlQSxPQUFmO0FBQ0EsT0FBSzhGLFNBQUwsR0FBaUJqSCxPQUFPLENBQUNpSCxTQUFSLElBQXFCLEtBQXRDO0FBQ0EsT0FBS0MsWUFBTCxHQUFvQmxILE9BQU8sQ0FBQ2tILFlBQVIsSUFBd0IsS0FBNUM7QUFDRDs7QUFFRHhCLEtBQUssQ0FBQ2tGLFNBQU4sQ0FBZ0J2RCxJQUFoQixHQUF1QixZQUFXO0FBQ2hDLE1BQU13RCxJQUFJLEdBQUcsR0FBRzdGLEtBQUgsQ0FBU25CLElBQVQsQ0FBYzNILFNBQWQsQ0FBYjtBQUNBLE1BQU00TyxFQUFFLEdBQUcsS0FBSzdELFNBQUwsR0FBaUIsS0FBSzBELEtBQUwsQ0FBVzNGLEtBQVgsR0FBbUIrRixPQUFuQixFQUFqQixHQUFnRCxLQUFLSixLQUFoRTtBQUNBLE1BQUlLLFFBQUo7O0FBRUEsT0FBSyxJQUFJMUosQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR3dKLEVBQUUsQ0FBQ3RMLE1BQXZCLEVBQStCOEIsQ0FBQyxFQUFoQyxFQUFvQztBQUNsQzBKLFlBQVEsR0FBR0YsRUFBRSxDQUFDeEosQ0FBRCxDQUFGLENBQU1yRixLQUFOLENBQVksS0FBS2tGLE9BQWpCLEVBQTBCMEosSUFBMUIsQ0FBWDs7QUFDQSxRQUFJLEtBQUszRCxZQUFMLElBQXFCOEQsUUFBekIsRUFBbUM7QUFDakMsYUFBTyxJQUFQO0FBQ0Q7QUFDRjs7QUFDRCxTQUFPLENBQUMsS0FBSzlELFlBQWI7QUFDRCxDQVpEOztBQWNBeEIsS0FBSyxDQUFDa0YsU0FBTixDQUFnQmpHLEdBQWhCLEdBQXNCLFVBQVNzRyxDQUFULEVBQVk7QUFDaEMsT0FBS04sS0FBTCxDQUFXL0ssSUFBWCxDQUFnQnFMLENBQWhCO0FBQ0QsQ0FGRDs7QUFJQXZGLEtBQUssQ0FBQ2tGLFNBQU4sQ0FBZ0JNLE9BQWhCLEdBQTBCLFVBQVNELENBQVQsRUFBWTtBQUNwQyxPQUFLTixLQUFMLENBQVdPLE9BQVgsQ0FBbUJELENBQW5CO0FBQ0QsQ0FGRDs7QUFJQXZGLEtBQUssQ0FBQ2tGLFNBQU4sQ0FBZ0JPLE1BQWhCLEdBQXlCLFVBQVNGLENBQVQsRUFBWTtBQUNuQyxNQUFNdkwsS0FBSyxHQUFHLEtBQUtpTCxLQUFMLENBQVdsSCxPQUFYLENBQW1Cd0gsQ0FBbkIsQ0FBZDs7QUFDQSxNQUFJdkwsS0FBSyxLQUFLLENBQUMsQ0FBZixFQUFrQjtBQUNoQixTQUFLaUwsS0FBTCxDQUFXUyxNQUFYLENBQWtCMUwsS0FBbEIsRUFBeUIsQ0FBekI7QUFDRDtBQUNGLENBTEQ7O0FBT0FnRyxLQUFLLENBQUNrRixTQUFOLENBQWdCRixLQUFoQixHQUF3QixVQUFTVyxFQUFULEVBQWE7QUFDbkMsT0FBS1YsS0FBTCxHQUFhLEVBQWI7QUFDRCxDQUZEOztBQUllakYsb0VBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQzFDTWhJLEs7OztBQUNKLGlCQUFZaEMsQ0FBWixFQUFlQyxDQUFmLEVBQWtCO0FBQUE7O0FBQ2hCLFNBQUtELENBQUwsR0FBU0EsQ0FBVDtBQUNBLFNBQUtDLENBQUwsR0FBU0EsQ0FBVDtBQUNEOzs7O3dCQUVHMlAsQyxFQUFHO0FBQ0wsYUFBTyxJQUFJNU4sS0FBSixDQUFVLEtBQUtoQyxDQUFMLEdBQVM0UCxDQUFDLENBQUM1UCxDQUFyQixFQUF3QixLQUFLQyxDQUFMLEdBQVMyUCxDQUFDLENBQUMzUCxDQUFuQyxDQUFQO0FBQ0Q7Ozt3QkFFRzJQLEMsRUFBRztBQUNMLGFBQU8sSUFBSTVOLEtBQUosQ0FBVSxLQUFLaEMsQ0FBTCxHQUFTNFAsQ0FBQyxDQUFDNVAsQ0FBckIsRUFBd0IsS0FBS0MsQ0FBTCxHQUFTMlAsQ0FBQyxDQUFDM1AsQ0FBbkMsQ0FBUDtBQUNEOzs7eUJBRUk0UCxDLEVBQUc7QUFDTixhQUFPLElBQUk3TixLQUFKLENBQVUsS0FBS2hDLENBQUwsR0FBUzZQLENBQW5CLEVBQXNCLEtBQUs1UCxDQUFMLEdBQVM0UCxDQUEvQixDQUFQO0FBQ0Q7OzsrQkFFVTtBQUNULGFBQU8sSUFBSTdOLEtBQUosQ0FBVSxDQUFDLEtBQUtoQyxDQUFoQixFQUFtQixDQUFDLEtBQUtDLENBQXpCLENBQVA7QUFDRDs7OzRCQUVPMlAsQyxFQUFHO0FBQ1QsYUFBUSxLQUFLNVAsQ0FBTCxLQUFXNFAsQ0FBQyxDQUFDNVAsQ0FBYixJQUFrQixLQUFLQyxDQUFMLEtBQVcyUCxDQUFDLENBQUMzUCxDQUF2QztBQUNEOzs7NEJBRU87QUFDTixhQUFPLElBQUkrQixLQUFKLENBQVUsS0FBS2hDLENBQWYsRUFBa0IsS0FBS0MsQ0FBdkIsQ0FBUDtBQUNEOzs7K0JBRVU7QUFDVCwwQkFBYSxLQUFLRCxDQUFsQixnQkFBeUIsS0FBS0MsQ0FBOUI7QUFDRDs7Ozs7O0lBR0c4TyxTOzs7QUFDSixxQkFBWWhQLFFBQVosRUFBc0JMLElBQXRCLEVBQTRCO0FBQUE7O0FBQzFCLFNBQUtLLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsU0FBS0wsSUFBTCxHQUFZQSxJQUFaO0FBQ0Q7Ozs7NEJBRU87QUFDTixhQUFPLEtBQUtLLFFBQVo7QUFDRDs7OzRCQUVPO0FBQ04sYUFBTyxJQUFJaUMsS0FBSixDQUFVLEtBQUtqQyxRQUFMLENBQWNDLENBQWQsR0FBa0IsS0FBS04sSUFBTCxDQUFVTSxDQUF0QyxFQUF5QyxLQUFLRCxRQUFMLENBQWNFLENBQXZELENBQVA7QUFDRDs7OzRCQUVPO0FBQ04sYUFBTyxLQUFLRixRQUFMLENBQWNrSixHQUFkLENBQWtCLEtBQUt2SixJQUF2QixDQUFQO0FBQ0Q7Ozs0QkFFTztBQUNOLGFBQU8sSUFBSXNDLEtBQUosQ0FBVSxLQUFLakMsUUFBTCxDQUFjQyxDQUF4QixFQUEyQixLQUFLRCxRQUFMLENBQWNFLENBQWQsR0FBa0IsS0FBS1AsSUFBTCxDQUFVTyxDQUF2RCxDQUFQO0FBQ0Q7OztnQ0FFVztBQUNWLGFBQU8sS0FBS0YsUUFBTCxDQUFja0osR0FBZCxDQUFrQixLQUFLdkosSUFBTCxDQUFVcUcsSUFBVixDQUFlLEdBQWYsQ0FBbEIsQ0FBUDtBQUNEOzs7dUJBRUUrSixJLEVBQU07QUFDUCxVQUFNL1AsUUFBUSxHQUFHLElBQUlpQyxLQUFKLENBQVVWLElBQUksQ0FBQ3lPLEdBQUwsQ0FBUyxLQUFLaFEsUUFBTCxDQUFjQyxDQUF2QixFQUEwQjhQLElBQUksQ0FBQy9QLFFBQUwsQ0FBY0MsQ0FBeEMsQ0FBVixFQUFzRHNCLElBQUksQ0FBQ3lPLEdBQUwsQ0FBUyxLQUFLaFEsUUFBTCxDQUFjRSxDQUF2QixFQUEwQjZQLElBQUksQ0FBQy9QLFFBQUwsQ0FBY0UsQ0FBeEMsQ0FBdEQsQ0FBakI7QUFDQSxVQUFNUCxJQUFJLEdBQUksSUFBSXNDLEtBQUosQ0FBVVYsSUFBSSxDQUFDME8sR0FBTCxDQUFTLEtBQUtqUSxRQUFMLENBQWNDLENBQWQsR0FBa0IsS0FBS04sSUFBTCxDQUFVTSxDQUFyQyxFQUF3QzhQLElBQUksQ0FBQy9QLFFBQUwsQ0FBY0MsQ0FBZCxHQUFrQjhQLElBQUksQ0FBQ3BRLElBQUwsQ0FBVU0sQ0FBcEUsQ0FBVixFQUFrRnNCLElBQUksQ0FBQzBPLEdBQUwsQ0FBUyxLQUFLalEsUUFBTCxDQUFjRSxDQUFkLEdBQWtCLEtBQUtQLElBQUwsQ0FBVU8sQ0FBckMsRUFBd0M2UCxJQUFJLENBQUMvUCxRQUFMLENBQWNFLENBQWQsR0FBa0I2UCxJQUFJLENBQUNwUSxJQUFMLENBQVVPLENBQXBFLENBQWxGLENBQUQsQ0FBNEorRixHQUE1SixDQUFnS2pHLFFBQWhLLENBQWI7QUFDQSxhQUFPLElBQUlnUCxTQUFKLENBQWNoUCxRQUFkLEVBQXdCTCxJQUF4QixDQUFQO0FBQ0Q7Ozt3QkFFR29RLEksRUFBTTtBQUNSLFVBQU0vUCxRQUFRLEdBQUcsSUFBSWlDLEtBQUosQ0FBVVYsSUFBSSxDQUFDME8sR0FBTCxDQUFTLEtBQUtqUSxRQUFMLENBQWNDLENBQXZCLEVBQTBCOFAsSUFBSSxDQUFDL1AsUUFBTCxDQUFjQyxDQUF4QyxDQUFWLEVBQXNEc0IsSUFBSSxDQUFDME8sR0FBTCxDQUFTLEtBQUtqUSxRQUFMLENBQWNFLENBQXZCLEVBQTBCNlAsSUFBSSxDQUFDL1AsUUFBTCxDQUFjRSxDQUF4QyxDQUF0RCxDQUFqQjtBQUNBLFVBQU1QLElBQUksR0FBSSxJQUFJc0MsS0FBSixDQUFVVixJQUFJLENBQUN5TyxHQUFMLENBQVMsS0FBS2hRLFFBQUwsQ0FBY0MsQ0FBZCxHQUFrQixLQUFLTixJQUFMLENBQVVNLENBQXJDLEVBQXdDOFAsSUFBSSxDQUFDL1AsUUFBTCxDQUFjQyxDQUFkLEdBQWtCOFAsSUFBSSxDQUFDcFEsSUFBTCxDQUFVTSxDQUFwRSxDQUFWLEVBQWtGc0IsSUFBSSxDQUFDeU8sR0FBTCxDQUFTLEtBQUtoUSxRQUFMLENBQWNFLENBQWQsR0FBa0IsS0FBS1AsSUFBTCxDQUFVTyxDQUFyQyxFQUF3QzZQLElBQUksQ0FBQy9QLFFBQUwsQ0FBY0UsQ0FBZCxHQUFrQjZQLElBQUksQ0FBQ3BRLElBQUwsQ0FBVU8sQ0FBcEUsQ0FBbEYsQ0FBRCxDQUE0SitGLEdBQTVKLENBQWdLakcsUUFBaEssQ0FBYjs7QUFDQSxVQUFJTCxJQUFJLENBQUNNLENBQUwsSUFBVSxDQUFWLElBQWVOLElBQUksQ0FBQ08sQ0FBTCxJQUFVLENBQTdCLEVBQWdDO0FBQzlCLGVBQU8sSUFBUDtBQUNEOztBQUNELGFBQU8sSUFBSThPLFNBQUosQ0FBY2hQLFFBQWQsRUFBd0JMLElBQXhCLENBQVA7QUFDRDs7O2lDQUVZa1EsQyxFQUFHO0FBQ2QsYUFBTyxFQUFFLEtBQUs3UCxRQUFMLENBQWNDLENBQWQsR0FBa0I0UCxDQUFDLENBQUM1UCxDQUFwQixJQUF5QixLQUFLRCxRQUFMLENBQWNDLENBQWQsR0FBa0IsS0FBS04sSUFBTCxDQUFVTSxDQUE1QixHQUFnQzRQLENBQUMsQ0FBQzVQLENBQTNELElBQWdFLEtBQUtELFFBQUwsQ0FBY0UsQ0FBZCxHQUFrQjJQLENBQUMsQ0FBQzNQLENBQXBGLElBQXlGLEtBQUtGLFFBQUwsQ0FBY0UsQ0FBZCxHQUFrQixLQUFLUCxJQUFMLENBQVVPLENBQTVCLEdBQWdDMlAsQ0FBQyxDQUFDM1AsQ0FBN0gsQ0FBUDtBQUNEOzs7cUNBRWdCVCxTLEVBQVc7QUFDMUIsYUFBTyxLQUFLeVEsWUFBTCxDQUFrQnpRLFNBQVMsQ0FBQ08sUUFBNUIsS0FBeUMsS0FBS2tRLFlBQUwsQ0FBa0J6USxTQUFTLENBQUNNLEtBQVYsRUFBbEIsQ0FBaEQ7QUFDRDs7O2dDQUVXZ1EsSSxFQUFNSSxJLEVBQU07QUFDdEIsVUFBSUMsT0FBSixFQUFhQyxjQUFiOztBQUNBLFVBQUlGLElBQUosRUFBVTtBQUNSQyxlQUFPLEdBQUdELElBQVY7QUFDRCxPQUZELE1BRU87QUFDTEUsc0JBQWMsR0FBRyxLQUFLQyxHQUFMLENBQVNQLElBQVQsQ0FBakI7O0FBQ0EsWUFBSSxDQUFDTSxjQUFMLEVBQXFCO0FBQ25CLGlCQUFPTixJQUFQO0FBQ0Q7O0FBQ0RLLGVBQU8sR0FBR0MsY0FBYyxDQUFDMVEsSUFBZixDQUFvQk0sQ0FBcEIsR0FBd0JvUSxjQUFjLENBQUMxUSxJQUFmLENBQW9CTyxDQUE1QyxHQUFnRCxHQUFoRCxHQUFzRCxHQUFoRTtBQUNEOztBQUNELFVBQU1xUSxVQUFVLEdBQUcsS0FBSzVMLFNBQUwsRUFBbkI7QUFDQSxVQUFNNkwsVUFBVSxHQUFHVCxJQUFJLENBQUNwTCxTQUFMLEVBQW5CO0FBQ0EsVUFBTThDLElBQUksR0FBRzhJLFVBQVUsQ0FBQ0gsT0FBRCxDQUFWLEdBQXNCSSxVQUFVLENBQUNKLE9BQUQsQ0FBaEMsR0FBNEMsQ0FBQyxDQUE3QyxHQUFpRCxDQUE5RDtBQUNBLFVBQU14RyxNQUFNLEdBQUduQyxJQUFJLEdBQUcsQ0FBUCxHQUFXLEtBQUt6SCxRQUFMLENBQWNvUSxPQUFkLElBQXlCLEtBQUt6USxJQUFMLENBQVV5USxPQUFWLENBQXpCLEdBQThDTCxJQUFJLENBQUMvUCxRQUFMLENBQWNvUSxPQUFkLENBQXpELEdBQWtGLEtBQUtwUSxRQUFMLENBQWNvUSxPQUFkLEtBQTBCTCxJQUFJLENBQUMvUCxRQUFMLENBQWNvUSxPQUFkLElBQXlCTCxJQUFJLENBQUNwUSxJQUFMLENBQVV5USxPQUFWLENBQW5ELENBQWpHO0FBQ0FMLFVBQUksQ0FBQy9QLFFBQUwsQ0FBY29RLE9BQWQsSUFBeUJMLElBQUksQ0FBQy9QLFFBQUwsQ0FBY29RLE9BQWQsSUFBeUJ4RyxNQUFsRDtBQUNBLGFBQU9tRyxJQUFQO0FBQ0Q7OztnQ0FFVztBQUNWLGFBQU8sS0FBS3BRLElBQUwsQ0FBVU0sQ0FBVixHQUFjLEtBQUtOLElBQUwsQ0FBVU8sQ0FBL0I7QUFDRDs7OytCQUVVdVEsRSxFQUFJO0FBQ2JBLFFBQUUsR0FBR0EsRUFBRSxJQUFJaEMsUUFBUSxDQUFDbkQsYUFBVCxDQUF1QixLQUF2QixDQUFYO0FBQ0FtRixRQUFFLENBQUMvRCxLQUFILENBQVNnRSxJQUFULEdBQWdCLEtBQUsxUSxRQUFMLENBQWNDLENBQWQsR0FBa0IsSUFBbEM7QUFDQXdRLFFBQUUsQ0FBQy9ELEtBQUgsQ0FBU2lFLEdBQVQsR0FBZSxLQUFLM1EsUUFBTCxDQUFjRSxDQUFkLEdBQWtCLElBQWpDO0FBQ0F1USxRQUFFLENBQUMvRCxLQUFILENBQVNrRSxLQUFULEdBQWlCLEtBQUtqUixJQUFMLENBQVVNLENBQVYsR0FBYyxJQUEvQjtBQUNBd1EsUUFBRSxDQUFDL0QsS0FBSCxDQUFTekQsTUFBVCxHQUFrQixLQUFLdEosSUFBTCxDQUFVTyxDQUFWLEdBQWMsSUFBaEM7QUFDRDs7OzJCQUVNUCxJLEVBQU07QUFDWCxXQUFLQSxJQUFMLEdBQVksS0FBS0EsSUFBTCxDQUFVdUosR0FBVixDQUFjdkosSUFBZCxDQUFaO0FBQ0EsV0FBS0ssUUFBTCxHQUFnQixLQUFLQSxRQUFMLENBQWNrSixHQUFkLENBQWtCdkosSUFBSSxDQUFDcUcsSUFBTCxDQUFVLENBQUMsR0FBWCxDQUFsQixDQUFoQjtBQUNEOzs7aUNBRVk7QUFDWCxhQUFPekUsSUFBSSxDQUFDeU8sR0FBTCxDQUFTLEtBQUtyUSxJQUFMLENBQVVNLENBQW5CLEVBQXNCLEtBQUtOLElBQUwsQ0FBVU8sQ0FBaEMsQ0FBUDtBQUNEOzs7OztBQUdIOzs7QUFDQSxJQUFNUyxRQUFRLEdBQUc7QUFDZmdKLGFBRGUsdUJBQ0hrSCxFQURHLEVBQ0NDLEVBREQsRUFDSztBQUNsQixRQUFNQyxFQUFFLEdBQUdGLEVBQUUsQ0FBQzVRLENBQUgsR0FBTzZRLEVBQUUsQ0FBQzdRLENBQXJCO0FBQUEsUUFBd0IrUSxFQUFFLEdBQUdILEVBQUUsQ0FBQzNRLENBQUgsR0FBTzRRLEVBQUUsQ0FBQzVRLENBQXZDO0FBQ0EsV0FBT3FCLElBQUksQ0FBQzBQLElBQUwsQ0FBVUYsRUFBRSxHQUFHQSxFQUFMLEdBQVVDLEVBQUUsR0FBR0EsRUFBekIsQ0FBUDtBQUNELEdBSmM7QUFLZkUsVUFMZSxvQkFLTkwsRUFMTSxFQUtGQyxFQUxFLEVBS0U7QUFDZixXQUFPblEsUUFBUSxDQUFDZ0osV0FBVCxDQUFxQmtILEVBQXJCLEVBQXlCQyxFQUF6QixDQUFQO0FBQ0QsR0FQYztBQVFmSyxnQkFSZSwwQkFRQU4sRUFSQSxFQVFJQyxFQVJKLEVBUVE7QUFDckIsV0FBT3ZQLElBQUksQ0FBQzZQLEdBQUwsQ0FBU1AsRUFBRSxDQUFDNVEsQ0FBSCxHQUFPNlEsRUFBRSxDQUFDN1EsQ0FBbkIsQ0FBUDtBQUNELEdBVmM7QUFXZm9SLGdCQVhlLDBCQVdBUixFQVhBLEVBV0lDLEVBWEosRUFXUTtBQUNyQixXQUFPdlAsSUFBSSxDQUFDNlAsR0FBTCxDQUFTUCxFQUFFLENBQUMzUSxDQUFILEdBQU80USxFQUFFLENBQUM1USxDQUFuQixDQUFQO0FBQ0QsR0FiYztBQWNmb1IsaUNBZGUsMkNBY2lCL00sT0FkakIsRUFjMEI7QUFDdkMsV0FBTyxVQUFDc00sRUFBRCxFQUFLQyxFQUFMLEVBQVk7QUFDakIsYUFBT3ZQLElBQUksQ0FBQzBQLElBQUwsQ0FDTDFQLElBQUksQ0FBQ2dRLEdBQUwsQ0FBU2hOLE9BQU8sQ0FBQ3RFLENBQVIsR0FBWXNCLElBQUksQ0FBQzZQLEdBQUwsQ0FBU1AsRUFBRSxDQUFDNVEsQ0FBSCxHQUFPNlEsRUFBRSxDQUFDN1EsQ0FBbkIsQ0FBckIsRUFBNEMsQ0FBNUMsSUFDQXNCLElBQUksQ0FBQ2dRLEdBQUwsQ0FBU2hOLE9BQU8sQ0FBQ3JFLENBQVIsR0FBWXFCLElBQUksQ0FBQzZQLEdBQUwsQ0FBU1AsRUFBRSxDQUFDM1EsQ0FBSCxHQUFPNFEsRUFBRSxDQUFDNVEsQ0FBbkIsQ0FBckIsRUFBNEMsQ0FBNUMsQ0FGSyxDQUFQO0FBSUQsS0FMRDtBQU1ELEdBckJjO0FBc0Jmc1IscUJBdEJlLCtCQXNCS0MsR0F0QkwsRUFzQlVDLEdBdEJWLEVBc0JlbFAsTUF0QmYsRUFzQnVCbUgsV0F0QnZCLEVBc0JvQztBQUNqRCxRQUFJaEssSUFBSjtBQUFBLFFBQVVzRSxLQUFLLEdBQUcsQ0FBbEI7QUFBQSxRQUFxQjRCLENBQXJCO0FBQUEsUUFBd0I4TCxJQUF4QjtBQUNBaEksZUFBVyxHQUFHQSxXQUFXLElBQUloSixRQUFRLENBQUNnSixXQUF0Qzs7QUFDQSxRQUFJOEgsR0FBRyxDQUFDMU4sTUFBSixLQUFlLENBQW5CLEVBQXNCO0FBQ3BCLGFBQU8sQ0FBQyxDQUFSO0FBQ0Q7O0FBQ0RwRSxRQUFJLEdBQUdnSyxXQUFXLENBQUM4SCxHQUFHLENBQUMsQ0FBRCxDQUFKLEVBQVNDLEdBQVQsQ0FBbEI7O0FBQ0EsU0FBSzdMLENBQUMsR0FBRyxDQUFULEVBQVlBLENBQUMsR0FBRzRMLEdBQUcsQ0FBQzFOLE1BQXBCLEVBQTRCOEIsQ0FBQyxFQUE3QixFQUFpQztBQUMvQjhMLFVBQUksR0FBR2hJLFdBQVcsQ0FBQzhILEdBQUcsQ0FBQzVMLENBQUQsQ0FBSixFQUFTNkwsR0FBVCxDQUFsQjs7QUFDQSxVQUFJQyxJQUFJLEdBQUdoUyxJQUFYLEVBQWlCO0FBQ2ZBLFlBQUksR0FBR2dTLElBQVA7QUFDQTFOLGFBQUssR0FBRzRCLENBQVI7QUFDRDtBQUNGOztBQUNELFFBQUlyRCxNQUFNLElBQUksQ0FBVixJQUFlN0MsSUFBSSxHQUFHNkMsTUFBMUIsRUFBa0M7QUFDaEMsYUFBTyxDQUFDLENBQVI7QUFDRDs7QUFDRCxXQUFPeUIsS0FBUDtBQUNELEdBeENjO0FBeUNmMUQsT0F6Q2UsaUJBeUNUeVAsR0F6Q1MsRUF5Q0pDLEdBekNJLEVBeUNDeUIsR0F6Q0QsRUF5Q007QUFDbkIsV0FBT25RLElBQUksQ0FBQzBPLEdBQUwsQ0FBU0QsR0FBVCxFQUFjek8sSUFBSSxDQUFDeU8sR0FBTCxDQUFTQyxHQUFULEVBQWN5QixHQUFkLENBQWQsQ0FBUDtBQUNELEdBM0NjO0FBNENmRSxZQTVDZSxzQkE0Q0o1QixHQTVDSSxFQTRDQ0MsR0E1Q0QsRUE0Q015QixHQTVDTixFQTRDVztBQUN4QixRQUFNelIsQ0FBQyxHQUFHc0IsSUFBSSxDQUFDME8sR0FBTCxDQUFTRCxHQUFHLENBQUMvUCxDQUFiLEVBQWdCc0IsSUFBSSxDQUFDeU8sR0FBTCxDQUFTQyxHQUFHLENBQUNoUSxDQUFiLEVBQWdCeVIsR0FBRyxDQUFDelIsQ0FBcEIsQ0FBaEIsQ0FBVjtBQUNBLFFBQU1DLENBQUMsR0FBR3FCLElBQUksQ0FBQzBPLEdBQUwsQ0FBU0QsR0FBRyxDQUFDOVAsQ0FBYixFQUFnQnFCLElBQUksQ0FBQ3lPLEdBQUwsQ0FBU0MsR0FBRyxDQUFDL1AsQ0FBYixFQUFnQndSLEdBQUcsQ0FBQ3hSLENBQXBCLENBQWhCLENBQVY7QUFDQSxXQUFPLElBQUkrQixLQUFKLENBQVVoQyxDQUFWLEVBQWFDLENBQWIsQ0FBUDtBQUNELEdBaERjO0FBaURiO0FBQ0ZtQyxnQkFsRGUsMEJBa0RBd1AsSUFsREEsRUFrRE1DLElBbEROLEVBa0RZQyxJQWxEWixFQWtEa0JDLElBbERsQixFQWtEd0I7QUFDckMsUUFBSUwsSUFBSixFQUFVTSxFQUFWLEVBQWNDLEVBQWQsRUFBa0JDLEVBQWxCLEVBQXNCQyxFQUF0QixFQUEwQm5TLENBQTFCLEVBQTZCQyxDQUE3Qjs7QUFDQSxRQUFJNlIsSUFBSSxDQUFDOVIsQ0FBTCxLQUFXK1IsSUFBSSxDQUFDL1IsQ0FBcEIsRUFBdUI7QUFDckIwUixVQUFJLEdBQUdJLElBQVA7QUFDQUEsVUFBSSxHQUFHRixJQUFQO0FBQ0FBLFVBQUksR0FBR0YsSUFBUDtBQUNBQSxVQUFJLEdBQUdLLElBQVA7QUFDQUEsVUFBSSxHQUFHRixJQUFQO0FBQ0FBLFVBQUksR0FBR0gsSUFBUDtBQUNEOztBQUNELFFBQUlFLElBQUksQ0FBQzVSLENBQUwsS0FBVzZSLElBQUksQ0FBQzdSLENBQXBCLEVBQXVCO0FBQ3JCaVMsUUFBRSxHQUFHLENBQUNGLElBQUksQ0FBQzlSLENBQUwsR0FBUzZSLElBQUksQ0FBQzdSLENBQWYsS0FBcUI4UixJQUFJLENBQUMvUixDQUFMLEdBQVM4UixJQUFJLENBQUM5UixDQUFuQyxDQUFMO0FBQ0FtUyxRQUFFLEdBQUcsQ0FBQ0osSUFBSSxDQUFDL1IsQ0FBTCxHQUFTOFIsSUFBSSxDQUFDN1IsQ0FBZCxHQUFrQjZSLElBQUksQ0FBQzlSLENBQUwsR0FBUytSLElBQUksQ0FBQzlSLENBQWpDLEtBQXVDOFIsSUFBSSxDQUFDL1IsQ0FBTCxHQUFTOFIsSUFBSSxDQUFDOVIsQ0FBckQsQ0FBTDtBQUNBQSxPQUFDLEdBQUc0UixJQUFJLENBQUM1UixDQUFUO0FBQ0FDLE9BQUMsR0FBR0QsQ0FBQyxHQUFHaVMsRUFBSixHQUFTRSxFQUFiO0FBQ0EsYUFBTyxJQUFJblEsS0FBSixDQUFVaEMsQ0FBVixFQUFhQyxDQUFiLENBQVA7QUFDRCxLQU5ELE1BTU87QUFDTCtSLFFBQUUsR0FBRyxDQUFDSCxJQUFJLENBQUM1UixDQUFMLEdBQVMyUixJQUFJLENBQUMzUixDQUFmLEtBQXFCNFIsSUFBSSxDQUFDN1IsQ0FBTCxHQUFTNFIsSUFBSSxDQUFDNVIsQ0FBbkMsQ0FBTDtBQUNBa1MsUUFBRSxHQUFHLENBQUNMLElBQUksQ0FBQzdSLENBQUwsR0FBUzRSLElBQUksQ0FBQzNSLENBQWQsR0FBa0IyUixJQUFJLENBQUM1UixDQUFMLEdBQVM2UixJQUFJLENBQUM1UixDQUFqQyxLQUF1QzRSLElBQUksQ0FBQzdSLENBQUwsR0FBUzRSLElBQUksQ0FBQzVSLENBQXJELENBQUw7QUFDQWlTLFFBQUUsR0FBRyxDQUFDRixJQUFJLENBQUM5UixDQUFMLEdBQVM2UixJQUFJLENBQUM3UixDQUFmLEtBQXFCOFIsSUFBSSxDQUFDL1IsQ0FBTCxHQUFTOFIsSUFBSSxDQUFDOVIsQ0FBbkMsQ0FBTDtBQUNBbVMsUUFBRSxHQUFHLENBQUNKLElBQUksQ0FBQy9SLENBQUwsR0FBUzhSLElBQUksQ0FBQzdSLENBQWQsR0FBa0I2UixJQUFJLENBQUM5UixDQUFMLEdBQVMrUixJQUFJLENBQUM5UixDQUFqQyxLQUF1QzhSLElBQUksQ0FBQy9SLENBQUwsR0FBUzhSLElBQUksQ0FBQzlSLENBQXJELENBQUw7QUFDQUEsT0FBQyxHQUFHLENBQUNrUyxFQUFFLEdBQUdDLEVBQU4sS0FBYUYsRUFBRSxHQUFHRCxFQUFsQixDQUFKO0FBQ0EvUixPQUFDLEdBQUdELENBQUMsR0FBR2dTLEVBQUosR0FBU0UsRUFBYjtBQUNBLGFBQU8sSUFBSWxRLEtBQUosQ0FBVWhDLENBQVYsRUFBYUMsQ0FBYixDQUFQO0FBQ0Q7QUFDRixHQTNFYztBQTRFZm1TLGdCQTVFZSwwQkE0RUFDLEdBNUVBLEVBNEVLQyxHQTVFTCxFQTRFVUMsQ0E1RVYsRUE0RWE7QUFDMUIsUUFBSXZTLENBQUosRUFBT0MsQ0FBUDtBQUNBRCxLQUFDLEdBQUdVLFFBQVEsQ0FBQ0osS0FBVCxDQUFlZ0IsSUFBSSxDQUFDeU8sR0FBTCxDQUFTc0MsR0FBRyxDQUFDclMsQ0FBYixFQUFnQnNTLEdBQUcsQ0FBQ3RTLENBQXBCLENBQWYsRUFBdUNzQixJQUFJLENBQUMwTyxHQUFMLENBQVNxQyxHQUFHLENBQUNyUyxDQUFiLEVBQWdCc1MsR0FBRyxDQUFDdFMsQ0FBcEIsQ0FBdkMsRUFBK0R1UyxDQUFDLENBQUN2UyxDQUFqRSxDQUFKOztBQUNBLFFBQUlBLENBQUMsS0FBS3VTLENBQUMsQ0FBQ3ZTLENBQVosRUFBZTtBQUNiQyxPQUFDLEdBQUlELENBQUMsS0FBS3FTLEdBQUcsQ0FBQ3JTLENBQVgsR0FBZ0JxUyxHQUFHLENBQUNwUyxDQUFwQixHQUF3QnFTLEdBQUcsQ0FBQ3JTLENBQWhDO0FBQ0FzUyxPQUFDLEdBQUcsSUFBSXZRLEtBQUosQ0FBVWhDLENBQVYsRUFBYUMsQ0FBYixDQUFKO0FBQ0Q7O0FBRURBLEtBQUMsR0FBR1MsUUFBUSxDQUFDSixLQUFULENBQWVnQixJQUFJLENBQUN5TyxHQUFMLENBQVNzQyxHQUFHLENBQUNwUyxDQUFiLEVBQWdCcVMsR0FBRyxDQUFDclMsQ0FBcEIsQ0FBZixFQUF1Q3FCLElBQUksQ0FBQzBPLEdBQUwsQ0FBU3FDLEdBQUcsQ0FBQ3BTLENBQWIsRUFBZ0JxUyxHQUFHLENBQUNyUyxDQUFwQixDQUF2QyxFQUErRHNTLENBQUMsQ0FBQ3RTLENBQWpFLENBQUo7O0FBQ0EsUUFBSUEsQ0FBQyxLQUFLc1MsQ0FBQyxDQUFDdFMsQ0FBWixFQUFlO0FBQ2JELE9BQUMsR0FBSUMsQ0FBQyxLQUFLb1MsR0FBRyxDQUFDcFMsQ0FBWCxHQUFnQm9TLEdBQUcsQ0FBQ3JTLENBQXBCLEdBQXdCc1MsR0FBRyxDQUFDdFMsQ0FBaEM7QUFDQXVTLE9BQUMsR0FBRyxJQUFJdlEsS0FBSixDQUFVaEMsQ0FBVixFQUFhQyxDQUFiLENBQUo7QUFDRDs7QUFFRCxXQUFPc1MsQ0FBUDtBQUNELEdBM0ZjO0FBNEZmclIsYUE1RmUsdUJBNEZIc1IsQ0E1RkcsRUE0RkFDLENBNUZBLEVBNEZHRixDQTVGSCxFQTRGTTtBQUNuQixRQUFNRyxFQUFFLEdBQUcsSUFBSTFRLEtBQUosQ0FBVXVRLENBQUMsQ0FBQ3ZTLENBQUYsR0FBTXdTLENBQUMsQ0FBQ3hTLENBQWxCLEVBQXFCdVMsQ0FBQyxDQUFDdFMsQ0FBRixHQUFNdVMsQ0FBQyxDQUFDdlMsQ0FBN0IsQ0FBWDtBQUFBLFFBQ0UwUyxFQUFFLEdBQUcsSUFBSTNRLEtBQUosQ0FBVXlRLENBQUMsQ0FBQ3pTLENBQUYsR0FBTXdTLENBQUMsQ0FBQ3hTLENBQWxCLEVBQXFCeVMsQ0FBQyxDQUFDeFMsQ0FBRixHQUFNdVMsQ0FBQyxDQUFDdlMsQ0FBN0IsQ0FEUDtBQUFBLFFBRUUyUyxHQUFHLEdBQUdELEVBQUUsQ0FBQzNTLENBQUgsR0FBTzJTLEVBQUUsQ0FBQzNTLENBQVYsR0FBYzJTLEVBQUUsQ0FBQzFTLENBQUgsR0FBTzBTLEVBQUUsQ0FBQzFTLENBRmhDO0FBQUEsUUFHRTRTLEtBQUssR0FBR0gsRUFBRSxDQUFDMVMsQ0FBSCxHQUFPMlMsRUFBRSxDQUFDM1MsQ0FBVixHQUFjMFMsRUFBRSxDQUFDelMsQ0FBSCxHQUFPMFMsRUFBRSxDQUFDMVMsQ0FIbEM7QUFBQSxRQUlFNlMsQ0FBQyxHQUFHRCxLQUFLLEdBQUdELEdBSmQ7QUFLQSxXQUFPLElBQUk1USxLQUFKLENBQVV3USxDQUFDLENBQUN4UyxDQUFGLEdBQU0yUyxFQUFFLENBQUMzUyxDQUFILEdBQU84UyxDQUF2QixFQUEwQk4sQ0FBQyxDQUFDdlMsQ0FBRixHQUFNMFMsRUFBRSxDQUFDMVMsQ0FBSCxHQUFPNlMsQ0FBdkMsQ0FBUDtBQUNELEdBbkdjO0FBb0dmQyxnQkFwR2UsMEJBb0dBVixHQXBHQSxFQW9HS0MsR0FwR0wsRUFvR1VVLE9BcEdWLEVBb0dtQjtBQUNoQyxRQUFNbEMsRUFBRSxHQUFHd0IsR0FBRyxDQUFDdFMsQ0FBSixHQUFRcVMsR0FBRyxDQUFDclMsQ0FBdkI7QUFBQSxRQUEwQitRLEVBQUUsR0FBR3VCLEdBQUcsQ0FBQ3JTLENBQUosR0FBUW9TLEdBQUcsQ0FBQ3BTLENBQTNDO0FBQ0EsV0FBTyxJQUFJK0IsS0FBSixDQUFVcVEsR0FBRyxDQUFDclMsQ0FBSixHQUFRZ1QsT0FBTyxHQUFHbEMsRUFBNUIsRUFBZ0N1QixHQUFHLENBQUNwUyxDQUFKLEdBQVErUyxPQUFPLEdBQUdqQyxFQUFsRCxDQUFQO0FBQ0QsR0F2R2M7QUF3R2Y3Tyx3QkF4R2Usa0NBd0dRbVEsR0F4R1IsRUF3R2FDLEdBeEdiLEVBd0drQlcsTUF4R2xCLEVBd0cwQjtBQUN2QyxRQUFNbkMsRUFBRSxHQUFHd0IsR0FBRyxDQUFDdFMsQ0FBSixHQUFRcVMsR0FBRyxDQUFDclMsQ0FBdkI7QUFBQSxRQUEwQitRLEVBQUUsR0FBR3VCLEdBQUcsQ0FBQ3JTLENBQUosR0FBUW9TLEdBQUcsQ0FBQ3BTLENBQTNDO0FBQUEsUUFBOEMrUyxPQUFPLEdBQUdDLE1BQU0sR0FBR3ZTLFFBQVEsQ0FBQ3VRLFFBQVQsQ0FBa0JvQixHQUFsQixFQUF1QkMsR0FBdkIsQ0FBakU7QUFDQSxXQUFPLElBQUl0USxLQUFKLENBQVVxUSxHQUFHLENBQUNyUyxDQUFKLEdBQVFnVCxPQUFPLEdBQUdsQyxFQUE1QixFQUFnQ3VCLEdBQUcsQ0FBQ3BTLENBQUosR0FBUStTLE9BQU8sR0FBR2pDLEVBQWxELENBQVA7QUFDRCxHQTNHYztBQTRHZnBRLDRCQTVHZSxzQ0E0R1k2UCxFQTVHWixFQTRHZ0JwUSxNQTVHaEIsRUE0R3dCK0ssZ0JBNUd4QixFQTRHMEMrSCxtQkE1RzFDLEVBNEcrRDtBQUM1RSxRQUFNeFQsSUFBSSxHQUFHLEtBQUtvRyxnQkFBTCxDQUFzQjBLLEVBQXRCLEVBQTBCckYsZ0JBQTFCLENBQWI7QUFDQSxXQUFPLElBQUk0RCxTQUFKLENBQWMsS0FBSzlILFNBQUwsQ0FBZXVKLEVBQWYsRUFBbUJwUSxNQUFNLElBQUlvUSxFQUFFLENBQUMyQyxVQUFoQyxFQUE0Q0QsbUJBQTVDLENBQWQsRUFBZ0Z4VCxJQUFoRixDQUFQO0FBQ0QsR0EvR2M7QUFnSGYwVCx3QkFoSGUsa0NBZ0hRalQsT0FoSFIsRUFnSGlCa1QsS0FoSGpCLEVBZ0h3QjtBQUNyQyxXQUFPQSxLQUFLLENBQUNDLE1BQU4sQ0FBYSxVQUFDQyxHQUFELEVBQU1DLElBQU4sRUFBZTtBQUNqQyxhQUFPRCxHQUFHLEdBQUdFLFFBQVEsQ0FBQ3BRLE1BQU0sQ0FBQ3FRLGdCQUFQLENBQXdCdlQsT0FBeEIsRUFBaUNxVCxJQUFqQyxLQUF3QyxDQUF6QyxDQUFyQjtBQUNELEtBRk0sRUFFSixDQUZJLENBQVA7QUFHRCxHQXBIYztBQXFIZjFOLGtCQXJIZSw0QkFxSEUwSyxFQXJIRixFQXFITXJGLGdCQXJITixFQXFId0I7QUFDckMsUUFBSXdGLEtBQUssR0FBRzhDLFFBQVEsQ0FBQ3BRLE1BQU0sQ0FBQ3FRLGdCQUFQLENBQXdCbEQsRUFBeEIsRUFBNEIsT0FBNUIsQ0FBRCxDQUFwQjtBQUFBLFFBQTREeEgsTUFBTSxHQUFHeUssUUFBUSxDQUFDcFEsTUFBTSxDQUFDcVEsZ0JBQVAsQ0FBd0JsRCxFQUF4QixFQUE0QixRQUE1QixDQUFELENBQTdFOztBQUNBLFFBQUksQ0FBQ3JGLGdCQUFMLEVBQXVCO0FBQ3JCd0YsV0FBSyxJQUFJLEtBQUt5QyxzQkFBTCxDQUE0QjVDLEVBQTVCLEVBQWdDLENBQUMsY0FBRCxFQUFpQixlQUFqQixFQUFrQyxtQkFBbEMsRUFBdUQsb0JBQXZELENBQWhDLENBQVQ7QUFDQXhILFlBQU0sSUFBSSxLQUFLb0ssc0JBQUwsQ0FBNEI1QyxFQUE1QixFQUFnQyxDQUFDLGFBQUQsRUFBZ0IsZ0JBQWhCLEVBQWtDLGtCQUFsQyxFQUFzRCxxQkFBdEQsQ0FBaEMsQ0FBVjtBQUNEOztBQUNELFdBQU8sSUFBSXhPLEtBQUosQ0FBVTJPLEtBQVYsRUFBaUIzSCxNQUFqQixDQUFQO0FBQ0QsR0E1SGM7QUE2SGYvQixXQTdIZSxxQkE2SEx1SixFQTdISyxFQTZIRHBRLE1BN0hDLEVBNkhPO0FBQ3BCLFFBQU11VCxNQUFNLEdBQUduRCxFQUFFLENBQUNvRCxxQkFBSCxFQUFmO0FBQUEsUUFBMkNDLFVBQVUsR0FBR3pULE1BQU0sQ0FBQ3dULHFCQUFQLEVBQXhEO0FBQ0EsV0FBTyxJQUFJNVIsS0FBSixDQUFVMlIsTUFBTSxDQUFDbEQsSUFBUCxHQUFjb0QsVUFBVSxDQUFDcEQsSUFBbkMsRUFBeUNrRCxNQUFNLENBQUNqRCxHQUFQLEdBQWFtRCxVQUFVLENBQUNuRCxHQUFqRSxDQUFQO0FBQ0QsR0FoSWM7QUFpSWZ2TiwwQkFqSWUsb0NBaUlVSixLQWpJVixFQWlJaUJlLE1BaklqQixFQWlJeUJ4QixNQWpJekIsRUFpSWlDO0FBQzlDQSxVQUFNLEdBQUdBLE1BQU0sSUFBSSxJQUFJTixLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsQ0FBbkI7QUFDQSxXQUFPTSxNQUFNLENBQUMyRyxHQUFQLENBQVcsSUFBSWpILEtBQUosQ0FBVThCLE1BQU0sR0FBR3hDLElBQUksQ0FBQ00sR0FBTCxDQUFTbUIsS0FBVCxDQUFuQixFQUFvQ2UsTUFBTSxHQUFHeEMsSUFBSSxDQUFDUSxHQUFMLENBQVNpQixLQUFULENBQTdDLENBQVgsQ0FBUDtBQUNELEdBcEljO0FBcUlmK1EsdUJBckllLGlDQXFJT0MsV0FySVAsRUFxSW9CdFUsS0FySXBCLEVBcUkyQnVVLE9BckkzQixFQXFJb0M7QUFDakQsUUFBTUMsTUFBTSxHQUFHRixXQUFXLENBQUNHLE1BQVosQ0FBbUIsVUFBU0MsTUFBVCxFQUFpQjtBQUNqRCxhQUFRQSxNQUFNLENBQUNsVSxDQUFQLEdBQVdSLEtBQUssQ0FBQ1EsQ0FBakIsS0FBdUIrVCxPQUFPLEdBQUdHLE1BQU0sQ0FBQ25VLENBQVAsR0FBV1AsS0FBSyxDQUFDTyxDQUFwQixHQUF3Qm1VLE1BQU0sQ0FBQ25VLENBQVAsR0FBV1AsS0FBSyxDQUFDTyxDQUF2RSxDQUFSO0FBQ0QsS0FGYyxDQUFmOztBQUlBLFNBQUssSUFBSTRGLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdxTyxNQUFNLENBQUNuUSxNQUEzQixFQUFtQzhCLENBQUMsRUFBcEMsRUFBd0M7QUFDdEMsVUFBSW5HLEtBQUssQ0FBQ1EsQ0FBTixHQUFVZ1UsTUFBTSxDQUFDck8sQ0FBRCxDQUFOLENBQVUzRixDQUF4QixFQUEyQjtBQUN6QmdVLGNBQU0sQ0FBQ3ZFLE1BQVAsQ0FBYzlKLENBQWQsRUFBaUIsQ0FBakIsRUFBb0JuRyxLQUFwQjtBQUNBLGVBQU93VSxNQUFQO0FBQ0Q7QUFDRjs7QUFDREEsVUFBTSxDQUFDL1AsSUFBUCxDQUFZekUsS0FBWjtBQUNBLFdBQU93VSxNQUFQO0FBQ0QsR0FsSmM7QUFtSmZqUixVQW5KZSxvQkFtSk40TixFQW5KTSxFQW1KRkMsRUFuSkUsRUFtSkU7QUFDZixRQUFNdUQsSUFBSSxHQUFHdkQsRUFBRSxDQUFDN0ssR0FBSCxDQUFPNEssRUFBUCxDQUFiO0FBQ0EsV0FBTyxLQUFLM04sY0FBTCxDQUFvQjNCLElBQUksQ0FBQ0MsS0FBTCxDQUFXNlMsSUFBSSxDQUFDblUsQ0FBaEIsRUFBbUJtVSxJQUFJLENBQUNwVSxDQUF4QixDQUFwQixDQUFQO0FBQ0QsR0F0SmM7QUF1SmZpRixVQXZKZSxvQkF1Sk5sQyxLQXZKTSxFQXVKQztBQUNkLFdBQVNBLEtBQUssR0FBRyxHQUFULEdBQWdCekIsSUFBSSxDQUFDRyxFQUFyQixHQUEwQixHQUFsQztBQUNELEdBekpjO0FBMEpmNFMsVUExSmUsb0JBMEpOdFIsS0ExSk0sRUEwSkM7QUFDZCxXQUFRQSxLQUFLLEdBQUcsR0FBUixHQUFjekIsSUFBSSxDQUFDRyxFQUFwQixHQUEwQixHQUFqQztBQUNELEdBNUpjO0FBNkpmeUIsWUE3SmUsc0JBNkpKNk0sR0E3SkksRUE2SkNDLEdBN0pELEVBNkpNeUIsR0E3Sk4sRUE2Slc7QUFDeEIsUUFBSTZDLElBQUosRUFBVUMsSUFBVjs7QUFDQSxRQUFJeEUsR0FBRyxHQUFHQyxHQUFOLElBQWF5QixHQUFHLEdBQUcxQixHQUFuQixJQUEwQjBCLEdBQUcsR0FBR3pCLEdBQXBDLEVBQXlDO0FBQ3ZDLGFBQU95QixHQUFQO0FBQ0QsS0FGRCxNQUVPLElBQUl6QixHQUFHLEdBQUdELEdBQU4sS0FBYzBCLEdBQUcsR0FBR3pCLEdBQU4sSUFBYXlCLEdBQUcsR0FBRzFCLEdBQWpDLENBQUosRUFBMkM7QUFDaEQsYUFBTzBCLEdBQVA7QUFDRCxLQUZNLE1BRUE7QUFDTDZDLFVBQUksR0FBRyxLQUFLRSxZQUFMLENBQWtCekUsR0FBbEIsRUFBdUIwQixHQUF2QixDQUFQO0FBQ0E4QyxVQUFJLEdBQUcsS0FBS0MsWUFBTCxDQUFrQnhFLEdBQWxCLEVBQXVCeUIsR0FBdkIsQ0FBUDs7QUFDQSxVQUFJNkMsSUFBSSxHQUFHQyxJQUFYLEVBQWlCO0FBQ2YsZUFBT3hFLEdBQVA7QUFDRCxPQUZELE1BRU87QUFDTCxlQUFPQyxHQUFQO0FBQ0Q7QUFDRjtBQUNGLEdBNUtjO0FBNktmeUUsaUJBN0tlLDJCQTZLQ2pELEdBN0tELEVBNktNek8sS0E3S04sRUE2S2E7QUFDMUIsUUFBSTZDLENBQUo7QUFBQSxRQUFPOEwsSUFBUDtBQUFBLFFBQWEwQyxJQUFJLEdBQUc5UyxJQUFJLENBQUNHLEVBQUwsR0FBVSxDQUE5QjtBQUFBLFFBQWlDaVQsS0FBakM7O0FBQ0EsU0FBSzlPLENBQUMsR0FBRyxDQUFULEVBQVlBLENBQUMsR0FBRzRMLEdBQUcsQ0FBQzFOLE1BQXBCLEVBQTJCOEIsQ0FBQyxFQUE1QixFQUFnQztBQUM5QjhMLFVBQUksR0FBR2hSLFFBQVEsQ0FBQzhULFlBQVQsQ0FBc0JoRCxHQUFHLENBQUM1TCxDQUFELENBQXpCLEVBQThCN0MsS0FBOUIsQ0FBUDs7QUFDQSxVQUFJcVIsSUFBSSxHQUFHMUMsSUFBWCxFQUFpQjtBQUNmMEMsWUFBSSxHQUFHMUMsSUFBUDtBQUNBZ0QsYUFBSyxHQUFHbEQsR0FBRyxDQUFDNUwsQ0FBRCxDQUFYO0FBQ0Q7QUFDRjs7QUFDRCxXQUFPOE8sS0FBUDtBQUNELEdBdkxjO0FBd0xmRixjQXhMZSx3QkF3TEZuVCxLQXhMRSxFQXdMS0csSUF4TEwsRUF3TFc7QUFDeEIsUUFBTW1ULFFBQVEsR0FBR3JULElBQUksQ0FBQ3lPLEdBQUwsQ0FBUzFPLEtBQVQsRUFBZ0JHLElBQWhCLENBQWpCO0FBQUEsUUFDRW9ULFFBQVEsR0FBSXRULElBQUksQ0FBQzBPLEdBQUwsQ0FBUzNPLEtBQVQsRUFBZ0JHLElBQWhCLENBRGQ7QUFFQSxXQUFPRixJQUFJLENBQUN5TyxHQUFMLENBQVM2RSxRQUFRLEdBQUdELFFBQXBCLEVBQThCQSxRQUFRLEdBQUdyVCxJQUFJLENBQUNHLEVBQUwsR0FBUSxDQUFuQixHQUF1Qm1ULFFBQXJELENBQVA7QUFDRCxHQTVMYztBQTZMZjNSLGdCQTdMZSwwQkE2TEF3TyxHQTdMQSxFQTZMSztBQUNsQixXQUFPQSxHQUFHLEdBQUcsQ0FBYixFQUFnQjtBQUNkQSxTQUFHLElBQUksSUFBSW5RLElBQUksQ0FBQ0csRUFBaEI7QUFDRDs7QUFDRCxXQUFPZ1EsR0FBRyxHQUFHLElBQUluUSxJQUFJLENBQUNHLEVBQXRCLEVBQTBCO0FBQ3hCZ1EsU0FBRyxJQUFJLElBQUluUSxJQUFJLENBQUNHLEVBQWhCO0FBQ0Q7O0FBQ0QsV0FBT2dRLEdBQVA7QUFDRDtBQXJNYyxDQUFqQjs7Ozs7Ozs7Ozs7OztBQzlIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFFQSxJQUFNb0QsWUFBWSxHQUFHO0FBQ25CQyxhQUFXLEVBQUUsQ0FETTtBQUVuQkMsV0FBUyxFQUFFLENBRlE7QUFHbkJDLFlBQVUsRUFBRTtBQUhPLENBQXJCOztBQU1BLFNBQVNDLGVBQVQsQ0FBeUJDLElBQXpCLEVBQStCO0FBQzdCLFVBQVFBLElBQVI7QUFDQSxTQUFLTCxZQUFZLENBQUNDLFdBQWxCO0FBQ0UsYUFBTyxVQUFTdFYsU0FBVCxFQUFvQjJWLFFBQXBCLEVBQThCO0FBQ25DLGVBQU8sVUFBU0MsYUFBVCxFQUF3QkMsYUFBeEIsRUFBdUM7QUFDNUMsY0FBTUMsU0FBUyxHQUFHLE9BQU85VixTQUFQLEtBQXFCLFVBQXJCLEdBQWtDQSxTQUFTLEVBQTNDLEdBQWdEQSxTQUFsRTtBQUFBLGNBQ0UrVixzQkFBc0IsR0FBR0gsYUFBYSxDQUFDOUIsTUFBZCxDQUFxQixVQUFTa0MsT0FBVCxFQUFrQkMsS0FBbEIsRUFBeUJ6UixLQUF6QixFQUFnQztBQUM1RSxnQkFBSXFSLGFBQWEsQ0FBQ3ROLE9BQWQsQ0FBc0IvRCxLQUF0QixNQUFpQyxDQUFDLENBQXRDLEVBQXlDO0FBQ3ZDd1IscUJBQU8sQ0FBQ3RSLElBQVIsQ0FBYUYsS0FBYjtBQUNEOztBQUNELG1CQUFPd1IsT0FBUDtBQUNELFdBTHdCLEVBS3RCLEVBTHNCLENBRDNCO0FBUUFILHVCQUFhLENBQUMxTixPQUFkLENBQXNCLFVBQVMzRCxLQUFULEVBQWdCO0FBQ3BDLGdCQUFJOEwsSUFBSSxHQUFHc0YsYUFBYSxDQUFDcFIsS0FBRCxDQUF4QjtBQUFBLGdCQUFpQzBSLFNBQVMsR0FBRyxLQUE3QztBQUNBSCxrQ0FBc0IsQ0FBQzVOLE9BQXZCLENBQStCLFVBQVNnTyxhQUFULEVBQXdCO0FBQ3JELGtCQUFNQyxVQUFVLEdBQUdSLGFBQWEsQ0FBQ08sYUFBRCxDQUFoQztBQUNBN0Ysa0JBQUksR0FBRzhGLFVBQVUsQ0FBQ0MsV0FBWCxDQUF1Qi9GLElBQXZCLENBQVA7QUFDRCxhQUhEO0FBSUE0RixxQkFBUyxHQUFHSCxzQkFBc0IsQ0FBQzVLLElBQXZCLENBQTRCLFVBQVNnTCxhQUFULEVBQXdCO0FBQzlELGtCQUFNQyxVQUFVLEdBQUdSLGFBQWEsQ0FBQ08sYUFBRCxDQUFoQztBQUNBLHFCQUFRLENBQUMsQ0FBQ0MsVUFBVSxDQUFDdkYsR0FBWCxDQUFlUCxJQUFmLENBQVY7QUFDRCxhQUhXLEtBR05BLElBQUksQ0FBQ08sR0FBTCxDQUFTaUYsU0FBVCxFQUFvQlEsU0FBcEIsT0FBb0NoRyxJQUFJLENBQUNnRyxTQUFMLEVBSDFDOztBQUlBLGdCQUFJSixTQUFKLEVBQWU7QUFDYjVGLGtCQUFJLENBQUM0RixTQUFMLEdBQWlCLElBQWpCO0FBQ0QsYUFGRCxNQUVPO0FBQ0xILG9DQUFzQixDQUFDclIsSUFBdkIsQ0FBNEJGLEtBQTVCO0FBQ0Q7QUFDRixXQWZEO0FBZ0JBLGlCQUFPb1IsYUFBUDtBQUNELFNBMUJEO0FBMkJELE9BNUJEOztBQTZCRixTQUFLUCxZQUFZLENBQUNFLFNBQWxCO0FBQ0UsYUFBTyxVQUFTdlYsU0FBVCxFQUFvQjhFLE9BQXBCLEVBQTZCO0FBQ2xDQSxlQUFPLEdBQUdFLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjO0FBQ3RCc1Isd0JBQWMsRUFBRSxJQUFJL1QsK0NBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixDQURNO0FBRXRCZ1UsNEJBQWtCLEVBQUUsSUFBSWhVLCtDQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsQ0FGRTtBQUd0QmlVLCtCQUFxQixFQUFFLENBSEQ7QUFJdEJQLG1CQUFTLEVBQUU7QUFKVyxTQUFkLEVBS1BwUixPQUxPLENBQVY7QUFPQSxlQUFPLFVBQVM4USxhQUFULEVBQXdCYyxjQUF4QixFQUF3QztBQUM3QyxjQUFNWixTQUFTLEdBQUcsT0FBTzlWLFNBQVAsS0FBcUIsVUFBckIsR0FBa0NBLFNBQVMsRUFBM0MsR0FBZ0RBLFNBQWxFO0FBQ0EsY0FBTUssTUFBTSxHQUFHeVYsU0FBUyxDQUFDYSxLQUFWLEVBQWY7QUFDQSxjQUFJQyxjQUFjLEdBQUcsQ0FBQ2QsU0FBUyxDQUFDdlYsUUFBWCxDQUFyQjtBQUNBcVYsdUJBQWEsQ0FBQ3pOLE9BQWQsQ0FBc0IsVUFBU21JLElBQVQsRUFBZTtBQUNuQyxnQkFBSS9QLFFBQUo7QUFBQSxnQkFBY3NXLE9BQU8sR0FBRyxLQUF4Qjs7QUFDQSxpQkFBSyxJQUFJelEsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR3dRLGNBQWMsQ0FBQ3RTLE1BQW5DLEVBQTJDOEIsQ0FBQyxFQUE1QyxFQUFnRDtBQUM5QzdGLHNCQUFRLEdBQUksSUFBSWlDLCtDQUFKLENBQVVvVSxjQUFjLENBQUN4USxDQUFELENBQWQsQ0FBa0I1RixDQUE1QixFQUErQjRGLENBQUMsR0FBRyxDQUFKLEdBQVN3USxjQUFjLENBQUN4USxDQUFDLEdBQUcsQ0FBTCxDQUFkLENBQXNCM0YsQ0FBdEIsR0FBMEJxRSxPQUFPLENBQUMyUixxQkFBM0MsR0FBb0VYLFNBQVMsQ0FBQ3ZWLFFBQVYsQ0FBbUJFLENBQXRILENBQUQsQ0FBMkhnSixHQUEzSCxDQUErSDNFLE9BQU8sQ0FBQ3lSLGNBQXZJLENBQVg7QUFDQU0scUJBQU8sR0FBSXRXLFFBQVEsQ0FBQ0MsQ0FBVCxHQUFhOFAsSUFBSSxDQUFDcFEsSUFBTCxDQUFVTSxDQUF2QixHQUEyQkgsTUFBTSxDQUFDRyxDQUE3Qzs7QUFDQSxrQkFBSXFXLE9BQUosRUFBYTtBQUNYO0FBQ0Q7QUFDRjs7QUFDRCxnQkFBSSxDQUFDQSxPQUFMLEVBQWM7QUFDWnRXLHNCQUFRLEdBQUksSUFBSWlDLCtDQUFKLENBQVVzVCxTQUFTLENBQUN2VixRQUFWLENBQW1CQyxDQUE3QixFQUFnQ29XLGNBQWMsQ0FBQ0EsY0FBYyxDQUFDdFMsTUFBZixHQUF3QixDQUF6QixDQUFkLENBQTBDN0QsQ0FBMUMsR0FBOENxRSxPQUFPLENBQUMyUixxQkFBdEYsQ0FBRCxDQUErR2hOLEdBQS9HLENBQW1IM0UsT0FBTyxDQUFDeVIsY0FBM0gsQ0FBWDtBQUNEOztBQUNEakcsZ0JBQUksQ0FBQy9QLFFBQUwsR0FBZ0JBLFFBQWhCOztBQUNBLGdCQUFJdUUsT0FBTyxDQUFDb1IsU0FBUixJQUFxQjVGLElBQUksQ0FBQ2hRLEtBQUwsR0FBYUcsQ0FBYixHQUFpQnFWLFNBQVMsQ0FBQ3hWLEtBQVYsR0FBa0JHLENBQTVELEVBQStEO0FBQzdENlAsa0JBQUksQ0FBQzRGLFNBQUwsR0FBaUIsSUFBakI7QUFDRDs7QUFDRFUsMEJBQWMsR0FBRzFWLGtEQUFRLENBQUNvVCxxQkFBVCxDQUErQnNDLGNBQS9CLEVBQStDdEcsSUFBSSxDQUFDaFEsS0FBTCxHQUFhbUosR0FBYixDQUFpQjNFLE9BQU8sQ0FBQzBSLGtCQUF6QixDQUEvQyxDQUFqQjtBQUNELFdBakJEO0FBa0JBLGlCQUFPWixhQUFQO0FBQ0QsU0F2QkQ7QUF3QkQsT0FoQ0Q7O0FBaUNGLFNBQUtQLFlBQVksQ0FBQ0csVUFBbEI7QUFDRSxhQUFPLFVBQVN4VixTQUFULEVBQW9COEUsT0FBcEIsRUFBNkI7QUFDbENBLGVBQU8sR0FBR0UsTUFBTSxDQUFDOFIsTUFBUCxDQUFjO0FBQ3RCQyx5QkFBZSxFQUFFLElBQUl2VSwrQ0FBSixDQUFVLENBQVYsRUFBYSxDQUFiLENBREs7QUFFdEJ3VSwyQkFBaUIsRUFBRSxJQUFJeFUsK0NBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixDQUZHO0FBR3RCMFQsbUJBQVMsRUFBRTtBQUhXLFNBQWQsRUFJUHBSLE9BSk8sQ0FBVjtBQU1BLFlBQU1tUyxrQkFBa0IsR0FBRyxJQUFJelUsK0NBQUosQ0FBVSxDQUFDc0MsT0FBTyxDQUFDaVMsZUFBUixDQUF3QnZXLENBQW5DLEVBQXNDc0UsT0FBTyxDQUFDaVMsZUFBUixDQUF3QnRXLENBQTlELENBQTNCO0FBQ0EsWUFBTXlXLG9CQUFvQixHQUFHLElBQUkxVSwrQ0FBSixDQUFVLENBQUNzQyxPQUFPLENBQUNrUyxpQkFBUixDQUEwQnhXLENBQXJDLEVBQXdDc0UsT0FBTyxDQUFDa1MsaUJBQVIsQ0FBMEJ2VyxDQUFsRSxDQUE3QjtBQUNBLGVBQU8sVUFBU21WLGFBQVQsRUFBd0JjLGNBQXhCLEVBQXdDO0FBQzdDLGNBQU1aLFNBQVMsR0FBRyxPQUFPOVYsU0FBUCxLQUFxQixVQUFyQixHQUFrQ0EsU0FBUyxFQUEzQyxHQUFnREEsU0FBbEU7QUFDQSxjQUFJNFcsY0FBYyxHQUFHLENBQUNkLFNBQVMsQ0FBQ3FCLGdCQUFWLEVBQUQsQ0FBckI7QUFDQXZCLHVCQUFhLENBQUN6TixPQUFkLENBQXNCLFVBQVNtSSxJQUFULEVBQWU4RyxNQUFmLEVBQXVCO0FBQzNDLGdCQUFJN1csUUFBSjtBQUFBLGdCQUFjc1csT0FBTyxHQUFHLEtBQXhCOztBQUNBLGlCQUFLLElBQUl6USxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHd1EsY0FBYyxDQUFDdFMsTUFBbkMsRUFBMkM4QixDQUFDLEVBQTVDLEVBQWdEO0FBQzlDN0Ysc0JBQVEsR0FBSSxJQUFJaUMsK0NBQUosQ0FBVW9VLGNBQWMsQ0FBQ3hRLENBQUQsQ0FBZCxDQUFrQjVGLENBQWxCLEdBQXNCOFAsSUFBSSxDQUFDcFEsSUFBTCxDQUFVTSxDQUExQyxFQUE2QzRGLENBQUMsR0FBRyxDQUFKLEdBQVF3USxjQUFjLENBQUN4USxDQUFDLEdBQUcsQ0FBTCxDQUFkLENBQXNCM0YsQ0FBOUIsR0FBa0NxVixTQUFTLENBQUN2VixRQUFWLENBQW1CRSxDQUFsRyxDQUFELENBQXVHZ0osR0FBdkcsQ0FBMkd3TixrQkFBM0csQ0FBWDtBQUNBSixxQkFBTyxHQUFJdFcsUUFBUSxDQUFDQyxDQUFULEdBQWE4UCxJQUFJLENBQUMvUCxRQUFMLENBQWNDLENBQXRDOztBQUNBLGtCQUFJcVcsT0FBSixFQUFhO0FBQ1g7QUFDRDtBQUNGOztBQUNELGdCQUFJLENBQUNBLE9BQUwsRUFBYztBQUNadFcsc0JBQVEsR0FBRyxJQUFJaUMsK0NBQUosQ0FBVXNULFNBQVMsQ0FBQ2EsS0FBVixHQUFrQm5XLENBQTVCLEVBQStCb1csY0FBYyxDQUFDQSxjQUFjLENBQUN0UyxNQUFmLEdBQXdCLENBQXpCLENBQWQsQ0FBMEM3RCxDQUF6RSxDQUFYO0FBQ0Q7O0FBQ0Q2UCxnQkFBSSxDQUFDL1AsUUFBTCxHQUFnQkEsUUFBaEI7O0FBQ0EsZ0JBQUl1RSxPQUFPLENBQUNvUixTQUFSLElBQXFCNUYsSUFBSSxDQUFDK0csa0JBQUwsR0FBMEI1VyxDQUExQixHQUE4QnFWLFNBQVMsQ0FBQ3dCLEtBQVYsR0FBa0I3VyxDQUF6RSxFQUE0RTtBQUMxRTZQLGtCQUFJLENBQUM0RixTQUFMLEdBQWlCLElBQWpCO0FBQ0Q7O0FBQ0RVLDBCQUFjLEdBQUcxVixrREFBUSxDQUFDb1QscUJBQVQsQ0FBK0JzQyxjQUEvQixFQUErQ3RHLElBQUksQ0FBQ2dILEtBQUwsR0FBYTdOLEdBQWIsQ0FBaUJ5TixvQkFBakIsQ0FBL0MsRUFBdUYsSUFBdkYsQ0FBakI7QUFDRCxXQWpCRDtBQWtCQSxpQkFBT3RCLGFBQVA7QUFDRCxTQXRCRDtBQXVCRCxPQWhDRDtBQWxFRjtBQW9HRDs7QUFFRCxTQUFTMkIsY0FBVCxDQUF3QjdCLElBQXhCLEVBQThCO0FBQzVCLFVBQVFBLElBQVI7QUFDQSxTQUFLTCxZQUFZLENBQUNDLFdBQWxCO0FBQ0UsYUFBTyxZQUFXO0FBQ2hCLGVBQU8sVUFBU2tDLFdBQVQsRUFBc0JDLE9BQXRCLEVBQStCQyxXQUEvQixFQUE0QztBQUNqRCxjQUFNQyxRQUFRLEdBQUdILFdBQVcsQ0FBQ0ksTUFBWixDQUFtQkgsT0FBbkIsQ0FBakI7QUFDQUEsaUJBQU8sQ0FBQ3RQLE9BQVIsQ0FBZ0IsVUFBUzBQLEdBQVQsRUFBYztBQUM1QkgsdUJBQVcsQ0FBQ2hULElBQVosQ0FBaUJpVCxRQUFRLENBQUNwUCxPQUFULENBQWlCc1AsR0FBakIsQ0FBakI7QUFDRCxXQUZEO0FBR0EsaUJBQU9GLFFBQVA7QUFDRCxTQU5EO0FBT0QsT0FSRDs7QUFTRixTQUFLdEMsWUFBWSxDQUFDRSxTQUFsQjtBQUNBLFNBQUtGLFlBQVksQ0FBQ0csVUFBbEI7QUFDRSxhQUFPLFVBQVN6UyxNQUFULEVBQWlCbUgsV0FBakIsRUFBOEJwRixPQUE5QixFQUF1QztBQUM1Q0EsZUFBTyxHQUFHRSxNQUFNLENBQUNDLE1BQVAsQ0FBYztBQUN0QjhJLHFCQUFXLEVBQUUscUJBQVM4SixHQUFULEVBQWM7QUFDekIsbUJBQU9BLEdBQUcsQ0FBQ3RYLFFBQVg7QUFDRDtBQUhxQixTQUFkLEVBSVB1RSxPQUpPLENBQVY7QUFNQSxlQUFPLFVBQVMwUyxXQUFULEVBQXNCQyxPQUF0QixFQUErQkMsV0FBL0IsRUFBNEM7QUFDakQsY0FBTUksT0FBTyxHQUFHTixXQUFXLENBQUNJLE1BQVosRUFBaEI7QUFDQSxjQUFNRyxlQUFlLEdBQUdQLFdBQVcsQ0FBQ2pTLEdBQVosQ0FBZ0JULE9BQU8sQ0FBQ2lKLFdBQXhCLENBQXhCO0FBQ0EwSixpQkFBTyxDQUFDdFAsT0FBUixDQUFnQixVQUFTNlAsTUFBVCxFQUFpQjtBQUMvQixnQkFBSXhULEtBQUssR0FBR3RELGtEQUFRLENBQUM2USxtQkFBVCxDQUE2QmdHLGVBQTdCLEVBQThDalQsT0FBTyxDQUFDaUosV0FBUixDQUFvQmlLLE1BQXBCLENBQTlDLEVBQTJFalYsTUFBM0UsRUFBbUZtSCxXQUFuRixDQUFaOztBQUNBLGdCQUFJMUYsS0FBSyxLQUFLLENBQUMsQ0FBZixFQUFrQjtBQUNoQkEsbUJBQUssR0FBR3NULE9BQU8sQ0FBQ3hULE1BQWhCO0FBQ0QsYUFGRCxNQUVPO0FBQ0xFLG1CQUFLLEdBQUdzVCxPQUFPLENBQUN2UCxPQUFSLENBQWdCaVAsV0FBVyxDQUFDaFQsS0FBRCxDQUEzQixDQUFSO0FBQ0Q7O0FBQ0RzVCxtQkFBTyxDQUFDNUgsTUFBUixDQUFlMUwsS0FBZixFQUFzQixDQUF0QixFQUF5QndULE1BQXpCO0FBQ0QsV0FSRDtBQVNBUCxpQkFBTyxDQUFDdFAsT0FBUixDQUFnQixVQUFTNlAsTUFBVCxFQUFpQjtBQUMvQk4sdUJBQVcsQ0FBQ2hULElBQVosQ0FBaUJvVCxPQUFPLENBQUN2UCxPQUFSLENBQWdCeVAsTUFBaEIsQ0FBakI7QUFDRCxXQUZEO0FBR0EsaUJBQU9GLE9BQVA7QUFDRCxTQWhCRDtBQWlCRCxPQXhCRDtBQWJGO0FBdUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4SkQ7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNdk4sTUFBTSxHQUFHO0FBQUVDLE9BQUssRUFBTEEsOENBQUtBO0FBQVAsQ0FBZixDLENBQXlCOztBQUV6QixJQUFNeU4sTUFBTSxHQUFHLEVBQWY7O0lBRU1DLEs7OztBQUNKLGlCQUFZL1IsVUFBWixFQUF3QnNGLE9BQXhCLEVBQTZDO0FBQUEsUUFBWjNHLE9BQVksdUVBQUosRUFBSTs7QUFBQTs7QUFDM0NtVCxVQUFNLENBQUM5UCxPQUFQLENBQWUsVUFBQ2dRLEtBQUQsRUFBVztBQUN4QixVQUFJaFMsVUFBSixFQUFnQjtBQUNkQSxrQkFBVSxDQUFDZ0MsT0FBWCxDQUFtQixVQUFDTixTQUFELEVBQWU7QUFDaEN1USw0RUFBVyxDQUFDRCxLQUFLLENBQUNoUyxVQUFQLEVBQW1CMEIsU0FBbkIsQ0FBWDtBQUNELFNBRkQ7QUFHRDs7QUFFRCxVQUFJNEQsT0FBSixFQUFhO0FBQ1hBLGVBQU8sQ0FBQ3RELE9BQVIsQ0FBZ0IsVUFBQ3lHLE1BQUQsRUFBWTtBQUMxQndKLDRFQUFXLENBQUNELEtBQUssQ0FBQzFNLE9BQVAsRUFBZ0JtRCxNQUFoQixDQUFYO0FBQ0QsU0FGRDtBQUdEO0FBQ0YsS0FaRDtBQWNBLFNBQUt6SSxVQUFMLEdBQWtCQSxVQUFVLElBQUksRUFBaEM7QUFDQSxTQUFLc0YsT0FBTCxHQUFlQSxPQUFPLElBQUksRUFBMUI7QUFDQXdNLFVBQU0sQ0FBQ3ZULElBQVAsQ0FBWSxJQUFaO0FBQ0EsU0FBS0ksT0FBTCxHQUFlO0FBQ2J1VCxhQUFPLEVBQUd2VCxPQUFPLENBQUN1VCxPQUFULElBQXFCO0FBRGpCLEtBQWY7QUFJQSxTQUFLQyxRQUFMLEdBQWdCLElBQUkvTixNQUFNLENBQUNDLEtBQVgsQ0FBaUIsSUFBakIsQ0FBaEI7O0FBQ0EsUUFBSTFGLE9BQU8sQ0FBQ3dULFFBQVosRUFBc0I7QUFDcEIsV0FBS0EsUUFBTCxDQUFjN08sR0FBZCxDQUFrQjNFLE9BQU8sQ0FBQ3dULFFBQTFCO0FBQ0Q7O0FBQ0QsU0FBS3hTLElBQUw7QUFDRDs7OzsyQkFFTTtBQUFBOztBQUNMLFdBQUtLLFVBQUwsQ0FBZ0JnQyxPQUFoQixDQUF3QixVQUFDTixTQUFELEVBQWU7QUFDckNBLGlCQUFTLENBQUNpRSxLQUFWLENBQWdCckMsR0FBaEIsQ0FBb0IsWUFBTTtBQUN4QixpQkFBTyxLQUFJLENBQUNxQyxLQUFMLENBQVdqRSxTQUFYLENBQVA7QUFDRCxTQUZEO0FBR0QsT0FKRDtBQUtEOzs7aUNBRVlBLFMsRUFBVztBQUFBOztBQUN0QixXQUFLMUIsVUFBTCxDQUFnQnpCLElBQWhCLENBQXFCbUQsU0FBckI7QUFDQUEsZUFBUyxDQUFDaUUsS0FBVixDQUFnQmtFLE9BQWhCLENBQXdCLFlBQU07QUFDNUIsZUFBTyxNQUFJLENBQUNsRSxLQUFMLENBQVdqRSxTQUFYLENBQVA7QUFDRCxPQUZEO0FBR0Q7Ozs4QkFFUytHLE0sRUFBUTtBQUNoQixXQUFLbkQsT0FBTCxDQUFhL0csSUFBYixDQUFrQmtLLE1BQWxCO0FBQ0Q7OzswQkFFSy9HLFMsRUFBVztBQUNmLFVBQU0wUSxXQUFXLEdBQUcsS0FBSzlNLE9BQUwsQ0FBYWlKLE1BQWIsQ0FBb0IsVUFBQzlGLE1BQUQsRUFBWTtBQUNsRCxlQUFPQSxNQUFNLENBQUN6SSxVQUFQLENBQWtCb0MsT0FBbEIsQ0FBMEJWLFNBQTFCLE1BQXlDLENBQUMsQ0FBakQ7QUFDRCxPQUZtQixFQUVqQjZNLE1BRmlCLENBRVYsVUFBQzlGLE1BQUQsRUFBWTtBQUNwQixlQUFPQSxNQUFNLENBQUM0SixjQUFQLENBQXNCM1EsU0FBdEIsQ0FBUDtBQUNELE9BSm1CLEVBSWpCNFEsSUFKaUIsQ0FJWixVQUFDQyxDQUFELEVBQUlDLENBQUosRUFBVTtBQUNoQixlQUFPRCxDQUFDLENBQUNFLFlBQUYsR0FBaUJ0QyxTQUFqQixLQUErQnFDLENBQUMsQ0FBQ0MsWUFBRixHQUFpQnRDLFNBQWpCLEVBQXRDO0FBQ0QsT0FObUIsQ0FBcEI7O0FBUUEsVUFBSWlDLFdBQVcsQ0FBQ2pVLE1BQWhCLEVBQXdCO0FBQ3RCaVUsbUJBQVcsQ0FBQyxDQUFELENBQVgsQ0FBZXpNLEtBQWYsQ0FBcUJqRSxTQUFyQjtBQUNELE9BRkQsTUFFTyxJQUFJQSxTQUFTLENBQUM0RCxPQUFWLENBQWtCbkgsTUFBdEIsRUFBOEI7QUFDbkN1RCxpQkFBUyxDQUFDd0MsSUFBVixDQUFleEMsU0FBUyxDQUFDeUUsWUFBekIsRUFBdUMsS0FBS3hILE9BQUwsQ0FBYXVULE9BQXBELEVBQTZELElBQTdELEVBQW1FLElBQW5FO0FBQ0Q7O0FBQ0QsV0FBS0MsUUFBTCxDQUFjbk0sSUFBZDtBQUNBLGFBQU8sSUFBUDtBQUNEOzs7NEJBRU87QUFDTixXQUFLVixPQUFMLENBQWF0RCxPQUFiLENBQXFCLFVBQUN5RyxNQUFEO0FBQUEsZUFBWUEsTUFBTSxDQUFDWSxLQUFQLEVBQVo7QUFBQSxPQUFyQjtBQUNEOzs7OEJBRVM7QUFDUixXQUFLckosVUFBTCxDQUFnQmdDLE9BQWhCLENBQXdCLFVBQUNOLFNBQUQ7QUFBQSxlQUFlQSxTQUFTLENBQUM1RyxPQUFWLEVBQWY7QUFBQSxPQUF4QjtBQUNBLFdBQUt3SyxPQUFMLENBQWF0RCxPQUFiLENBQXFCLFVBQUN5RyxNQUFEO0FBQUEsZUFBWUEsTUFBTSxDQUFDM04sT0FBUCxFQUFaO0FBQUEsT0FBckI7QUFDRDs7O3dCQUVlO0FBQUE7O0FBQ2QsYUFBTyxLQUFLd0ssT0FBTCxDQUFhbEcsR0FBYixDQUFpQixVQUFDcUosTUFBRCxFQUFZO0FBQ2xDLGVBQU9BLE1BQU0sQ0FBQ2lLLGVBQVAsQ0FBdUJ0VCxHQUF2QixDQUEyQixVQUFDc0MsU0FBRDtBQUFBLGlCQUFlLE1BQUksQ0FBQzFCLFVBQUwsQ0FBZ0JvQyxPQUFoQixDQUF3QlYsU0FBeEIsQ0FBZjtBQUFBLFNBQTNCLENBQVA7QUFDRCxPQUZNLENBQVA7QUFHRCxLO3NCQUVhaVIsUyxFQUFXO0FBQUE7O0FBQ3ZCLFVBQU01TixPQUFPLEdBQUcsb0JBQWhCOztBQUNBLFVBQUk0TixTQUFTLENBQUN4VSxNQUFWLEtBQXFCLEtBQUttSCxPQUFMLENBQWFuSCxNQUF0QyxFQUE4QztBQUM1QyxhQUFLbUgsT0FBTCxDQUFhdEQsT0FBYixDQUFxQixVQUFDeUcsTUFBRDtBQUFBLGlCQUFZQSxNQUFNLENBQUNZLEtBQVAsRUFBWjtBQUFBLFNBQXJCO0FBRUFzSixpQkFBUyxDQUFDM1EsT0FBVixDQUFrQixVQUFDNFEsYUFBRCxFQUFnQjNTLENBQWhCLEVBQXNCO0FBQ3RDMlMsdUJBQWEsQ0FBQzVRLE9BQWQsQ0FBc0IsVUFBQzNELEtBQUQsRUFBVztBQUMvQixrQkFBSSxDQUFDaUgsT0FBTCxDQUFhckYsQ0FBYixFQUFnQnFELEdBQWhCLENBQW9CLE1BQUksQ0FBQ3RELFVBQUwsQ0FBZ0IzQixLQUFoQixDQUFwQjtBQUNELFdBRkQ7QUFHRCxTQUpEO0FBS0QsT0FSRCxNQVFPO0FBQ0wsY0FBTTBHLE9BQU47QUFDRDtBQUNGOzs7Ozs7QUFHSCxJQUFNSSxZQUFZLEdBQUcsSUFBSTRNLEtBQUosRUFBckI7O0FBRUEsU0FBU0MsS0FBVCxDQUFlYSxFQUFmLEVBQW1CO0FBQ2pCLE1BQU1DLFlBQVksR0FBRyxJQUFJZixLQUFKLEVBQXJCOztBQUNBLE1BQU1nQixtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLENBQVNyUixTQUFULEVBQW9CO0FBQzlDb1IsZ0JBQVksQ0FBQzFOLFlBQWIsQ0FBMEIxRCxTQUExQjtBQUNBLFdBQU8sSUFBUDtBQUNELEdBSEQ7O0FBSUEsTUFBTXNSLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBU3ZLLE1BQVQsRUFBaUI7QUFDeENxSyxnQkFBWSxDQUFDRyxTQUFiLENBQXVCeEssTUFBdkI7QUFDQSxXQUFPLElBQVA7QUFDRCxHQUhEOztBQUtBbEksc0RBQVMsQ0FBQ3dGLFFBQVYsQ0FBbUJ6QyxHQUFuQixDQUF1QnlQLG1CQUF2QjtBQUNBRyxnREFBTSxDQUFDbk4sUUFBUCxDQUFnQnpDLEdBQWhCLENBQW9CMFAsZ0JBQXBCO0FBQ0FILElBQUUsQ0FBQ3JRLElBQUg7QUFDQWpDLHNEQUFTLENBQUN3RixRQUFWLENBQW1CK0QsTUFBbkIsQ0FBMEJpSixtQkFBMUI7QUFDQUcsZ0RBQU0sQ0FBQ25OLFFBQVAsQ0FBZ0IrRCxNQUFoQixDQUF1QmtKLGdCQUF2QjtBQUNBLFNBQU9GLFlBQVA7QUFDRDs7QUFFRCxTQUFTSyxZQUFULENBQXNCQyxhQUF0QixFQUFxQ0MsaUJBQXJDLEVBQXdEQyxjQUF4RCxFQUFvRjtBQUFBLE1BQVozVSxPQUFZLHVFQUFKLEVBQUk7QUFDbEYsTUFBTTRVLGdCQUFnQixHQUFHNVUsT0FBTyxDQUFDK0MsU0FBUixJQUFxQixFQUE5QztBQUNBLE1BQU04UixhQUFhLEdBQUc3VSxPQUFPLENBQUM4SixNQUFSLElBQWtCLEVBQXhDO0FBQ0EsTUFBTWdMLFlBQVksR0FBRzlVLE9BQU8sQ0FBQ3FULEtBQVIsSUFBaUIsRUFBdEM7QUFDQXVCLGtCQUFnQixDQUFDOVksTUFBakIsR0FBMEI4WSxnQkFBZ0IsQ0FBQzlZLE1BQWpCLElBQTJCMlksYUFBckQ7QUFDQUksZUFBYSxDQUFDL1ksTUFBZCxHQUF1QitZLGFBQWEsQ0FBQy9ZLE1BQWQsSUFBd0IyWSxhQUEvQztBQUNBQyxtQkFBaUIsR0FBR2pRLEtBQUssQ0FBQ21HLFNBQU4sQ0FBZ0I1RixLQUFoQixDQUFzQm5CLElBQXRCLENBQTJCNlEsaUJBQTNCLENBQXBCO0FBQ0FDLGdCQUFjLEdBQUdsUSxLQUFLLENBQUNtRyxTQUFOLENBQWdCNUYsS0FBaEIsQ0FBc0JuQixJQUF0QixDQUEyQjhRLGNBQTNCLENBQWpCO0FBRUEsTUFBTXRULFVBQVUsR0FBR3FULGlCQUFpQixDQUFDalUsR0FBbEIsQ0FBc0IsVUFBQzVFLE9BQUQsRUFBYTtBQUNwRCxXQUFPLElBQUkrRixvREFBSixDQUFjL0YsT0FBZCxFQUF1QitZLGdCQUF2QixDQUFQO0FBQ0QsR0FGa0IsQ0FBbkI7QUFJQSxNQUFNak8sT0FBTyxHQUFHZ08sY0FBYyxDQUFDbFUsR0FBZixDQUFtQixVQUFDNUUsT0FBRCxFQUFhO0FBQzlDLFdBQU8sSUFBSTBZLDhDQUFKLENBQVcxWSxPQUFYLEVBQW9Cd0YsVUFBcEIsRUFBZ0N3VCxhQUFoQyxDQUFQO0FBQ0QsR0FGZSxDQUFoQjtBQUdBLFNBQU8sSUFBSXpCLEtBQUosQ0FBVS9SLFVBQVYsRUFBc0JzRixPQUF0QixFQUErQm1PLFlBQS9CLENBQVA7QUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqSkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNclAsTUFBTSxHQUFHO0FBQUU4SyxjQUFZLEVBQVpBLHlEQUFGO0FBQWlCSSxpQkFBZSxFQUFmQSw0REFBakI7QUFBa0M4QixnQkFBYyxFQUFkQSwyREFBbEM7QUFBa0RVLFFBQU0sRUFBTkEsNkNBQWxEO0FBQTBEek4sT0FBSyxFQUFMQSw4Q0FBS0E7QUFBL0QsQ0FBZixDLENBQWdGOztBQUVoRixJQUFNYSxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQVN1RCxNQUFULEVBQWlCO0FBQ3pDdEQscURBQVksQ0FBQzhOLFNBQWIsQ0FBdUJ4SyxNQUF2QjtBQUNELENBRkQ7O0lBSU15SyxNOzs7QUFDSixrQkFBWTFZLE9BQVosRUFBcUJ3RixVQUFyQixFQUErQztBQUFBLFFBQWRyQixPQUFjLHVFQUFKLEVBQUk7O0FBQUE7O0FBQzdDLFFBQU04SixNQUFNLEdBQUcsSUFBZjtBQUNBLFFBQU1oTyxNQUFNLEdBQUdrRSxPQUFPLENBQUNsRSxNQUFSLElBQWtCNEssdUVBQWdCLENBQUM3SyxPQUFELENBQWpEO0FBRUEsU0FBS21FLE9BQUwsR0FBZUUsTUFBTSxDQUFDQyxNQUFQLENBQWM7QUFDM0JvVCxhQUFPLEVBQUUsR0FEa0I7QUFFM0J3QixpQkFBVyxFQUFFLEdBRmM7QUFHM0JqWixZQUFNLEVBQUVBLE1BSG1CO0FBSTNCa1osYUFBTyxFQUFFdlAsTUFBTSxDQUFDZ04sY0FBUCxDQUFzQmhOLE1BQU0sQ0FBQzhLLFlBQVAsQ0FBb0JFLFNBQTFDLEVBQXFELEVBQXJELEVBQXlEclUsa0RBQVEsQ0FBQzJRLCtCQUFULENBQXlDO0FBQUVyUixTQUFDLEVBQUUsQ0FBTDtBQUFRQyxTQUFDLEVBQUU7QUFBWCxPQUF6QyxDQUF6RCxDQUprQjtBQUszQnNaLGlCQUFXLEVBQUV4UCxNQUFNLENBQUNrTCxlQUFQLENBQXVCbEwsTUFBTSxDQUFDOEssWUFBUCxDQUFvQkUsU0FBM0MsRUFBc0QsS0FBS3FELFlBQUwsQ0FBa0JuTSxJQUFsQixDQUF1QixJQUF2QixDQUF0RCxFQUFvRjtBQUFFeUosaUJBQVMsRUFBRTtBQUFiLE9BQXBGO0FBTGMsS0FBZCxFQU1acFIsT0FOWSxDQUFmO0FBUUEsU0FBS25FLE9BQUwsR0FBZUEsT0FBZjtBQUNBd0YsY0FBVSxDQUFDZ0MsT0FBWCxDQUFtQixVQUFDTixTQUFEO0FBQUEsYUFBZUEsU0FBUyxDQUFDNEQsT0FBVixDQUFrQi9HLElBQWxCLENBQXVCa0ssTUFBdkIsQ0FBZjtBQUFBLEtBQW5CO0FBQ0EsU0FBS3pJLFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0EsU0FBSzZULEtBQUwsR0FBYSxJQUFJelAsTUFBTSxDQUFDQyxLQUFYLENBQWlCLElBQWpCLENBQWI7QUFDQSxTQUFLeVAsU0FBTCxHQUFpQixJQUFJMVAsTUFBTSxDQUFDQyxLQUFYLENBQWlCLElBQWpCLENBQWpCO0FBQ0EsU0FBSzBQLFFBQUwsR0FBZ0IsSUFBSTNQLE1BQU0sQ0FBQ0MsS0FBWCxDQUFpQixJQUFqQixDQUFoQjs7QUFFQSxRQUFJMUYsT0FBTyxDQUFDb1YsUUFBWixFQUFzQjtBQUNwQixXQUFLQSxRQUFMLENBQWN6USxHQUFkLENBQWtCM0UsT0FBTyxDQUFDb1YsUUFBMUI7QUFDRDs7QUFFRCxRQUFJcFYsT0FBTyxDQUFDa1YsS0FBWixFQUFtQjtBQUNqQixXQUFLQSxLQUFMLENBQVd2USxHQUFYLENBQWUzRSxPQUFPLENBQUNrVixLQUF2QjtBQUNEOztBQUVELFFBQUlsVixPQUFPLENBQUNtVixTQUFaLEVBQXVCO0FBQ3JCLFdBQUtBLFNBQUwsQ0FBZXhRLEdBQWYsQ0FBbUIzRSxPQUFPLENBQUNtVixTQUEzQjtBQUNEOztBQUVEWixVQUFNLENBQUNuTixRQUFQLENBQWdCQyxJQUFoQixDQUFxQixJQUFyQjtBQUVBLFNBQUtyRyxJQUFMO0FBQ0Q7Ozs7MkJBRU07QUFBQTs7QUFDTCxVQUFJcVUsVUFBSixFQUFnQkMsWUFBaEI7QUFFQSxXQUFLdkIsZUFBTCxHQUF1QixLQUFLMVMsVUFBTCxDQUFnQnVPLE1BQWhCLENBQXVCLFVBQUM3TSxTQUFELEVBQWU7QUFDM0QsWUFBSWxILE9BQU8sR0FBR2tILFNBQVMsQ0FBQ2xILE9BQVYsQ0FBa0JnVCxVQUFoQzs7QUFDQSxlQUFPaFQsT0FBUCxFQUFnQjtBQUNkLGNBQUlBLE9BQU8sS0FBSyxLQUFJLENBQUNBLE9BQXJCLEVBQThCO0FBQzVCLG1CQUFPLElBQVA7QUFDRDs7QUFDREEsaUJBQU8sR0FBR0EsT0FBTyxDQUFDZ1QsVUFBbEI7QUFDRDs7QUFDRCxlQUFPLEtBQVA7QUFDRCxPQVRzQixDQUF2Qjs7QUFXQSxVQUFJLEtBQUtrRixlQUFMLENBQXFCdlUsTUFBekIsRUFBaUM7QUFDL0I4VixvQkFBWSxHQUFHOVUsK0RBQUssQ0FBQyxLQUFLdVQsZUFBTCxDQUFxQnZVLE1BQXRCLENBQXBCO0FBQ0E2VixrQkFBVSxHQUFHLEtBQUtyVixPQUFMLENBQWFpVixXQUFiLENBQXlCLEtBQUtsQixlQUFMLENBQXFCdFQsR0FBckIsQ0FBeUIsVUFBQ3NDLFNBQUQsRUFBZTtBQUM1RSxpQkFBT0EsU0FBUyxDQUFDK1EsWUFBVixFQUFQO0FBQ0QsU0FGcUMsQ0FBekIsRUFFVHdCLFlBRlMsQ0FBYjtBQUdBLGFBQUt0TSxXQUFMLENBQWlCcU0sVUFBakIsRUFBNkJDLFlBQTdCO0FBQ0EsYUFBS3ZCLGVBQUwsQ0FBcUIxUSxPQUFyQixDQUE2QixVQUFDTixTQUFEO0FBQUEsaUJBQWUsS0FBSSxDQUFDbVMsS0FBTCxDQUFXN04sSUFBWCxDQUFnQnRFLFNBQWhCLENBQWY7QUFBQSxTQUE3QjtBQUNEO0FBQ0Y7OzttQ0FFYztBQUNiLGFBQU8zRyxrREFBUSxDQUFDQywwQkFBVCxDQUNMLEtBQUtSLE9BREEsRUFFTCxLQUFLbUUsT0FBTCxDQUFhbEUsTUFGUixFQUdMLEtBQUtrRSxPQUFMLENBQWE2RyxnQkFIUixFQUlMLElBSkssQ0FBUDtBQU1EOzs7bUNBRWM5RCxTLEVBQVc7QUFDeEIsVUFBSSxLQUFLL0MsT0FBTCxDQUFhMFQsY0FBakIsRUFBaUM7QUFDL0IsZUFBTyxLQUFLMVQsT0FBTCxDQUFhMFQsY0FBYixDQUE0QixJQUE1QixFQUFrQzNRLFNBQWxDLENBQVA7QUFDRCxPQUZELE1BRU87QUFDTCxZQUFNd1MsZUFBZSxHQUFHLEtBQUt6QixZQUFMLEVBQXhCO0FBQ0EsWUFBTTBCLGVBQWUsR0FBR3pTLFNBQVMsQ0FBQytRLFlBQVYsR0FBeUJ0QyxTQUF6QixFQUF4QjtBQUVBLGVBQU9nRSxlQUFlLEdBQUdELGVBQWUsQ0FBQy9ELFNBQWhCLEVBQWxCLElBQ0krRCxlQUFlLENBQUM1SixZQUFoQixDQUE2QjVJLFNBQVMsQ0FBQzNDLFNBQVYsRUFBN0IsQ0FEWDtBQUVEO0FBQ0Y7OztrQ0FFYTtBQUNaLGFBQU8sS0FBSzBULFlBQUwsR0FBb0JyWSxRQUEzQjtBQUNEOzs7OEJBRVM7QUFDUixhQUFPLEtBQUtxWSxZQUFMLEdBQW9CMVksSUFBM0I7QUFDRDs7OzhCQUVTO0FBQUE7O0FBQ1JxSyxZQUFNLENBQUMwTixNQUFQLENBQWM5UCxPQUFkLENBQXNCLFVBQUNnUSxLQUFEO0FBQUEsZUFBV0Msa0VBQVcsQ0FBQ0QsS0FBSyxDQUFDMU0sT0FBUCxFQUFnQixNQUFoQixDQUF0QjtBQUFBLE9BQXRCO0FBQ0Q7Ozs4QkFFUztBQUNSLFVBQU0wTyxVQUFVLEdBQUcsS0FBS3JWLE9BQUwsQ0FBYWlWLFdBQWIsQ0FBeUIsS0FBS2xCLGVBQUwsQ0FBcUJ0VCxHQUFyQixDQUF5QixVQUFDc0MsU0FBRCxFQUFlO0FBQ2xGLGVBQU9BLFNBQVMsQ0FBQytRLFlBQVYsRUFBUDtBQUNELE9BRjJDLENBQXpCLEVBRWYsRUFGZSxDQUFuQjtBQUdBLFdBQUs5SyxXQUFMLENBQWlCcU0sVUFBakIsRUFBNkIsRUFBN0IsRUFBaUMsQ0FBakM7QUFDRDs7OzBCQUVLdFMsUyxFQUFXO0FBQ2YsVUFBTTBTLGtCQUFrQixHQUFHLEVBQTNCO0FBQ0EsVUFBTTlKLFlBQVksR0FBRyxLQUFLbUksWUFBTCxHQUFvQm5JLFlBQXBCLENBQWlDNUksU0FBUyxDQUFDa0csV0FBVixFQUFqQyxDQUFyQjs7QUFFQSxVQUFJLENBQUMwQyxZQUFMLEVBQW1CO0FBQ2pCLFlBQUksS0FBS21JLFlBQUwsR0FBb0JuSSxZQUFwQixDQUFpQzVJLFNBQVMsQ0FBQzNDLFNBQVYsRUFBakMsQ0FBSixFQUE2RDtBQUMzRDJDLG1CQUFTLENBQUN0SCxRQUFWLEdBQXFCc0gsU0FBUyxDQUFDM0MsU0FBVixHQUFzQjlFLEtBQXRCLEVBQXJCO0FBQ0QsU0FGRCxNQUVPO0FBQ0wsaUJBQU8sS0FBUDtBQUNEO0FBQ0Y7O0FBRUQsV0FBSzZaLFNBQUwsQ0FBZTlOLElBQWYsQ0FBb0J0RSxTQUFwQjtBQUVBLFdBQUtnUixlQUFMLEdBQXVCLEtBQUsvVCxPQUFMLENBQWFnVixPQUFiLENBQXFCLEtBQUtqQixlQUExQixFQUEyQyxDQUFDaFIsU0FBRCxDQUEzQyxFQUF3RDBTLGtCQUF4RCxDQUF2QjtBQUNBLFVBQU1KLFVBQVUsR0FBRyxLQUFLclYsT0FBTCxDQUFhaVYsV0FBYixDQUF5QixLQUFLbEIsZUFBTCxDQUFxQnRULEdBQXJCLENBQXlCLFVBQUNzQyxTQUFELEVBQWU7QUFDbEYsZUFBT0EsU0FBUyxDQUFDK1EsWUFBVixFQUFQO0FBQ0QsT0FGMkMsQ0FBekIsRUFFZjJCLGtCQUZlLEVBRUsxUyxTQUZMLENBQW5CO0FBSUEsV0FBS2lHLFdBQUwsQ0FBaUJxTSxVQUFqQixFQUE2Qkksa0JBQTdCOztBQUNBLFVBQUksS0FBSzFCLGVBQUwsQ0FBcUJ0USxPQUFyQixDQUE2QlYsU0FBN0IsTUFBNEMsQ0FBQyxDQUFqRCxFQUFvRDtBQUNsRCxhQUFLMlMsZUFBTCxDQUFxQjNTLFNBQXJCO0FBQ0Q7O0FBQ0QsYUFBTyxJQUFQO0FBQ0Q7OztnQ0FFV3NTLFUsRUFBWUMsWSxFQUFjM00sSSxFQUFNO0FBQUE7O0FBQzFDLFdBQUtvTCxlQUFMLENBQXFCL08sS0FBckIsQ0FBMkIsQ0FBM0IsRUFBOEIzQixPQUE5QixDQUFzQyxVQUFDTixTQUFELEVBQVl6QixDQUFaLEVBQWtCO0FBQ3RELFlBQU1rSyxJQUFJLEdBQUc2SixVQUFVLENBQUMvVCxDQUFELENBQXZCO0FBQUEsWUFDRWlTLE9BQU8sR0FBRzVLLElBQUksSUFBSUEsSUFBSSxLQUFLLENBQWpCLEdBQXFCQSxJQUFyQixHQUE0QjJNLFlBQVksQ0FBQzdSLE9BQWIsQ0FBcUJuQyxDQUFyQixNQUE0QixDQUFDLENBQTdCLEdBQWlDLE1BQUksQ0FBQ3RCLE9BQUwsQ0FBYXVULE9BQTlDLEdBQXdELE1BQUksQ0FBQ3ZULE9BQUwsQ0FBYStVLFdBRDdHOztBQUdBLFlBQUl2SixJQUFJLENBQUM0RixTQUFULEVBQW9CO0FBQ2xCck8sbUJBQVMsQ0FBQ3dDLElBQVYsQ0FBZXhDLFNBQVMsQ0FBQ3lFLFlBQXpCLEVBQXVDK0wsT0FBdkMsRUFBZ0QsSUFBaEQsRUFBc0QsSUFBdEQ7QUFDQUQsNEVBQVcsQ0FBQyxNQUFJLENBQUNTLGVBQU4sRUFBdUJoUixTQUF2QixDQUFYOztBQUVBLGdCQUFJLENBQUNxUyxRQUFMLENBQWMvTixJQUFkLENBQW1CdEUsU0FBbkI7QUFDRCxTQUxELE1BS087QUFDTEEsbUJBQVMsQ0FBQ3dDLElBQVYsQ0FBZWlHLElBQUksQ0FBQy9QLFFBQXBCLEVBQThCOFgsT0FBOUIsRUFBdUMsSUFBdkMsRUFBNkMsSUFBN0M7QUFDRDtBQUNGLE9BWkQ7QUFhRDs7O3dCQUVHeFEsUyxFQUFXNEYsSSxFQUFNO0FBQ25CLFVBQU04TSxrQkFBa0IsR0FBRyxLQUFLMUIsZUFBTCxDQUFxQnZVLE1BQWhEO0FBRUEsV0FBSzJWLFNBQUwsQ0FBZTlOLElBQWYsQ0FBb0J0RSxTQUFwQjtBQUVBLFdBQUs0UyxrQkFBTCxDQUF3QjVTLFNBQXhCO0FBQ0EsVUFBTXNTLFVBQVUsR0FBRyxLQUFLclYsT0FBTCxDQUFhaVYsV0FBYixDQUF5QixLQUFLbEIsZUFBTCxDQUFxQnRULEdBQXJCLENBQXlCLFVBQUNzQyxTQUFELEVBQWU7QUFDbEYsZUFBT0EsU0FBUyxDQUFDK1EsWUFBVixFQUFQO0FBQ0QsT0FGMkMsQ0FBekIsRUFFZjJCLGtCQUZlLEVBRUsxUyxTQUZMLENBQW5CO0FBSUEsV0FBS2lHLFdBQUwsQ0FBaUJxTSxVQUFqQixFQUE2QixDQUFDSSxrQkFBRCxDQUE3QixFQUFtRDlNLElBQUksSUFBSSxDQUEzRDs7QUFDQSxVQUFJLEtBQUtvTCxlQUFMLENBQXFCdFEsT0FBckIsQ0FBNkJWLFNBQTdCLE1BQTRDLENBQUMsQ0FBakQsRUFBb0Q7QUFDbEQsYUFBSzJTLGVBQUwsQ0FBcUIzUyxTQUFyQjtBQUNEO0FBQ0Y7Ozt1Q0FFa0JBLFMsRUFBVztBQUM1QixVQUFJLEtBQUtnUixlQUFMLENBQXFCdFEsT0FBckIsQ0FBNkJWLFNBQTdCLE1BQTBDLENBQUMsQ0FBL0MsRUFBa0Q7QUFDaEQsYUFBS2dSLGVBQUwsQ0FBcUJuVSxJQUFyQixDQUEwQm1ELFNBQTFCO0FBQ0Q7QUFDRjs7O29DQUVlQSxTLEVBQVc7QUFBQTs7QUFDekJBLGVBQVMsQ0FBQ2xCLE1BQVYsQ0FBaUI4QyxHQUFqQixDQUFxQixLQUFLaVIsYUFBTCxHQUFxQixZQUFNO0FBQzlDLGNBQUksQ0FBQ3pLLE1BQUwsQ0FBWXBJLFNBQVo7QUFDRCxPQUZEO0FBSUEsV0FBS21TLEtBQUwsQ0FBVzdOLElBQVgsQ0FBZ0J0RSxTQUFoQjtBQUNEOzs7MkJBRU1BLFMsRUFBVztBQUNoQkEsZUFBUyxDQUFDbEIsTUFBVixDQUFpQnNKLE1BQWpCLENBQXdCLEtBQUt5SyxhQUE3QjtBQUVBLFVBQU1sVyxLQUFLLEdBQUcsS0FBS3FVLGVBQUwsQ0FBcUJ0USxPQUFyQixDQUE2QlYsU0FBN0IsQ0FBZDs7QUFDQSxVQUFJckQsS0FBSyxLQUFLLENBQUMsQ0FBZixFQUFrQjtBQUNoQjtBQUNEOztBQUVELFdBQUtxVSxlQUFMLENBQXFCM0ksTUFBckIsQ0FBNEIxTCxLQUE1QixFQUFtQyxDQUFuQztBQUVBLFVBQU0yVixVQUFVLEdBQUcsS0FBS3JWLE9BQUwsQ0FBYWlWLFdBQWIsQ0FBeUIsS0FBS2xCLGVBQUwsQ0FBcUJ0VCxHQUFyQixDQUF5QixVQUFDc0MsU0FBRCxFQUFlO0FBQ2xGLGVBQU9BLFNBQVMsQ0FBQytRLFlBQVYsRUFBUDtBQUNELE9BRjJDLENBQXpCLEVBRWYsRUFGZSxDQUFuQjtBQUlBLFdBQUs5SyxXQUFMLENBQWlCcU0sVUFBakIsRUFBNkIsRUFBN0I7QUFDQSxXQUFLRCxRQUFMLENBQWMvTixJQUFkLENBQW1CdEUsU0FBbkI7QUFDRDs7OzRCQUVPO0FBQUE7O0FBQ04sV0FBS2dSLGVBQUwsQ0FBcUIxUSxPQUFyQixDQUE2QixVQUFDTixTQUFELEVBQWU7QUFDMUNBLGlCQUFTLENBQUN3QyxJQUFWLENBQWV4QyxTQUFTLENBQUN5RSxZQUF6QixFQUF1QyxDQUF2QyxFQUEwQyxJQUExQyxFQUFnRCxJQUFoRDs7QUFDQSxjQUFJLENBQUM0TixRQUFMLENBQWMvTixJQUFkLENBQW1CdEUsU0FBbkI7QUFDRCxPQUhEO0FBSUEsV0FBS2dSLGVBQUwsR0FBdUIsRUFBdkI7QUFDRDs7OzBDQUVxQjtBQUNwQixXQUFLQSxlQUFMLENBQXFCL08sS0FBckI7QUFDRDs7Ozs7O0FBR0h1UCxNQUFNLENBQUNuTixRQUFQLEdBQWtCLElBQUkzQixNQUFNLENBQUNDLEtBQVgsQ0FBaUI2TyxNQUFqQixFQUF5QjtBQUFFdE4sV0FBUyxFQUFFLElBQWI7QUFBbUJDLGNBQVksRUFBRTtBQUFqQyxDQUF6QixDQUFsQjtBQUNBcU4sTUFBTSxDQUFDbk4sUUFBUCxDQUFnQnpDLEdBQWhCLENBQW9CNEIsaUJBQXBCOzs7Ozs7Ozs7Ozs7O0FDM05BO0FBQUE7QUFBQTtBQUFBO0FBQU8sU0FBU3NQLFFBQVQsQ0FBa0JoYSxPQUFsQixFQUEyQmlhLENBQTNCLEVBQThCO0FBQ25DLE1BQU1DLEVBQUUsR0FBRyxJQUFJQyxNQUFKLENBQVcsWUFBWUYsQ0FBWixHQUFnQixTQUEzQixFQUFzQyxHQUF0QyxDQUFYO0FBQ0EsU0FBUUMsRUFBRSxDQUFDdE4sSUFBSCxDQUFRNU0sT0FBTyxDQUFDb2EsU0FBaEIsQ0FBUjtBQUNEO0FBRU0sU0FBUzdMLFFBQVQsQ0FBa0J2TyxPQUFsQixFQUEyQmlhLENBQTNCLEVBQThCO0FBQ25DLE1BQUksQ0FBQ0QsUUFBUSxDQUFDaGEsT0FBRCxFQUFVaWEsQ0FBVixDQUFiLEVBQTJCO0FBQ3pCamEsV0FBTyxDQUFDb2EsU0FBUixHQUFvQixDQUFDcGEsT0FBTyxDQUFDb2EsU0FBUixHQUFvQixHQUFwQixHQUEwQkgsQ0FBM0IsRUFBOEJwTixPQUE5QixDQUFzQyxNQUF0QyxFQUE4QyxHQUE5QyxFQUFtREEsT0FBbkQsQ0FBMkQsVUFBM0QsRUFBdUUsRUFBdkUsQ0FBcEI7QUFDRDtBQUNGO0FBRU0sU0FBUzhCLFdBQVQsQ0FBcUIzTyxPQUFyQixFQUE4QmlhLENBQTlCLEVBQWlDO0FBQ3RDLE1BQU1DLEVBQUUsR0FBRyxJQUFJQyxNQUFKLENBQVcsWUFBWUYsQ0FBWixHQUFnQixTQUEzQixFQUFzQyxHQUF0QyxDQUFYO0FBQ0FqYSxTQUFPLENBQUNvYSxTQUFSLEdBQW9CcGEsT0FBTyxDQUFDb2EsU0FBUixDQUFrQnZOLE9BQWxCLENBQTBCcU4sRUFBMUIsRUFBOEIsSUFBOUIsRUFBb0NyTixPQUFwQyxDQUE0QyxNQUE1QyxFQUFvRCxHQUFwRCxFQUF5REEsT0FBekQsQ0FBaUUsVUFBakUsRUFBNkUsRUFBN0UsQ0FBcEI7QUFDRCxDOzs7Ozs7Ozs7Ozs7QUNkRDtBQUFBO0FBQUEsU0FBU3dOLFFBQVQsQ0FBa0JyYSxPQUFsQixFQUEyQnNNLEtBQTNCLEVBQWtDO0FBQ2hDQSxPQUFLLEdBQUdBLEtBQUssSUFBSSxFQUFqQjtBQUNBLE1BQUlnTyxPQUFPLEdBQUcsRUFBZDs7QUFDQSxPQUFLLElBQU1DLEdBQVgsSUFBa0JqTyxLQUFsQixFQUF5QjtBQUN2QixRQUFJQSxLQUFLLENBQUNrTyxjQUFOLENBQXFCRCxHQUFyQixDQUFKLEVBQStCO0FBQzdCRCxhQUFPLElBQUlDLEdBQUcsR0FBRyxJQUFOLEdBQWFqTyxLQUFLLENBQUNpTyxHQUFELENBQWxCLEdBQTBCLElBQXJDO0FBQ0Q7QUFDRjs7QUFFRHZhLFNBQU8sQ0FBQ3NNLEtBQVIsQ0FBY2dPLE9BQWQsR0FBd0JBLE9BQXhCO0FBQ0Q7O0FBRUQsU0FBU0csZ0JBQVQsQ0FBMEJ6YSxPQUExQixFQUFtQzBhLElBQW5DLEVBQXlDO0FBQ3ZDLE1BQUkxYSxPQUFPLENBQUMyYSxVQUFaLEVBQXdCO0FBQ3RCM2EsV0FBTyxDQUFDNGEsWUFBUixDQUFxQkYsSUFBckIsRUFBMkIxYSxPQUFPLENBQUMyYSxVQUFuQztBQUNELEdBRkQsTUFFTztBQUNMM2EsV0FBTyxDQUFDNmEsV0FBUixDQUFvQkgsSUFBcEI7QUFDRDtBQUNGOztBQUVjLFNBQVNyVixZQUFULENBQXNCcEIsSUFBdEIsRUFBNEI2VyxRQUE1QixFQUFzQztBQUNuRCxNQUFNMVYsTUFBTSxHQUFHaUosUUFBUSxDQUFDME0sYUFBVCxDQUF1QixRQUF2QixDQUFmOztBQUNBLE1BQUk3WCxNQUFNLENBQUNxUSxnQkFBUCxDQUF3QnRQLElBQXhCLEVBQThCckUsUUFBOUIsS0FBMkMsUUFBL0MsRUFBeUQ7QUFDdkRxRSxRQUFJLENBQUNxSSxLQUFMLENBQVcxTSxRQUFYLEdBQXNCLFVBQXRCO0FBQ0Q7O0FBRUR3RixRQUFNLENBQUM0VixZQUFQLENBQW9CLE9BQXBCLEVBQTZCRixRQUFRLENBQUN2YixJQUFULENBQWNNLENBQWQsR0FBa0IsSUFBL0M7QUFDQXVGLFFBQU0sQ0FBQzRWLFlBQVAsQ0FBb0IsUUFBcEIsRUFBOEJGLFFBQVEsQ0FBQ3ZiLElBQVQsQ0FBY08sQ0FBZCxHQUFrQixJQUFoRDtBQUNBdWEsVUFBUSxDQUFDalYsTUFBRCxFQUFTO0FBQ2Z4RixZQUFRLEVBQUUsVUFESztBQUVmMFEsUUFBSSxFQUFFd0ssUUFBUSxDQUFDbGIsUUFBVCxDQUFrQkUsQ0FBbEIsR0FBc0IsSUFGYjtBQUdmeVEsT0FBRyxFQUFFdUssUUFBUSxDQUFDbGIsUUFBVCxDQUFrQkUsQ0FBbEIsR0FBc0IsSUFIWjtBQUlmMFEsU0FBSyxFQUFFc0ssUUFBUSxDQUFDdmIsSUFBVCxDQUFjTSxDQUFkLEdBQWtCLElBSlY7QUFLZmdKLFVBQU0sRUFBRWlTLFFBQVEsQ0FBQ3ZiLElBQVQsQ0FBY08sQ0FBZCxHQUFrQjtBQUxYLEdBQVQsQ0FBUjtBQU9BMmEsa0JBQWdCLENBQUN4VyxJQUFELEVBQU9tQixNQUFQLENBQWhCO0FBQ0EsU0FBT0EsTUFBUDtBQUNELEM7Ozs7Ozs7Ozs7OztBQ3JDRDtBQUFBO0FBQWUsU0FBU3lGLGdCQUFULENBQTBCN0ssT0FBMUIsRUFBbUM7QUFDaEQsTUFBSUMsTUFBTSxHQUFHRCxPQUFPLENBQUNnVCxVQUFyQjs7QUFDQSxTQUFPL1MsTUFBTSxDQUFDK1MsVUFBUCxJQUFxQjlQLE1BQU0sQ0FBQ3FRLGdCQUFQLENBQXdCdFQsTUFBeEIsRUFBZ0MsVUFBaEMsTUFBZ0QsUUFBNUUsRUFBc0Y7QUFDcEZBLFVBQU0sR0FBR0EsTUFBTSxDQUFDK1MsVUFBaEI7QUFDRDs7QUFDRCxTQUFPL1MsTUFBUDtBQUNELEM7Ozs7Ozs7Ozs7OztBQ05EO0FBQUE7QUFBZSxTQUFTMEUsS0FBVCxDQUFlM0QsS0FBZixFQUFzQmlhLElBQXRCLEVBQTRCQyxJQUE1QixFQUFrQztBQUMvQyxNQUFNcEgsTUFBTSxHQUFHLEVBQWY7O0FBQ0EsTUFBSSxPQUFPbUgsSUFBUCxLQUFnQixXQUFwQixFQUFpQztBQUMvQkEsUUFBSSxHQUFHamEsS0FBUDtBQUNBQSxTQUFLLEdBQUcsQ0FBUjtBQUNEOztBQUNELE1BQUksT0FBT2thLElBQVAsS0FBZ0IsV0FBcEIsRUFBaUM7QUFDL0JBLFFBQUksR0FBRyxDQUFQO0FBQ0Q7O0FBQ0QsTUFBS0EsSUFBSSxHQUFHLENBQVAsSUFBWWxhLEtBQUssSUFBSWlhLElBQXRCLElBQWdDQyxJQUFJLEdBQUcsQ0FBUCxJQUFZbGEsS0FBSyxJQUFJaWEsSUFBekQsRUFBZ0U7QUFDOUQsV0FBTyxFQUFQO0FBQ0Q7O0FBQ0QsT0FBSyxJQUFJeFYsQ0FBQyxHQUFHekUsS0FBYixFQUFvQmthLElBQUksR0FBRyxDQUFQLEdBQVd6VixDQUFDLEdBQUd3VixJQUFmLEdBQXNCeFYsQ0FBQyxHQUFHd1YsSUFBOUMsRUFBb0R4VixDQUFDLElBQUl5VixJQUF6RCxFQUErRDtBQUM3RHBILFVBQU0sQ0FBQy9QLElBQVAsQ0FBWTBCLENBQVo7QUFDRDs7QUFDRCxTQUFPcU8sTUFBUDtBQUNELEMiLCJmaWxlIjoiY2hhcnQuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJEcmFnZWVcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiRHJhZ2VlXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkRyYWdlZVwiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvY2hhcnQuanNcIik7XG4iLCIvKiFcbiAqIGdldFN0eWxlUHJvcGVydHkgdjEuMC40XG4gKiBvcmlnaW5hbCBieSBrYW5nYXhcbiAqIGh0dHA6Ly9wZXJmZWN0aW9ua2lsbHMuY29tL2ZlYXR1cmUtdGVzdGluZy1jc3MtcHJvcGVydGllcy9cbiAqIE1JVCBsaWNlbnNlXG4gKi9cblxuLypqc2hpbnQgYnJvd3NlcjogdHJ1ZSwgc3RyaWN0OiB0cnVlLCB1bmRlZjogdHJ1ZSAqL1xuLypnbG9iYWwgZGVmaW5lOiBmYWxzZSwgZXhwb3J0czogZmFsc2UsIG1vZHVsZTogZmFsc2UgKi9cblxuKCBmdW5jdGlvbiggd2luZG93ICkge1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBwcmVmaXhlcyA9ICdXZWJraXQgTW96IG1zIE1zIE8nLnNwbGl0KCcgJyk7XG52YXIgZG9jRWxlbVN0eWxlID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlO1xuXG5mdW5jdGlvbiBnZXRTdHlsZVByb3BlcnR5KCBwcm9wTmFtZSApIHtcbiAgaWYgKCAhcHJvcE5hbWUgKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gdGVzdCBzdGFuZGFyZCBwcm9wZXJ0eSBmaXJzdFxuICBpZiAoIHR5cGVvZiBkb2NFbGVtU3R5bGVbIHByb3BOYW1lIF0gPT09ICdzdHJpbmcnICkge1xuICAgIHJldHVybiBwcm9wTmFtZTtcbiAgfVxuXG4gIC8vIGNhcGl0YWxpemVcbiAgcHJvcE5hbWUgPSBwcm9wTmFtZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHByb3BOYW1lLnNsaWNlKDEpO1xuXG4gIC8vIHRlc3QgdmVuZG9yIHNwZWNpZmljIHByb3BlcnRpZXNcbiAgdmFyIHByZWZpeGVkO1xuICBmb3IgKCB2YXIgaT0wLCBsZW4gPSBwcmVmaXhlcy5sZW5ndGg7IGkgPCBsZW47IGkrKyApIHtcbiAgICBwcmVmaXhlZCA9IHByZWZpeGVzW2ldICsgcHJvcE5hbWU7XG4gICAgaWYgKCB0eXBlb2YgZG9jRWxlbVN0eWxlWyBwcmVmaXhlZCBdID09PSAnc3RyaW5nJyApIHtcbiAgICAgIHJldHVybiBwcmVmaXhlZDtcbiAgICB9XG4gIH1cbn1cblxuLy8gdHJhbnNwb3J0XG5pZiAoIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCApIHtcbiAgLy8gQU1EXG4gIGRlZmluZSggZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGdldFN0eWxlUHJvcGVydHk7XG4gIH0pO1xufSBlbHNlIGlmICggdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICkge1xuICAvLyBDb21tb25KUyBmb3IgQ29tcG9uZW50XG4gIG1vZHVsZS5leHBvcnRzID0gZ2V0U3R5bGVQcm9wZXJ0eTtcbn0gZWxzZSB7XG4gIC8vIGJyb3dzZXIgZ2xvYmFsXG4gIHdpbmRvdy5nZXRTdHlsZVByb3BlcnR5ID0gZ2V0U3R5bGVQcm9wZXJ0eTtcbn1cblxufSkoIHdpbmRvdyApO1xuIiwiLyoqXG4gKiBSZW1vdmUgYSByYW5nZSBvZiBpdGVtcyBmcm9tIGFuIGFycmF5XG4gKlxuICogQGZ1bmN0aW9uIHJlbW92ZUl0ZW1zXG4gKiBAcGFyYW0ge0FycmF5PCo+fSBhcnIgVGhlIHRhcmdldCBhcnJheVxuICogQHBhcmFtIHtudW1iZXJ9IHN0YXJ0SWR4IFRoZSBpbmRleCB0byBiZWdpbiByZW1vdmluZyBmcm9tIChpbmNsdXNpdmUpXG4gKiBAcGFyYW0ge251bWJlcn0gcmVtb3ZlQ291bnQgSG93IG1hbnkgaXRlbXMgdG8gcmVtb3ZlXG4gKi9cbmZ1bmN0aW9uIHJlbW92ZUl0ZW1zIChhcnIsIHN0YXJ0SWR4LCByZW1vdmVDb3VudCkge1xuICB2YXIgaSwgbGVuZ3RoID0gYXJyLmxlbmd0aDtcblxuICBpZiAoc3RhcnRJZHggPj0gbGVuZ3RoIHx8IHJlbW92ZUNvdW50ID09PSAwKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICByZW1vdmVDb3VudCA9IChzdGFydElkeCArIHJlbW92ZUNvdW50ID4gbGVuZ3RoID8gbGVuZ3RoIC0gc3RhcnRJZHggOiByZW1vdmVDb3VudCk7XG5cbiAgdmFyIGxlbiA9IGxlbmd0aCAtIHJlbW92ZUNvdW50O1xuXG4gIGZvciAoaSA9IHN0YXJ0SWR4OyBpIDwgbGVuOyArK2kpIHtcbiAgICBhcnJbaV0gPSBhcnJbaSArIHJlbW92ZUNvdW50XTtcbiAgfVxuXG4gIGFyci5sZW5ndGggPSBsZW47XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlbW92ZUl0ZW1zO1xuIiwiaW1wb3J0IHsgR2VvbWV0cnksIFBvaW50IH0gZnJvbSAnLi9nZW9tZXRyeSdcblxuZXhwb3J0IGZ1bmN0aW9uIGJvdW5kVG9SZWN0YW5nbGUocmVjdGFuZ2xlKSB7XG4gIHJldHVybiBmdW5jdGlvbihwb2ludCwgc2l6ZSkge1xuICAgIGNvbnN0IGNhbGNQb2ludCA9IHBvaW50LmNsb25lKCksXG4gICAgICByZWN0UDIgPSByZWN0YW5nbGUuZ2V0UDMoKVxuXG4gICAgaWYgKHJlY3RhbmdsZS5wb3NpdGlvbi54ID4gY2FsY1BvaW50LngpIHtcbiAgICAgIChjYWxjUG9pbnQueCA9IHJlY3RhbmdsZS5wb3NpdGlvbi54KVxuICAgIH1cbiAgICBpZiAocmVjdGFuZ2xlLnBvc2l0aW9uLnkgPiBjYWxjUG9pbnQueSkge1xuICAgICAgY2FsY1BvaW50LnkgPSByZWN0YW5nbGUucG9zaXRpb24ueVxuICAgIH1cbiAgICBpZiAocmVjdFAyLnggPCBjYWxjUG9pbnQueCArIHNpemUueCkge1xuICAgICAgY2FsY1BvaW50LnggPSByZWN0UDIueCAtIHNpemUueFxuICAgIH1cbiAgICBpZiAocmVjdFAyLnkgPCBjYWxjUG9pbnQueSArIHNpemUueSkge1xuICAgICAgY2FsY1BvaW50LnkgPSByZWN0UDIueSAtIHNpemUueVxuICAgIH1cblxuICAgIHJldHVybiBjYWxjUG9pbnRcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYm91bmRUb0VsZW1lbnQoZWxlbWVudCwgcGFyZW50KSB7XG4gIGNvbnN0IHJldEZ1bmMgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gYm91bmQuYXBwbHkodGhpcywgYXJndW1lbnRzKVxuICB9XG4gIGxldCBib3VuZFxuXG4gIHJldEZ1bmMucmVmcmVzaCA9IGZ1bmN0aW9uKCkge1xuICAgIGJvdW5kID0gYm91bmRUb1JlY3RhbmdsZShHZW9tZXRyeS5jcmVhdGVSZWN0YW5nbGVGcm9tRWxlbWVudChlbGVtZW50LCBwYXJlbnQpKVxuICB9XG5cbiAgcmV0RnVuYy5yZWZyZXNoKClcbiAgcmV0dXJuIHJldEZ1bmNcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJvdW5kVG9MaW5lWCh4LCBzdGFydFksIGVuZFkpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHBvaW50LCBzaXplKSB7XG4gICAgY29uc3QgY2FsY1BvaW50ID0gcG9pbnQuY2xvbmUoKVxuICAgIGNhbGNQb2ludC54ID0geFxuICAgIGlmIChzdGFydFkgPiBjYWxjUG9pbnQueSkge1xuICAgICAgY2FsY1BvaW50LnkgPSBzdGFydFlcbiAgICB9XG4gICAgaWYgKGVuZFkgPCBjYWxjUG9pbnQueSArIHNpemUueSkge1xuICAgICAgY2FsY1BvaW50LnkgPSBlbmRZIC0gc2l6ZS55XG4gICAgfVxuXG4gICAgcmV0dXJuIGNhbGNQb2ludFxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBib3VuZFRvTGluZVkoeSwgc3RhcnRYLCBlbmRYKSB7XG4gIHJldHVybiBmdW5jdGlvbihwb2ludCwgc2l6ZSkge1xuICAgIGNvbnN0IGNhbGNQb2ludCA9IHBvaW50LmNsb25lKClcbiAgICBjYWxjUG9pbnQueSA9IHlcbiAgICBpZiAoc3RhcnRYID4gY2FsY1BvaW50LngpIHtcbiAgICAgIGNhbGNQb2ludC54ID0gc3RhcnRYXG4gICAgfVxuICAgIGlmIChlbmRYIDwgY2FsY1BvaW50LnggKyBzaXplLngpIHtcbiAgICAgIGNhbGNQb2ludC54ID0gZW5kWCAtIHNpemUueFxuICAgIH1cbiAgICByZXR1cm4gY2FsY1BvaW50XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJvdW5kVG9MaW5lKHN0YXJ0LCBlbmQpIHtcbiAgY29uc3QgYWxwaGEgPSBNYXRoLmF0YW4yKGVuZC55IC0gc3RhcnQueSwgZW5kLnggLSBzdGFydC54KSxcbiAgICBiZXRhID0gYWxwaGEgKyBNYXRoLlBJIC8gMixcbiAgICBzb21lSyA9IDEwLFxuICAgIGNvc0JldGEgPSBNYXRoLmNvcyhiZXRhKSxcbiAgICBzaW5CZXRhID0gTWF0aC5zaW4oYmV0YSlcblxuICByZXR1cm4gZnVuY3Rpb24ocG9pbnQsIHNpemUpIHtcbiAgICBjb25zdCBwb2ludDIgPSBuZXcgUG9pbnQocG9pbnQueCArIHNvbWVLICogY29zQmV0YSwgcG9pbnQueSArIHNvbWVLICogc2luQmV0YSksXG4gICAgICBuZXdFbmQgPSBHZW9tZXRyeS5nZXRQb2ludEluTGluZUJ5TGVuZ2h0KGVuZCwgc3RhcnQsIHNpemUueClcbiAgICBsZXQgcG9pbnRDcm9zc2luZyA9IEdlb21ldHJ5LmRpcmVjdENyb3NzaW5nKHN0YXJ0LCBlbmQsIHBvaW50LCBwb2ludDIpXG5cbiAgICBwb2ludENyb3NzaW5nID0gR2VvbWV0cnkuYm91bmRUb0xpbmUoc3RhcnQsIG5ld0VuZCwgcG9pbnRDcm9zc2luZylcbiAgICByZXR1cm4gcG9pbnRDcm9zc2luZ1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBib3VuZFRvQ2lyY2xlKGNlbnRlciwgcmFkaXVzKSB7XG4gIHJldHVybiBmdW5jdGlvbihwb2ludCwgX3NpemUpIHtcbiAgICBjb25zdCBib3VuZGVkUG9pbnQgPSBHZW9tZXRyeS5nZXRQb2ludEluTGluZUJ5TGVuZ2h0KGNlbnRlciwgcG9pbnQsIHJhZGl1cylcbiAgICByZXR1cm4gYm91bmRlZFBvaW50XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJvdW5kVG9BcmMoY2VudGVyLCByYWRpdXMsIHN0YXJ0QWdsZSwgZW5kQW5nbGUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHBvaW50LCBfc2l6ZSkge1xuICAgIGNvbnN0IGJvdW5kU3RhcnRBbmdsZSA9IHR5cGVvZiBzdGFydEFnbGUgPT09ICdmdW5jdGlvbicgPyBzdGFydEFnbGUoKSA6IHN0YXJ0QWdsZVxuICAgIGNvbnN0IGJvdW5kRW5kdEFuZ2xlID0gdHlwZW9mIHN0YXJ0QWdsZSA9PT0gJ2Z1bmN0aW9uJyA/IGVuZEFuZ2xlKCkgOiBlbmRBbmdsZVxuXG4gICAgbGV0IGFuZ2xlID0gR2VvbWV0cnkuZ2V0QW5nbGUoY2VudGVyLCBwb2ludClcbiAgICBhbmdsZSA9IEdlb21ldHJ5Lm5vcm1hbGl6ZUFuZ2xlKGFuZ2xlKVxuICAgIGFuZ2xlID0gR2VvbWV0cnkuYm91bmRBbmdsZShib3VuZFN0YXJ0QW5nbGUsIGJvdW5kRW5kdEFuZ2xlLCBhbmdsZSlcbiAgICByZXR1cm4gR2VvbWV0cnkuZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtKGFuZ2xlLCByYWRpdXMsIGNlbnRlcilcbiAgfVxufVxuIiwiaW1wb3J0IGNyZWF0ZUNhbnZhcyBmcm9tICcuL3V0aWxzL2NyZWF0ZWNhbnZhcydcbmltcG9ydCByYW5nZSBmcm9tICcuL3V0aWxzL3JhbmdlJ1xuaW1wb3J0IHsgR2VvbWV0cnksIFBvaW50IH0gZnJvbSAnLi9nZW9tZXRyeSdcbmltcG9ydCB7IERyYWdnYWJsZSwgZXZlbnRzIH0gZnJvbSAnLi9kcmFnZ2FibGUnXG5pbXBvcnQgeyBib3VuZFRvQXJjIH0gZnJvbSAnLi9ib3VuZCdcblxuY29uc3QgaXNUb3VjaCA9ICdvbnRvdWNoc3RhcnQnIGluIHdpbmRvd1xuXG5mdW5jdGlvbiByYW5kb21Db2xvcigpIHtcbiAgY29uc3Qgcm5kID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSoyNTUpXG4gIH1cbiAgY29uc3QgdG9IZXhTdHJpbmcgPSBmdW5jdGlvbihkaWdpdCkge1xuICAgIGxldCBzdHIgPSBkaWdpdC50b1N0cmluZygxNilcbiAgICB3aGlsZSAoc3RyLmxlbmd0aCA8IDIpIHtcbiAgICAgIHN0ciA9ICcwJyArIHN0clxuICAgIH1cbiAgICByZXR1cm4gc3RyXG4gIH1cblxuICByZXR1cm4gJyMnICsgdG9IZXhTdHJpbmcocm5kKCkpICsgdG9IZXhTdHJpbmcocm5kKCkpICsgdG9IZXhTdHJpbmcocm5kKCkpXG59XG5cbmZ1bmN0aW9uIGdldEFycmF5V2l0aEJvdW5kSW5kZXhlcyhpbmRleCwgbGVuZ3RoKSB7XG4gIGNvbnN0IHJldEluZGV4ZXMgPSBbXVxuICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgcmV0SW5kZXhlcy5wdXNoKGluZGV4KVxuICAgIHJldEluZGV4ZXMucHVzaCgoaW5kZXggKyAxKSAlIGxlbmd0aClcbiAgfVxuXG4gIHJldHVybiByZXRJbmRleGVzXG59XG5cbmNsYXNzIENoYXJ0IHtcbiAgY29uc3RydWN0b3IgKGFyZWEsIGVsZW1lbnRzLCBvcHRpb25zPXt9KSB7XG4gICAgY29uc3QgYXJlYVJlY3RhbmdsZSA9IEdlb21ldHJ5LmNyZWF0ZVJlY3RhbmdsZUZyb21FbGVtZW50KGFyZWEsIGFyZWEpXG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBjZW50ZXI6IGFyZWFSZWN0YW5nbGUuZ2V0Q2VudGVyKCksXG4gICAgICByYWRpdXM6IGFyZWFSZWN0YW5nbGUuZ2V0TWluU2lkZSgpIC8gMixcbiAgICAgIHRvdWNoUmFkaXVzOiBhcmVhUmVjdGFuZ2xlLmdldE1pblNpZGUoKSAvIDIsXG4gICAgICBib3VuZEFuZ2xlOiBNYXRoLlBJIC8gOSxcbiAgICAgIGZpbGxTdHlsZXM6IHJhbmdlKDAsIGVsZW1lbnRzLmxlbmd0aCkubWFwKCgpID0+IHJhbmRvbUNvbG9yKCkpLFxuICAgICAgaW5pdEFuZ2xlczogcmFuZ2UoLTkwLCAyNzAsIDM2MCAvIGVsZW1lbnRzLmxlbmd0aCkubWFwKChhbmdsZSkgPT4ge1xuICAgICAgICByZXR1cm4gR2VvbWV0cnkudG9SYWRpYW4oYW5nbGUpXG4gICAgICB9KSxcbiAgICAgIGxpbWl0SW1nOiBudWxsLFxuICAgICAgbGltaXRJbWdPZmZzZXQ6IG5ldyBQb2ludCgwLCAwKSxcbiAgICAgIGlzU2VsZWN0YWJsZTogZmFsc2VcbiAgICB9LCBvcHRpb25zKVxuXG4gICAgdGhpcy5vbkRyYXcgPSB0aGlzLm9wdGlvbnMub25EcmF3IHx8IGZ1bmN0aW9uKCkge31cbiAgICB0aGlzLmFyZWEgPSBhcmVhXG4gICAgdGhpcy5hcmVhUmVjdGFuZ2xlID0gYXJlYVJlY3RhbmdsZVxuICAgIHRoaXMuaW5pdChlbGVtZW50cylcbiAgfVxuXG4gIGluaXQoZWxlbWVudHMpIHtcbiAgICB0aGlzLmNhbnZhcyA9IGNyZWF0ZUNhbnZhcyh0aGlzLmFyZWEsIHRoaXMuYXJlYVJlY3RhbmdsZSlcbiAgICB0aGlzLmNvbnRleHQgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpXG4gICAgdGhpcy5kcmFnZ2FibGVzID0gZWxlbWVudHMubWFwKChlbGVtZW50LCBpKSA9PiB7XG4gICAgICBjb25zdCBhbmdsZSA9IHRoaXMub3B0aW9ucy5pbml0QW5nbGVzW2ldXG4gICAgICBjb25zdCBoYWxmU2l6ZSA9IEdlb21ldHJ5LmdldFNpemVPZkVsZW1lbnQoZWxlbWVudCkubXVsdCgwLjUpXG4gICAgICBjb25zdCBwb3NpdGlvbiA9IEdlb21ldHJ5LmdldFBvaW50RnJvbVJhZGlhbFN5c3RlbShcbiAgICAgICAgYW5nbGUsXG4gICAgICAgIHRoaXMub3B0aW9ucy50b3VjaFJhZGl1cyxcbiAgICAgICAgdGhpcy5vcHRpb25zLmNlbnRlci5zdWIoaGFsZlNpemUpXG4gICAgICApXG4gICAgICBjb25zdCBib3VuZCA9IGJvdW5kVG9BcmMoXG4gICAgICAgIHRoaXMub3B0aW9ucy5jZW50ZXIuc3ViKGhhbGZTaXplKSxcbiAgICAgICAgdGhpcy5vcHRpb25zLnRvdWNoUmFkaXVzLFxuICAgICAgICB0aGlzLmdldEJvdW5kQW5nbGUoaSwgZmFsc2UpLFxuICAgICAgICB0aGlzLmdldEJvdW5kQW5nbGUoaSwgdHJ1ZSlcbiAgICAgIClcblxuICAgICAgcmV0dXJuIG5ldyBEcmFnZ2FibGUoZWxlbWVudCwge1xuICAgICAgICBwYXJlbnQ6IHRoaXMuYXJlYSxcbiAgICAgICAgYm91bmQ6IGJvdW5kLFxuICAgICAgICBwb3NpdGlvbjogcG9zaXRpb24sXG4gICAgICAgIG9uTW92ZTogKCkgPT4ge1xuICAgICAgICAgIHRoaXMuZHJhdygpXG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuXG4gICAgdGhpcy5pc0luaXQgPSB0cnVlXG4gICAgaWYgKHRoaXMub3B0aW9ucy5pc1NlbGVjdGFibGUpIHtcbiAgICAgIHRoaXMuaW5pdFNlbGVjdCgpXG4gICAgfVxuICAgIHRoaXMuZHJhdygpXG4gIH1cblxuICBpbml0U2VsZWN0KCkge1xuICAgIHRoaXMuc2V0QWN0aXZlQXJjKC0xKVxuXG4gICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihldmVudHMuc3RhcnQsIChlKSA9PiB7XG4gICAgICBsZXQgcG9pbnQgPSBuZXcgUG9pbnQoXG4gICAgICAgIGlzVG91Y2ggPyBlLmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VYIDogZS5jbGllbnRYLFxuICAgICAgICBpc1RvdWNoID8gZS5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWSA6IGUuY2xpZW50WVxuICAgICAgKVxuXG4gICAgICBpZiAoIXRoaXMuY2FudmFzT2Zmc2V0KSB7XG4gICAgICAgIHRoaXMuY2FudmFzT2Zmc2V0ID0gR2VvbWV0cnkuZ2V0T2Zmc2V0KHRoaXMuY2FudmFzKVxuICAgICAgfVxuXG4gICAgICBwb2ludCA9IHBvaW50LnN1Yih0aGlzLmNhbnZhc09mZnNldClcbiAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5nZXRBcmNPblBvaW50KHBvaW50KVxuICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICB0aGlzLnNldEFjdGl2ZUFyYygodGhpcy5hY3RpdmVBcmNJbmRleCAhPT0gaW5kZXgpID8gaW5kZXggOiAtMSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgdXBkYXRlQW5nbGVzKCkge1xuICAgIHRoaXMuYW5nbGVzID0gdGhpcy5kcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBjb25zdCBoYWxmU2l6ZSA9IGRyYWdnYWJsZS5nZXRTaXplKCkubXVsdCgwLjUpXG4gICAgICByZXR1cm4gR2VvbWV0cnkuZ2V0QW5nbGUodGhpcy5vcHRpb25zLmNlbnRlci5zdWIoaGFsZlNpemUpLCBkcmFnZ2FibGUucG9zaXRpb24pXG4gICAgfSlcbiAgfVxuXG4gIGdldEJvdW5kQW5nbGUoaW5kZXgsIGlzQ2xvc3NpbmcpIHtcbiAgICBjb25zdCBzaWduID0gaXNDbG9zc2luZyA/IDEgOiAtMVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGxldCBpID0gKGluZGV4ICsgc2lnbikgJSB0aGlzLmFuZ2xlcy5sZW5ndGhcbiAgICAgIGlmIChpIDwgMCkge1xuICAgICAgICBpICs9IHRoaXMuYW5nbGVzLmxlbmd0aFxuICAgICAgfVxuICAgICAgcmV0dXJuIEdlb21ldHJ5Lm5vcm1hbGl6ZUFuZ2xlKHRoaXMuYW5nbGVzW2ldIC0gc2lnbiAqIHRoaXMub3B0aW9ucy5ib3VuZEFuZ2xlKVxuICAgIH1cbiAgfVxuXG4gIGRyYXcoKSB7XG4gICAgaWYgKCF0aGlzLmlzSW5pdCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy51cGRhdGVBbmdsZXMoKVxuICAgIHRoaXMuY29udGV4dC5jbGVhclJlY3QoMCwgMCwgdGhpcy5hcmVhUmVjdGFuZ2xlLnNpemUueCwgdGhpcy5hcmVhUmVjdGFuZ2xlLnNpemUueSlcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoX2RyYWdnYWJsZSwgaW5kZXgpID0+IHtcbiAgICAgIHRoaXMuZHJhd0FyYyh0aGlzLmNvbnRleHQsIHRoaXMub3B0aW9ucy5jZW50ZXIsIHRoaXMub3B0aW9ucy5yYWRpdXMsIGluZGV4KVxuICAgIH0pXG5cbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoX2RyYWdnYWJsZSwgaW5kZXgpID0+IHtcbiAgICAgIGxldCBlbmFibGVJbmRleGVzXG4gICAgICBpZiAodGhpcy5vcHRpb25zLmlzU2VsZWN0YWJsZSkge1xuICAgICAgICBlbmFibGVJbmRleGVzID0gZ2V0QXJyYXlXaXRoQm91bmRJbmRleGVzKHRoaXMuYWN0aXZlQXJjSW5kZXgsIHRoaXMuZHJhZ2dhYmxlcy5sZW5ndGgpXG4gICAgICAgIGlmIChlbmFibGVJbmRleGVzLmluZGV4T2YoaW5kZXgpICE9PSAtMSkge1xuICAgICAgICAgIHRoaXMuZHJhd0xpbWl0SW1nKGluZGV4KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmRyYXdMaW1pdEltZyhpbmRleClcbiAgICAgIH1cbiAgICB9KVxuICAgIHRoaXMub25EcmF3KClcbiAgfVxuXG4gIGNyZWF0ZUNsb25lKGVsZW1lbnQsIG9wdGlvbnMgPSB7fSkge1xuICAgIGlmICghdGhpcy5pc0luaXQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBjb25zdCByZWN0YW5nbGUgPSBHZW9tZXRyeS5jcmVhdGVSZWN0YW5nbGVGcm9tRWxlbWVudChlbGVtZW50LCBlbGVtZW50KVxuICAgIGNvbnN0IG9wdHMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIGNlbnRlcjogcmVjdGFuZ2xlLmdldENlbnRlcigpLFxuICAgICAgcmFkaXVzOiByZWN0YW5nbGUuZ2V0TWluU2lkZSgpIC8gMixcbiAgICAgIGZpbGxTdHlsZXM6IHRoaXMub3B0aW9ucy5maWxsU3R5bGVzXG4gICAgfSwgb3B0aW9ucylcblxuICAgIGNvbnN0IGNhbnZhcyA9IGNyZWF0ZUNhbnZhcyhlbGVtZW50LCByZWN0YW5nbGUpXG4gICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpXG4gICAgY29uc3QgY2xvbmVPYmogPSB7XG4gICAgICBkcmF3OiAoKSA9PiB7XG4gICAgICAgIGNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHJlY3RhbmdsZS5zaXplLngsIHJlY3RhbmdsZS5zaXplLnkpXG4gICAgICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChfZHJhZ2dhYmxlLCBpbmRleCkgPT4ge1xuICAgICAgICAgIHRoaXMuZHJhd0FyYyhjb250ZXh0LCBvcHRzLmNlbnRlciwgb3B0cy5yYWRpdXMsIGluZGV4KVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgICBjbG9uZU9iai5kcmF3KClcbiAgICByZXR1cm4gY2xvbmVPYmpcbiAgfVxuXG4gIGdldEZpbGxTdHlsZShpbmRleCkge1xuICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLmZpbGxTdHlsZXNbaW5kZXhdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aGlzLm9wdGlvbnMuZmlsbFN0eWxlc1tpbmRleF0gPSB0aGlzLm9wdGlvbnMuZmlsbFN0eWxlc1tpbmRleF0uY2FsbCh0aGlzKVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmZpbGxTdHlsZXNbaW5kZXhdXG4gIH1cblxuICBkcmF3QXJjKGNvbnRleHQsIGNlbnRlciwgcmFkaXVzLCBpbmRleCkge1xuICAgIGNvbnN0IHN0YXJ0QW5nbGUgPSB0aGlzLmFuZ2xlc1tpbmRleF1cbiAgICBjb25zdCBlbmRBbmdsZSA9IHRoaXMuYW5nbGVzWyhpbmRleCsxKSAlIHRoaXMuYW5nbGVzLmxlbmd0aF1cbiAgICBjb25zdCBjb2xvciA9IHRoaXMuZ2V0RmlsbFN0eWxlKGluZGV4KVxuXG4gICAgY29udGV4dC5iZWdpblBhdGgoKVxuICAgIGNvbnRleHQubW92ZVRvKGNlbnRlci54LCBjZW50ZXIueSlcbiAgICBjb250ZXh0LmFyYyhjZW50ZXIueCwgY2VudGVyLnksIHJhZGl1cywgc3RhcnRBbmdsZSwgZW5kQW5nbGUsIGZhbHNlKVxuICAgIGNvbnRleHQubGluZVRvKGNlbnRlci54LCBjZW50ZXIueSlcbiAgICBjb250ZXh0LmNsb3NlUGF0aCgpXG4gICAgY29udGV4dC5maWxsU3R5bGUgPSBjb2xvclxuICAgIGNvbnRleHQuZmlsbCgpXG4gIH1cblxuICBkcmF3TGltaXRJbWcoaW5kZXgpIHtcbiAgICBsZXQgcG9pbnQsIGltZ1xuICAgIGlmICh0aGlzLm9wdGlvbnMubGltaXRJbWcpIHtcbiAgICAgIGltZyA9IHRoaXMub3B0aW9ucy5saW1pdEltZyBpbnN0YW5jZW9mIEFycmF5ID8gdGhpcy5vcHRpb25zLmxpbWl0SW1nW2luZGV4XSA6IHRoaXMub3B0aW9ucy5saW1pdEltZ1xuICAgIH1cblxuICAgIGlmIChpbWcpIHtcbiAgICAgIGNvbnN0IGFuZ2xlID0gR2VvbWV0cnkubm9ybWFsaXplQW5nbGUodGhpcy5hbmdsZXNbaW5kZXhdKVxuICAgICAgcG9pbnQgPSBuZXcgUG9pbnQoMCwgLWltZy5oZWlnaHQgLyAyKVxuICAgICAgcG9pbnQgPSBwb2ludC5hZGQodGhpcy5vcHRpb25zLmxpbWl0SW1nT2Zmc2V0KVxuICAgICAgdGhpcy5jb250ZXh0LnRyYW5zbGF0ZSh0aGlzLmFyZWFSZWN0YW5nbGUuc2l6ZS54IC8gMiwgdGhpcy5hcmVhUmVjdGFuZ2xlLnNpemUueSAvIDIpXG4gICAgICB0aGlzLmNvbnRleHQucm90YXRlKGFuZ2xlKVxuICAgICAgdGhpcy5jb250ZXh0LmRyYXdJbWFnZShpbWcsIHBvaW50LngsIHBvaW50LnkpXG4gICAgICB0aGlzLmNvbnRleHQuc2V0VHJhbnNmb3JtKDEsIDAsIDAsIDEsIDAsIDApXG4gICAgfVxuICB9XG5cbiAgZ2V0QW5nbGVzRGlmZigpIHtcbiAgICBjb25zdCBhbmdsZXMgPSB0aGlzLmFuZ2xlcy5zbGljZSgxKVxuICAgIGxldCBiYXNlQW5nbGUgPSB0aGlzLmFuZ2xlc1swXVxuXG4gICAgYW5nbGVzLnB1c2goYmFzZUFuZ2xlKVxuICAgIHJldHVybiBhbmdsZXMubWFwKChhbmdsZSkgPT4ge1xuICAgICAgY29uc3QgZGlmZkFuZ2xlID0gR2VvbWV0cnkubm9ybWFsaXplQW5nbGUoYW5nbGUgLSBiYXNlQW5nbGUpXG4gICAgICBiYXNlQW5nbGUgPSBhbmdsZVxuICAgICAgcmV0dXJuIGRpZmZBbmdsZVxuICAgIH0pXG4gIH1cblxuICBnZXRQZXJjZW50KCkge1xuICAgIHJldHVybiB0aGlzLmdldEFuZ2xlc0RpZmYoKS5tYXAoKGRpZmZBbmdsZSkgPT4gZGlmZkFuZ2xlIC8gKDIgKiBNYXRoLlBJKSlcbiAgfVxuXG4gIGdldEFyY0Jpc2VjdHJpeHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0QW5nbGVzRGlmZigpLm1hcCgoZGlmZkFuZ2xlLCBpKSA9PiB7XG4gICAgICByZXR1cm4gR2VvbWV0cnkubm9ybWFsaXplQW5nbGUodGhpcy5hbmdsZXNbaV0gKyBkaWZmQW5nbGUgLyAyKVxuICAgIH0pXG4gIH1cblxuICBnZXRBcmNPblBvaW50KHBvaW50KSB7XG4gICAgY29uc3QgYW5nbGUgPSBHZW9tZXRyeS5nZXRBbmdsZSh0aGlzLm9wdGlvbnMuY2VudGVyLCBwb2ludClcbiAgICBjb25zdCByYWRpdXMgPSBHZW9tZXRyeS5nZXREaXN0YW5jZSh0aGlzLm9wdGlvbnMuY2VudGVyLCBwb2ludClcblxuICAgIGlmIChyYWRpdXMgPiB0aGlzLm9wdGlvbnMucmFkaXVzKSB7XG4gICAgICByZXR1cm4gLTFcbiAgICB9XG5cbiAgICBsZXQgb2Zmc2V0ID0gLTEsIGksIGpcbiAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5hbmdsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChvZmZzZXQgPT09IC0xIHx8IHRoaXMuYW5nbGVzW29mZnNldF0gPiB0aGlzLmFuZ2xlc1tpXSkge1xuICAgICAgICBvZmZzZXQgPSBpXG4gICAgICB9XG4gICAgfVxuICAgIGZvciAoaSA9IDAsIGogPSBvZmZzZXQ7IGkgPCB0aGlzLmFuZ2xlcy5sZW5ndGg7IGkrKywgaiA9IChpICsgb2Zmc2V0KSAlIHRoaXMuYW5nbGVzLmxlbmd0aCkge1xuICAgICAgaWYgKGFuZ2xlIDwgdGhpcy5hbmdsZXNbal0pIHtcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKC0taiA8IDApIHtcbiAgICAgIGogKz0gdGhpcy5hbmdsZXMubGVuZ3RoXG4gICAgfVxuICAgIHJldHVybiBqXG4gIH1cblxuICBzZXRBbmdsZXMoYW5nbGVzKSB7XG4gICAgdGhpcy5hbmdsZXMgPSBhbmdsZXNcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlLCBpKSA9PiB7XG4gICAgICBjb25zdCBhbmdsZSA9IHRoaXMuYW5nbGVzW2ldXG4gICAgICBjb25zdCBoYWxmU2l6ZSA9IGRyYWdnYWJsZS5nZXRTaXplKCkubXVsdCgwLjUpXG4gICAgICBjb25zdCBwb3NpdGlvbiA9IEdlb21ldHJ5LmdldFBvaW50RnJvbVJhZGlhbFN5c3RlbShcbiAgICAgICAgYW5nbGUsXG4gICAgICAgIHRoaXMub3B0aW9ucy50b3VjaFJhZGl1cyxcbiAgICAgICAgdGhpcy5vcHRpb25zLmNlbnRlci5zdWIoaGFsZlNpemUpXG4gICAgICApXG5cbiAgICAgIGRyYWdnYWJsZS5tb3ZlKHBvc2l0aW9uLCAwLCB0cnVlLCB0cnVlKVxuICAgIH0pXG4gICAgdGhpcy5kcmF3KClcbiAgfVxuXG4gIHNldEFjdGl2ZUFyYyhpbmRleCkge1xuICAgIGNvbnN0IGVuYWJsZUluZGV4ZXMgPSBnZXRBcnJheVdpdGhCb3VuZEluZGV4ZXMoaW5kZXgsIHRoaXMuZHJhZ2dhYmxlcy5sZW5ndGgpXG4gICAgdGhpcy5hY3RpdmVBcmNJbmRleCA9IGluZGV4XG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSwgaSkgPT4ge1xuICAgICAgZHJhZ2dhYmxlLmVuYWJsZSA9IGVuYWJsZUluZGV4ZXMuaW5kZXhPZihpKSAhPT0gLTFcbiAgICB9KVxuICAgIHRoaXMuZHJhdygpXG4gIH1cbn1cblxuZXhwb3J0IHsgQ2hhcnQgfVxuIiwiaW1wb3J0IHsgYWRkQ2xhc3MsIHJlbW92ZUNsYXNzIH0gZnJvbSAnLi91dGlscy9jbGFzc2VzJ1xuaW1wb3J0IGdldERlZmF1bHRQYXJlbnQgZnJvbSAnLi91dGlscy9nZXRkZWZhdWx0cGFyZW50J1xuaW1wb3J0IEV2ZW50IGZyb20gJy4vZXZlbnQnXG5pbXBvcnQgZ2V0U3R5bGVQcm9wZXJ0eSBmcm9tICdkZXNhbmRyby1nZXQtc3R5bGUtcHJvcGVydHknXG5pbXBvcnQgeyBib3VuZFRvRWxlbWVudCB9IGZyb20gJy4vYm91bmQnXG5pbXBvcnQgeyBHZW9tZXRyeSwgUG9pbnQsIFJlY3RhbmdsZSB9IGZyb20gJy4vZ2VvbWV0cnknXG5pbXBvcnQgeyBkZWZhdWx0U2NvcGUgfSBmcm9tICcuL3Njb3BlJ1xuXG5jb25zdCBEcmFnZWUgPSB7IEV2ZW50IH0gLy90b2RvIHJlbW92ZSBhZnRlciByZWZhY3RvcmVcblxuY29uc3QgaXNUb3VjaCA9ICdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdywgbW91c2VFdmVudHMgPSB7XG4gICAgc3RhcnQ6ICdtb3VzZWRvd24nLFxuICAgIG1vdmU6ICdtb3VzZW1vdmUnLFxuICAgIGVuZDogJ21vdXNldXAnXG4gIH0sIHRvdWNoRXZlbnRzID0ge1xuICAgIHN0YXJ0OiAndG91Y2hzdGFydCcsXG4gICAgbW92ZTogJ3RvdWNobW92ZScsXG4gICAgZW5kOiAndG91Y2hlbmQnXG4gIH0sXG4gIGV2ZW50cyA9IGlzVG91Y2ggPyB0b3VjaEV2ZW50cyA6IG1vdXNlRXZlbnRzLFxuICBkcmFnZ2FibGVzID0gW10sXG4gIHRyYW5zZm9ybVByb3BlcnR5ID0gZ2V0U3R5bGVQcm9wZXJ0eSgndHJhbnNmb3JtJyksXG4gIHRyYW5zaXRpb25Qcm9wZXJ0eSA9IGdldFN0eWxlUHJvcGVydHkoJ3RyYW5zaXRpb24nKVxuXG5mdW5jdGlvbiBnZXRUb3VjaEJ5SUQoZWxlbWVudCwgdG91Y2hJZCkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGVsZW1lbnQuY2hhbmdlZFRvdWNoZXMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZWxlbWVudC5jaGFuZ2VkVG91Y2hlc1tpXS5pZGVudGlmaWVyID09PSB0b3VjaElkKSB7XG4gICAgICByZXR1cm4gZWxlbWVudC5jaGFuZ2VkVG91Y2hlc1tpXVxuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2Vcbn1cblxuZnVuY3Rpb24gcHJldmVudERvdWJsZUluaXQoZHJhZ2dhYmxlKSB7XG4gIGNvbnN0IG1lc3NhZ2UgPSBcImZvciB0aGlzIGVsZW1lbnQgRHJhZ2VlLkRyYWdnYWJsZSBpcyBhbHJlYWR5IGV4aXN0LCBkb24ndCBjcmVhdGUgaXQgdHdpY2UgXCJcbiAgaWYgKGRyYWdnYWJsZXMuc29tZSgoZXhpc3RpbmcpID0+IGRyYWdnYWJsZS5lbGVtZW50ID09PSBleGlzdGluZy5lbGVtZW50KSkge1xuICAgIHRocm93IG1lc3NhZ2VcbiAgfVxuICBkcmFnZ2FibGVzLnB1c2goZHJhZ2dhYmxlKVxufVxuXG5mdW5jdGlvbiBhZGRUb0RlZmF1bHRTY29wZShkcmFnZ2FibGUpIHtcbiAgZGVmYXVsdFNjb3BlLmFkZERyYWdnYWJsZShkcmFnZ2FibGUpXG59XG5cbmNsYXNzIERyYWdnYWJsZSB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIG9wdGlvbnM9e30pIHtcbiAgICBjb25zdCBwYXJlbnQgPSBvcHRpb25zLnBhcmVudCB8fCBnZXREZWZhdWx0UGFyZW50KGVsZW1lbnQpXG4gICAgdGhpcy50YXJnZXRzID0gW11cbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIHBhcmVudDogcGFyZW50LFxuICAgICAgYm91bmQ6IGJvdW5kVG9FbGVtZW50KHBhcmVudCwgcGFyZW50KSxcbiAgICAgIHN0YXJ0RmlsdGVyOiBmYWxzZSxcbiAgICAgIGlzQ29udGVudEJveFNpemU6IGZhbHNlLFxuICAgICAgcG9zaXRpb246IGZhbHNlXG4gICAgfSwgb3B0aW9ucylcblxuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5oYW5kbGVyID09PSAnc3RyaW5nJykge1xuICAgICAgdGhpcy5oYW5kbGVyID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKG9wdGlvbnMuaGFuZGxlcikgfHwgZWxlbWVudFxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmhhbmRsZXIgPSBvcHRpb25zLmhhbmRsZXIgfHwgZWxlbWVudFxuICAgIH1cblxuICAgIHRoaXMub25FbmQgPSBuZXcgRHJhZ2VlLkV2ZW50KHRoaXMsIHsgaXNSZXZlcnNlOiB0cnVlLCBpc1N0b3BPblRydWU6IHRydWUgfSlcbiAgICB0aGlzLm9uTW92ZSA9IG5ldyBEcmFnZWUuRXZlbnQodGhpcylcbiAgICB0aGlzLm9uU3RhcnQgPSBuZXcgRHJhZ2VlLkV2ZW50KHRoaXMpXG5cbiAgICB0aGlzLm9uRW5kLmFkZCgoKSA9PiB0aGlzLm1vdmUodGhpcy5wb3NpdGlvbiwgMCwgdHJ1ZSwgdHJ1ZSkpXG5cbiAgICBpZiAob3B0aW9ucy5vbkVuZCkge1xuICAgICAgdGhpcy5vbkVuZC5hZGQob3B0aW9ucy5vbkVuZClcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMub25Nb3ZlKSB7XG4gICAgICB0aGlzLm9uTW92ZS5hZGQob3B0aW9ucy5vbk1vdmUpXG4gICAgfVxuICAgIGlmIChvcHRpb25zLm9uU3RhcnQpIHtcbiAgICAgIHRoaXMub25TdGFydC5hZGQob3B0aW9ucy5vblN0YXJ0KVxuICAgIH1cbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50XG4gICAgdGhpcy5ib3VuZCA9IHRoaXMub3B0aW9ucy5ib3VuZFxuICAgIHByZXZlbnREb3VibGVJbml0KHRoaXMpXG4gICAgRHJhZ2dhYmxlLm9uQ3JlYXRlLmZpcmUodGhpcylcbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLl9lbmFibGUgPSB0cnVlXG4gICAgdGhpcy5vZmZzZXQgPSBHZW9tZXRyeS5nZXRPZmZzZXQodGhpcy5lbGVtZW50LCB0aGlzLm9wdGlvbnMucGFyZW50LCB0cnVlKVxuICAgIHRoaXMuZml4UG9zaXRpb24gPSB0aGlzLm9mZnNldFxuICAgIHRoaXMucG9zaXRpb24gPSB0aGlzLm9mZnNldFxuICAgIGlmICh0aGlzLm9wdGlvbnMucG9zaXRpb24pIHtcbiAgICAgIHRoaXMuaW5pdFBvc2l0aW9uID0gdGhpcy5vcHRpb25zLnBvc2l0aW9uXG4gICAgICB0aGlzLm1vdmUodGhpcy5pbml0UG9zaXRpb24sIDAsIHRydWUsIHRydWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5pdFBvc2l0aW9uID0gdGhpcy5vZmZzZXRcbiAgICB9XG4gICAgdGhpcy5fZHJhZ1N0YXJ0ID0gdGhpcy5kcmFnU3RhcnQuYmluZCh0aGlzKVxuICAgIHRoaXMuX2RyYWdNb3ZlID0gdGhpcy5kcmFnTW92ZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5fZHJhZ0VuZCA9IHRoaXMuZHJhZ0VuZC5iaW5kKHRoaXMpXG5cbiAgICB0aGlzLmhhbmRsZXIuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5zdGFydCwgdGhpcy5fZHJhZ1N0YXJ0KVxuICAgIHRoaXMuaGFuZGxlci5hZGRFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLnN0YXJ0LCB0aGlzLl9kcmFnU3RhcnQpXG5cbiAgICBpZiAodGhpcy5ib3VuZC5yZWZyZXNoKSB7XG4gICAgICB0aGlzLmJvdW5kLnJlZnJlc2goKVxuICAgIH1cbiAgfVxuXG4gIHJlaW5pdCgpIHtcbiAgICB0aGlzLm9mZnNldCA9IEdlb21ldHJ5LmdldE9mZnNldCh0aGlzLmVsZW1lbnQsIHRoaXMub3B0aW9ucy5wYXJlbnQsIHRydWUpXG4gICAgdGhpcy5maXhQb3NpdGlvbiA9IHRoaXMub2Zmc2V0XG4gICAgdGhpcy5wb3NpdGlvbiA9IHRoaXMub2Zmc2V0XG4gICAgaWYgKHRoaXMub3B0aW9ucy5wb3NpdGlvbikge1xuICAgICAgdGhpcy5pbml0UG9zaXRpb24gPSB0aGlzLm9wdGlvbnMucG9zaXRpb25cbiAgICAgIHRoaXMubW92ZSh0aGlzLmluaXRQb3NpdGlvbiwgMCwgdHJ1ZSwgdHJ1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbml0UG9zaXRpb24gPSB0aGlzLm9mZnNldFxuICAgIH1cblxuICAgIGlmICh0aGlzLmJvdW5kLnJlZnJlc2gpIHtcbiAgICAgIHRoaXMuYm91bmQucmVmcmVzaCgpXG4gICAgfVxuICB9XG5cbiAgZ2V0U2l6ZShfcmVjYWx1bGF0ZSkge1xuICAgIHJldHVybiBHZW9tZXRyeS5nZXRTaXplT2ZFbGVtZW50KHRoaXMuZWxlbWVudCwgdGhpcy5vcHRpb25zLmlzQ29udGVudEJveFNpemUpXG4gIH1cblxuICBnZXRQb3NpdGlvbigpIHtcbiAgICB0aGlzLnBvc2l0aW9uID0gdGhpcy5vZmZzZXQuYWRkKHRoaXMuX3RyYW5zZm9ybVBvc2l0aW9uIHx8IG5ldyBQb2ludCgwLCAwKSlcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvblxuICB9XG5cbiAgZ2V0Q2VudGVyKCkge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uLmFkZCh0aGlzLmdldFNpemUoKS5tdWx0KDAuNSkpXG4gIH1cblxuICBfc2V0VHJhbnNsYXRlKHBvaW50KSB7XG4gICAgdGhpcy5fdHJhbnNmb3JtUG9zaXRpb24gPSBwb2ludFxuXG4gICAgbGV0IHRyYW5zZm9ybSA9IHRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2Zvcm1Qcm9wZXJ0eV1cbiAgICBsZXQgdHJhbnNsYXRlQ3NzID0gJyB0cmFuc2xhdGUzZCgnICsgcG9pbnQueCArICdweCwnICsgcG9pbnQueSArICdweCwgMHB4KSdcblxuICAgIGNvbnN0IHVhID0gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnRcbiAgICBjb25zdCBtc2llID0gdWEuaW5kZXhPZignTVNJRSAnKVxuXG4gICAgaWYgKG1zaWUpIHtcbiAgICAgIHRyYW5zbGF0ZUNzcyA9ICcgdHJhbnNsYXRlKCcgKyBwb2ludC54ICsgJ3B4LCcgKyBwb2ludC55ICsgJ3B4KSdcbiAgICAgIGlmICghL3RyYW5zbGF0ZVxcKFteKV0rXFwpLy50ZXN0KHRyYW5zZm9ybSkpIHtcbiAgICAgICAgdHJhbnNmb3JtICs9IHRyYW5zbGF0ZUNzc1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHJhbnNmb3JtID0gdHJhbnNmb3JtLnJlcGxhY2UoL3RyYW5zbGF0ZVxcKFteKV0rXFwpLywgdHJhbnNsYXRlQ3NzKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIS90cmFuc2xhdGUzZFxcKFteKV0rXFwpLy50ZXN0KHRyYW5zZm9ybSkpIHtcbiAgICAgICAgdHJhbnNmb3JtICs9IHRyYW5zbGF0ZUNzc1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHJhbnNmb3JtID0gdHJhbnNmb3JtLnJlcGxhY2UoL3RyYW5zbGF0ZTNkXFwoW14pXStcXCkvLCB0cmFuc2xhdGVDc3MpXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zZm9ybVByb3BlcnR5XSA9IHRyYW5zZm9ybVxuICB9XG5cbiAgbW92ZShwb2ludCwgdGltZT0wLCBpc0ZpeD1mYWxzZSwgaXNTaWxlbnQ9ZmFsc2UpIHtcbiAgICBwb2ludCA9IHBvaW50LmNsb25lKClcbiAgICBpZiAoaXNGaXgpIHtcbiAgICAgIHRoaXMuZml4UG9zaXRpb24gPSBwb2ludFxuICAgIH1cblxuICAgIHRoaXMuZGV0ZXJtaW5lRGlyZWN0aW9uKHBvaW50KVxuXG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvaW50XG5cbiAgICBpZiAodHJhbnNpdGlvblByb3BlcnR5KSB7XG4gICAgICB0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNpdGlvblByb3BlcnR5XSA9IHRpbWUgKyAnbXMnXG4gICAgfVxuXG4gICAgdGhpcy5fc2V0VHJhbnNsYXRlKHBvaW50LnN1Yih0aGlzLm9mZnNldCkpXG4gICAgaWYgKCFpc1NpbGVudCkge1xuICAgICAgdGhpcy5vbk1vdmUuZmlyZSgpXG4gICAgfVxuICB9XG5cbiAgcmVmcmVzaFBvc2l0aW9uICgpIHtcbiAgICB0aGlzLnNldFBvc2l0aW9uKHRoaXMuZ2V0UG9zaXRpb24oKSlcbiAgfVxuXG4gIHNldFBvc2l0aW9uKHBvaW50KSB7XG4gICAgcG9pbnQgPSBwb2ludC5jbG9uZSgpXG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvaW50XG5cbiAgICBpZiAodHJhbnNpdGlvblByb3BlcnR5KSB7XG4gICAgICB0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNpdGlvblByb3BlcnR5XSA9ICcwbXMnXG4gICAgfVxuXG4gICAgdGhpcy5fc2V0VHJhbnNsYXRlKHBvaW50LnN1Yih0aGlzLm9mZnNldCkpXG4gIH1cblxuICBzZXRaZXJvVHJhbnNpdGlvbigpIHtcbiAgICBpZiAodHJhbnNpdGlvblByb3BlcnR5KSB7XG4gICAgICB0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNpdGlvblByb3BlcnR5XSA9ICcwbXMnXG4gICAgfVxuICB9XG5cbiAgZGV0ZXJtaW5lRGlyZWN0aW9uKHBvaW50KSB7XG4gICAgdGhpcy5sZWZ0RGlyZWN0aW9uID0gKHRoaXMucG9zaXRpb24ueCA8IHBvaW50LngpXG4gICAgdGhpcy5yaWdodERpcmVjdGlvbiA9ICh0aGlzLnBvc2l0aW9uLnggPiBwb2ludC54KVxuICAgIHRoaXMudXBEaXJlY3Rpb24gPSAodGhpcy5wb3NpdGlvbi55ID4gcG9pbnQueSlcbiAgICB0aGlzLmRvd25EaXJlY3Rpb24gPSAodGhpcy5wb3NpdGlvbi55IDwgcG9pbnQueSlcbiAgfVxuXG4gIGRyYWdTdGFydChldmVudCkge1xuICAgIHRoaXMuY3VycmVudEV2ZW50ID0gZXZlbnRcbiAgICBpZiAoIXRoaXMuX2VuYWJsZSB8fCAodGhpcy5vcHRpb25zLnN0YXJ0RmlsdGVyICYmICF0aGlzLm9wdGlvbnMuc3RhcnRGaWx0ZXIoZXZlbnQpKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgaXNUb3VjaEV2ZW50ID0gKGlzVG91Y2ggJiYgKGV2ZW50IGluc3RhbmNlb2Ygd2luZG93LlRvdWNoRXZlbnQpKVxuXG4gICAgdGhpcy5fc3RhcnRUb3VjaFBvaW50ID0gbmV3IFBvaW50KGlzVG91Y2hFdmVudCA/IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VYIDogZXZlbnQuY2xpZW50WCwgaXNUb3VjaEV2ZW50ID8gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVkgOiBldmVudC5jbGllbnRZKVxuXG4gICAgdGhpcy5fc3RhcnRQb3NpdGlvbiA9IHRoaXMuZ2V0UG9zaXRpb24oKVxuICAgIGlmIChpc1RvdWNoRXZlbnQpIHtcbiAgICAgIHRoaXMuX3RvdWNoSWQgPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5pZGVudGlmaWVyXG4gICAgfVxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgaWYgKCEoZXZlbnQudGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJbnB1dEVsZW1lbnQgfHxcbiAgICAgICAgICBldmVudC50YXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElucHV0RWxlbWVudCkpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICB9IGVsc2Uge1xuICAgICAgZXZlbnQudGFyZ2V0LmZvY3VzKClcbiAgICB9XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlKVxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUpXG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcblxuICAgIHRoaXMuaXNEcmFnZ2luZyA9IHRydWVcblxuICAgIHRoaXMub25TdGFydC5maXJlKGV2ZW50KVxuICAgIGFkZENsYXNzKHRoaXMuZWxlbWVudCwgJ2FjdGl2ZScpXG4gICAgdGhpcy5vbk1vdmUuZmlyZShldmVudClcbiAgfVxuXG4gIGRyYWdNb3ZlKGV2ZW50KSB7XG4gICAgdGhpcy5jdXJyZW50RXZlbnQgPSBldmVudFxuICAgIGxldCB0b3VjaFxuXG4gICAgY29uc3QgaXNUb3VjaEV2ZW50ID0gKGlzVG91Y2ggJiYgKGV2ZW50IGluc3RhbmNlb2Ygd2luZG93LlRvdWNoRXZlbnQpKVxuICAgIGlmIChpc1RvdWNoRXZlbnQpIHtcbiAgICAgIHRvdWNoID0gZ2V0VG91Y2hCeUlEKGV2ZW50LCB0aGlzLl90b3VjaElkKVxuXG4gICAgICBpZiAoIXRvdWNoKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIGNvbnN0IHRvdWNoUG9pbnQgPSBuZXcgUG9pbnQoaXNUb3VjaEV2ZW50ID8gdG91Y2gucGFnZVggOiBldmVudC5jbGllbnRYLCBpc1RvdWNoRXZlbnQgPyB0b3VjaC5wYWdlWSA6IGV2ZW50LmNsaWVudFkpXG4gICAgbGV0IHBvaW50ID0gdGhpcy5fc3RhcnRQb3NpdGlvbi5hZGQodG91Y2hQb2ludC5zdWIodGhpcy5fc3RhcnRUb3VjaFBvaW50KSlcbiAgICBwb2ludCA9IHRoaXMuYm91bmQocG9pbnQsIHRoaXMuZ2V0U2l6ZSgpKVxuICAgIHRoaXMudG91Y2hQb2ludCA9IHRvdWNoUG9pbnRcbiAgICB0aGlzLm1vdmUocG9pbnQsIDApXG4gIH1cblxuICBkcmFnRW5kKGV2ZW50KSB7XG4gICAgY29uc3QgaXNUb3VjaEV2ZW50ID0gKGlzVG91Y2ggJiYgKGV2ZW50IGluc3RhbmNlb2Ygd2luZG93LlRvdWNoRXZlbnQpKVxuXG4gICAgaWYgKGlzVG91Y2hFdmVudCAmJiAhZ2V0VG91Y2hCeUlEKGV2ZW50LCB0aGlzLl90b3VjaElkKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdGhpcy5vbkVuZC5maXJlKGV2ZW50KVxuXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5tb3ZlLCB0aGlzLl9kcmFnTW92ZSlcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlKVxuXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQpXG5cbiAgICB0aGlzLmlzRHJhZ2dpbmcgPSBmYWxzZVxuICAgIHJlbW92ZUNsYXNzKHRoaXMuZWxlbWVudCwgJ2FjdGl2ZScpXG4gIH1cblxuICBnZXRSZWN0YW5nbGUoKSB7XG4gICAgcmV0dXJuIG5ldyBSZWN0YW5nbGUodGhpcy5wb3NpdGlvbiwgdGhpcy5nZXRTaXplKCkpXG4gIH1cblxuICByZWZyZXNoKCkge1xuICAgIHRoaXMuZ2V0U2l6ZSh0cnVlKVxuICAgIGlmICh0aGlzLmJvdW5kLnJlZnJlc2gpIHtcbiAgICAgIHRoaXMuYm91bmQucmVmcmVzaCgpXG4gICAgfVxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLmhhbmRsZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5zdGFydCwgdGhpcy5fZHJhZ1N0YXJ0KVxuICAgIHRoaXMuaGFuZGxlci5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLnN0YXJ0LCB0aGlzLl9kcmFnU3RhcnQpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5tb3ZlLCB0aGlzLl9kcmFnTW92ZSlcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuZW5kLCB0aGlzLl9kcmFnRW5kKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuZW5kLCB0aGlzLl9kcmFnRW5kKVxuXG4gICAgdGhpcy5vbkVuZC5yZXNldCgpXG4gICAgdGhpcy5vbk1vdmUucmVzZXQoKVxuICB9XG5cbiAgZ2V0IGVuYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZW5hYmxlXG4gIH1cblxuICBzZXQgZW5hYmxlKGVuYWJsZSkge1xuICAgIGlmIChlbmFibGUpIHtcbiAgICAgIHJlbW92ZUNsYXNzKHRoaXMuZWxlbWVudCwgJ2Rpc2FibGUnKVxuICAgIH0gZWxzZSB7XG4gICAgICBhZGRDbGFzcyh0aGlzLmVsZW1lbnQsICdkaXNhYmxlJylcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fZW5hYmxlID0gZW5hYmxlXG4gIH1cbn1cblxuRHJhZ2dhYmxlLm9uQ3JlYXRlID0gbmV3IERyYWdlZS5FdmVudChEcmFnZ2FibGUsIHsgaXNSZXZlcnNlOiB0cnVlLCBpc1N0b3BPblRydWU6IHRydWUgfSlcbkRyYWdnYWJsZS5vbkNyZWF0ZS5hZGQoYWRkVG9EZWZhdWx0U2NvcGUpXG5cbmV4cG9ydCB7IERyYWdnYWJsZSwgZXZlbnRzIH1cbiIsIid1c2Ugc3RyaWN0J1xuXG5mdW5jdGlvbiBFdmVudChjb250ZXh0LCBvcHRpb25zID0ge30pIHtcbiAgdGhpcy5mdW5jcyA9IFtdXG4gIHRoaXMuY29udGV4dCA9IGNvbnRleHRcbiAgdGhpcy5pc1JldmVyc2UgPSBvcHRpb25zLmlzUmV2ZXJzZSB8fCBmYWxzZVxuICB0aGlzLmlzU3RvcE9uVHJ1ZSA9IG9wdGlvbnMuaXNTdG9wT25UcnVlIHx8IGZhbHNlXG59XG5cbkV2ZW50LnByb3RvdHlwZS5maXJlID0gZnVuY3Rpb24oKSB7XG4gIGNvbnN0IGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cylcbiAgY29uc3QgZnMgPSB0aGlzLmlzUmV2ZXJzZSA/IHRoaXMuZnVuY3Muc2xpY2UoKS5yZXZlcnNlKCkgOiB0aGlzLmZ1bmNzXG4gIGxldCByZXRWYWx1ZVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZnMubGVuZ3RoOyBpKyspIHtcbiAgICByZXRWYWx1ZSA9IGZzW2ldLmFwcGx5KHRoaXMuY29udGV4dCwgYXJncylcbiAgICBpZiAodGhpcy5pc1N0b3BPblRydWUgJiYgcmV0VmFsdWUpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICB9XG4gIHJldHVybiAhdGhpcy5pc1N0b3BPblRydWVcbn1cblxuRXZlbnQucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uKGYpIHtcbiAgdGhpcy5mdW5jcy5wdXNoKGYpXG59XG5cbkV2ZW50LnByb3RvdHlwZS51bnNoaWZ0ID0gZnVuY3Rpb24oZikge1xuICB0aGlzLmZ1bmNzLnVuc2hpZnQoZilcbn1cblxuRXZlbnQucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uKGYpIHtcbiAgY29uc3QgaW5kZXggPSB0aGlzLmZ1bmNzLmluZGV4T2YoZilcbiAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgIHRoaXMuZnVuY3Muc3BsaWNlKGluZGV4LCAxKVxuICB9XG59XG5cbkV2ZW50LnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uKF9mKSB7XG4gIHRoaXMuZnVuY3MgPSBbXVxufVxuXG5leHBvcnQgZGVmYXVsdCBFdmVudFxuIiwiY2xhc3MgUG9pbnQge1xuICBjb25zdHJ1Y3Rvcih4LCB5KSB7XG4gICAgdGhpcy54ID0geFxuICAgIHRoaXMueSA9IHlcbiAgfVxuXG4gIGFkZChwKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLnggKyBwLngsIHRoaXMueSArIHAueSlcbiAgfVxuXG4gIHN1YihwKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLnggLSBwLngsIHRoaXMueSAtIHAueSlcbiAgfVxuXG4gIG11bHQoaykge1xuICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy54ICogaywgdGhpcy55ICogaylcbiAgfVxuXG4gIG5lZ2F0aXZlKCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQoLXRoaXMueCwgLXRoaXMueSlcbiAgfVxuXG4gIGNvbXBhcmUocCkge1xuICAgIHJldHVybiAodGhpcy54ID09PSBwLnggJiYgdGhpcy55ID09PSBwLnkpXG4gIH1cblxuICBjbG9uZSgpIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMueCwgdGhpcy55KVxuICB9XG5cbiAgdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIGB7eD0ke3RoaXMueH0seT0ke3RoaXMueX1gXG4gIH1cbn1cblxuY2xhc3MgUmVjdGFuZ2xlIHtcbiAgY29uc3RydWN0b3IocG9zaXRpb24sIHNpemUpIHtcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb25cbiAgICB0aGlzLnNpemUgPSBzaXplXG4gIH1cblxuICBnZXRQMSgpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvblxuICB9XG5cbiAgZ2V0UDIoKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLnBvc2l0aW9uLnggKyB0aGlzLnNpemUueCwgdGhpcy5wb3NpdGlvbi55KVxuICB9XG5cbiAgZ2V0UDMoKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb24uYWRkKHRoaXMuc2l6ZSlcbiAgfVxuXG4gIGdldFA0KCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLnNpemUueSlcbiAgfVxuXG4gIGdldENlbnRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbi5hZGQodGhpcy5zaXplLm11bHQoMC41KSlcbiAgfVxuXG4gIG9yKHJlY3QpIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IG5ldyBQb2ludChNYXRoLm1pbih0aGlzLnBvc2l0aW9uLngsIHJlY3QucG9zaXRpb24ueCksIE1hdGgubWluKHRoaXMucG9zaXRpb24ueSwgcmVjdC5wb3NpdGlvbi55KSlcbiAgICBjb25zdCBzaXplID0gKG5ldyBQb2ludChNYXRoLm1heCh0aGlzLnBvc2l0aW9uLnggKyB0aGlzLnNpemUueCwgcmVjdC5wb3NpdGlvbi54ICsgcmVjdC5zaXplLngpLCBNYXRoLm1heCh0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLnNpemUueSwgcmVjdC5wb3NpdGlvbi55ICsgcmVjdC5zaXplLnkpKSkuc3ViKHBvc2l0aW9uKVxuICAgIHJldHVybiBuZXcgUmVjdGFuZ2xlKHBvc2l0aW9uLCBzaXplKVxuICB9XG5cbiAgYW5kKHJlY3QpIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IG5ldyBQb2ludChNYXRoLm1heCh0aGlzLnBvc2l0aW9uLngsIHJlY3QucG9zaXRpb24ueCksIE1hdGgubWF4KHRoaXMucG9zaXRpb24ueSwgcmVjdC5wb3NpdGlvbi55KSlcbiAgICBjb25zdCBzaXplID0gKG5ldyBQb2ludChNYXRoLm1pbih0aGlzLnBvc2l0aW9uLnggKyB0aGlzLnNpemUueCwgcmVjdC5wb3NpdGlvbi54ICsgcmVjdC5zaXplLngpLCBNYXRoLm1pbih0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLnNpemUueSwgcmVjdC5wb3NpdGlvbi55ICsgcmVjdC5zaXplLnkpKSkuc3ViKHBvc2l0aW9uKVxuICAgIGlmIChzaXplLnggPD0gMCB8fCBzaXplLnkgPD0gMCkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBSZWN0YW5nbGUocG9zaXRpb24sIHNpemUpXG4gIH1cblxuICBpbmNsdWRlUG9pbnQocCkge1xuICAgIHJldHVybiAhKHRoaXMucG9zaXRpb24ueCA+IHAueCB8fCB0aGlzLnBvc2l0aW9uLnggKyB0aGlzLnNpemUueCA8IHAueCB8fCB0aGlzLnBvc2l0aW9uLnkgPiBwLnkgfHwgdGhpcy5wb3NpdGlvbi55ICsgdGhpcy5zaXplLnkgPCBwLnkpXG4gIH1cblxuICBpbmNsdWRlUmVjdGFuZ2xlKHJlY3RhbmdsZSkge1xuICAgIHJldHVybiB0aGlzLmluY2x1ZGVQb2ludChyZWN0YW5nbGUucG9zaXRpb24pICYmIHRoaXMuaW5jbHVkZVBvaW50KHJlY3RhbmdsZS5nZXRQMygpKVxuICB9XG5cbiAgbW92ZVRvQm91bmQocmVjdCwgYXhpcykge1xuICAgIGxldCBzZWxBeGlzLCBjcm9zc1JlY3RhbmdsZVxuICAgIGlmIChheGlzKSB7XG4gICAgICBzZWxBeGlzID0gYXhpc1xuICAgIH0gZWxzZSB7XG4gICAgICBjcm9zc1JlY3RhbmdsZSA9IHRoaXMuYW5kKHJlY3QpXG4gICAgICBpZiAoIWNyb3NzUmVjdGFuZ2xlKSB7XG4gICAgICAgIHJldHVybiByZWN0XG4gICAgICB9XG4gICAgICBzZWxBeGlzID0gY3Jvc3NSZWN0YW5nbGUuc2l6ZS54ID4gY3Jvc3NSZWN0YW5nbGUuc2l6ZS55ID8gJ3knIDogJ3gnXG4gICAgfVxuICAgIGNvbnN0IHRoaXNDZW50ZXIgPSB0aGlzLmdldENlbnRlcigpXG4gICAgY29uc3QgcmVjdENlbnRlciA9IHJlY3QuZ2V0Q2VudGVyKClcbiAgICBjb25zdCBzaWduID0gdGhpc0NlbnRlcltzZWxBeGlzXSA+IHJlY3RDZW50ZXJbc2VsQXhpc10gPyAtMSA6IDFcbiAgICBjb25zdCBvZmZzZXQgPSBzaWduID4gMCA/IHRoaXMucG9zaXRpb25bc2VsQXhpc10gKyB0aGlzLnNpemVbc2VsQXhpc10gLSByZWN0LnBvc2l0aW9uW3NlbEF4aXNdIDogdGhpcy5wb3NpdGlvbltzZWxBeGlzXSAtIChyZWN0LnBvc2l0aW9uW3NlbEF4aXNdICsgcmVjdC5zaXplW3NlbEF4aXNdKVxuICAgIHJlY3QucG9zaXRpb25bc2VsQXhpc10gPSByZWN0LnBvc2l0aW9uW3NlbEF4aXNdICsgb2Zmc2V0XG4gICAgcmV0dXJuIHJlY3RcbiAgfVxuXG4gIGdldFNxdWFyZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zaXplLnggKiB0aGlzLnNpemUueVxuICB9XG5cbiAgc3R5bGVBcHBseShlbCkge1xuICAgIGVsID0gZWwgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5kJylcbiAgICBlbC5zdHlsZS5sZWZ0ID0gdGhpcy5wb3NpdGlvbi54ICsgJ3B4J1xuICAgIGVsLnN0eWxlLnRvcCA9IHRoaXMucG9zaXRpb24ueSArICdweCdcbiAgICBlbC5zdHlsZS53aWR0aCA9IHRoaXMuc2l6ZS54ICsgJ3B4J1xuICAgIGVsLnN0eWxlLmhlaWdodCA9IHRoaXMuc2l6ZS55ICsgJ3B4J1xuICB9XG5cbiAgZ3Jvd3RoKHNpemUpIHtcbiAgICB0aGlzLnNpemUgPSB0aGlzLnNpemUuYWRkKHNpemUpXG4gICAgdGhpcy5wb3NpdGlvbiA9IHRoaXMucG9zaXRpb24uYWRkKHNpemUubXVsdCgtMC41KSlcbiAgfVxuXG4gIGdldE1pblNpZGUoKSB7XG4gICAgcmV0dXJuIE1hdGgubWluKHRoaXMuc2l6ZS54LCB0aGlzLnNpemUueSlcbiAgfVxufVxuXG4vKioqKioqKioqKioqKioqKiovXG5jb25zdCBHZW9tZXRyeSA9IHtcbiAgZ2V0RGlzdGFuY2UocDEsIHAyKSB7XG4gICAgY29uc3QgZHggPSBwMS54IC0gcDIueCwgZHkgPSBwMS55IC0gcDIueVxuICAgIHJldHVybiBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpXG4gIH0sXG4gIGRpc3RhbmNlKHAxLCBwMikge1xuICAgIHJldHVybiBHZW9tZXRyeS5nZXREaXN0YW5jZShwMSwgcDIpXG4gIH0sXG4gIGdldFhEaWZmZXJlbmNlKHAxLCBwMikge1xuICAgIHJldHVybiBNYXRoLmFicyhwMS54IC0gcDIueClcbiAgfSxcbiAgZ2V0WURpZmZlcmVuY2UocDEsIHAyKSB7XG4gICAgcmV0dXJuIE1hdGguYWJzKHAxLnkgLSBwMi55KVxuICB9LFxuICB0cmFuc2Zvcm1lZFNwYWNlRGlzdGFuY2VGYWN0b3J5KG9wdGlvbnMpIHtcbiAgICByZXR1cm4gKHAxLCBwMikgPT4ge1xuICAgICAgcmV0dXJuIE1hdGguc3FydChcbiAgICAgICAgTWF0aC5wb3cob3B0aW9ucy54ICogTWF0aC5hYnMocDEueCAtIHAyLngpLCAyKSArXG4gICAgICAgIE1hdGgucG93KG9wdGlvbnMueSAqIE1hdGguYWJzKHAxLnkgLSBwMi55KSwgMilcbiAgICAgIClcbiAgICB9XG4gIH0sXG4gIGluZGV4T2ZOZWFyZXN0UG9pbnQoYXJyLCB2YWwsIHJhZGl1cywgZ2V0RGlzdGFuY2UpIHtcbiAgICBsZXQgc2l6ZSwgaW5kZXggPSAwLCBpLCB0ZW1wXG4gICAgZ2V0RGlzdGFuY2UgPSBnZXREaXN0YW5jZSB8fCBHZW9tZXRyeS5nZXREaXN0YW5jZVxuICAgIGlmIChhcnIubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gLTFcbiAgICB9XG4gICAgc2l6ZSA9IGdldERpc3RhbmNlKGFyclswXSwgdmFsKVxuICAgIGZvciAoaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRlbXAgPSBnZXREaXN0YW5jZShhcnJbaV0sIHZhbClcbiAgICAgIGlmICh0ZW1wIDwgc2l6ZSkge1xuICAgICAgICBzaXplID0gdGVtcFxuICAgICAgICBpbmRleCA9IGlcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHJhZGl1cyA+PSAwICYmIHNpemUgPiByYWRpdXMpIHtcbiAgICAgIHJldHVybiAtMVxuICAgIH1cbiAgICByZXR1cm4gaW5kZXhcbiAgfSxcbiAgYm91bmQobWluLCBtYXgsIHZhbCkge1xuICAgIHJldHVybiBNYXRoLm1heChtaW4sIE1hdGgubWluKG1heCwgdmFsKSlcbiAgfSxcbiAgYm91bmRQb2ludChtaW4sIG1heCwgdmFsKSB7XG4gICAgY29uc3QgeCA9IE1hdGgubWF4KG1pbi54LCBNYXRoLm1pbihtYXgueCwgdmFsLngpKVxuICAgIGNvbnN0IHkgPSBNYXRoLm1heChtaW4ueSwgTWF0aC5taW4obWF4LnksIHZhbC55KSlcbiAgICByZXR1cm4gbmV3IFBvaW50KHgsIHkpXG4gIH0sXG4gICAgLy9SZXR1cm4gY3Jvc3NpbmcgcG9pbnQgb2YgdHdvIGxpbmVzXG4gIGRpcmVjdENyb3NzaW5nKEwxUDEsIEwxUDIsIEwyUDEsIEwyUDIpIHtcbiAgICBsZXQgdGVtcCwgazEsIGsyLCBiMSwgYjIsIHgsIHlcbiAgICBpZiAoTDJQMS54ID09PSBMMlAyLngpIHtcbiAgICAgIHRlbXAgPSBMMlAxXG4gICAgICBMMlAxID0gTDFQMVxuICAgICAgTDFQMSA9IHRlbXBcbiAgICAgIHRlbXAgPSBMMlAyXG4gICAgICBMMlAyID0gTDFQMlxuICAgICAgTDFQMiA9IHRlbXBcbiAgICB9XG4gICAgaWYgKEwxUDEueCA9PT0gTDFQMi54KSB7XG4gICAgICBrMiA9IChMMlAyLnkgLSBMMlAxLnkpIC8gKEwyUDIueCAtIEwyUDEueClcbiAgICAgIGIyID0gKEwyUDIueCAqIEwyUDEueSAtIEwyUDEueCAqIEwyUDIueSkgLyAoTDJQMi54IC0gTDJQMS54KVxuICAgICAgeCA9IEwxUDEueFxuICAgICAgeSA9IHggKiBrMiArIGIyXG4gICAgICByZXR1cm4gbmV3IFBvaW50KHgsIHkpXG4gICAgfSBlbHNlIHtcbiAgICAgIGsxID0gKEwxUDIueSAtIEwxUDEueSkgLyAoTDFQMi54IC0gTDFQMS54KVxuICAgICAgYjEgPSAoTDFQMi54ICogTDFQMS55IC0gTDFQMS54ICogTDFQMi55KSAvIChMMVAyLnggLSBMMVAxLngpXG4gICAgICBrMiA9IChMMlAyLnkgLSBMMlAxLnkpIC8gKEwyUDIueCAtIEwyUDEueClcbiAgICAgIGIyID0gKEwyUDIueCAqIEwyUDEueSAtIEwyUDEueCAqIEwyUDIueSkgLyAoTDJQMi54IC0gTDJQMS54KVxuICAgICAgeCA9IChiMSAtIGIyKSAvIChrMiAtIGsxKVxuICAgICAgeSA9IHggKiBrMSArIGIxXG4gICAgICByZXR1cm4gbmV3IFBvaW50KHgsIHkpXG4gICAgfVxuICB9LFxuICBib3VuZFRvU2VnbWVudChMUDEsIExQMiwgUCkge1xuICAgIGxldCB4LCB5XG4gICAgeCA9IEdlb21ldHJ5LmJvdW5kKE1hdGgubWluKExQMS54LCBMUDIueCksIE1hdGgubWF4KExQMS54LCBMUDIueCksIFAueClcbiAgICBpZiAoeCAhPT0gUC54KSB7XG4gICAgICB5ID0gKHggPT09IExQMS54KSA/IExQMS55IDogTFAyLnlcbiAgICAgIFAgPSBuZXcgUG9pbnQoeCwgeSlcbiAgICB9XG5cbiAgICB5ID0gR2VvbWV0cnkuYm91bmQoTWF0aC5taW4oTFAxLnksIExQMi55KSwgTWF0aC5tYXgoTFAxLnksIExQMi55KSwgUC55KVxuICAgIGlmICh5ICE9PSBQLnkpIHtcbiAgICAgIHggPSAoeSA9PT0gTFAxLnkpID8gTFAxLnggOiBMUDIueFxuICAgICAgUCA9IG5ldyBQb2ludCh4LCB5KVxuICAgIH1cblxuICAgIHJldHVybiBQXG4gIH0sXG4gIGJvdW5kVG9MaW5lKEEsIEIsIFApIHtcbiAgICBjb25zdCBBUCA9IG5ldyBQb2ludChQLnggLSBBLngsIFAueSAtIEEueSksXG4gICAgICBBQiA9IG5ldyBQb2ludChCLnggLSBBLngsIEIueSAtIEEueSksXG4gICAgICBhYjIgPSBBQi54ICogQUIueCArIEFCLnkgKiBBQi55LFxuICAgICAgYXBfYWIgPSBBUC54ICogQUIueCArIEFQLnkgKiBBQi55LFxuICAgICAgdCA9IGFwX2FiIC8gYWIyXG4gICAgcmV0dXJuIG5ldyBQb2ludChBLnggKyBBQi54ICogdCwgQS55ICsgQUIueSAqIHQpXG4gIH0sXG4gIGdldFBvaW50SW5MaW5lKExQMSwgTFAyLCBwZXJjZW50KSB7XG4gICAgY29uc3QgZHggPSBMUDIueCAtIExQMS54LCBkeSA9IExQMi55IC0gTFAxLnlcbiAgICByZXR1cm4gbmV3IFBvaW50KExQMS54ICsgcGVyY2VudCAqIGR4LCBMUDEueSArIHBlcmNlbnQgKiBkeSlcbiAgfSxcbiAgZ2V0UG9pbnRJbkxpbmVCeUxlbmdodChMUDEsIExQMiwgbGVuZ2h0KSB7XG4gICAgY29uc3QgZHggPSBMUDIueCAtIExQMS54LCBkeSA9IExQMi55IC0gTFAxLnksIHBlcmNlbnQgPSBsZW5naHQgLyBHZW9tZXRyeS5kaXN0YW5jZShMUDEsIExQMilcbiAgICByZXR1cm4gbmV3IFBvaW50KExQMS54ICsgcGVyY2VudCAqIGR4LCBMUDEueSArIHBlcmNlbnQgKiBkeSlcbiAgfSxcbiAgY3JlYXRlUmVjdGFuZ2xlRnJvbUVsZW1lbnQoZWwsIHBhcmVudCwgaXNDb250ZW50Qm94U2l6ZSwgaXNDb25zaWRlclRyYW5zbGF0ZSkge1xuICAgIGNvbnN0IHNpemUgPSB0aGlzLmdldFNpemVPZkVsZW1lbnQoZWwsIGlzQ29udGVudEJveFNpemUpXG4gICAgcmV0dXJuIG5ldyBSZWN0YW5nbGUodGhpcy5nZXRPZmZzZXQoZWwsIHBhcmVudCB8fCBlbC5wYXJlbnROb2RlLCBpc0NvbnNpZGVyVHJhbnNsYXRlKSwgc2l6ZSlcbiAgfSxcbiAgZ2V0U3VtVmFsdWVPZlN0eWxlUnVsZShlbGVtZW50LCBydWxlcykge1xuICAgIHJldHVybiBydWxlcy5yZWR1Y2UoKHN1bSwgcnVsZSkgPT4ge1xuICAgICAgcmV0dXJuIHN1bSArIHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpW3J1bGVdfHwwKVxuICAgIH0sIDApXG4gIH0sXG4gIGdldFNpemVPZkVsZW1lbnQoZWwsIGlzQ29udGVudEJveFNpemUpIHtcbiAgICBsZXQgd2lkdGggPSBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbClbJ3dpZHRoJ10pLCBoZWlnaHQgPSBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbClbJ2hlaWdodCddKVxuICAgIGlmICghaXNDb250ZW50Qm94U2l6ZSkge1xuICAgICAgd2lkdGggKz0gdGhpcy5nZXRTdW1WYWx1ZU9mU3R5bGVSdWxlKGVsLCBbJ3BhZGRpbmctbGVmdCcsICdwYWRkaW5nLXJpZ2h0JywgJ2JvcmRlci1sZWZ0LXdpZHRoJywgJ2JvcmRlci1yaWdodC13aWR0aCddKVxuICAgICAgaGVpZ2h0ICs9IHRoaXMuZ2V0U3VtVmFsdWVPZlN0eWxlUnVsZShlbCwgWydwYWRkaW5nLXRvcCcsICdwYWRkaW5nLWJvdHRvbScsICdib3JkZXItdG9wLXdpZHRoJywgJ2JvcmRlci1ib3R0b20td2lkdGgnXSlcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBQb2ludCh3aWR0aCwgaGVpZ2h0KVxuICB9LFxuICBnZXRPZmZzZXQoZWwsIHBhcmVudCkge1xuICAgIGNvbnN0IGVsUmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLCBwYXJlbnRSZWN0ID0gcGFyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgcmV0dXJuIG5ldyBQb2ludChlbFJlY3QubGVmdCAtIHBhcmVudFJlY3QubGVmdCwgZWxSZWN0LnRvcCAtIHBhcmVudFJlY3QudG9wKVxuICB9LFxuICBnZXRQb2ludEZyb21SYWRpYWxTeXN0ZW0oYW5nbGUsIGxlbmd0aCwgY2VudGVyKSB7XG4gICAgY2VudGVyID0gY2VudGVyIHx8IG5ldyBQb2ludCgwLCAwKVxuICAgIHJldHVybiBjZW50ZXIuYWRkKG5ldyBQb2ludChsZW5ndGggKiBNYXRoLmNvcyhhbmdsZSksIGxlbmd0aCAqIE1hdGguc2luKGFuZ2xlKSkpXG4gIH0sXG4gIGFkZFBvaW50VG9Cb3VuZFBvaW50cyhib3VuZHBvaW50cywgcG9pbnQsIGlzUmlnaHQpIHtcbiAgICBjb25zdCByZXN1bHQgPSBib3VuZHBvaW50cy5maWx0ZXIoZnVuY3Rpb24oYlBvaW50KSB7XG4gICAgICByZXR1cm4gIGJQb2ludC55ID4gcG9pbnQueSB8fCAoaXNSaWdodCA/IGJQb2ludC54IDwgcG9pbnQueCA6IGJQb2ludC54ID4gcG9pbnQueClcbiAgICB9KVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXN1bHQubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChwb2ludC55IDwgcmVzdWx0W2ldLnkpIHtcbiAgICAgICAgcmVzdWx0LnNwbGljZShpLCAwLCBwb2ludClcbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgICAgfVxuICAgIH1cbiAgICByZXN1bHQucHVzaChwb2ludClcbiAgICByZXR1cm4gcmVzdWx0XG4gIH0sXG4gIGdldEFuZ2xlKHAxLCBwMikge1xuICAgIGNvbnN0IGRpZmYgPSBwMi5zdWIocDEpXG4gICAgcmV0dXJuIHRoaXMubm9ybWFsaXplQW5nbGUoTWF0aC5hdGFuMihkaWZmLnksIGRpZmYueCkpXG4gIH0sXG4gIHRvUmFkaWFuKGFuZ2xlKSB7XG4gICAgcmV0dXJuICgoYW5nbGUgJSAzNjApICogTWF0aC5QSSAvIDE4MClcbiAgfSxcbiAgdG9EZWdyZWUoYW5nbGUpIHtcbiAgICByZXR1cm4gKGFuZ2xlICogMTgwIC8gTWF0aC5QSSkgJSAzNjBcbiAgfSxcbiAgYm91bmRBbmdsZShtaW4sIG1heCwgdmFsKSB7XG4gICAgbGV0IGRtaW4sIGRtYXhcbiAgICBpZiAobWluIDwgbWF4ICYmIHZhbCA+IG1pbiAmJiB2YWwgPCBtYXgpIHtcbiAgICAgIHJldHVybiB2YWxcbiAgICB9IGVsc2UgaWYgKG1heCA8IG1pbiAmJiAodmFsIDwgbWF4IHx8IHZhbCA+IG1pbikpIHtcbiAgICAgIHJldHVybiB2YWxcbiAgICB9IGVsc2Uge1xuICAgICAgZG1pbiA9IHRoaXMuZ2V0QW5nbGVEaWZmKG1pbiwgdmFsKVxuICAgICAgZG1heCA9IHRoaXMuZ2V0QW5nbGVEaWZmKG1heCwgdmFsKVxuICAgICAgaWYgKGRtaW4gPCBkbWF4KSB7XG4gICAgICAgIHJldHVybiBtaW5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBtYXhcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIGdldE5lYXJlc3RBbmdsZShhcnIsIGFuZ2xlKSB7XG4gICAgbGV0IGksIHRlbXAsIGRpZmYgPSBNYXRoLlBJICogMiwgdmFsdWVcbiAgICBmb3IgKGkgPSAwOyBpIDwgYXJyLmxlbmd0aDtpKyspIHtcbiAgICAgIHRlbXAgPSBHZW9tZXRyeS5nZXRBbmdsZURpZmYoYXJyW2ldLCBhbmdsZSlcbiAgICAgIGlmIChkaWZmIDwgdGVtcCkge1xuICAgICAgICBkaWZmID0gdGVtcFxuICAgICAgICB2YWx1ZSA9IGFycltpXVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdmFsdWVcbiAgfSxcbiAgZ2V0QW5nbGVEaWZmKGFscGhhLCBiZXRhKSB7XG4gICAgY29uc3QgbWluQW5nbGUgPSBNYXRoLm1pbihhbHBoYSwgYmV0YSksXG4gICAgICBtYXhBbmdsZSA9ICBNYXRoLm1heChhbHBoYSwgYmV0YSlcbiAgICByZXR1cm4gTWF0aC5taW4obWF4QW5nbGUgLSBtaW5BbmdsZSwgbWluQW5nbGUgKyBNYXRoLlBJKjIgLSBtYXhBbmdsZSlcbiAgfSxcbiAgbm9ybWFsaXplQW5nbGUodmFsKSB7XG4gICAgd2hpbGUgKHZhbCA8IDApIHtcbiAgICAgIHZhbCArPSAyICogTWF0aC5QSVxuICAgIH1cbiAgICB3aGlsZSAodmFsID4gMiAqIE1hdGguUEkpIHtcbiAgICAgIHZhbCAtPSAyICogTWF0aC5QSVxuICAgIH1cbiAgICByZXR1cm4gdmFsXG4gIH1cbn1cblxuZXhwb3J0IHsgUG9pbnQsIFJlY3RhbmdsZSwgR2VvbWV0cnkgfVxuIiwiJ3VzZSBzdHJpY3QnXG5pbXBvcnQgeyBHZW9tZXRyeSwgUG9pbnQgfSBmcm9tICcuL2dlb21ldHJ5J1xuXG5jb25zdCBwb3NpdGlvblR5cGUgPSB7XG4gIG5vdENyb3NzaW5nOiAwLFxuICBmbG9hdExlZnQ6IDEsXG4gIGZsb2F0UmlnaHQ6IDJcbn1cblxuZnVuY3Rpb24gcG9zaXRpb25GYWN0b3J5KHR5cGUpIHtcbiAgc3dpdGNoICh0eXBlKSB7XG4gIGNhc2UgcG9zaXRpb25UeXBlLm5vdENyb3NzaW5nOlxuICAgIHJldHVybiBmdW5jdGlvbihyZWN0YW5nbGUsIF9vcHRpb25zKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24ocmVjdGFuZ2xlTGlzdCwgaW5kZXhlc09mTmV3cykge1xuICAgICAgICBjb25zdCBib3VuZFJlY3QgPSB0eXBlb2YgcmVjdGFuZ2xlID09PSAnZnVuY3Rpb24nID8gcmVjdGFuZ2xlKCkgOiByZWN0YW5nbGUsXG4gICAgICAgICAgc3RhdGljUmVjdGFuZ2xlSW5kZXhlcyA9IHJlY3RhbmdsZUxpc3QucmVkdWNlKGZ1bmN0aW9uKGluZGV4ZXMsIF9yZWN0LCBpbmRleCkge1xuICAgICAgICAgICAgaWYgKGluZGV4ZXNPZk5ld3MuaW5kZXhPZihpbmRleCkgPT09IC0xKSB7XG4gICAgICAgICAgICAgIGluZGV4ZXMucHVzaChpbmRleClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBpbmRleGVzXG4gICAgICAgICAgfSwgW10pXG5cbiAgICAgICAgaW5kZXhlc09mTmV3cy5mb3JFYWNoKGZ1bmN0aW9uKGluZGV4KSB7XG4gICAgICAgICAgbGV0IHJlY3QgPSByZWN0YW5nbGVMaXN0W2luZGV4XSwgcmVtb3ZhYmxlID0gZmFsc2VcbiAgICAgICAgICBzdGF0aWNSZWN0YW5nbGVJbmRleGVzLmZvckVhY2goZnVuY3Rpb24oaW5kZXhPZlN0YXRpYykge1xuICAgICAgICAgICAgY29uc3Qgc3RhdGljUmVjdCA9IHJlY3RhbmdsZUxpc3RbaW5kZXhPZlN0YXRpY11cbiAgICAgICAgICAgIHJlY3QgPSBzdGF0aWNSZWN0Lm1vdmVUb0JvdW5kKHJlY3QpXG4gICAgICAgICAgfSlcbiAgICAgICAgICByZW1vdmFibGUgPSBzdGF0aWNSZWN0YW5nbGVJbmRleGVzLnNvbWUoZnVuY3Rpb24oaW5kZXhPZlN0YXRpYykge1xuICAgICAgICAgICAgY29uc3Qgc3RhdGljUmVjdCA9IHJlY3RhbmdsZUxpc3RbaW5kZXhPZlN0YXRpY11cbiAgICAgICAgICAgIHJldHVybiAgISFzdGF0aWNSZWN0LmFuZChyZWN0KVxuICAgICAgICAgIH0pIHx8IHJlY3QuYW5kKGJvdW5kUmVjdCkuZ2V0U3F1YXJlKCkgIT09IHJlY3QuZ2V0U3F1YXJlKClcbiAgICAgICAgICBpZiAocmVtb3ZhYmxlKSB7XG4gICAgICAgICAgICByZWN0LnJlbW92YWJsZSA9IHRydWVcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3RhdGljUmVjdGFuZ2xlSW5kZXhlcy5wdXNoKGluZGV4KVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIHJlY3RhbmdsZUxpc3RcbiAgICAgIH1cbiAgICB9XG4gIGNhc2UgcG9zaXRpb25UeXBlLmZsb2F0TGVmdDpcbiAgICByZXR1cm4gZnVuY3Rpb24ocmVjdGFuZ2xlLCBvcHRpb25zKSB7XG4gICAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIHBhZGRpbmdUb3BMZWZ0OiBuZXcgUG9pbnQoMCwgMCksXG4gICAgICAgIHBhZGRpbmdCb3R0b21SaWdodDogbmV3IFBvaW50KDAsIDApLFxuICAgICAgICB5R2FwQmV0d2VlbkRyYWdnYWJsZXM6IDAsXG4gICAgICAgIHJlbW92YWJsZTogdHJ1ZVxuICAgICAgfSwgb3B0aW9ucylcblxuICAgICAgcmV0dXJuIGZ1bmN0aW9uKHJlY3RhbmdsZUxpc3QsIF9pbmRleGVzT2ZOZXdzKSB7XG4gICAgICAgIGNvbnN0IGJvdW5kUmVjdCA9IHR5cGVvZiByZWN0YW5nbGUgPT09ICdmdW5jdGlvbicgPyByZWN0YW5nbGUoKSA6IHJlY3RhbmdsZVxuICAgICAgICBjb25zdCByZWN0UDIgPSBib3VuZFJlY3QuZ2V0UDIoKVxuICAgICAgICBsZXQgYm91bmRhcnlQb2ludHMgPSBbYm91bmRSZWN0LnBvc2l0aW9uXVxuICAgICAgICByZWN0YW5nbGVMaXN0LmZvckVhY2goZnVuY3Rpb24ocmVjdCkge1xuICAgICAgICAgIGxldCBwb3NpdGlvbiwgaXNWYWxpZCA9IGZhbHNlXG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBib3VuZGFyeVBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcG9zaXRpb24gPSAobmV3IFBvaW50KGJvdW5kYXJ5UG9pbnRzW2ldLngsIGkgPiAwID8gKGJvdW5kYXJ5UG9pbnRzW2kgLSAxXS55ICsgb3B0aW9ucy55R2FwQmV0d2VlbkRyYWdnYWJsZXMpIDogYm91bmRSZWN0LnBvc2l0aW9uLnkpKS5hZGQob3B0aW9ucy5wYWRkaW5nVG9wTGVmdClcbiAgICAgICAgICAgIGlzVmFsaWQgPSAocG9zaXRpb24ueCArIHJlY3Quc2l6ZS54IDwgcmVjdFAyLngpXG4gICAgICAgICAgICBpZiAoaXNWYWxpZCkge1xuICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIWlzVmFsaWQpIHtcbiAgICAgICAgICAgIHBvc2l0aW9uID0gKG5ldyBQb2ludChib3VuZFJlY3QucG9zaXRpb24ueCwgYm91bmRhcnlQb2ludHNbYm91bmRhcnlQb2ludHMubGVuZ3RoIC0gMV0ueSArIG9wdGlvbnMueUdhcEJldHdlZW5EcmFnZ2FibGVzKSkuYWRkKG9wdGlvbnMucGFkZGluZ1RvcExlZnQpXG4gICAgICAgICAgfVxuICAgICAgICAgIHJlY3QucG9zaXRpb24gPSBwb3NpdGlvblxuICAgICAgICAgIGlmIChvcHRpb25zLnJlbW92YWJsZSAmJiByZWN0LmdldFAzKCkueSA+IGJvdW5kUmVjdC5nZXRQMygpLnkpIHtcbiAgICAgICAgICAgIHJlY3QucmVtb3ZhYmxlID0gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgICBib3VuZGFyeVBvaW50cyA9IEdlb21ldHJ5LmFkZFBvaW50VG9Cb3VuZFBvaW50cyhib3VuZGFyeVBvaW50cywgcmVjdC5nZXRQMygpLmFkZChvcHRpb25zLnBhZGRpbmdCb3R0b21SaWdodCkpXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiByZWN0YW5nbGVMaXN0XG4gICAgICB9XG4gICAgfVxuICBjYXNlIHBvc2l0aW9uVHlwZS5mbG9hdFJpZ2h0OlxuICAgIHJldHVybiBmdW5jdGlvbihyZWN0YW5nbGUsIG9wdGlvbnMpIHtcbiAgICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaW5nKHtcbiAgICAgICAgcGFkZGluZ1RvcFJpZ2h0OiBuZXcgUG9pbnQoNSwgNSksXG4gICAgICAgIHBhZGRpbmdCb3R0b21MZWZ0OiBuZXcgUG9pbnQoMCwgMCksXG4gICAgICAgIHJlbW92YWJsZTogdHJ1ZVxuICAgICAgfSwgb3B0aW9ucylcblxuICAgICAgY29uc3QgcGFkZGluZ1RvcE5lZ1JpZ2h0ID0gbmV3IFBvaW50KC1vcHRpb25zLnBhZGRpbmdUb3BSaWdodC54LCBvcHRpb25zLnBhZGRpbmdUb3BSaWdodC55KVxuICAgICAgY29uc3QgcGFkZGluZ0JvdHRvbU5lZ0xlZnQgPSBuZXcgUG9pbnQoLW9wdGlvbnMucGFkZGluZ0JvdHRvbUxlZnQueCwgb3B0aW9ucy5wYWRkaW5nQm90dG9tTGVmdC55KVxuICAgICAgcmV0dXJuIGZ1bmN0aW9uKHJlY3RhbmdsZUxpc3QsIF9pbmRleGVzT2ZOZXdzKSB7XG4gICAgICAgIGNvbnN0IGJvdW5kUmVjdCA9IHR5cGVvZiByZWN0YW5nbGUgPT09ICdmdW5jdGlvbicgPyByZWN0YW5nbGUoKSA6IHJlY3RhbmdsZVxuICAgICAgICBsZXQgYm91bmRhcnlQb2ludHMgPSBbYm91bmRSZWN0LmdldFJpZ2h0VG9wUG9pbnQoKV1cbiAgICAgICAgcmVjdGFuZ2xlTGlzdC5mb3JFYWNoKGZ1bmN0aW9uKHJlY3QsIF9pbmRleCkge1xuICAgICAgICAgIGxldCBwb3NpdGlvbiwgaXNWYWxpZCA9IGZhbHNlXG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBib3VuZGFyeVBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcG9zaXRpb24gPSAobmV3IFBvaW50KGJvdW5kYXJ5UG9pbnRzW2ldLnggLSByZWN0LnNpemUueCwgaSA+IDAgPyBib3VuZGFyeVBvaW50c1tpIC0gMV0ueSA6IGJvdW5kUmVjdC5wb3NpdGlvbi55KSkuYWRkKHBhZGRpbmdUb3BOZWdSaWdodClcbiAgICAgICAgICAgIGlzVmFsaWQgPSAocG9zaXRpb24ueCA+IHJlY3QucG9zaXRpb24ueClcbiAgICAgICAgICAgIGlmIChpc1ZhbGlkKSB7XG4gICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghaXNWYWxpZCkge1xuICAgICAgICAgICAgcG9zaXRpb24gPSBuZXcgUG9pbnQoYm91bmRSZWN0LmdldFAyKCkueCwgYm91bmRhcnlQb2ludHNbYm91bmRhcnlQb2ludHMubGVuZ3RoIC0gMV0ueSlcbiAgICAgICAgICB9XG4gICAgICAgICAgcmVjdC5wb3NpdGlvbiA9IHBvc2l0aW9uXG4gICAgICAgICAgaWYgKG9wdGlvbnMucmVtb3ZhYmxlICYmIHJlY3QuZ2V0TGVmdEJvdHRvbVBvaW50KCkueSA+IGJvdW5kUmVjdC5nZXRQNCgpLnkpIHtcbiAgICAgICAgICAgIHJlY3QucmVtb3ZhYmxlID0gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgICBib3VuZGFyeVBvaW50cyA9IEdlb21ldHJ5LmFkZFBvaW50VG9Cb3VuZFBvaW50cyhib3VuZGFyeVBvaW50cywgcmVjdC5nZXRQNCgpLmFkZChwYWRkaW5nQm90dG9tTmVnTGVmdCksIHRydWUpXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiByZWN0YW5nbGVMaXN0XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHNvcnRpbmdGYWN0b3J5KHR5cGUpIHtcbiAgc3dpdGNoICh0eXBlKSB7XG4gIGNhc2UgcG9zaXRpb25UeXBlLm5vdENyb3NzaW5nOlxuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihvbGRPYmpzTGlzdCwgbmV3T2JqcywgaW5kZXhPZk5ld3MpIHtcbiAgICAgICAgY29uc3Qgb2Jqc0xpc3QgPSBvbGRPYmpzTGlzdC5jb25jYXQobmV3T2JqcylcbiAgICAgICAgbmV3T2Jqcy5mb3JFYWNoKGZ1bmN0aW9uKG9iaikge1xuICAgICAgICAgIGluZGV4T2ZOZXdzLnB1c2gob2Jqc0xpc3QuaW5kZXhPZihvYmopKVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gb2Jqc0xpc3RcbiAgICAgIH1cbiAgICB9XG4gIGNhc2UgcG9zaXRpb25UeXBlLmZsb2F0TGVmdDpcbiAgY2FzZSBwb3NpdGlvblR5cGUuZmxvYXRSaWdodDpcbiAgICByZXR1cm4gZnVuY3Rpb24ocmFkaXVzLCBnZXREaXN0YW5jZSwgb3B0aW9ucykge1xuICAgICAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgICBnZXRQb3NpdGlvbjogZnVuY3Rpb24ob2JqKSB7XG4gICAgICAgICAgcmV0dXJuIG9iai5wb3NpdGlvblxuICAgICAgICB9XG4gICAgICB9LCBvcHRpb25zKVxuXG4gICAgICByZXR1cm4gZnVuY3Rpb24ob2xkT2Jqc0xpc3QsIG5ld09ianMsIGluZGV4T2ZOZXdzKSB7XG4gICAgICAgIGNvbnN0IG5ld0xpc3QgPSBvbGRPYmpzTGlzdC5jb25jYXQoKVxuICAgICAgICBjb25zdCBsaXN0T2xkUG9zaXRpb24gPSBvbGRPYmpzTGlzdC5tYXAob3B0aW9ucy5nZXRQb3NpdGlvbilcbiAgICAgICAgbmV3T2Jqcy5mb3JFYWNoKGZ1bmN0aW9uKG5ld09iaikge1xuICAgICAgICAgIGxldCBpbmRleCA9IEdlb21ldHJ5LmluZGV4T2ZOZWFyZXN0UG9pbnQobGlzdE9sZFBvc2l0aW9uLCBvcHRpb25zLmdldFBvc2l0aW9uKG5ld09iaiksIHJhZGl1cywgZ2V0RGlzdGFuY2UpXG4gICAgICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgaW5kZXggPSBuZXdMaXN0Lmxlbmd0aFxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpbmRleCA9IG5ld0xpc3QuaW5kZXhPZihvbGRPYmpzTGlzdFtpbmRleF0pXG4gICAgICAgICAgfVxuICAgICAgICAgIG5ld0xpc3Quc3BsaWNlKGluZGV4LCAwLCBuZXdPYmopXG4gICAgICAgIH0pXG4gICAgICAgIG5ld09ianMuZm9yRWFjaChmdW5jdGlvbihuZXdPYmopIHtcbiAgICAgICAgICBpbmRleE9mTmV3cy5wdXNoKG5ld0xpc3QuaW5kZXhPZihuZXdPYmopKVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gbmV3TGlzdFxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgeyBwb3NpdGlvblR5cGUsIHNvcnRpbmdGYWN0b3J5LCBwb3NpdGlvbkZhY3RvcnkgfVxuIiwiaW1wb3J0IHJlbW92ZUl0ZW1zIGZyb20gJ3JlbW92ZS1hcnJheS1pdGVtcydcbmltcG9ydCBFdmVudCBmcm9tICcuL2V2ZW50J1xuaW1wb3J0IHsgRHJhZ2dhYmxlIH0gZnJvbSAnLi9kcmFnZ2FibGUnXG5pbXBvcnQgeyBUYXJnZXQgfSBmcm9tICcuL3RhcmdldCdcblxuY29uc3QgRHJhZ2VlID0geyBFdmVudCB9IC8vdG9kbyByZW1vdmUgYWZ0ZXIgcmVmYWN0b3JlXG5cbmNvbnN0IHNjb3BlcyA9IFtdXG5cbmNsYXNzIFNjb3BlIHtcbiAgY29uc3RydWN0b3IoZHJhZ2dhYmxlcywgdGFyZ2V0cywgb3B0aW9ucz17fSkge1xuICAgIHNjb3Blcy5mb3JFYWNoKChzY29wZSkgPT4ge1xuICAgICAgaWYgKGRyYWdnYWJsZXMpIHtcbiAgICAgICAgZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHtcbiAgICAgICAgICByZW1vdmVJdGVtcyhzY29wZS5kcmFnZ2FibGVzLCBkcmFnZ2FibGUpXG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIGlmICh0YXJnZXRzKSB7XG4gICAgICAgIHRhcmdldHMuZm9yRWFjaCgodGFyZ2V0KSA9PiB7XG4gICAgICAgICAgcmVtb3ZlSXRlbXMoc2NvcGUudGFyZ2V0cywgdGFyZ2V0KVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG5cbiAgICB0aGlzLmRyYWdnYWJsZXMgPSBkcmFnZ2FibGVzIHx8IFtdXG4gICAgdGhpcy50YXJnZXRzID0gdGFyZ2V0cyB8fCBbXVxuICAgIHNjb3Blcy5wdXNoKHRoaXMpXG4gICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgdGltZUVuZDogKG9wdGlvbnMudGltZUVuZCkgfHwgNDAwXG4gICAgfVxuXG4gICAgdGhpcy5vbkNoYW5nZSA9IG5ldyBEcmFnZWUuRXZlbnQodGhpcylcbiAgICBpZiAob3B0aW9ucy5vbkNoYW5nZSkge1xuICAgICAgdGhpcy5vbkNoYW5nZS5hZGQob3B0aW9ucy5vbkNoYW5nZSlcbiAgICB9XG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgZHJhZ2dhYmxlLm9uRW5kLmFkZCgoKSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLm9uRW5kKGRyYWdnYWJsZSlcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIGFkZERyYWdnYWJsZShkcmFnZ2FibGUpIHtcbiAgICB0aGlzLmRyYWdnYWJsZXMucHVzaChkcmFnZ2FibGUpXG4gICAgZHJhZ2dhYmxlLm9uRW5kLnVuc2hpZnQoKCkgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMub25FbmQoZHJhZ2dhYmxlKVxuICAgIH0pXG4gIH1cblxuICBhZGRUYXJnZXQodGFyZ2V0KSB7XG4gICAgdGhpcy50YXJnZXRzLnB1c2godGFyZ2V0KVxuICB9XG5cbiAgb25FbmQoZHJhZ2dhYmxlKSB7XG4gICAgY29uc3Qgc2hvdFRhcmdldHMgPSB0aGlzLnRhcmdldHMuZmlsdGVyKCh0YXJnZXQpID0+IHtcbiAgICAgIHJldHVybiB0YXJnZXQuZHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSkgIT09IC0xXG4gICAgfSkuZmlsdGVyKCh0YXJnZXQpID0+IHtcbiAgICAgIHJldHVybiB0YXJnZXQuY2F0Y2hEcmFnZ2FibGUoZHJhZ2dhYmxlKVxuICAgIH0pLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgIHJldHVybiBhLmdldFJlY3RhbmdsZSgpLmdldFNxdWFyZSgpIC0gYi5nZXRSZWN0YW5nbGUoKS5nZXRTcXVhcmUoKVxuICAgIH0pXG5cbiAgICBpZiAoc2hvdFRhcmdldHMubGVuZ3RoKSB7XG4gICAgICBzaG90VGFyZ2V0c1swXS5vbkVuZChkcmFnZ2FibGUpXG4gICAgfSBlbHNlIGlmIChkcmFnZ2FibGUudGFyZ2V0cy5sZW5ndGgpIHtcbiAgICAgIGRyYWdnYWJsZS5tb3ZlKGRyYWdnYWJsZS5pbml0UG9zaXRpb24sIHRoaXMub3B0aW9ucy50aW1lRW5kLCB0cnVlLCB0cnVlKVxuICAgIH1cbiAgICB0aGlzLm9uQ2hhbmdlLmZpcmUoKVxuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICByZXNldCgpIHtcbiAgICB0aGlzLnRhcmdldHMuZm9yRWFjaCgodGFyZ2V0KSA9PiB0YXJnZXQucmVzZXQoKSlcbiAgfVxuXG4gIHJlZnJlc2goKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLnJlZnJlc2goKSlcbiAgICB0aGlzLnRhcmdldHMuZm9yRWFjaCgodGFyZ2V0KSA9PiB0YXJnZXQucmVmcmVzaCgpKVxuICB9XG5cbiAgZ2V0IHBvc2l0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy50YXJnZXRzLm1hcCgodGFyZ2V0KSA9PiB7XG4gICAgICByZXR1cm4gdGFyZ2V0LmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4gdGhpcy5kcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKSlcbiAgICB9KVxuICB9XG5cbiAgc2V0IHBvc2l0aW9ucyhwb3NpdGlvbnMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gJ3dyb25nIGFycmF5IGxlbmd0aCdcbiAgICBpZiAocG9zaXRpb25zLmxlbmd0aCA9PT0gdGhpcy50YXJnZXRzLmxlbmd0aCkge1xuICAgICAgdGhpcy50YXJnZXRzLmZvckVhY2goKHRhcmdldCkgPT4gdGFyZ2V0LnJlc2V0KCkpXG5cbiAgICAgIHBvc2l0aW9ucy5mb3JFYWNoKCh0YXJnZXRJbmRleGVzLCBpKSA9PiB7XG4gICAgICAgIHRhcmdldEluZGV4ZXMuZm9yRWFjaCgoaW5kZXgpID0+IHtcbiAgICAgICAgICB0aGlzLnRhcmdldHNbaV0uYWRkKHRoaXMuZHJhZ2dhYmxlc1tpbmRleF0pXG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBtZXNzYWdlXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IGRlZmF1bHRTY29wZSA9IG5ldyBTY29wZSgpXG5cbmZ1bmN0aW9uIHNjb3BlKGZuKSB7XG4gIGNvbnN0IGN1cnJlbnRTY29wZSA9IG5ldyBTY29wZSgpXG4gIGNvbnN0IGFkZERyYWdnYWJsZVRvU2NvcGUgPSBmdW5jdGlvbihkcmFnZ2FibGUpIHtcbiAgICBjdXJyZW50U2NvcGUuYWRkRHJhZ2dhYmxlKGRyYWdnYWJsZSlcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG4gIGNvbnN0IGFkZFRhcmdldFRvU2NvcGUgPSBmdW5jdGlvbih0YXJnZXQpIHtcbiAgICBjdXJyZW50U2NvcGUuYWRkVGFyZ2V0KHRhcmdldClcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgRHJhZ2dhYmxlLm9uQ3JlYXRlLmFkZChhZGREcmFnZ2FibGVUb1Njb3BlKVxuICBUYXJnZXQub25DcmVhdGUuYWRkKGFkZFRhcmdldFRvU2NvcGUpXG4gIGZuLmNhbGwoKVxuICBEcmFnZ2FibGUub25DcmVhdGUucmVtb3ZlKGFkZERyYWdnYWJsZVRvU2NvcGUpXG4gIFRhcmdldC5vbkNyZWF0ZS5yZW1vdmUoYWRkVGFyZ2V0VG9TY29wZSlcbiAgcmV0dXJuIGN1cnJlbnRTY29wZVxufVxuXG5mdW5jdGlvbiBzY29wZUZhY3RvcnkocGFyZW50RWxlbWVudCwgZHJhZ2dhYmxlRWxlbWVudHMsIHRhcmdldEVsZW1lbnRzLCBvcHRpb25zPXt9KSB7XG4gIGNvbnN0IGRyYWdnYWJsZU9wdGlvbnMgPSBvcHRpb25zLmRyYWdnYWJsZSB8fCB7fVxuICBjb25zdCB0YXJnZXRPcHRpb25zID0gb3B0aW9ucy50YXJnZXQgfHwge31cbiAgY29uc3Qgc2NvcGVPcHRpb25zID0gb3B0aW9ucy5zY29wZSB8fCB7fVxuICBkcmFnZ2FibGVPcHRpb25zLnBhcmVudCA9IGRyYWdnYWJsZU9wdGlvbnMucGFyZW50IHx8IHBhcmVudEVsZW1lbnRcbiAgdGFyZ2V0T3B0aW9ucy5wYXJlbnQgPSB0YXJnZXRPcHRpb25zLnBhcmVudCB8fCBwYXJlbnRFbGVtZW50XG4gIGRyYWdnYWJsZUVsZW1lbnRzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZHJhZ2dhYmxlRWxlbWVudHMpXG4gIHRhcmdldEVsZW1lbnRzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwodGFyZ2V0RWxlbWVudHMpXG5cbiAgY29uc3QgZHJhZ2dhYmxlcyA9IGRyYWdnYWJsZUVsZW1lbnRzLm1hcCgoZWxlbWVudCkgPT4ge1xuICAgIHJldHVybiBuZXcgRHJhZ2dhYmxlKGVsZW1lbnQsIGRyYWdnYWJsZU9wdGlvbnMpXG4gIH0pXG5cbiAgY29uc3QgdGFyZ2V0cyA9IHRhcmdldEVsZW1lbnRzLm1hcCgoZWxlbWVudCkgPT4ge1xuICAgIHJldHVybiBuZXcgVGFyZ2V0KGVsZW1lbnQsIGRyYWdnYWJsZXMsIHRhcmdldE9wdGlvbnMpXG4gIH0pXG4gIHJldHVybiBuZXcgU2NvcGUoZHJhZ2dhYmxlcywgdGFyZ2V0cywgc2NvcGVPcHRpb25zKVxufVxuXG5leHBvcnQgeyBzY29wZXMsIGRlZmF1bHRTY29wZSwgU2NvcGUsIHNjb3BlRmFjdG9yeSwgc2NvcGUgfVxuIiwiaW1wb3J0IHJhbmdlIGZyb20gJy4vdXRpbHMvcmFuZ2UuanMnXG5pbXBvcnQgcmVtb3ZlSXRlbXMgZnJvbSAncmVtb3ZlLWFycmF5LWl0ZW1zJ1xuaW1wb3J0IGdldERlZmF1bHRQYXJlbnQgZnJvbSAnLi91dGlscy9nZXRkZWZhdWx0cGFyZW50J1xuaW1wb3J0IEV2ZW50IGZyb20gJy4vZXZlbnQnXG5pbXBvcnQgeyBHZW9tZXRyeSB9IGZyb20gJy4vZ2VvbWV0cnknXG5pbXBvcnQgeyBwb3NpdGlvblR5cGUsIHNvcnRpbmdGYWN0b3J5LCBwb3NpdGlvbkZhY3RvcnkgfSBmcm9tICcuL3Bvc2l0aW9uaW5nJ1xuaW1wb3J0IHsgc2NvcGVzLCBkZWZhdWx0U2NvcGUgfSBmcm9tICcuL3Njb3BlJ1xuXG5jb25zdCBEcmFnZWUgPSB7IHBvc2l0aW9uVHlwZSwgIHBvc2l0aW9uRmFjdG9yeSwgc29ydGluZ0ZhY3RvcnksIHNjb3BlcywgRXZlbnQgfS8vdG9kbyByZW1vdmUgYWZ0ZXIgcmVmYWN0b3JlXG5cbmNvbnN0IGFkZFRvRGVmYXVsdFNjb3BlID0gZnVuY3Rpb24odGFyZ2V0KSB7XG4gIGRlZmF1bHRTY29wZS5hZGRUYXJnZXQodGFyZ2V0KVxufVxuXG5jbGFzcyBUYXJnZXQge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBkcmFnZ2FibGVzLCBvcHRpb25zID0ge30pIHtcbiAgICBjb25zdCB0YXJnZXQgPSB0aGlzXG4gICAgY29uc3QgcGFyZW50ID0gb3B0aW9ucy5wYXJlbnQgfHwgZ2V0RGVmYXVsdFBhcmVudChlbGVtZW50KVxuXG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICB0aW1lRW5kOiAyMDAsXG4gICAgICB0aW1lRXhjYW5nZTogNDAwLFxuICAgICAgcGFyZW50OiBwYXJlbnQsXG4gICAgICBzb3J0aW5nOiBEcmFnZWUuc29ydGluZ0ZhY3RvcnkoRHJhZ2VlLnBvc2l0aW9uVHlwZS5mbG9hdExlZnQpKDgwLCBHZW9tZXRyeS50cmFuc2Zvcm1lZFNwYWNlRGlzdGFuY2VGYWN0b3J5KHsgeDogMSwgeTogNCB9KSksXG4gICAgICBwb3NpdGlvbmluZzogRHJhZ2VlLnBvc2l0aW9uRmFjdG9yeShEcmFnZWUucG9zaXRpb25UeXBlLmZsb2F0TGVmdCkodGhpcy5nZXRSZWN0YW5nbGUuYmluZCh0aGlzKSwgeyByZW1vdmFibGU6IHRydWUgfSlcbiAgICB9LCBvcHRpb25zKVxuXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFxuICAgIGRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUudGFyZ2V0cy5wdXNoKHRhcmdldCkpXG4gICAgdGhpcy5kcmFnZ2FibGVzID0gZHJhZ2dhYmxlc1xuICAgIHRoaXMub25BZGQgPSBuZXcgRHJhZ2VlLkV2ZW50KHRoaXMpXG4gICAgdGhpcy5iZWZvcmVBZGQgPSBuZXcgRHJhZ2VlLkV2ZW50KHRoaXMpXG4gICAgdGhpcy5vblJlbW92ZSA9IG5ldyBEcmFnZWUuRXZlbnQodGhpcylcblxuICAgIGlmIChvcHRpb25zLm9uUmVtb3ZlKSB7XG4gICAgICB0aGlzLm9uUmVtb3ZlLmFkZChvcHRpb25zLm9uUmVtb3ZlKVxuICAgIH1cblxuICAgIGlmIChvcHRpb25zLm9uQWRkKSB7XG4gICAgICB0aGlzLm9uQWRkLmFkZChvcHRpb25zLm9uQWRkKVxuICAgIH1cblxuICAgIGlmIChvcHRpb25zLmJlZm9yZUFkZCkge1xuICAgICAgdGhpcy5iZWZvcmVBZGQuYWRkKG9wdGlvbnMuYmVmb3JlQWRkKVxuICAgIH1cblxuICAgIFRhcmdldC5vbkNyZWF0ZS5maXJlKHRoaXMpXG5cbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgaW5pdCgpIHtcbiAgICBsZXQgcmVjdGFuZ2xlcywgaW5kZXhlc09mTmV3XG5cbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcyA9IHRoaXMuZHJhZ2dhYmxlcy5maWx0ZXIoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgbGV0IGVsZW1lbnQgPSBkcmFnZ2FibGUuZWxlbWVudC5wYXJlbnROb2RlXG4gICAgICB3aGlsZSAoZWxlbWVudCkge1xuICAgICAgICBpZiAoZWxlbWVudCA9PT0gdGhpcy5lbGVtZW50KSB7XG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50ID0gZWxlbWVudC5wYXJlbnROb2RlXG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9KVxuXG4gICAgaWYgKHRoaXMuaW5uZXJEcmFnZ2FibGVzLmxlbmd0aCkge1xuICAgICAgaW5kZXhlc09mTmV3ID0gcmFuZ2UodGhpcy5pbm5lckRyYWdnYWJsZXMubGVuZ3RoKVxuICAgICAgcmVjdGFuZ2xlcyA9IHRoaXMub3B0aW9ucy5wb3NpdGlvbmluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgICByZXR1cm4gZHJhZ2dhYmxlLmdldFJlY3RhbmdsZSgpXG4gICAgICB9KSwgaW5kZXhlc09mTmV3KVxuICAgICAgdGhpcy5zZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBpbmRleGVzT2ZOZXcpXG4gICAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHRoaXMub25BZGQuZmlyZShkcmFnZ2FibGUpKVxuICAgIH1cbiAgfVxuXG4gIGdldFJlY3RhbmdsZSgpIHtcbiAgICByZXR1cm4gR2VvbWV0cnkuY3JlYXRlUmVjdGFuZ2xlRnJvbUVsZW1lbnQoXG4gICAgICB0aGlzLmVsZW1lbnQsXG4gICAgICB0aGlzLm9wdGlvbnMucGFyZW50LFxuICAgICAgdGhpcy5vcHRpb25zLmlzQ29udGVudEJveFNpemUsXG4gICAgICB0cnVlXG4gICAgKVxuICB9XG5cbiAgY2F0Y2hEcmFnZ2FibGUoZHJhZ2dhYmxlKSB7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5jYXRjaERyYWdnYWJsZSkge1xuICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5jYXRjaERyYWdnYWJsZSh0aGlzLCBkcmFnZ2FibGUpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRhcmdldFJlY3RhbmdsZSA9IHRoaXMuZ2V0UmVjdGFuZ2xlKClcbiAgICAgIGNvbnN0IGRyYWdnYWJsZVNxdWFyZSA9IGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKS5nZXRTcXVhcmUoKVxuXG4gICAgICByZXR1cm4gZHJhZ2dhYmxlU3F1YXJlIDwgdGFyZ2V0UmVjdGFuZ2xlLmdldFNxdWFyZSgpXG4gICAgICAgICAgICAgICYmIHRhcmdldFJlY3RhbmdsZS5pbmNsdWRlUG9pbnQoZHJhZ2dhYmxlLmdldENlbnRlcigpKVxuICAgIH1cbiAgfVxuXG4gIGdldFBvc2l0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFJlY3RhbmdsZSgpLnBvc2l0aW9uXG4gIH1cblxuICBnZXRTaXplKCkge1xuICAgIHJldHVybiB0aGlzLmdldFJlY3RhbmdsZSgpLnNpemVcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgRHJhZ2VlLnNjb3Blcy5mb3JFYWNoKChzY29wZSkgPT4gcmVtb3ZlSXRlbXMoc2NvcGUudGFyZ2V0cywgdGhpcykpXG4gIH1cblxuICByZWZyZXNoKCkge1xuICAgIGNvbnN0IHJlY3RhbmdsZXMgPSB0aGlzLm9wdGlvbnMucG9zaXRpb25pbmcodGhpcy5pbm5lckRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIHJldHVybiBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKClcbiAgICB9KSwgW10pXG4gICAgdGhpcy5zZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBbXSwgMClcbiAgfVxuXG4gIG9uRW5kKGRyYWdnYWJsZSkge1xuICAgIGNvbnN0IG5ld0RyYWdnYWJsZXNJbmRleCA9IFtdXG4gICAgY29uc3QgaW5jbHVkZVBvaW50ID0gdGhpcy5nZXRSZWN0YW5nbGUoKS5pbmNsdWRlUG9pbnQoZHJhZ2dhYmxlLmdldFBvc2l0aW9uKCkpXG5cbiAgICBpZiAoIWluY2x1ZGVQb2ludCkge1xuICAgICAgaWYgKHRoaXMuZ2V0UmVjdGFuZ2xlKCkuaW5jbHVkZVBvaW50KGRyYWdnYWJsZS5nZXRDZW50ZXIoKSkpIHtcbiAgICAgICAgZHJhZ2dhYmxlLnBvc2l0aW9uID0gZHJhZ2dhYmxlLmdldENlbnRlcigpLmNsb25lKClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuYmVmb3JlQWRkLmZpcmUoZHJhZ2dhYmxlKVxuXG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMgPSB0aGlzLm9wdGlvbnMuc29ydGluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcywgW2RyYWdnYWJsZV0sIG5ld0RyYWdnYWJsZXNJbmRleClcbiAgICBjb25zdCByZWN0YW5nbGVzID0gdGhpcy5vcHRpb25zLnBvc2l0aW9uaW5nKHRoaXMuaW5uZXJEcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICByZXR1cm4gZHJhZ2dhYmxlLmdldFJlY3RhbmdsZSgpXG4gICAgfSksIG5ld0RyYWdnYWJsZXNJbmRleCwgZHJhZ2dhYmxlKVxuXG4gICAgdGhpcy5zZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBuZXdEcmFnZ2FibGVzSW5kZXgpXG4gICAgaWYgKHRoaXMuaW5uZXJEcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKSAhPT0gLTEpIHtcbiAgICAgIHRoaXMuYWRkUmVtb3ZlT25Nb3ZlKGRyYWdnYWJsZSlcbiAgICB9XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIHNldFBvc2l0aW9uKHJlY3RhbmdsZXMsIGluZGV4ZXNPZk5ldywgdGltZSkge1xuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzLnNsaWNlKDApLmZvckVhY2goKGRyYWdnYWJsZSwgaSkgPT4ge1xuICAgICAgY29uc3QgcmVjdCA9IHJlY3RhbmdsZXNbaV0sXG4gICAgICAgIHRpbWVFbmQgPSB0aW1lIHx8IHRpbWUgPT09IDAgPyB0aW1lIDogaW5kZXhlc09mTmV3LmluZGV4T2YoaSkgIT09IC0xID8gdGhpcy5vcHRpb25zLnRpbWVFbmQgOiB0aGlzLm9wdGlvbnMudGltZUV4Y2FuZ2VcblxuICAgICAgaWYgKHJlY3QucmVtb3ZhYmxlKSB7XG4gICAgICAgIGRyYWdnYWJsZS5tb3ZlKGRyYWdnYWJsZS5pbml0UG9zaXRpb24sIHRpbWVFbmQsIHRydWUsIHRydWUpXG4gICAgICAgIHJlbW92ZUl0ZW1zKHRoaXMuaW5uZXJEcmFnZ2FibGVzLCBkcmFnZ2FibGUpXG5cbiAgICAgICAgdGhpcy5vblJlbW92ZS5maXJlKGRyYWdnYWJsZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRyYWdnYWJsZS5tb3ZlKHJlY3QucG9zaXRpb24sIHRpbWVFbmQsIHRydWUsIHRydWUpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGFkZChkcmFnZ2FibGUsIHRpbWUpIHtcbiAgICBjb25zdCBuZXdEcmFnZ2FibGVzSW5kZXggPSB0aGlzLmlubmVyRHJhZ2dhYmxlcy5sZW5ndGhcblxuICAgIHRoaXMuYmVmb3JlQWRkLmZpcmUoZHJhZ2dhYmxlKVxuXG4gICAgdGhpcy5wdXNoSW5uZXJEcmFnZ2FibGUoZHJhZ2dhYmxlKVxuICAgIGNvbnN0IHJlY3RhbmdsZXMgPSB0aGlzLm9wdGlvbnMucG9zaXRpb25pbmcodGhpcy5pbm5lckRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIHJldHVybiBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKClcbiAgICB9KSwgbmV3RHJhZ2dhYmxlc0luZGV4LCBkcmFnZ2FibGUpXG5cbiAgICB0aGlzLnNldFBvc2l0aW9uKHJlY3RhbmdsZXMsIFtuZXdEcmFnZ2FibGVzSW5kZXhdLCB0aW1lIHx8IDApXG4gICAgaWYgKHRoaXMuaW5uZXJEcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKSAhPT0gLTEpIHtcbiAgICAgIHRoaXMuYWRkUmVtb3ZlT25Nb3ZlKGRyYWdnYWJsZSlcbiAgICB9XG4gIH1cblxuICBwdXNoSW5uZXJEcmFnZ2FibGUoZHJhZ2dhYmxlKSB7XG4gICAgaWYgKHRoaXMuaW5uZXJEcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKT09PS0xKSB7XG4gICAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5wdXNoKGRyYWdnYWJsZSlcbiAgICB9XG4gIH1cblxuICBhZGRSZW1vdmVPbk1vdmUoZHJhZ2dhYmxlKSB7XG4gICAgZHJhZ2dhYmxlLm9uTW92ZS5hZGQodGhpcy5yZW1vdmVIYW5kbGVyID0gKCkgPT4ge1xuICAgICAgdGhpcy5yZW1vdmUoZHJhZ2dhYmxlKVxuICAgIH0pXG5cbiAgICB0aGlzLm9uQWRkLmZpcmUoZHJhZ2dhYmxlKVxuICB9XG5cbiAgcmVtb3ZlKGRyYWdnYWJsZSkge1xuICAgIGRyYWdnYWJsZS5vbk1vdmUucmVtb3ZlKHRoaXMucmVtb3ZlSGFuZGxlcilcblxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5pbm5lckRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpXG4gICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMuc3BsaWNlKGluZGV4LCAxKVxuXG4gICAgY29uc3QgcmVjdGFuZ2xlcyA9IHRoaXMub3B0aW9ucy5wb3NpdGlvbmluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgcmV0dXJuIGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKVxuICAgIH0pLCBbXSlcblxuICAgIHRoaXMuc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgW10pXG4gICAgdGhpcy5vblJlbW92ZS5maXJlKGRyYWdnYWJsZSlcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgZHJhZ2dhYmxlLm1vdmUoZHJhZ2dhYmxlLmluaXRQb3NpdGlvbiwgMCwgdHJ1ZSwgdHJ1ZSlcbiAgICAgIHRoaXMub25SZW1vdmUuZmlyZShkcmFnZ2FibGUpXG4gICAgfSlcbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcyA9IFtdXG4gIH1cblxuICBnZXRTb3J0ZWREcmFnZ2FibGVzKCkge1xuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzLnNsaWNlKClcbiAgfVxufVxuXG5UYXJnZXQub25DcmVhdGUgPSBuZXcgRHJhZ2VlLkV2ZW50KFRhcmdldCwgeyBpc1JldmVyc2U6IHRydWUsIGlzU3RvcE9uVHJ1ZTogdHJ1ZSB9KVxuVGFyZ2V0Lm9uQ3JlYXRlLmFkZChhZGRUb0RlZmF1bHRTY29wZSlcblxuZXhwb3J0IHsgVGFyZ2V0IH1cbiIsImV4cG9ydCBmdW5jdGlvbiBoYXNDbGFzcyhlbGVtZW50LCBjKSB7XG4gIGNvbnN0IHJlID0gbmV3IFJlZ0V4cCgnKF58XFxcXHMpJyArIGMgKyAnKFxcXFxzfCQpJywgJ2cnKVxuICByZXR1cm4gKHJlLnRlc3QoZWxlbWVudC5jbGFzc05hbWUpKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQ2xhc3MoZWxlbWVudCwgYykge1xuICBpZiAoIWhhc0NsYXNzKGVsZW1lbnQsIGMpKSB7XG4gICAgZWxlbWVudC5jbGFzc05hbWUgPSAoZWxlbWVudC5jbGFzc05hbWUgKyAnICcgKyBjKS5yZXBsYWNlKC9cXHMrL2csICcgJykucmVwbGFjZSgvKF4gfCAkKS9nLCAnJylcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQ2xhc3MoZWxlbWVudCwgYykge1xuICBjb25zdCByZSA9IG5ldyBSZWdFeHAoJyhefFxcXFxzKScgKyBjICsgJyhcXFxcc3wkKScsICdnJylcbiAgZWxlbWVudC5jbGFzc05hbWUgPSBlbGVtZW50LmNsYXNzTmFtZS5yZXBsYWNlKHJlLCAnJDEnKS5yZXBsYWNlKC9cXHMrL2csICcgJykucmVwbGFjZSgvKF4gfCAkKS9nLCAnJylcbn1cbiIsImZ1bmN0aW9uIHNldFN0eWxlKGVsZW1lbnQsIHN0eWxlKSB7XG4gIHN0eWxlID0gc3R5bGUgfHwge31cbiAgbGV0IGNzc1RleHQgPSAnJ1xuICBmb3IgKGNvbnN0IGtleSBpbiBzdHlsZSkge1xuICAgIGlmIChzdHlsZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICBjc3NUZXh0ICs9IGtleSArICc6ICcgKyBzdHlsZVtrZXldICsgJzsgJ1xuICAgIH1cbiAgfVxuXG4gIGVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IGNzc1RleHRcbn1cblxuZnVuY3Rpb24gYXBwZW5kRmlyc3RDaGlsZChlbGVtZW50LCBub2RlKSB7XG4gIGlmIChlbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICBlbGVtZW50Lmluc2VydEJlZm9yZShub2RlLCBlbGVtZW50LmZpcnN0Q2hpbGQpXG4gIH0gZWxzZSB7XG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChub2RlKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUNhbnZhcyhhcmVhLCByZWN0YWdsZSkge1xuICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKVxuICBpZiAod2luZG93LmdldENvbXB1dGVkU3R5bGUoYXJlYSkucG9zaXRpb24gPT09ICdzdGF0aWMnKSB7XG4gICAgYXJlYS5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSdcbiAgfVxuXG4gIGNhbnZhcy5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgcmVjdGFnbGUuc2l6ZS54ICsgJ3B4JylcbiAgY2FudmFzLnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgcmVjdGFnbGUuc2l6ZS55ICsgJ3B4JylcbiAgc2V0U3R5bGUoY2FudmFzLCB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgbGVmdDogcmVjdGFnbGUucG9zaXRpb24ueSArICdweCcsXG4gICAgdG9wOiByZWN0YWdsZS5wb3NpdGlvbi55ICsgJ3B4JyxcbiAgICB3aWR0aDogcmVjdGFnbGUuc2l6ZS54ICsgJ3B4JyxcbiAgICBoZWlnaHQ6IHJlY3RhZ2xlLnNpemUueSArICdweCdcbiAgfSlcbiAgYXBwZW5kRmlyc3RDaGlsZChhcmVhLCBjYW52YXMpXG4gIHJldHVybiBjYW52YXNcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldERlZmF1bHRQYXJlbnQoZWxlbWVudCkge1xuICBsZXQgcGFyZW50ID0gZWxlbWVudC5wYXJlbnROb2RlXG4gIHdoaWxlIChwYXJlbnQucGFyZW50Tm9kZSAmJiB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShwYXJlbnQpWydwb3NpdGlvbiddID09PSAnc3RhdGljJykge1xuICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnROb2RlXG4gIH1cbiAgcmV0dXJuIHBhcmVudFxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmFuZ2Uoc3RhcnQsIHN0b3AsIHN0ZXApIHtcbiAgY29uc3QgcmVzdWx0ID0gW11cbiAgaWYgKHR5cGVvZiBzdG9wID09PSAndW5kZWZpbmVkJykge1xuICAgIHN0b3AgPSBzdGFydFxuICAgIHN0YXJ0ID0gMFxuICB9XG4gIGlmICh0eXBlb2Ygc3RlcCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBzdGVwID0gMVxuICB9XG4gIGlmICgoc3RlcCA+IDAgJiYgc3RhcnQgPj0gc3RvcCkgfHwgKHN0ZXAgPCAwICYmIHN0YXJ0IDw9IHN0b3ApKSB7XG4gICAgcmV0dXJuIFtdXG4gIH1cbiAgZm9yIChsZXQgaSA9IHN0YXJ0OyBzdGVwID4gMCA/IGkgPCBzdG9wIDogaSA+IHN0b3A7IGkgKz0gc3RlcCkge1xuICAgIHJlc3VsdC5wdXNoKGkpXG4gIH1cbiAgcmV0dXJuIHJlc3VsdFxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==