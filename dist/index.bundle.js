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
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./src/util.js");
/* harmony import */ var _geometry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./geometry */ "./src/geometry.js");
/* harmony import */ var _draggable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./draggable */ "./src/draggable.js");
/* harmony import */ var _bound__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bound */ "./src/bound.js");




var Dragee = {
  util: _util__WEBPACK_IMPORTED_MODULE_0__["default"],
  Draggable: _draggable__WEBPACK_IMPORTED_MODULE_2__["Draggable"],
  bound: _bound__WEBPACK_IMPORTED_MODULE_3__["bound"]
}; //todo remove after refactore

var arcSliders = [];

function ArcSlider(area, element, options) {
  var areaRectangle = _geometry__WEBPACK_IMPORTED_MODULE_1__["Geometry"].createRectangleFromElement(area, area);
  var halfSize = _geometry__WEBPACK_IMPORTED_MODULE_1__["Geometry"].getSizeOfElement(element).mult(0.5);
  var i;
  this.options = {
    center: areaRectangle.getCenter(),
    radius: areaRectangle.getMinSide() / 2,
    startAngle: Math.PI,
    endAngle: 0,
    angles: [Math.PI, -Math.PI / 4, 0, Math.PI / 4, Math.PI / 2],
    onChange: function onChange() {},
    time: 500
  };

  for (i in options) {
    if (options.hasOwnProperty(i)) {
      this.options[i] = options[i];
    }
  }

  this.shiftedCenter = this.options.center.sub(halfSize);
  this.onChange = this.options.onChange;
  arcSliders.push(this);
  this.area = area;
  this.init(element);
}

ArcSlider.prototype.init = function (element) {
  var that = this,
      angle = this.options.startAngle,
      position = _geometry__WEBPACK_IMPORTED_MODULE_1__["Geometry"].getPointFromRadialSystem(angle, this.options.radius, this.shiftedCenter),
      bound = Dragee.bound.toArc(that.shiftedCenter, that.options.radius, this.options.startAngle, this.options.endAngle);
  this.angle = angle;
  this.draggable = new Dragee.Draggable(element, {
    parent: this.area,
    bound: bound,
    position: position,
    onMove: function onMove() {
      that.change();
      return true;
    }
  });
};

ArcSlider.prototype.updateAngle = function () {
  this.angle = _geometry__WEBPACK_IMPORTED_MODULE_1__["Geometry"].getAngle(this.shiftedCenter, this.draggable.position);
};

ArcSlider.prototype.change = function () {
  this.updateAngle(); //      var angle = Geometry.getNearestAngle(this.options.angles, this.angle);
  //      this.setAngle(angle,this.options.time);

  this.onChange(this.angle);
};

ArcSlider.prototype.setAngle = function (angle, time) {
  var position = _geometry__WEBPACK_IMPORTED_MODULE_1__["Geometry"].getPointFromRadialSystem(this.angle, this.options.radius, this.shiftedCenter);
  this.angle = _geometry__WEBPACK_IMPORTED_MODULE_1__["Geometry"].normalizeAngle(angle, position);
  this.draggable.move(position, time || 0, true, true);
  this.onChange(this.angle);
};



/***/ }),

/***/ "./src/bound.js":
/*!**********************!*\
  !*** ./src/bound.js ***!
  \**********************/
/*! exports provided: bound */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bound", function() { return bound; });
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

var bound = {
  toRectangle: boundToRectangle,
  toElement: boundToElement,
  toLineX: boundToLineX,
  toLineY: boundToLineY,
  toLine: boundToLine,
  toCircle: boundToCircle,
  toArc: boundToArc
};


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
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./src/util.js");
/* harmony import */ var _geometry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./geometry */ "./src/geometry.js");
/* harmony import */ var _draggable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./draggable */ "./src/draggable.js");
/* harmony import */ var _bound__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bound */ "./src/bound.js");




var Dragee = {
  util: _util__WEBPACK_IMPORTED_MODULE_0__["default"],
  bound: _bound__WEBPACK_IMPORTED_MODULE_3__["bound"],
  Draggable: _draggable__WEBPACK_IMPORTED_MODULE_2__["Draggable"]
}; //todo remove after refactore

var isTouch = 'ontouchstart' in window;
var charts = [];

function getArrayWithBoundIndexes(index, length) {
  var retIndexes = [];

  if (index !== -1) {
    retIndexes.push(index);
    retIndexes.push((index + 1) % length);
  }

  return retIndexes;
}

function Chart(area, elements, options) {
  var areaRectangle = _geometry__WEBPACK_IMPORTED_MODULE_1__["Geometry"].createRectangleFromElement(area, area);
  var i;
  this.options = {
    center: areaRectangle.getCenter(),
    radius: areaRectangle.getMinSide() / 2,
    touchRadius: areaRectangle.getMinSide() / 2,
    boundAngle: Math.PI / 9,
    fillStyles: Dragee.util.range(0, elements.length).map(function () {
      return Dragee.util.randomColor();
    }),
    initAngles: Dragee.util.range(-90, 270, 360 / elements.length).map(function (angle) {
      return _geometry__WEBPACK_IMPORTED_MODULE_1__["Geometry"].toRadian(angle);
    }),
    onDraw: function onDraw() {},
    limitImg: null,
    limitImgOffset: new _geometry__WEBPACK_IMPORTED_MODULE_1__["Point"](0, 0),
    isSelectable: false
  };

  for (i in options) {
    if (options.hasOwnProperty(i)) {
      this.options[i] = options[i];
    }
  }

  charts.push(this);
  this.onDraw = this.options.onDraw;
  this.area = area;
  this.areaRectangle = areaRectangle;
  this.init(elements);
}

Chart.prototype.init = function (elements) {
  var that = this;
  this.canvas = Dragee.util.createCanvas(this.area, this.areaRectangle);
  this.context = this.canvas.getContext('2d');
  this.draggables = elements.map(function (element, i) {
    var angle = this.options.initAngles[i],
        halfSize = _geometry__WEBPACK_IMPORTED_MODULE_1__["Geometry"].getSizeOfElement(element).mult(0.5),
        position = _geometry__WEBPACK_IMPORTED_MODULE_1__["Geometry"].getPointFromRadialSystem(angle, this.options.touchRadius, this.options.center.sub(halfSize)),
        bound = Dragee.bound.toArc(that.options.center.sub(halfSize), that.options.touchRadius, that.getBoundAngle(i, false), that.getBoundAngle(i, true));
    return new Dragee.Draggable(element, {
      parent: this.area,
      bound: bound,
      position: position,
      onMove: function onMove() {
        that.draw();
        return true;
      }
    });
  }, this);
  this.isInit = true;

  if (this.options.isSelectable) {
    this.initSelect();
  }

  this.draw();
};

Chart.prototype.initSelect = function () {
  var that = this;
  this.setActiveArc(-1);
  this.canvas.addEventListener(_draggable__WEBPACK_IMPORTED_MODULE_2__["events"].start, function (e) {
    var point = new _geometry__WEBPACK_IMPORTED_MODULE_1__["Point"](isTouch ? e.changedTouches[0].pageX : e.clientX, isTouch ? e.changedTouches[0].pageY : e.clientY);

    if (!that.canvasOffset) {
      that.canvasOffset = _geometry__WEBPACK_IMPORTED_MODULE_1__["Geometry"].getOffset(that.canvas);
    }

    point = point.sub(that.canvasOffset);
    var index = that.getArcOnPoint(point);

    if (index !== -1) {
      that.setActiveArc(that.activeArcIndex !== index ? index : -1);
    }
  });
};

Chart.prototype.updateAngles = function () {
  this.angles = this.draggables.map(function (draggable) {
    var halfSize = draggable.getSize().mult(0.5);
    return _geometry__WEBPACK_IMPORTED_MODULE_1__["Geometry"].getAngle(this.options.center.sub(halfSize), draggable.position);
  }, this);
};

Chart.prototype.getBoundAngle = function (index, isClossing) {
  var that = this,
      sign = isClossing ? 1 : -1;
  return function () {
    var i = (index + sign) % that.angles.length;

    if (i < 0) {
      i += that.angles.length;
    }

    return _geometry__WEBPACK_IMPORTED_MODULE_1__["Geometry"].normalizeAngle(that.angles[i] - sign * that.options.boundAngle);
  };
};

Chart.prototype.draw = function () {
  if (!this.isInit) {
    return;
  }

  this.updateAngles();
  this.context.clearRect(0, 0, this.areaRectangle.size.x, this.areaRectangle.size.y);
  this.draggables.forEach(function (_draggable, index) {
    this.drawArc(this.context, this.options.center, this.options.radius, index);
  }, this);
  this.draggables.forEach(function (_draggable, index) {
    var enableIndexes;

    if (this.options.isSelectable) {
      enableIndexes = getArrayWithBoundIndexes(this.activeArcIndex, this.draggables.length);

      if (enableIndexes.indexOf(index) !== -1) {
        this.drawLimitImg(index);
      }
    } else {
      this.drawLimitImg(index);
    }
  }, this);
  this.onDraw();
};

Chart.prototype.createClone = function (element) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var that = this;

  if (!this.isInit) {
    return;
  }

  var rectangle = _geometry__WEBPACK_IMPORTED_MODULE_1__["Geometry"].createRectangleFromElement(element, element);
  var opts = Object.assign({
    center: rectangle.getCenter(),
    radius: rectangle.getMinSide() / 2,
    fillStyles: this.options.fillStyles
  }, options);
  var canvas = Dragee.util.createCanvas(element, rectangle);
  var context = canvas.getContext('2d');
  var cloneObj = {
    draw: function draw() {
      context.clearRect(0, 0, rectangle.size.x, rectangle.size.y);
      that.draggables.forEach(function (_draggable, index) {
        that.drawArc(context, opts.center, opts.radius, index);
      });
    }
  };
  cloneObj.draw();
  return cloneObj;
};

Chart.prototype.getFillStyle = function (index) {
  if (typeof this.options.fillStyles[index] === 'function') {
    this.options.fillStyles[index] = this.options.fillStyles[index].call(this);
  }

  return this.options.fillStyles[index];
};

Chart.prototype.drawArc = function (context, center, radius, index) {
  var startAngle = this.angles[index],
      endAngle = this.angles[(index + 1) % this.angles.length],
      color = this.getFillStyle(index);
  context.beginPath();
  context.moveTo(center.x, center.y);
  context.arc(center.x, center.y, radius, startAngle, endAngle, false);
  context.lineTo(center.x, center.y);
  context.closePath();
  context.fillStyle = color;
  context.fill();
};

Chart.prototype.drawLimitImg = function (index) {
  var point, img;

  if (this.options.limitImg) {
    img = this.options.limitImg instanceof Array ? this.options.limitImg[index] : this.options.limitImg;
  }

  if (img) {
    var angle = _geometry__WEBPACK_IMPORTED_MODULE_1__["Geometry"].normalizeAngle(this.angles[index]);
    point = new _geometry__WEBPACK_IMPORTED_MODULE_1__["Point"](0, -img.height / 2);
    point = point.add(this.options.limitImgOffset);
    this.context.translate(this.areaRectangle.size.x / 2, this.areaRectangle.size.y / 2);
    this.context.rotate(angle);
    this.context.drawImage(img, point.x, point.y);
    this.context.setTransform(1, 0, 0, 1, 0, 0);
  }
};

Chart.prototype.getAnglesDiff = function () {
  var angles = this.angles.slice(1);
  var baseAngle = this.angles[0];
  angles.push(baseAngle);
  return angles.map(function (angle) {
    var diffAngle = _geometry__WEBPACK_IMPORTED_MODULE_1__["Geometry"].normalizeAngle(angle - baseAngle);
    baseAngle = angle;
    return diffAngle;
  });
};

Chart.prototype.getPercent = function () {
  return this.getAnglesDiff().map(function (diffAngle) {
    return diffAngle / (2 * Math.PI);
  });
};

Chart.prototype.getArcBisectrixs = function () {
  return this.getAnglesDiff().map(function (diffAngle, i) {
    return _geometry__WEBPACK_IMPORTED_MODULE_1__["Geometry"].normalizeAngle(this.angles[i] + diffAngle / 2);
  }, this);
};

Chart.prototype.getArcOnPoint = function (point) {
  var angle = _geometry__WEBPACK_IMPORTED_MODULE_1__["Geometry"].getAngle(this.options.center, point);
  var radius = _geometry__WEBPACK_IMPORTED_MODULE_1__["Geometry"].getDistance(this.options.center, point);

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
};

Chart.prototype.setAngles = function (angles) {
  this.angles = angles;
  this.draggables.forEach(function (draggable, i) {
    var angle = this.angles[i],
        halfSize = draggable.getSize().mult(0.5),
        position = _geometry__WEBPACK_IMPORTED_MODULE_1__["Geometry"].getPointFromRadialSystem(angle, this.options.touchRadius, this.options.center.sub(halfSize));
    draggable.move(position, 0, true, true);
  }, this);
  this.draw();
};

Chart.prototype.setActiveArc = function (index) {
  var enableIndexes = getArrayWithBoundIndexes(index, this.draggables.length);
  this.activeArcIndex = index;
  this.draggables.forEach(function (draggable, i) {
    draggable.enable = enableIndexes.indexOf(i) !== -1;
  });
  this.draw();
};



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








var Dragee = {
  bound: _bound__WEBPACK_IMPORTED_MODULE_3__["bound"],
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
    preventDoubleInit = function preventDoubleInit(draggable) {
  var message = "for this element Dragee.Draggable is already exist, don't create it twice ";

  if (draggables.some(function (existing) {
    return draggable.element === existing.element;
  })) {
    throw message;
  }

  draggables.push(draggable);
},
    addToDefaultScope = function addToDefaultScope(draggable) {
  _scope__WEBPACK_IMPORTED_MODULE_5__["defaultScope"].addDraggable(draggable);
},
    transformProperty = desandro_get_style_property__WEBPACK_IMPORTED_MODULE_2___default()('transform'),
    transitionProperty = desandro_get_style_property__WEBPACK_IMPORTED_MODULE_2___default()('transition');

function Draggable(element) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var that = this;
  var parent = options.parent || Object(_util__WEBPACK_IMPORTED_MODULE_0__["getDefaultParent"])(element);
  this.targets = [];
  this.options = Object.assign({
    parent: parent,
    bound: Dragee.bound.toElement(parent, parent),
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
    this.move(this.position, 0, true, true);
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
  that.init();
}

Draggable.onCreate = new Dragee.Event(Draggable, {
  isReverse: true,
  isStopOnTrue: true
});
Draggable.onCreate.add(addToDefaultScope);

Draggable.prototype.init = function () {
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
};

Draggable.prototype.reinit = function () {
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
};

Draggable.prototype.getSize = function (_recalulate) {
  return _geometry__WEBPACK_IMPORTED_MODULE_4__["Geometry"].getSizeOfElement(this.element, this.options.isContentBoxSize);
};

Draggable.prototype.getPosition = function () {
  this.position = this.offset.add(this._transformPosition || new _geometry__WEBPACK_IMPORTED_MODULE_4__["Point"](0, 0));
  return this.position;
};

Draggable.prototype.getCenter = function () {
  return this.position.add(this.getSize().mult(0.5));
};

Draggable.prototype._setTranslate = function (point) {
  this._transformPosition = point;
  var transform = this.element.style[transformProperty],
      translateCss = ' translate3d(' + point.x + 'px,' + point.y + 'px, 0px)';
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
};

Draggable.prototype.move = function (point, time, isFix, isSilent) {
  time = time || 0;
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
};

Draggable.prototype.refreshPosition = function () {
  this.setPosition(this.getPosition());
};

Draggable.prototype.setPosition = function (point) {
  point = point.clone();
  this.position = point;

  if (transitionProperty) {
    this.element.style[transitionProperty] = '0ms';
  }

  this._setTranslate(point.sub(this.offset));
};

Draggable.prototype.setZeroTransition = function () {
  if (transitionProperty) {
    this.element.style[transitionProperty] = '0ms';
  }
};

Draggable.prototype.determineDirection = function (point) {
  this.leftDirection = this.position.x < point.x;
  this.rightDirection = this.position.x > point.x;
  this.upDirection = this.position.y > point.y;
  this.downDirection = this.position.y < point.y;
};

Draggable.prototype.dragStart = function (event) {
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
  this.isDragee = true;
  this.onStart.fire(event);
  Object(_util__WEBPACK_IMPORTED_MODULE_0__["addClass"])(this.element, 'active');
  this.onMove.fire(event);
};

Draggable.prototype.dragMove = function (event) {
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
};

Draggable.prototype.dragEnd = function (event) {
  var isTouchEvent = isTouch && event instanceof window.TouchEvent;
  var touch;

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
  this.isDragee = false;
  Object(_util__WEBPACK_IMPORTED_MODULE_0__["removeClass"])(this.element, 'active');
};

Draggable.prototype.getRectangle = function () {
  return new _geometry__WEBPACK_IMPORTED_MODULE_4__["Rectangle"](this.position, this.getSize());
};

Draggable.prototype.refresh = function () {
  this.getSize(true);

  if (this.bound.refresh) {
    this.bound.refresh();
  }
};

Draggable.prototype.destroy = function () {
  this.element.removeEventListener(touchEvents.start, this._dragStart);
  this.element.removeEventListener(mouseEvents.start, this._dragStart);
  this.element.removeEventListener(touchEvents.move, this._dragMove);
  this.element.removeEventListener(mouseEvents.move, this._dragMove);
  this.element.removeEventListener(touchEvents.end, this._dragEnd);
  this.element.removeEventListener(mouseEvents.end, this._dragEnd);
  this.onEnd.reset();
  this.onMove.reset();
};

Draggable.prototype.__defineGetter__('enable', function () {
  return this._enable;
});

Draggable.prototype.__defineSetter__('enable', function (enable) {
  if (enable) {
    Object(_util__WEBPACK_IMPORTED_MODULE_0__["removeClass"])(this.element, 'disable');
  } else {
    Object(_util__WEBPACK_IMPORTED_MODULE_0__["addClass"])(this.element, 'disable');
  }

  return this._enable = enable;
});



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

/************ Array **************/
if (!Array.prototype.removeItem) {
  Array.prototype.removeItem = function (val) {
    for (var i = 0; i < this.length; i++) {
      if (this[i] === val) {
        this.splice(i, 1);
        i--;
      }
    }

    return this;
  };
}
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

try {
  if (!Object.prototype.__defineGetter__ && Object.defineProperty({}, 'x', {
    get: function get() {
      return true;
    }
  }).x) {
    Object.defineProperty(Object.prototype, '__defineGetter__', {
      enumerable: false,
      configurable: true,
      value: function value(name, func) {
        Object.defineProperty(this, name, {
          get: func,
          enumerable: true,
          configurable: true
        });
      }
    });
    Object.defineProperty(Object.prototype, '__defineSetter__', {
      enumerable: false,
      configurable: true,
      value: function value(name, func) {
        Object.defineProperty(this, name, {
          set: func,
          enumerable: true,
          configurable: true
        });
      }
    });
  }
} catch (_defPropException) {
  /*Do nothing if an exception occurs*/
}

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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: Draggable, Point, Rectangle, Geometry, List, listFactory, targets, Target, scopes, defaultScope, Scope, scopeFactory, scope, positionType, sortingFactory, positionFactory, bound, spiders, Spider, arcSliders, ArcSlider, charts, Chart, listSwitcherFactory, ListSwitcher */
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

/* harmony import */ var _bound__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bound */ "./src/bound.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bound", function() { return _bound__WEBPACK_IMPORTED_MODULE_7__["bound"]; });

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
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./src/util.js");
/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event */ "./src/event.js");
/* harmony import */ var _geometry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./geometry */ "./src/geometry.js");
/* harmony import */ var _bound__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bound */ "./src/bound.js");
/* harmony import */ var _draggable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./draggable */ "./src/draggable.js");


var lists = [];





var Dragee = {
  util: _util__WEBPACK_IMPORTED_MODULE_0__["default"],
  bound: _bound__WEBPACK_IMPORTED_MODULE_3__["bound"],
  Draggable: _draggable__WEBPACK_IMPORTED_MODULE_4__["Draggable"],
  events: _draggable__WEBPACK_IMPORTED_MODULE_4__["events"],
  Event: _event__WEBPACK_IMPORTED_MODULE_1__["default"]
}; //todo remove after refactore

function List(draggables, options) {
  this.options = {
    timeEnd: 200,
    timeExcange: 400,
    radius: 30,
    getDistance: _geometry__WEBPACK_IMPORTED_MODULE_2__["Geometry"].getDistance,
    isDisplacement: false
  };

  for (var i in options) {
    if (options.hasOwnProperty(i)) {
      this.options[i] = options[i];
    }
  }

  this.draggables = draggables;
  lists.push(this);
  this.onChange = new Dragee.Event(this);

  if (options && options.onChange) {
    this.onChange.add(options.onChange);
  }

  this.init();
}

List.prototype.init = function () {
  this._enable = true;
  this.draggables.forEach(this.initDraggable, this);
};

List.prototype.initDraggable = function (draggable) {
  var _moveHandler;

  var that = this;
  draggable.enable = this._enable;

  if (this.options.isDisplacement) {
    _moveHandler = function moveHandler() {
      if (this.isDragee) {
        that.onStart(this);
        draggable.onMove.remove(_moveHandler);
        return true;
      }
    };

    draggable.onEnd.add(function () {
      that.onEndDisplaycement(this);
      draggable.onMove.add(_moveHandler);
      return true;
    });
    draggable.onMove.add(_moveHandler);
  } else {
    draggable.onEnd.add(function () {
      that.onEnd(this);
      return true;
    });
  }
};

List.prototype.moveOrSave = function (draggable, position, time) {
  if (draggable.isDragee) {
    draggable.fixPosition = position;
  } else {
    draggable.move(position, time, true);
  }
};

List.prototype.onEnd = function (draggable) {
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
};

List.prototype.onEndDisplaycement = function (draggable) {
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
};

List.prototype.onStart = function (draggable) {
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
};

List.prototype.getCurrentFixPosition = function () {
  return this.draggables.map(function (draggable) {
    return draggable.fixPosition.clone();
  });
};

List.prototype.getSortedDraggables = function () {
  var initPositions = this.draggables.map(function (draggable) {
    return draggable.initPosition;
  });
  var sortedDraggables = initPositions.map(function (position) {
    return this.draggables.filter(function (draggable) {
      return draggable.fixPosition.compare(position);
    }, this)[0];
  }, this);
  return sortedDraggables;
};

List.prototype.reset = function () {
  this.draggables.forEach(function (draggable) {
    draggable.move(draggable.initPosition, 0, true, false);
  });
};

List.prototype.refresh = function () {
  this.draggables.forEach(function (draggable) {
    draggable.refresh();
  });
};

List.prototype.add = function (draggables) {
  if (!(draggables instanceof Array)) {
    draggables = [draggables];
  }

  draggables.forEach(this.initDraggable, this);
  this.draggables = this.draggables.concat(draggables);
};

List.prototype.remove = function (draggables) {
  var j;
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

    this.draggables.removeItem(draggable);
    Dragee.util.remove(this.draggables, draggable);
  }, this);
  j = 0;
  sortedDraggables.forEach(function (draggable) {
    if (this.draggables.indexOf(draggable) !== -1) {
      if (draggable.fixPosition !== initPositions[j]) {
        draggable.move(initPositions[j], this.options.timeExcange, true);
      }

      draggable.initPosition = initPositions[j];
      j++;
      list.push(draggable);
    }
  }, this);
  this.draggables = list;
};

List.prototype.clear = function () {
  this.remove(this.draggables.slice());
};

List.prototype.destroy = function () {
  this.draggables.forEach(function (draggable) {
    draggable.destroy();
  });
};

List.prototype.__defineGetter__('positions', function () {
  return this.getCurrentFixPosition();
});

List.prototype.__defineSetter__('positions', function (positions) {
  var message = 'wrong array length';

  if (positions.length === this.draggables.length) {
    positions.forEach(function (point, i) {
      this.draggables[i].move(point, 0, true, true);
    }, this);
  } else {
    throw message;
  }
});

List.prototype.__defineGetter__('enable', function () {
  return this._enable;
});

List.prototype.__defineSetter__('enable', function (value) {
  this._enable = value;
  this.draggables.forEach(function (draggable) {
    draggable.enable = value;
  });
});

function listFactory(parentElement, elements) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var draggableOptions = options.draggable || {};
  var listOptions = options.list || {};
  draggableOptions.parent = draggableOptions.parent || parentElement;
  elements = Array.prototype.slice.call(elements);
  var draggables = elements.map(function (element) {
    return new Dragee.Draggable(element, draggableOptions);
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





var Dragee = {
  List: _list__WEBPACK_IMPORTED_MODULE_2__["List"],
  Draggable: _draggable__WEBPACK_IMPORTED_MODULE_1__["Draggable"]
}; //todo remove after refactore

var extend = function extend(Child, Parent) {
  var F = function F() {};

  F.prototype = Parent.prototype;
  Child.prototype = new F();
  Child.prototype.constructor = Child;
  Child.superclass = Parent.prototype;
}; //todo remove after refacore


function ListSwitcher(draggables, options) {
  options = options || {};
  options.stepOn = options.stepOn || new _geometry__WEBPACK_IMPORTED_MODULE_0__["Point"](-50, 0);
  Dragee.List.call(this, draggables, options);
}

extend(ListSwitcher, Dragee.List);

ListSwitcher.prototype.init = function () {
  var that = this;
  this.draggables.forEach(function (draggable) {
    draggable.isOn = false;
    draggable.onEnd.add(function () {
      that.onEnd(this);
      return true;
    });
  });
};

ListSwitcher.prototype.onEnd = function (draggable) {
  var fixPositions = this.getCurrentFixPositionWithOff();
  var currentIndex = this.draggables.indexOf(draggable);
  var excangeIndex = _geometry__WEBPACK_IMPORTED_MODULE_0__["Geometry"].indexOfNearPoint(fixPositions, draggable.position, this.options.radius, this.options.getDistance);

  if (excangeIndex === -1 || excangeIndex === currentIndex) {
    this.moveDraggable(currentIndex, draggable.position, fixPositions[currentIndex], this.options.timeEnd);
  } else {
    if (this.draggables[excangeIndex].isDragee) {
      this.fixToOff(excangeIndex, fixPositions[currentIndex]);
    } else {
      this.moveDraggableToOff(excangeIndex, fixPositions[currentIndex], this.options.timeExcange);
    }

    this.moveDraggable(currentIndex, draggable.position, fixPositions[excangeIndex], this.options.timeEnd);
    this.onChange.fire();
  }

  return true;
};

ListSwitcher.prototype.moveDraggable = function (index, position, fixOffPosition, time) {
  var positions = [fixOffPosition, fixOffPosition.add(this.options.stepOn)],
      isOn = _geometry__WEBPACK_IMPORTED_MODULE_0__["Geometry"].indexOfNearPoint(positions, position, -1, _geometry__WEBPACK_IMPORTED_MODULE_0__["Geometry"].getXDifference);

  if (this.draggables[index].isOn !== !!isOn) {
    this.draggables[index].isOn = !!isOn;
    this.onChange.fire();
  }

  this.draggables[index].move(positions[isOn], time, true);
};

ListSwitcher.prototype.fixToOff = function (index, fixOffPosition) {
  this.draggables[index].isOn = false;
  this.draggables[index].fixPosition = fixOffPosition;
};

ListSwitcher.prototype.moveDraggableToOff = function (index, fixOffPosition, time) {
  this.draggables[index].isOn = false;
  this.draggables[index].move(fixOffPosition, time, true);
};

ListSwitcher.prototype.getCurrentFixPositionWithOff = function () {
  return this.draggables.map(function (draggable) {
    return draggable.isOn ? draggable.fixPosition.sub(this.options.stepOn) : draggable.fixPosition.clone();
  }, this);
};

ListSwitcher.prototype.getSortedDraggables = function () {
  return this.draggables.map(function (draggable) {
    return draggable.initPosition;
  }).map(function (position) {
    return this.draggables.filter(function (draggable) {
      return draggable.fixPosition.compare(position) || draggable.fixPosition.compare(position.add(this.options.stepOn));
    }, this)[0];
  }, this);
};

ListSwitcher.prototype.reset = function () {
  this.draggables.forEach(function (draggable) {
    draggable.move(draggable.initPosition, 0, true, false);
    draggable.isOn = false;
  });
};

ListSwitcher.prototype.__defineGetter__('positions', function () {
  return this.draggables.map(function (draggable) {
    var position = draggable.fixPosition.clone();
    position.isOn = draggable.isOn;
    return position;
  });
});

ListSwitcher.prototype.__defineSetter__('positions', function (positions) {
  var message = 'wrong array length';

  if (positions.length === this.draggables.length) {
    positions.forEach(function (point, i) {
      this.draggables[i].isOn = point.isOn;
      this.draggables[i].move(point, 0, true, true);
    }, this);
  } else {
    throw message;
  }
});

function listSwitcherFactory(element, draggableElements) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var draggableOptions = options.draggable || {};
  var listOptions = options.list || {};
  draggableOptions.parent = draggableOptions.parent || element;
  draggableElements = Array.prototype.slice.call(draggableElements);
  var draggables = draggableElements.map(function (element) {
    return new Dragee.Draggable(element, draggableOptions);
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




var Dragee = {
  util: _util__WEBPACK_IMPORTED_MODULE_0__["default"],
  Draggable: _draggable__WEBPACK_IMPORTED_MODULE_2__["Draggable"],
  Target: _target__WEBPACK_IMPORTED_MODULE_3__["Target"],
  Event: _event__WEBPACK_IMPORTED_MODULE_1__["default"]
}; //todo remove after refactore

var scopes = [];

function Scope(draggables, targets, options) {
  scopes.forEach(function (scope) {
    if (draggables) {
      draggables.forEach(function (draggable) {
        scope.draggables.removeItem(draggable);
      });
    }

    if (targets) {
      targets.forEach(function (target) {
        scope.targets.removeItem(target);
      });
    }
  });
  this.draggables = draggables || [];
  this.targets = targets || [];
  scopes.push(this);
  this.options = {
    timeEnd: options && options.timeEnd || 400
  };
  this.onChange = new Dragee.Event(this);

  if (options && options.onChange) {
    this.onChange.add(options.onChange);
  }

  this.init();
}

Scope.prototype.init = function () {
  var that = this;
  this.draggables.forEach(function (draggable) {
    draggable.onEnd.add(function () {
      return that.onEnd(this);
    });
  });
};

Scope.prototype.addDraggable = function (draggable) {
  var that = this;
  this.draggables.push(draggable);
  draggable.onEnd.unshift(function () {
    return that.onEnd(this);
  });
};

Scope.prototype.addTarget = function (target) {
  this.targets.push(target);
};

Scope.prototype.onEnd = function (draggable) {
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
};

Scope.prototype.reset = function () {
  this.targets.forEach(function (target) {
    target.reset();
  });
};

Scope.prototype.refresh = function () {
  this.draggables.forEach(function (draggable) {
    draggable.refresh();
  });
  this.targets.forEach(function (target) {
    target.refresh();
  });
};

Scope.prototype.__defineGetter__('positions', function () {
  return this.targets.map(function (target) {
    return target.innerDraggables.map(function (draggable) {
      return this.draggables.indexOf(draggable);
    }, this);
  }, this);
});

Scope.prototype.__defineSetter__('positions', function (positions) {
  var message = 'wrong array length';

  if (positions.length === this.targets.length) {
    this.targets.forEach(function (target) {
      target.reset();
    }, this);
    positions.forEach(function (targetIndexes, i) {
      targetIndexes.forEach(function (index) {
        this.targets[i].add(this.draggables[index]);
      }, this);
    }, this);
  } else {
    throw message;
  }
});

var defaultScope = new Scope();

function scope(fn) {
  var currentScope = new Scope(),
      addDraggableToScope = function addDraggableToScope(draggable) {
    currentScope.addDraggable(draggable);
    return true;
  },
      addTargetToScope = function addTargetToScope(target) {
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
    return new Dragee.Draggable(element, draggableOptions);
  });
  var targets = targetElements.map(function (element) {
    return new Dragee.Target(element, draggables, targetOptions);
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
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./src/util.js");
/* harmony import */ var _geometry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./geometry */ "./src/geometry.js");
/* harmony import */ var _bound__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bound */ "./src/bound.js");
/* harmony import */ var _draggable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./draggable */ "./src/draggable.js");






var Dragee = {
  util: _util__WEBPACK_IMPORTED_MODULE_0__["default"],
  bound: _bound__WEBPACK_IMPORTED_MODULE_2__["bound"],
  Draggable: _draggable__WEBPACK_IMPORTED_MODULE_3__["Draggable"]
};
var spiders = [];

function Spider(area, elements) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
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

Spider.prototype.init = function (elements) {
  var that = this;
  this.canvas = Dragee.util.createCanvas(this.area, this.areaRectangle);
  this.context = this.canvas.getContext('2d');
  this.draggables = elements.map(function (element, i) {
    var angle = this.options.angle + i * this.options.dAngle,
        halfSize = _geometry__WEBPACK_IMPORTED_MODULE_1__["Geometry"].getSizeOfElement(element).mult(0.5),
        start = _geometry__WEBPACK_IMPORTED_MODULE_1__["Geometry"].getPointFromRadialSystem(angle, this.options.startRadius, this.options.center).sub(halfSize),
        end = _geometry__WEBPACK_IMPORTED_MODULE_1__["Geometry"].getPointFromRadialSystem(angle, this.options.endRadius, this.options.center).sub(halfSize),
        bound = Dragee.bound.toLine(start, end);
    return new Dragee.Draggable(element, {
      parent: this.area,
      bound: bound,
      position: start,
      onMove: function onMove() {
        that.draw();
        return true;
      }
    });
  }, this);
  this.isInit = true;
  this.draw();
};

Spider.prototype.draw = function () {
  var point, i;

  if (!this.isInit) {
    return;
  }

  this.context.clearRect(0, 0, this.areaRectangle.size.x, this.areaRectangle.size.y);
  this.context.beginPath();
  point = this.draggables[0].getCenter();
  this.context.moveTo(point.x, point.y);

  for (i = 0; i < this.draggables.length; i++) {
    point = this.draggables[i].getCenter();
    this.context.lineTo(point.x, point.y);
  }

  this.context.closePath();
  this.context.lineWidth = this.options.lineWidth;
  this.context.strokeStyle = this.options.strokeStyle;
  this.context.stroke();
  this.context.fillStyle = this.options.fillStyle;
  this.context.fill();
};



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







var Dragee = {
  util: _util__WEBPACK_IMPORTED_MODULE_0__["default"],
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

function Target(element, draggables) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var target = this;
  var parent = options.parent || Dragee.util.getDefaultParent(element);
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
    draggable.targets.push(target);
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

Target.onCreate = new Dragee.Event(Target, {
  isReverse: true,
  isStopOnTrue: true
});
Target.onCreate.add(addToDefaultScope);

Target.prototype.getRectangle = function () {
  return _geometry__WEBPACK_IMPORTED_MODULE_2__["Geometry"].createRectangleFromElement(this.element, this.options.parent, this.options.isContentBoxSize, true);
};

Target.prototype.catchDraggable = function (draggable) {
  if (this.options.catchDraggable) {
    return this.options.catchDraggable(this, draggable);
  } else {
    var targetRectangle = this.getRectangle(),
        draggableSquare = draggable.getRectangle().getSquare();
    return draggableSquare < targetRectangle.getSquare() && targetRectangle.includePoint(draggable.getCenter());
  }
};

Target.prototype.getPosition = function () {
  return this.getRectangle().position;
};

Target.prototype.getSize = function () {
  return this.getRectangle().size;
};

Target.prototype.init = function () {
  var rectangles, indexesOfNew;
  this.innerDraggables = this.draggables.filter(function (draggable) {
    var element = draggable.element.parentNode;

    while (element) {
      if (element === this.element) {
        return true;
      }

      element = element.parentNode;
    }

    return false;
  }, this);

  if (this.innerDraggables.length) {
    indexesOfNew = Dragee.util.range(this.innerDraggables.length);
    rectangles = this.options.positioning(this.innerDraggables.map(function (draggable) {
      return draggable.getRectangle();
    }), indexesOfNew);
    this.setPosition(rectangles, indexesOfNew);
    this.innerDraggables.forEach(function (draggable) {
      this.onAdd.fire(draggable);
    }, this);
  }
};

Target.prototype.destroy = function () {
  Dragee.scopes.forEach(function (scope) {
    scope.targets.removeItem(this);
  }, this);
};

Target.prototype.refresh = function () {
  var rectangles = this.options.positioning(this.innerDraggables.map(function (draggable) {
    return draggable.getRectangle();
  }), []);
  this.setPosition(rectangles, [], 0);
};

Target.prototype.onEnd = function (draggable) {
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
};

Target.prototype.setPosition = function (rectangles, indexesOfNew, time) {
  this.innerDraggables.slice(0).forEach(function (draggable, i) {
    var rect = rectangles[i],
        timeEnd = time || time === 0 ? time : indexesOfNew.indexOf(i) !== -1 ? this.options.timeEnd : this.options.timeExcange;

    if (rect.removable) {
      draggable.move(draggable.initPosition, timeEnd, true, true);
      this.innerDraggables.removeItem(draggable);
      this.onRemove.fire(draggable);
    } else {
      draggable.move(rect.position, timeEnd, true, true);
    }
  }, this);
};

Target.prototype.add = function (draggable, time) {
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
};

Target.prototype.pushInnerDraggable = function (draggable) {
  if (this.innerDraggables.indexOf(draggable) === -1) {
    this.innerDraggables.push(draggable);
  }
};

Target.prototype.addRemoveOnMove = function (draggable) {
  var that = this;
  draggable.onMove.add(this.removeHandler = function () {
    that.remove(draggable);
  });
  this.onAdd.fire(draggable);
};

Target.prototype.remove = function (draggable) {
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
};

Target.prototype.reset = function () {
  this.innerDraggables.forEach(function (draggable) {
    draggable.move(draggable.initPosition, 0, true, true);
    this.onRemove.fire(draggable);
  }, this);
  this.innerDraggables = [];
};

Target.prototype.getSortedDraggables = function () {
  this.innerDraggables.slice();
};



/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! exports provided: getDefaultParent, getTouchByID, getSumValueOfStyleRule, appendFirstChild, range, setStyle, randomColor, createCanvas, hasClass, addClass, removeClass, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaultParent", function() { return getDefaultParent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTouchByID", function() { return getTouchByID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSumValueOfStyleRule", function() { return getSumValueOfStyleRule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appendFirstChild", function() { return appendFirstChild; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "range", function() { return range; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setStyle", function() { return setStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomColor", function() { return randomColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCanvas", function() { return createCanvas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasClass", function() { return hasClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addClass", function() { return addClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeClass", function() { return removeClass; });


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

function appendFirstChild(element, node) {
  element.firstChild ? element.insertBefore(node, element.firstChild) : element.appendChild(node);
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

var util = {
  getDefaultParent: getDefaultParent,
  getTouchByID: getTouchByID,
  getSumValueOfStyleRule: getSumValueOfStyleRule,
  appendFirstChild: appendFirstChild,
  range: range,
  setStyle: setStyle,
  randomColor: randomColor,
  createCanvas: createCanvas,
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass
};

/* harmony default export */ __webpack_exports__["default"] = (util);

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9EcmFnZWUvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0RyYWdlZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9EcmFnZWUvLi9ub2RlX21vZHVsZXMvZGVzYW5kcm8tZ2V0LXN0eWxlLXByb3BlcnR5L2dldC1zdHlsZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9zcmMvYXJjc2xpZGVyLmpzIiwid2VicGFjazovL0RyYWdlZS8uL3NyYy9ib3VuZC5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9zcmMvY2hhcnQuanMiLCJ3ZWJwYWNrOi8vRHJhZ2VlLy4vc3JjL2RyYWdnYWJsZS5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9zcmMvZXZlbnQuanMiLCJ3ZWJwYWNrOi8vRHJhZ2VlLy4vc3JjL2V4cGFuZG5hdGl2ZS5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9zcmMvZ2VvbWV0cnkuanMiLCJ3ZWJwYWNrOi8vRHJhZ2VlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL0RyYWdlZS8uL3NyYy9saXN0LmpzIiwid2VicGFjazovL0RyYWdlZS8uL3NyYy9saXN0c3dpdGNoZXIuanMiLCJ3ZWJwYWNrOi8vRHJhZ2VlLy4vc3JjL3Bvc2l0aW9uaW5nLmpzIiwid2VicGFjazovL0RyYWdlZS8uL3NyYy9zY29wZS5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9zcmMvc3BpZGVyLmpzIiwid2VicGFjazovL0RyYWdlZS8uL3NyYy90YXJnZXQuanMiLCJ3ZWJwYWNrOi8vRHJhZ2VlLy4vc3JjL3V0aWwuanMiXSwibmFtZXMiOlsiRHJhZ2VlIiwidXRpbCIsIkRyYWdnYWJsZSIsImJvdW5kIiwiYXJjU2xpZGVycyIsIkFyY1NsaWRlciIsImFyZWEiLCJlbGVtZW50Iiwib3B0aW9ucyIsImFyZWFSZWN0YW5nbGUiLCJHZW9tZXRyeSIsImNyZWF0ZVJlY3RhbmdsZUZyb21FbGVtZW50IiwiaGFsZlNpemUiLCJnZXRTaXplT2ZFbGVtZW50IiwibXVsdCIsImkiLCJjZW50ZXIiLCJnZXRDZW50ZXIiLCJyYWRpdXMiLCJnZXRNaW5TaWRlIiwic3RhcnRBbmdsZSIsIk1hdGgiLCJQSSIsImVuZEFuZ2xlIiwiYW5nbGVzIiwib25DaGFuZ2UiLCJ0aW1lIiwiaGFzT3duUHJvcGVydHkiLCJzaGlmdGVkQ2VudGVyIiwic3ViIiwicHVzaCIsImluaXQiLCJwcm90b3R5cGUiLCJ0aGF0IiwiYW5nbGUiLCJwb3NpdGlvbiIsImdldFBvaW50RnJvbVJhZGlhbFN5c3RlbSIsInRvQXJjIiwiZHJhZ2dhYmxlIiwicGFyZW50Iiwib25Nb3ZlIiwiY2hhbmdlIiwidXBkYXRlQW5nbGUiLCJnZXRBbmdsZSIsInNldEFuZ2xlIiwibm9ybWFsaXplQW5nbGUiLCJtb3ZlIiwiYm91bmRUb1JlY3RhbmdsZSIsInJlY3RhbmdsZSIsInBvaW50Iiwic2l6ZSIsImNhbGNQb2ludCIsImNsb25lIiwicmVjdFAyIiwiZ2V0UDMiLCJ4IiwieSIsImJvdW5kVG9FbGVtZW50IiwicmV0RnVuYyIsImFwcGx5IiwiYXJndW1lbnRzIiwicmVmcmVzaCIsImJvdW5kVG9MaW5lWCIsInN0YXJ0WSIsImVuZFkiLCJib3VuZFRvTGluZVkiLCJzdGFydFgiLCJlbmRYIiwiYm91bmRUb0xpbmUiLCJzdGFydCIsImVuZCIsImFscGhhIiwiYXRhbjIiLCJiZXRhIiwic29tZUsiLCJjb3NCZXRhIiwiY29zIiwic2luQmV0YSIsInNpbiIsInBvaW50MiIsIlBvaW50IiwibmV3RW5kIiwiZ2V0UG9pbnRJbkxpbmVCeUxlbmdodCIsInBvaW50Q3Jvc3NpbmciLCJkaXJlY3RDcm9zc2luZyIsImJvdW5kVG9DaXJjbGUiLCJfc2l6ZSIsImJvdW5kZWRQb2ludCIsImJvdW5kVG9BcmMiLCJzdGFydEFnbGUiLCJib3VuZFN0YXJ0QW5nbGUiLCJib3VuZEVuZHRBbmdsZSIsImJvdW5kQW5nbGUiLCJ0b1JlY3RhbmdsZSIsInRvRWxlbWVudCIsInRvTGluZVgiLCJ0b0xpbmVZIiwidG9MaW5lIiwidG9DaXJjbGUiLCJpc1RvdWNoIiwid2luZG93IiwiY2hhcnRzIiwiZ2V0QXJyYXlXaXRoQm91bmRJbmRleGVzIiwiaW5kZXgiLCJsZW5ndGgiLCJyZXRJbmRleGVzIiwiQ2hhcnQiLCJlbGVtZW50cyIsInRvdWNoUmFkaXVzIiwiZmlsbFN0eWxlcyIsInJhbmdlIiwibWFwIiwicmFuZG9tQ29sb3IiLCJpbml0QW5nbGVzIiwidG9SYWRpYW4iLCJvbkRyYXciLCJsaW1pdEltZyIsImxpbWl0SW1nT2Zmc2V0IiwiaXNTZWxlY3RhYmxlIiwiY2FudmFzIiwiY3JlYXRlQ2FudmFzIiwiY29udGV4dCIsImdldENvbnRleHQiLCJkcmFnZ2FibGVzIiwiZ2V0Qm91bmRBbmdsZSIsImRyYXciLCJpc0luaXQiLCJpbml0U2VsZWN0Iiwic2V0QWN0aXZlQXJjIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50cyIsImUiLCJjaGFuZ2VkVG91Y2hlcyIsInBhZ2VYIiwiY2xpZW50WCIsInBhZ2VZIiwiY2xpZW50WSIsImNhbnZhc09mZnNldCIsImdldE9mZnNldCIsImdldEFyY09uUG9pbnQiLCJhY3RpdmVBcmNJbmRleCIsInVwZGF0ZUFuZ2xlcyIsImdldFNpemUiLCJpc0Nsb3NzaW5nIiwic2lnbiIsImNsZWFyUmVjdCIsImZvckVhY2giLCJfZHJhZ2dhYmxlIiwiZHJhd0FyYyIsImVuYWJsZUluZGV4ZXMiLCJpbmRleE9mIiwiZHJhd0xpbWl0SW1nIiwiY3JlYXRlQ2xvbmUiLCJvcHRzIiwiT2JqZWN0IiwiYXNzaWduIiwiY2xvbmVPYmoiLCJnZXRGaWxsU3R5bGUiLCJjYWxsIiwiY29sb3IiLCJiZWdpblBhdGgiLCJtb3ZlVG8iLCJhcmMiLCJsaW5lVG8iLCJjbG9zZVBhdGgiLCJmaWxsU3R5bGUiLCJmaWxsIiwiaW1nIiwiQXJyYXkiLCJoZWlnaHQiLCJhZGQiLCJ0cmFuc2xhdGUiLCJyb3RhdGUiLCJkcmF3SW1hZ2UiLCJzZXRUcmFuc2Zvcm0iLCJnZXRBbmdsZXNEaWZmIiwic2xpY2UiLCJiYXNlQW5nbGUiLCJkaWZmQW5nbGUiLCJnZXRQZXJjZW50IiwiZ2V0QXJjQmlzZWN0cml4cyIsImdldERpc3RhbmNlIiwib2Zmc2V0IiwiaiIsInNldEFuZ2xlcyIsImVuYWJsZSIsIkV2ZW50IiwibW91c2VFdmVudHMiLCJ0b3VjaEV2ZW50cyIsInByZXZlbnREb3VibGVJbml0IiwibWVzc2FnZSIsInNvbWUiLCJleGlzdGluZyIsImFkZFRvRGVmYXVsdFNjb3BlIiwiZGVmYXVsdFNjb3BlIiwiYWRkRHJhZ2dhYmxlIiwidHJhbnNmb3JtUHJvcGVydHkiLCJnZXRTdHlsZVByb3BlcnR5IiwidHJhbnNpdGlvblByb3BlcnR5IiwiZ2V0RGVmYXVsdFBhcmVudCIsInRhcmdldHMiLCJzdGFydEZpbHRlciIsImlzQ29udGVudEJveFNpemUiLCJvbkVuZCIsImlzUmV2ZXJzZSIsImlzU3RvcE9uVHJ1ZSIsIm9uU3RhcnQiLCJvbkNyZWF0ZSIsImZpcmUiLCJfZW5hYmxlIiwiZml4UG9zaXRpb24iLCJpbml0UG9zaXRpb24iLCJfZHJhZ1N0YXJ0IiwiZHJhZ1N0YXJ0IiwiYmluZCIsIl9kcmFnTW92ZSIsImRyYWdNb3ZlIiwiX2RyYWdFbmQiLCJkcmFnRW5kIiwicmVpbml0IiwiX3JlY2FsdWxhdGUiLCJnZXRQb3NpdGlvbiIsIl90cmFuc2Zvcm1Qb3NpdGlvbiIsIl9zZXRUcmFuc2xhdGUiLCJ0cmFuc2Zvcm0iLCJzdHlsZSIsInRyYW5zbGF0ZUNzcyIsInVhIiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwibXNpZSIsInRlc3QiLCJyZXBsYWNlIiwiaXNGaXgiLCJpc1NpbGVudCIsImRldGVybWluZURpcmVjdGlvbiIsInJlZnJlc2hQb3NpdGlvbiIsInNldFBvc2l0aW9uIiwic2V0WmVyb1RyYW5zaXRpb24iLCJsZWZ0RGlyZWN0aW9uIiwicmlnaHREaXJlY3Rpb24iLCJ1cERpcmVjdGlvbiIsImRvd25EaXJlY3Rpb24iLCJldmVudCIsImN1cnJlbnRFdmVudCIsImlzVG91Y2hFdmVudCIsIlRvdWNoRXZlbnQiLCJfc3RhcnRUb3VjaFBvaW50IiwiX3N0YXJ0UG9zaXRpb24iLCJfdG91Y2hJZCIsImlkZW50aWZpZXIiLCJzdG9wUHJvcGFnYXRpb24iLCJ0YXJnZXQiLCJIVE1MSW5wdXRFbGVtZW50IiwicHJldmVudERlZmF1bHQiLCJmb2N1cyIsImRvY3VtZW50IiwiaXNEcmFnZWUiLCJhZGRDbGFzcyIsInRvdWNoIiwiZ2V0VG91Y2hCeUlEIiwidG91Y2hQb2ludCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZW1vdmVDbGFzcyIsImdldFJlY3RhbmdsZSIsIlJlY3RhbmdsZSIsImRlc3Ryb3kiLCJyZXNldCIsIl9fZGVmaW5lR2V0dGVyX18iLCJfX2RlZmluZVNldHRlcl9fIiwiZnVuY3MiLCJhcmdzIiwiZnMiLCJyZXZlcnNlIiwicmV0VmFsdWUiLCJmIiwidW5zaGlmdCIsInJlbW92ZSIsInNwbGljZSIsIl9mIiwicmVtb3ZlSXRlbSIsInZhbCIsImF1Z21lbnQiLCJyZWNlaXZpbmdDbGFzcyIsImdpdmluZ0NsYXNzIiwibGVuIiwibWV0aG9kTmFtZSIsIk5vZGVMaXN0IiwiZGVmaW5lUHJvcGVydHkiLCJnZXQiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwidmFsdWUiLCJuYW1lIiwiZnVuYyIsInNldCIsIl9kZWZQcm9wRXhjZXB0aW9uIiwidG9TdHJpbmciLCJwIiwiayIsIm5lZ2F0aXZlIiwiY29tcGFyZSIsImdldFAxIiwiZ2V0UDIiLCJnZXRQNCIsIm9yIiwicmVjdCIsIm1pbiIsIm1heCIsImFuZCIsImluY2x1ZGVQb2ludCIsImluY2x1ZGVSZWN0YW5nbGUiLCJtb3ZlVG9Cb3VuZCIsImF4aXMiLCJzZWxBeGlzIiwiY3Jvc3NSZWN0YW5nbGUiLCJ0aGlzQ2VudGVyIiwicmVjdENlbnRlciIsImdldFNxdWFyZSIsInN0eWxlQXBwbHkiLCJlbCIsInF1ZXJ5U2VsZWN0b3IiLCJsZWZ0IiwidG9wIiwid2lkdGgiLCJncm93dGgiLCJwMSIsInAyIiwiZHgiLCJkeSIsInNxcnQiLCJkaXN0YW5jZSIsImdldFhEaWZmZXJlbmNlIiwiYWJzIiwiZ2V0WURpZmZlcmVuY2UiLCJ0cmFuc2Zvcm1lZFNwYWNlRGlzdGFuY2VGYWN0b3J5IiwicG93IiwiaW5kZXhPZk5lYXJQb2ludCIsImFyciIsInRlbXAiLCJib3VuZFBvaW50IiwiTDFQMSIsIkwxUDIiLCJMMlAxIiwiTDJQMiIsImsxIiwiazIiLCJiMSIsImIyIiwiYm91bmRUb1NlZ21lbnQiLCJMUDEiLCJMUDIiLCJQIiwiQSIsIkIiLCJBUCIsIkFCIiwiYWIyIiwiYXBfYWIiLCJ0IiwiZ2V0UG9pbnRJbkxpbmUiLCJwZXJjZW50IiwibGVuZ2h0IiwiaXNDb25zaWRlclRyYW5zbGF0ZSIsInBhcmVudE5vZGUiLCJwYXJzZUludCIsImdldENvbXB1dGVkU3R5bGUiLCJnZXRTdW1WYWx1ZU9mU3R5bGVSdWxlIiwiZWxSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwicGFyZW50UmVjdCIsImFkZFBvaW50VG9Cb3VuZFBvaW50cyIsImJvdW5kcG9pbnRzIiwiaXNSaWdodCIsInJlc3VsdCIsImZpbHRlciIsImJQb2ludCIsImRpZmYiLCJ0b0RlZ3JlZSIsImRtaW4iLCJkbWF4IiwiZ2V0QW5nbGVEaWZmIiwiZ2V0TmVhcmVzdEFuZ2xlIiwibWluQW5nbGUiLCJtYXhBbmdsZSIsImxpc3RzIiwiTGlzdCIsInRpbWVFbmQiLCJ0aW1lRXhjYW5nZSIsImlzRGlzcGxhY2VtZW50IiwiaW5pdERyYWdnYWJsZSIsIm1vdmVIYW5kbGVyIiwib25FbmREaXNwbGF5Y2VtZW50IiwibW92ZU9yU2F2ZSIsImZpeFBvc2l0aW9ucyIsImdldEN1cnJlbnRGaXhQb3NpdGlvbiIsImN1cnJlbnRJbmRleCIsImV4Y2FuZ2VJbmRleCIsInNvcnRlZERyYWdnYWJsZXMiLCJnZXRTb3J0ZWREcmFnZ2FibGVzIiwidGFyZ2V0SW5kZXgiLCJpbml0UG9zaXRpb25zIiwiY29uY2F0IiwibGlzdCIsImNsZWFyIiwicG9zaXRpb25zIiwibGlzdEZhY3RvcnkiLCJwYXJlbnRFbGVtZW50IiwiZHJhZ2dhYmxlT3B0aW9ucyIsImxpc3RPcHRpb25zIiwiZXh0ZW5kIiwiQ2hpbGQiLCJQYXJlbnQiLCJGIiwiY29uc3RydWN0b3IiLCJzdXBlcmNsYXNzIiwiTGlzdFN3aXRjaGVyIiwic3RlcE9uIiwiaXNPbiIsImdldEN1cnJlbnRGaXhQb3NpdGlvbldpdGhPZmYiLCJtb3ZlRHJhZ2dhYmxlIiwiZml4VG9PZmYiLCJtb3ZlRHJhZ2dhYmxlVG9PZmYiLCJmaXhPZmZQb3NpdGlvbiIsImxpc3RTd2l0Y2hlckZhY3RvcnkiLCJkcmFnZ2FibGVFbGVtZW50cyIsInBvc2l0aW9uVHlwZSIsIm5vdENyb3NzaW5nIiwiZmxvYXRMZWZ0IiwiZmxvYXRSaWdodCIsInBvc2l0aW9uRmFjdG9yeSIsInR5cGUiLCJfb3B0aW9ucyIsInJlY3RhbmdsZUxpc3QiLCJpbmRleGVzT2ZOZXdzIiwiYm91bmRSZWN0Iiwic3RhdGljUmVjdGFuZ2xlSW5kZXhlcyIsInJlZHVjZSIsImluZGV4ZXMiLCJfcmVjdCIsInJlbW92YWJsZSIsImluZGV4T2ZTdGF0aWMiLCJzdGF0aWNSZWN0IiwicGFkZGluZ1RvcExlZnQiLCJwYWRkaW5nQm90dG9tUmlnaHQiLCJ5R2FwQmV0d2VlbkRyYWdnYWJsZXMiLCJfaW5kZXhlc09mTmV3cyIsImJvdW5kYXJ5UG9pbnRzIiwiaXNWYWxpZCIsImFzc2luZyIsInBhZGRpbmdUb3BSaWdodCIsInBhZGRpbmdCb3R0b21MZWZ0IiwicGFkZGluZ1RvcE5lZ1JpZ2h0IiwicGFkZGluZ0JvdHRvbU5lZ0xlZnQiLCJnZXRSaWdodFRvcFBvaW50IiwiX2luZGV4IiwiZ2V0TGVmdEJvdHRvbVBvaW50Iiwic29ydGluZ0ZhY3RvcnkiLCJvbGRPYmpzTGlzdCIsIm5ld09ianMiLCJpbmRleE9mTmV3cyIsIm9ianNMaXN0Iiwib2JqIiwibmV3TGlzdCIsImxpc3RPbGRQb3NpdGlvbiIsIm5ld09iaiIsIlRhcmdldCIsInNjb3BlcyIsIlNjb3BlIiwic2NvcGUiLCJhZGRUYXJnZXQiLCJzaG90VGFyZ2V0cyIsImNhdGNoRHJhZ2dhYmxlIiwic29ydCIsImEiLCJiIiwiaW5uZXJEcmFnZ2FibGVzIiwidGFyZ2V0SW5kZXhlcyIsImZuIiwiY3VycmVudFNjb3BlIiwiYWRkRHJhZ2dhYmxlVG9TY29wZSIsImFkZFRhcmdldFRvU2NvcGUiLCJzY29wZUZhY3RvcnkiLCJ0YXJnZXRFbGVtZW50cyIsInRhcmdldE9wdGlvbnMiLCJzY29wZU9wdGlvbnMiLCJzcGlkZXJzIiwiU3BpZGVyIiwiZEFuZ2xlIiwic3RhcnRSYWRpdXMiLCJlbmRSYWRpdXMiLCJsaW5lV2lkdGgiLCJzdHJva2VTdHlsZSIsInN0cm9rZSIsInNvcnRpbmciLCJwb3NpdGlvbmluZyIsIm9uQWRkIiwiYmVmb3JlQWRkIiwib25SZW1vdmUiLCJ0YXJnZXRSZWN0YW5nbGUiLCJkcmFnZ2FibGVTcXVhcmUiLCJyZWN0YW5nbGVzIiwiaW5kZXhlc09mTmV3IiwibmV3RHJhZ2dhYmxlc0luZGV4IiwiYWRkUmVtb3ZlT25Nb3ZlIiwicHVzaElubmVyRHJhZ2dhYmxlIiwicmVtb3ZlSGFuZGxlciIsInRvdWNoSWQiLCJydWxlcyIsInN1bSIsInJ1bGUiLCJhcHBlbmRGaXJzdENoaWxkIiwibm9kZSIsImZpcnN0Q2hpbGQiLCJpbnNlcnRCZWZvcmUiLCJhcHBlbmRDaGlsZCIsInN0b3AiLCJzdGVwIiwic2V0U3R5bGUiLCJjc3NUZXh0Iiwia2V5Iiwicm5kIiwicm91bmQiLCJyYW5kb20iLCJ0b0hleFN0cmluZyIsImRpZ2l0Iiwic3RyIiwicmVjdGFnbGUiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiaGFzQ2xhc3MiLCJjIiwicmUiLCJSZWdFeHAiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FB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KGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJEcmFnZWVcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiRHJhZ2VlXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkRyYWdlZVwiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIvKiFcbiAqIGdldFN0eWxlUHJvcGVydHkgdjEuMC40XG4gKiBvcmlnaW5hbCBieSBrYW5nYXhcbiAqIGh0dHA6Ly9wZXJmZWN0aW9ua2lsbHMuY29tL2ZlYXR1cmUtdGVzdGluZy1jc3MtcHJvcGVydGllcy9cbiAqIE1JVCBsaWNlbnNlXG4gKi9cblxuLypqc2hpbnQgYnJvd3NlcjogdHJ1ZSwgc3RyaWN0OiB0cnVlLCB1bmRlZjogdHJ1ZSAqL1xuLypnbG9iYWwgZGVmaW5lOiBmYWxzZSwgZXhwb3J0czogZmFsc2UsIG1vZHVsZTogZmFsc2UgKi9cblxuKCBmdW5jdGlvbiggd2luZG93ICkge1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBwcmVmaXhlcyA9ICdXZWJraXQgTW96IG1zIE1zIE8nLnNwbGl0KCcgJyk7XG52YXIgZG9jRWxlbVN0eWxlID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlO1xuXG5mdW5jdGlvbiBnZXRTdHlsZVByb3BlcnR5KCBwcm9wTmFtZSApIHtcbiAgaWYgKCAhcHJvcE5hbWUgKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gdGVzdCBzdGFuZGFyZCBwcm9wZXJ0eSBmaXJzdFxuICBpZiAoIHR5cGVvZiBkb2NFbGVtU3R5bGVbIHByb3BOYW1lIF0gPT09ICdzdHJpbmcnICkge1xuICAgIHJldHVybiBwcm9wTmFtZTtcbiAgfVxuXG4gIC8vIGNhcGl0YWxpemVcbiAgcHJvcE5hbWUgPSBwcm9wTmFtZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHByb3BOYW1lLnNsaWNlKDEpO1xuXG4gIC8vIHRlc3QgdmVuZG9yIHNwZWNpZmljIHByb3BlcnRpZXNcbiAgdmFyIHByZWZpeGVkO1xuICBmb3IgKCB2YXIgaT0wLCBsZW4gPSBwcmVmaXhlcy5sZW5ndGg7IGkgPCBsZW47IGkrKyApIHtcbiAgICBwcmVmaXhlZCA9IHByZWZpeGVzW2ldICsgcHJvcE5hbWU7XG4gICAgaWYgKCB0eXBlb2YgZG9jRWxlbVN0eWxlWyBwcmVmaXhlZCBdID09PSAnc3RyaW5nJyApIHtcbiAgICAgIHJldHVybiBwcmVmaXhlZDtcbiAgICB9XG4gIH1cbn1cblxuLy8gdHJhbnNwb3J0XG5pZiAoIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCApIHtcbiAgLy8gQU1EXG4gIGRlZmluZSggZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGdldFN0eWxlUHJvcGVydHk7XG4gIH0pO1xufSBlbHNlIGlmICggdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICkge1xuICAvLyBDb21tb25KUyBmb3IgQ29tcG9uZW50XG4gIG1vZHVsZS5leHBvcnRzID0gZ2V0U3R5bGVQcm9wZXJ0eTtcbn0gZWxzZSB7XG4gIC8vIGJyb3dzZXIgZ2xvYmFsXG4gIHdpbmRvdy5nZXRTdHlsZVByb3BlcnR5ID0gZ2V0U3R5bGVQcm9wZXJ0eTtcbn1cblxufSkoIHdpbmRvdyApO1xuIiwiaW1wb3J0IHV0aWwgZnJvbSAnLi91dGlsJ1xuaW1wb3J0IHsgR2VvbWV0cnkgfSBmcm9tICcuL2dlb21ldHJ5J1xuaW1wb3J0IHsgRHJhZ2dhYmxlIH0gZnJvbSAnLi9kcmFnZ2FibGUnXG5pbXBvcnQgeyBib3VuZCB9IGZyb20gJy4vYm91bmQnXG5cbmNvbnN0IERyYWdlZSA9IHsgdXRpbCwgRHJhZ2dhYmxlLCBib3VuZCB9Ly90b2RvIHJlbW92ZSBhZnRlciByZWZhY3RvcmVcblxuY29uc3QgYXJjU2xpZGVycyA9IFtdXG5cbmZ1bmN0aW9uIEFyY1NsaWRlcihhcmVhLCBlbGVtZW50LCBvcHRpb25zKSB7XG4gIGNvbnN0IGFyZWFSZWN0YW5nbGUgPSBHZW9tZXRyeS5jcmVhdGVSZWN0YW5nbGVGcm9tRWxlbWVudChhcmVhLCBhcmVhKVxuICBjb25zdCBoYWxmU2l6ZSA9IEdlb21ldHJ5LmdldFNpemVPZkVsZW1lbnQoZWxlbWVudCkubXVsdCgwLjUpXG4gIGxldCBpXG4gIHRoaXMub3B0aW9ucyA9IHtcbiAgICBjZW50ZXI6IGFyZWFSZWN0YW5nbGUuZ2V0Q2VudGVyKCksXG4gICAgcmFkaXVzOiBhcmVhUmVjdGFuZ2xlLmdldE1pblNpZGUoKSAvIDIsXG4gICAgc3RhcnRBbmdsZTogTWF0aC5QSSxcbiAgICBlbmRBbmdsZTogMCxcbiAgICBhbmdsZXM6IFtNYXRoLlBJLCAtTWF0aC5QSSAvIDQsIDAsIE1hdGguUEkgLyA0LCBNYXRoLlBJIC8gMl0sXG4gICAgb25DaGFuZ2U6IGZ1bmN0aW9uKCkge30sXG4gICAgdGltZTogNTAwXG4gIH1cbiAgZm9yIChpIGluIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucy5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgdGhpcy5vcHRpb25zW2ldID0gb3B0aW9uc1tpXVxuICAgIH1cbiAgfVxuICB0aGlzLnNoaWZ0ZWRDZW50ZXIgPSB0aGlzLm9wdGlvbnMuY2VudGVyLnN1YihoYWxmU2l6ZSlcbiAgdGhpcy5vbkNoYW5nZSA9IHRoaXMub3B0aW9ucy5vbkNoYW5nZVxuICBhcmNTbGlkZXJzLnB1c2godGhpcylcbiAgdGhpcy5hcmVhID0gYXJlYVxuICB0aGlzLmluaXQoZWxlbWVudClcbn1cblxuQXJjU2xpZGVyLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24oZWxlbWVudCkge1xuICBjb25zdCB0aGF0ID0gdGhpcyxcbiAgICBhbmdsZSA9IHRoaXMub3B0aW9ucy5zdGFydEFuZ2xlLFxuICAgIHBvc2l0aW9uID0gR2VvbWV0cnkuZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtKFxuICAgICAgICAgICAgYW5nbGUsXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMucmFkaXVzLFxuICAgICAgICAgICAgdGhpcy5zaGlmdGVkQ2VudGVyXG4gICAgICAgICksXG4gICAgYm91bmQgPSBEcmFnZWUuYm91bmQudG9BcmMoXG4gICAgICAgICAgICB0aGF0LnNoaWZ0ZWRDZW50ZXIsXG4gICAgICAgICAgICB0aGF0Lm9wdGlvbnMucmFkaXVzLFxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLnN0YXJ0QW5nbGUsXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuZW5kQW5nbGVcbiAgICAgICAgKVxuXG4gIHRoaXMuYW5nbGUgPSBhbmdsZVxuICB0aGlzLmRyYWdnYWJsZSA9IG5ldyBEcmFnZWUuRHJhZ2dhYmxlKGVsZW1lbnQsIHtcbiAgICBwYXJlbnQ6IHRoaXMuYXJlYSxcbiAgICBib3VuZDogYm91bmQsXG4gICAgcG9zaXRpb246IHBvc2l0aW9uLFxuICAgIG9uTW92ZTogZnVuY3Rpb24oKSB7XG4gICAgICB0aGF0LmNoYW5nZSgpXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgfSlcbn1cblxuQXJjU2xpZGVyLnByb3RvdHlwZS51cGRhdGVBbmdsZSA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLmFuZ2xlID0gR2VvbWV0cnkuZ2V0QW5nbGUodGhpcy5zaGlmdGVkQ2VudGVyLCB0aGlzLmRyYWdnYWJsZS5wb3NpdGlvbilcbn1cblxuQXJjU2xpZGVyLnByb3RvdHlwZS5jaGFuZ2UgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy51cGRhdGVBbmdsZSgpXG4vLyAgICAgIHZhciBhbmdsZSA9IEdlb21ldHJ5LmdldE5lYXJlc3RBbmdsZSh0aGlzLm9wdGlvbnMuYW5nbGVzLCB0aGlzLmFuZ2xlKTtcbi8vICAgICAgdGhpcy5zZXRBbmdsZShhbmdsZSx0aGlzLm9wdGlvbnMudGltZSk7XG4gIHRoaXMub25DaGFuZ2UodGhpcy5hbmdsZSlcbn1cblxuQXJjU2xpZGVyLnByb3RvdHlwZS5zZXRBbmdsZSA9IGZ1bmN0aW9uKGFuZ2xlLCB0aW1lKSB7XG4gIGNvbnN0IHBvc2l0aW9uID0gR2VvbWV0cnkuZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtKFxuICAgIHRoaXMuYW5nbGUsXG4gICAgdGhpcy5vcHRpb25zLnJhZGl1cyxcbiAgICB0aGlzLnNoaWZ0ZWRDZW50ZXJcbiAgKVxuICB0aGlzLmFuZ2xlID0gR2VvbWV0cnkubm9ybWFsaXplQW5nbGUoYW5nbGUsIHBvc2l0aW9uKVxuICB0aGlzLmRyYWdnYWJsZS5tb3ZlKHBvc2l0aW9uLCB0aW1lfHwwLCB0cnVlLCB0cnVlKVxuICB0aGlzLm9uQ2hhbmdlKHRoaXMuYW5nbGUpXG59XG5cbmV4cG9ydCB7IGFyY1NsaWRlcnMsIEFyY1NsaWRlciB9XG4iLCIndXNlIHN0cmljdCdcbmltcG9ydCB7IEdlb21ldHJ5IH0gZnJvbSAnLi9nZW9tZXRyeSdcbmltcG9ydCB7IFBvaW50IH0gZnJvbSAnLi9nZW9tZXRyeSdcblxuZnVuY3Rpb24gYm91bmRUb1JlY3RhbmdsZShyZWN0YW5nbGUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHBvaW50LCBzaXplKSB7XG4gICAgY29uc3QgY2FsY1BvaW50ID0gcG9pbnQuY2xvbmUoKSxcbiAgICAgIHJlY3RQMiA9IHJlY3RhbmdsZS5nZXRQMygpXG5cbiAgICBpZiAocmVjdGFuZ2xlLnBvc2l0aW9uLnggPiBjYWxjUG9pbnQueCkge1xuICAgICAgKGNhbGNQb2ludC54ID0gcmVjdGFuZ2xlLnBvc2l0aW9uLngpXG4gICAgfVxuICAgIGlmIChyZWN0YW5nbGUucG9zaXRpb24ueSA+IGNhbGNQb2ludC55KSB7XG4gICAgICBjYWxjUG9pbnQueSA9IHJlY3RhbmdsZS5wb3NpdGlvbi55XG4gICAgfVxuICAgIGlmIChyZWN0UDIueCA8IGNhbGNQb2ludC54ICsgc2l6ZS54KSB7XG4gICAgICBjYWxjUG9pbnQueCA9IHJlY3RQMi54IC0gc2l6ZS54XG4gICAgfVxuICAgIGlmIChyZWN0UDIueSA8IGNhbGNQb2ludC55ICsgc2l6ZS55KSB7XG4gICAgICBjYWxjUG9pbnQueSA9IHJlY3RQMi55IC0gc2l6ZS55XG4gICAgfVxuXG4gICAgcmV0dXJuIGNhbGNQb2ludFxuICB9XG59XG5cbmZ1bmN0aW9uIGJvdW5kVG9FbGVtZW50KGVsZW1lbnQsIHBhcmVudCkge1xuICBjb25zdCByZXRGdW5jID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGJvdW5kLmFwcGx5KHRoaXMsIGFyZ3VtZW50cylcbiAgfVxuICBsZXQgYm91bmRcblxuICByZXRGdW5jLnJlZnJlc2ggPSBmdW5jdGlvbigpIHtcbiAgICBib3VuZCA9IGJvdW5kVG9SZWN0YW5nbGUoR2VvbWV0cnkuY3JlYXRlUmVjdGFuZ2xlRnJvbUVsZW1lbnQoZWxlbWVudCwgcGFyZW50KSlcbiAgfVxuXG4gIHJldEZ1bmMucmVmcmVzaCgpXG4gIHJldHVybiByZXRGdW5jXG59XG5cbmZ1bmN0aW9uIGJvdW5kVG9MaW5lWCh4LCBzdGFydFksIGVuZFkpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHBvaW50LCBzaXplKSB7XG4gICAgY29uc3QgY2FsY1BvaW50ID0gcG9pbnQuY2xvbmUoKVxuICAgIGNhbGNQb2ludC54ID0geFxuICAgIGlmIChzdGFydFkgPiBjYWxjUG9pbnQueSkge1xuICAgICAgY2FsY1BvaW50LnkgPSBzdGFydFlcbiAgICB9XG4gICAgaWYgKGVuZFkgPCBjYWxjUG9pbnQueSArIHNpemUueSkge1xuICAgICAgY2FsY1BvaW50LnkgPSBlbmRZIC0gc2l6ZS55XG4gICAgfVxuXG4gICAgcmV0dXJuIGNhbGNQb2ludFxuICB9XG59XG5cbmZ1bmN0aW9uIGJvdW5kVG9MaW5lWSh5LCBzdGFydFgsIGVuZFgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHBvaW50LCBzaXplKSB7XG4gICAgY29uc3QgY2FsY1BvaW50ID0gcG9pbnQuY2xvbmUoKVxuICAgIGNhbGNQb2ludC55ID0geVxuICAgIGlmIChzdGFydFggPiBjYWxjUG9pbnQueCkge1xuICAgICAgY2FsY1BvaW50LnggPSBzdGFydFhcbiAgICB9XG4gICAgaWYgKGVuZFggPCBjYWxjUG9pbnQueCArIHNpemUueCkge1xuICAgICAgY2FsY1BvaW50LnggPSBlbmRYIC0gc2l6ZS54XG4gICAgfVxuICAgIHJldHVybiBjYWxjUG9pbnRcbiAgfVxufVxuXG5mdW5jdGlvbiBib3VuZFRvTGluZShzdGFydCwgZW5kKSB7XG4gIGNvbnN0IGFscGhhID0gTWF0aC5hdGFuMihlbmQueSAtIHN0YXJ0LnksIGVuZC54IC0gc3RhcnQueCksXG4gICAgYmV0YSA9IGFscGhhICsgTWF0aC5QSSAvIDIsXG4gICAgc29tZUsgPSAxMCxcbiAgICBjb3NCZXRhID0gTWF0aC5jb3MoYmV0YSksXG4gICAgc2luQmV0YSA9IE1hdGguc2luKGJldGEpXG5cbiAgcmV0dXJuIGZ1bmN0aW9uKHBvaW50LCBzaXplKSB7XG4gICAgY29uc3QgcG9pbnQyID0gbmV3IFBvaW50KHBvaW50LnggKyBzb21lSyAqIGNvc0JldGEsIHBvaW50LnkgKyBzb21lSyAqIHNpbkJldGEpLFxuICAgICAgbmV3RW5kID0gR2VvbWV0cnkuZ2V0UG9pbnRJbkxpbmVCeUxlbmdodChlbmQsIHN0YXJ0LCBzaXplLngpXG4gICAgbGV0IHBvaW50Q3Jvc3NpbmcgPSBHZW9tZXRyeS5kaXJlY3RDcm9zc2luZyhzdGFydCwgZW5kLCBwb2ludCwgcG9pbnQyKVxuXG4gICAgcG9pbnRDcm9zc2luZyA9IEdlb21ldHJ5LmJvdW5kVG9MaW5lKHN0YXJ0LCBuZXdFbmQsIHBvaW50Q3Jvc3NpbmcpXG4gICAgcmV0dXJuIHBvaW50Q3Jvc3NpbmdcbiAgfVxufVxuXG5mdW5jdGlvbiBib3VuZFRvQ2lyY2xlKGNlbnRlciwgcmFkaXVzKSB7XG4gIHJldHVybiBmdW5jdGlvbihwb2ludCwgX3NpemUpIHtcbiAgICBjb25zdCBib3VuZGVkUG9pbnQgPSBHZW9tZXRyeS5nZXRQb2ludEluTGluZUJ5TGVuZ2h0KGNlbnRlciwgcG9pbnQsIHJhZGl1cylcbiAgICByZXR1cm4gYm91bmRlZFBvaW50XG4gIH1cbn1cblxuZnVuY3Rpb24gYm91bmRUb0FyYyhjZW50ZXIsIHJhZGl1cywgc3RhcnRBZ2xlLCBlbmRBbmdsZSkge1xuICByZXR1cm4gZnVuY3Rpb24ocG9pbnQsIF9zaXplKSB7XG4gICAgY29uc3QgYm91bmRTdGFydEFuZ2xlID0gdHlwZW9mIHN0YXJ0QWdsZSA9PT0gJ2Z1bmN0aW9uJyA/IHN0YXJ0QWdsZSgpIDogc3RhcnRBZ2xlXG4gICAgY29uc3QgYm91bmRFbmR0QW5nbGUgPSB0eXBlb2Ygc3RhcnRBZ2xlID09PSAnZnVuY3Rpb24nID8gZW5kQW5nbGUoKSA6IGVuZEFuZ2xlXG5cbiAgICBsZXQgYW5nbGUgPSBHZW9tZXRyeS5nZXRBbmdsZShjZW50ZXIsIHBvaW50KVxuICAgIGFuZ2xlID0gR2VvbWV0cnkubm9ybWFsaXplQW5nbGUoYW5nbGUpXG4gICAgYW5nbGUgPSBHZW9tZXRyeS5ib3VuZEFuZ2xlKGJvdW5kU3RhcnRBbmdsZSwgYm91bmRFbmR0QW5nbGUsIGFuZ2xlKVxuICAgIHJldHVybiBHZW9tZXRyeS5nZXRQb2ludEZyb21SYWRpYWxTeXN0ZW0oYW5nbGUsIHJhZGl1cywgY2VudGVyKVxuICB9XG59XG5cbmNvbnN0IGJvdW5kID0ge1xuICB0b1JlY3RhbmdsZTogYm91bmRUb1JlY3RhbmdsZSxcbiAgdG9FbGVtZW50OiBib3VuZFRvRWxlbWVudCxcbiAgdG9MaW5lWDogYm91bmRUb0xpbmVYLFxuICB0b0xpbmVZOiBib3VuZFRvTGluZVksXG4gIHRvTGluZTogYm91bmRUb0xpbmUsXG4gIHRvQ2lyY2xlOiBib3VuZFRvQ2lyY2xlLFxuICB0b0FyYzogYm91bmRUb0FyY1xufVxuXG5leHBvcnQgeyBib3VuZCB9XG4iLCJpbXBvcnQgdXRpbCBmcm9tICcuL3V0aWwnXG5pbXBvcnQgeyBHZW9tZXRyeSwgUG9pbnQgfSBmcm9tICcuL2dlb21ldHJ5J1xuaW1wb3J0IHsgRHJhZ2dhYmxlLCBldmVudHMgfSBmcm9tICcuL2RyYWdnYWJsZSdcbmltcG9ydCB7IGJvdW5kIH0gZnJvbSAnLi9ib3VuZCdcblxuY29uc3QgRHJhZ2VlID0geyB1dGlsLCBib3VuZCwgRHJhZ2dhYmxlIH0vL3RvZG8gcmVtb3ZlIGFmdGVyIHJlZmFjdG9yZVxuXG5jb25zdCBpc1RvdWNoID0gJ29udG91Y2hzdGFydCcgaW4gd2luZG93XG5jb25zdCBjaGFydHMgPSBbXVxuXG5mdW5jdGlvbiBnZXRBcnJheVdpdGhCb3VuZEluZGV4ZXMoaW5kZXgsIGxlbmd0aCkge1xuICBjb25zdCByZXRJbmRleGVzID0gW11cbiAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgIHJldEluZGV4ZXMucHVzaChpbmRleClcbiAgICByZXRJbmRleGVzLnB1c2goKGluZGV4ICsgMSkgJSBsZW5ndGgpXG4gIH1cblxuICByZXR1cm4gcmV0SW5kZXhlc1xufVxuXG5mdW5jdGlvbiBDaGFydChhcmVhLCBlbGVtZW50cywgb3B0aW9ucykge1xuICBjb25zdCBhcmVhUmVjdGFuZ2xlID0gR2VvbWV0cnkuY3JlYXRlUmVjdGFuZ2xlRnJvbUVsZW1lbnQoYXJlYSwgYXJlYSlcbiAgbGV0IGlcbiAgdGhpcy5vcHRpb25zID0ge1xuICAgIGNlbnRlcjogYXJlYVJlY3RhbmdsZS5nZXRDZW50ZXIoKSxcbiAgICByYWRpdXM6IGFyZWFSZWN0YW5nbGUuZ2V0TWluU2lkZSgpIC8gMixcbiAgICB0b3VjaFJhZGl1czogYXJlYVJlY3RhbmdsZS5nZXRNaW5TaWRlKCkgLyAyLFxuICAgIGJvdW5kQW5nbGU6IE1hdGguUEkvOSxcbiAgICBmaWxsU3R5bGVzOiBEcmFnZWUudXRpbC5yYW5nZSgwLCBlbGVtZW50cy5sZW5ndGgpLm1hcChmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBEcmFnZWUudXRpbC5yYW5kb21Db2xvcigpXG4gICAgfSksXG4gICAgaW5pdEFuZ2xlczogRHJhZ2VlLnV0aWwucmFuZ2UoLTkwLCAyNzAsIDM2MCAvIGVsZW1lbnRzLmxlbmd0aCkubWFwKGZ1bmN0aW9uKGFuZ2xlKSB7XG4gICAgICByZXR1cm4gR2VvbWV0cnkudG9SYWRpYW4oYW5nbGUpXG4gICAgfSksXG4gICAgb25EcmF3OiBmdW5jdGlvbigpIHt9LFxuICAgIGxpbWl0SW1nOiBudWxsLFxuICAgIGxpbWl0SW1nT2Zmc2V0OiBuZXcgUG9pbnQoMCwgMCksXG4gICAgaXNTZWxlY3RhYmxlOiBmYWxzZVxuICB9XG4gIGZvciAoaSBpbiBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMuaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgIHRoaXMub3B0aW9uc1tpXSA9IG9wdGlvbnNbaV1cbiAgICB9XG4gIH1cblxuICBjaGFydHMucHVzaCh0aGlzKVxuICB0aGlzLm9uRHJhdyA9IHRoaXMub3B0aW9ucy5vbkRyYXdcbiAgdGhpcy5hcmVhID0gYXJlYVxuICB0aGlzLmFyZWFSZWN0YW5nbGUgPSBhcmVhUmVjdGFuZ2xlXG4gIHRoaXMuaW5pdChlbGVtZW50cylcbn1cblxuQ2hhcnQucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbihlbGVtZW50cykge1xuICBjb25zdCB0aGF0ID0gdGhpc1xuICB0aGlzLmNhbnZhcyA9IERyYWdlZS51dGlsLmNyZWF0ZUNhbnZhcyh0aGlzLmFyZWEsIHRoaXMuYXJlYVJlY3RhbmdsZSlcbiAgdGhpcy5jb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKVxuICB0aGlzLmRyYWdnYWJsZXMgPSBlbGVtZW50cy5tYXAoZnVuY3Rpb24oZWxlbWVudCwgaSkge1xuICAgIGNvbnN0IGFuZ2xlID0gdGhpcy5vcHRpb25zLmluaXRBbmdsZXNbaV0sXG4gICAgICBoYWxmU2l6ZSA9IEdlb21ldHJ5LmdldFNpemVPZkVsZW1lbnQoZWxlbWVudCkubXVsdCgwLjUpLFxuICAgICAgcG9zaXRpb24gPSBHZW9tZXRyeS5nZXRQb2ludEZyb21SYWRpYWxTeXN0ZW0oXG4gICAgICAgICAgICAgICAgYW5nbGUsXG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLnRvdWNoUmFkaXVzLFxuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5jZW50ZXIuc3ViKGhhbGZTaXplKVxuICAgICAgICAgICAgKSxcbiAgICAgIGJvdW5kID0gRHJhZ2VlLmJvdW5kLnRvQXJjKFxuICAgICAgICAgICAgICAgIHRoYXQub3B0aW9ucy5jZW50ZXIuc3ViKGhhbGZTaXplKSxcbiAgICAgICAgICAgICAgICB0aGF0Lm9wdGlvbnMudG91Y2hSYWRpdXMsXG4gICAgICAgICAgICAgICAgdGhhdC5nZXRCb3VuZEFuZ2xlKGksIGZhbHNlKSxcbiAgICAgICAgICAgICAgICB0aGF0LmdldEJvdW5kQW5nbGUoaSwgdHJ1ZSlcbiAgICAgICAgICAgIClcblxuICAgIHJldHVybiBuZXcgRHJhZ2VlLkRyYWdnYWJsZShlbGVtZW50LCB7XG4gICAgICBwYXJlbnQ6IHRoaXMuYXJlYSxcbiAgICAgIGJvdW5kOiBib3VuZCxcbiAgICAgIHBvc2l0aW9uOiBwb3NpdGlvbixcbiAgICAgIG9uTW92ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoYXQuZHJhdygpXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgfSlcbiAgfSwgdGhpcylcblxuICB0aGlzLmlzSW5pdCA9IHRydWVcbiAgaWYgKHRoaXMub3B0aW9ucy5pc1NlbGVjdGFibGUpIHtcbiAgICB0aGlzLmluaXRTZWxlY3QoKVxuICB9XG4gIHRoaXMuZHJhdygpXG59XG5cbkNoYXJ0LnByb3RvdHlwZS5pbml0U2VsZWN0ID0gZnVuY3Rpb24oKSB7XG4gIGNvbnN0IHRoYXQgPSB0aGlzXG4gIHRoaXMuc2V0QWN0aXZlQXJjKC0xKVxuXG4gIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRzLnN0YXJ0LCBmdW5jdGlvbihlKSB7XG4gICAgbGV0IHBvaW50ID0gbmV3IFBvaW50KFxuICAgICAgaXNUb3VjaCA/IGUuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVggOiBlLmNsaWVudFgsXG4gICAgICBpc1RvdWNoID8gZS5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWSA6IGUuY2xpZW50WVxuICAgIClcblxuICAgIGlmICghdGhhdC5jYW52YXNPZmZzZXQpIHtcbiAgICAgIHRoYXQuY2FudmFzT2Zmc2V0ID0gR2VvbWV0cnkuZ2V0T2Zmc2V0KHRoYXQuY2FudmFzKVxuICAgIH1cblxuICAgIHBvaW50ID0gcG9pbnQuc3ViKHRoYXQuY2FudmFzT2Zmc2V0KVxuICAgIGNvbnN0IGluZGV4ID0gdGhhdC5nZXRBcmNPblBvaW50KHBvaW50KVxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHRoYXQuc2V0QWN0aXZlQXJjKCh0aGF0LmFjdGl2ZUFyY0luZGV4ICE9PSBpbmRleCkgPyBpbmRleCA6IC0xKVxuICAgIH1cbiAgfSlcbn1cblxuQ2hhcnQucHJvdG90eXBlLnVwZGF0ZUFuZ2xlcyA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLmFuZ2xlcyA9IHRoaXMuZHJhZ2dhYmxlcy5tYXAoZnVuY3Rpb24oZHJhZ2dhYmxlKSB7XG4gICAgY29uc3QgaGFsZlNpemUgPSBkcmFnZ2FibGUuZ2V0U2l6ZSgpLm11bHQoMC41KVxuICAgIHJldHVybiBHZW9tZXRyeS5nZXRBbmdsZSh0aGlzLm9wdGlvbnMuY2VudGVyLnN1YihoYWxmU2l6ZSksIGRyYWdnYWJsZS5wb3NpdGlvbilcbiAgfSwgdGhpcylcbn1cblxuQ2hhcnQucHJvdG90eXBlLmdldEJvdW5kQW5nbGUgPSBmdW5jdGlvbihpbmRleCwgaXNDbG9zc2luZykge1xuICBjb25zdCB0aGF0ID0gdGhpcywgc2lnbiA9IGlzQ2xvc3Npbmc/MTotMVxuXG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICBsZXQgaSA9IChpbmRleCArIHNpZ24pICUgdGhhdC5hbmdsZXMubGVuZ3RoXG4gICAgaWYgKGkgPCAwKSB7XG4gICAgICBpICs9IHRoYXQuYW5nbGVzLmxlbmd0aFxuICAgIH1cbiAgICByZXR1cm4gR2VvbWV0cnkubm9ybWFsaXplQW5nbGUodGhhdC5hbmdsZXNbaV0gLSBzaWduICogdGhhdC5vcHRpb25zLmJvdW5kQW5nbGUpXG4gIH1cbn1cblxuQ2hhcnQucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbigpIHtcbiAgaWYgKCF0aGlzLmlzSW5pdCkge1xuICAgIHJldHVyblxuICB9XG5cbiAgdGhpcy51cGRhdGVBbmdsZXMoKVxuICB0aGlzLmNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHRoaXMuYXJlYVJlY3RhbmdsZS5zaXplLngsIHRoaXMuYXJlYVJlY3RhbmdsZS5zaXplLnkpXG4gIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKGZ1bmN0aW9uKF9kcmFnZ2FibGUsIGluZGV4KSB7XG4gICAgdGhpcy5kcmF3QXJjKHRoaXMuY29udGV4dCwgdGhpcy5vcHRpb25zLmNlbnRlciwgdGhpcy5vcHRpb25zLnJhZGl1cywgaW5kZXgpXG4gIH0sIHRoaXMpXG5cbiAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goZnVuY3Rpb24oX2RyYWdnYWJsZSwgaW5kZXgpIHtcbiAgICBsZXQgZW5hYmxlSW5kZXhlc1xuICAgIGlmICh0aGlzLm9wdGlvbnMuaXNTZWxlY3RhYmxlKSB7XG4gICAgICBlbmFibGVJbmRleGVzID0gZ2V0QXJyYXlXaXRoQm91bmRJbmRleGVzKHRoaXMuYWN0aXZlQXJjSW5kZXgsIHRoaXMuZHJhZ2dhYmxlcy5sZW5ndGgpXG4gICAgICBpZiAoZW5hYmxlSW5kZXhlcy5pbmRleE9mKGluZGV4KSAhPT0gLTEpIHtcbiAgICAgICAgdGhpcy5kcmF3TGltaXRJbWcoaW5kZXgpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZHJhd0xpbWl0SW1nKGluZGV4KVxuICAgIH1cbiAgfSwgdGhpcylcbiAgdGhpcy5vbkRyYXcoKVxufVxuXG5DaGFydC5wcm90b3R5cGUuY3JlYXRlQ2xvbmUgPSBmdW5jdGlvbihlbGVtZW50LCBvcHRpb25zID0ge30pIHtcbiAgY29uc3QgdGhhdCA9IHRoaXNcbiAgaWYgKCF0aGlzLmlzSW5pdCkge1xuICAgIHJldHVyblxuICB9XG4gIGNvbnN0IHJlY3RhbmdsZSA9IEdlb21ldHJ5LmNyZWF0ZVJlY3RhbmdsZUZyb21FbGVtZW50KGVsZW1lbnQsIGVsZW1lbnQpXG4gIGNvbnN0IG9wdHMgPSBPYmplY3QuYXNzaWduKHtcbiAgICBjZW50ZXI6IHJlY3RhbmdsZS5nZXRDZW50ZXIoKSxcbiAgICByYWRpdXM6IHJlY3RhbmdsZS5nZXRNaW5TaWRlKCkgLyAyLFxuICAgIGZpbGxTdHlsZXM6IHRoaXMub3B0aW9ucy5maWxsU3R5bGVzXG4gIH0sIG9wdGlvbnMpXG5cbiAgY29uc3QgY2FudmFzID0gRHJhZ2VlLnV0aWwuY3JlYXRlQ2FudmFzKGVsZW1lbnQsIHJlY3RhbmdsZSlcbiAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpXG4gIGNvbnN0IGNsb25lT2JqID0ge1xuICAgIGRyYXc6IGZ1bmN0aW9uKCkge1xuICAgICAgY29udGV4dC5jbGVhclJlY3QoMCwgMCwgcmVjdGFuZ2xlLnNpemUueCwgcmVjdGFuZ2xlLnNpemUueSlcbiAgICAgIHRoYXQuZHJhZ2dhYmxlcy5mb3JFYWNoKGZ1bmN0aW9uKF9kcmFnZ2FibGUsIGluZGV4KSB7XG4gICAgICAgIHRoYXQuZHJhd0FyYyhjb250ZXh0LCBvcHRzLmNlbnRlciwgb3B0cy5yYWRpdXMsIGluZGV4KVxuICAgICAgfSlcbiAgICB9XG4gIH1cbiAgY2xvbmVPYmouZHJhdygpXG4gIHJldHVybiBjbG9uZU9ialxufVxuXG5DaGFydC5wcm90b3R5cGUuZ2V0RmlsbFN0eWxlID0gZnVuY3Rpb24oaW5kZXgpIHtcbiAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMuZmlsbFN0eWxlc1tpbmRleF0gPT09ICdmdW5jdGlvbicpIHtcbiAgICB0aGlzLm9wdGlvbnMuZmlsbFN0eWxlc1tpbmRleF0gPSB0aGlzLm9wdGlvbnMuZmlsbFN0eWxlc1tpbmRleF0uY2FsbCh0aGlzKVxuICB9XG4gIHJldHVybiB0aGlzLm9wdGlvbnMuZmlsbFN0eWxlc1tpbmRleF1cbn1cblxuQ2hhcnQucHJvdG90eXBlLmRyYXdBcmMgPSBmdW5jdGlvbihjb250ZXh0LCBjZW50ZXIsIHJhZGl1cywgaW5kZXgpIHtcbiAgY29uc3Qgc3RhcnRBbmdsZSA9IHRoaXMuYW5nbGVzW2luZGV4XSxcbiAgICBlbmRBbmdsZSA9IHRoaXMuYW5nbGVzWyhpbmRleCsxKSV0aGlzLmFuZ2xlcy5sZW5ndGhdLFxuICAgIGNvbG9yID0gdGhpcy5nZXRGaWxsU3R5bGUoaW5kZXgpXG5cbiAgY29udGV4dC5iZWdpblBhdGgoKVxuICBjb250ZXh0Lm1vdmVUbyhjZW50ZXIueCwgY2VudGVyLnkpXG4gIGNvbnRleHQuYXJjKGNlbnRlci54LCBjZW50ZXIueSwgcmFkaXVzLCBzdGFydEFuZ2xlLCBlbmRBbmdsZSwgZmFsc2UpXG4gIGNvbnRleHQubGluZVRvKGNlbnRlci54LCBjZW50ZXIueSlcbiAgY29udGV4dC5jbG9zZVBhdGgoKVxuICBjb250ZXh0LmZpbGxTdHlsZSA9IGNvbG9yXG4gIGNvbnRleHQuZmlsbCgpXG59XG5cbkNoYXJ0LnByb3RvdHlwZS5kcmF3TGltaXRJbWcgPSBmdW5jdGlvbihpbmRleCkge1xuICBsZXQgcG9pbnQsIGltZ1xuICBpZiAodGhpcy5vcHRpb25zLmxpbWl0SW1nKSB7XG4gICAgaW1nID0gdGhpcy5vcHRpb25zLmxpbWl0SW1nIGluc3RhbmNlb2YgQXJyYXkgPyB0aGlzLm9wdGlvbnMubGltaXRJbWdbaW5kZXhdIDogdGhpcy5vcHRpb25zLmxpbWl0SW1nXG4gIH1cblxuICBpZiAoaW1nKSB7XG4gICAgY29uc3QgYW5nbGUgPSBHZW9tZXRyeS5ub3JtYWxpemVBbmdsZSh0aGlzLmFuZ2xlc1tpbmRleF0pXG4gICAgcG9pbnQgPSBuZXcgUG9pbnQoMCwgLWltZy5oZWlnaHQgLyAyKVxuICAgIHBvaW50ID0gcG9pbnQuYWRkKHRoaXMub3B0aW9ucy5saW1pdEltZ09mZnNldClcbiAgICB0aGlzLmNvbnRleHQudHJhbnNsYXRlKHRoaXMuYXJlYVJlY3RhbmdsZS5zaXplLnggLyAyLCB0aGlzLmFyZWFSZWN0YW5nbGUuc2l6ZS55IC8gMilcbiAgICB0aGlzLmNvbnRleHQucm90YXRlKGFuZ2xlKVxuICAgIHRoaXMuY29udGV4dC5kcmF3SW1hZ2UoaW1nLCBwb2ludC54LCBwb2ludC55KVxuICAgIHRoaXMuY29udGV4dC5zZXRUcmFuc2Zvcm0oMSwgMCwgMCwgMSwgMCwgMClcbiAgfVxufVxuXG5DaGFydC5wcm90b3R5cGUuZ2V0QW5nbGVzRGlmZiA9IGZ1bmN0aW9uKCkge1xuICBjb25zdCBhbmdsZXMgPSB0aGlzLmFuZ2xlcy5zbGljZSgxKVxuICBsZXQgYmFzZUFuZ2xlID0gdGhpcy5hbmdsZXNbMF1cblxuICBhbmdsZXMucHVzaChiYXNlQW5nbGUpXG4gIHJldHVybiBhbmdsZXMubWFwKGZ1bmN0aW9uKGFuZ2xlKSB7XG4gICAgY29uc3QgZGlmZkFuZ2xlID0gR2VvbWV0cnkubm9ybWFsaXplQW5nbGUoYW5nbGUgLSBiYXNlQW5nbGUpXG4gICAgYmFzZUFuZ2xlID0gYW5nbGVcbiAgICByZXR1cm4gZGlmZkFuZ2xlXG4gIH0pXG59XG5cbkNoYXJ0LnByb3RvdHlwZS5nZXRQZXJjZW50ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLmdldEFuZ2xlc0RpZmYoKS5tYXAoZnVuY3Rpb24oZGlmZkFuZ2xlKSB7XG4gICAgcmV0dXJuIGRpZmZBbmdsZSAvICgyICogTWF0aC5QSSlcbiAgfSlcbn1cblxuQ2hhcnQucHJvdG90eXBlLmdldEFyY0Jpc2VjdHJpeHMgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuZ2V0QW5nbGVzRGlmZigpLm1hcChmdW5jdGlvbihkaWZmQW5nbGUsIGkpIHtcbiAgICByZXR1cm4gR2VvbWV0cnkubm9ybWFsaXplQW5nbGUodGhpcy5hbmdsZXNbaV0gKyBkaWZmQW5nbGUgLyAyKVxuICB9LCB0aGlzKVxufVxuXG5DaGFydC5wcm90b3R5cGUuZ2V0QXJjT25Qb2ludCA9IGZ1bmN0aW9uKHBvaW50KSB7XG4gIGNvbnN0IGFuZ2xlID0gR2VvbWV0cnkuZ2V0QW5nbGUodGhpcy5vcHRpb25zLmNlbnRlciwgcG9pbnQpXG4gIGNvbnN0IHJhZGl1cyA9IEdlb21ldHJ5LmdldERpc3RhbmNlKHRoaXMub3B0aW9ucy5jZW50ZXIsIHBvaW50KVxuXG4gIGlmIChyYWRpdXMgPiB0aGlzLm9wdGlvbnMucmFkaXVzKSB7XG4gICAgcmV0dXJuIC0xXG4gIH1cblxuICBsZXQgb2Zmc2V0ID0gLTEsIGksIGpcbiAgZm9yIChpID0gMDsgaSA8IHRoaXMuYW5nbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKG9mZnNldCA9PT0gLTEgfHwgdGhpcy5hbmdsZXNbb2Zmc2V0XSA+IHRoaXMuYW5nbGVzW2ldKSB7XG4gICAgICBvZmZzZXQgPSBpXG4gICAgfVxuICB9XG4gIGZvciAoaSA9IDAsIGogPSBvZmZzZXQ7IGkgPCB0aGlzLmFuZ2xlcy5sZW5ndGg7IGkrKywgaiA9IChpICsgb2Zmc2V0KSAlIHRoaXMuYW5nbGVzLmxlbmd0aCkge1xuICAgIGlmIChhbmdsZSA8IHRoaXMuYW5nbGVzW2pdKSB7XG4gICAgICBicmVha1xuICAgIH1cbiAgfVxuICBpZiAoLS1qIDwgMCkge1xuICAgIGogKz0gdGhpcy5hbmdsZXMubGVuZ3RoXG4gIH1cbiAgcmV0dXJuIGpcbn1cblxuQ2hhcnQucHJvdG90eXBlLnNldEFuZ2xlcyA9IGZ1bmN0aW9uKGFuZ2xlcykge1xuICB0aGlzLmFuZ2xlcyA9IGFuZ2xlc1xuICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaChmdW5jdGlvbihkcmFnZ2FibGUsIGkpIHtcbiAgICBjb25zdCBhbmdsZSA9IHRoaXMuYW5nbGVzW2ldLFxuICAgICAgaGFsZlNpemUgPSBkcmFnZ2FibGUuZ2V0U2l6ZSgpLm11bHQoMC41KSxcbiAgICAgIHBvc2l0aW9uID0gR2VvbWV0cnkuZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtKFxuICAgICAgICAgICAgICAgIGFuZ2xlLFxuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy50b3VjaFJhZGl1cyxcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMuY2VudGVyLnN1YihoYWxmU2l6ZSlcbiAgICAgICAgICAgIClcblxuICAgIGRyYWdnYWJsZS5tb3ZlKHBvc2l0aW9uLCAwLCB0cnVlLCB0cnVlKVxuICB9LCB0aGlzKVxuICB0aGlzLmRyYXcoKVxufVxuXG5DaGFydC5wcm90b3R5cGUuc2V0QWN0aXZlQXJjID0gZnVuY3Rpb24oaW5kZXgpIHtcbiAgY29uc3QgZW5hYmxlSW5kZXhlcyA9IGdldEFycmF5V2l0aEJvdW5kSW5kZXhlcyhpbmRleCwgdGhpcy5kcmFnZ2FibGVzLmxlbmd0aClcbiAgdGhpcy5hY3RpdmVBcmNJbmRleCA9IGluZGV4XG4gIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKGZ1bmN0aW9uKGRyYWdnYWJsZSwgaSkge1xuICAgIGRyYWdnYWJsZS5lbmFibGUgPSBlbmFibGVJbmRleGVzLmluZGV4T2YoaSkgIT09IC0xXG4gIH0pXG4gIHRoaXMuZHJhdygpXG59XG5cbmV4cG9ydCB7IGNoYXJ0cywgQ2hhcnQgfVxuIiwiJ3VzZSBzdHJpY3QnXG5cbmltcG9ydCB7XG4gIGdldERlZmF1bHRQYXJlbnQsXG4gIGdldFRvdWNoQnlJRCxcbiAgYWRkQ2xhc3MsIHJlbW92ZUNsYXNzXG59IGZyb20gJy4vdXRpbCdcblxuaW1wb3J0IEV2ZW50IGZyb20gJy4vZXZlbnQnXG5pbXBvcnQgZ2V0U3R5bGVQcm9wZXJ0eSBmcm9tICdkZXNhbmRyby1nZXQtc3R5bGUtcHJvcGVydHknXG5pbXBvcnQgeyBib3VuZCB9IGZyb20gJy4vYm91bmQnXG5pbXBvcnQgeyBHZW9tZXRyeSwgUG9pbnQsIFJlY3RhbmdsZSB9IGZyb20gJy4vZ2VvbWV0cnknXG5pbXBvcnQgeyBkZWZhdWx0U2NvcGUgfSBmcm9tICcuL3Njb3BlJ1xuXG5jb25zdCBEcmFnZWUgPSB7IGJvdW5kLCBFdmVudCB9IC8vdG9kbyByZW1vdmUgYWZ0ZXIgcmVmYWN0b3JlXG5cbmNvbnN0IGlzVG91Y2ggPSAnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3csIG1vdXNlRXZlbnRzID0ge1xuICAgIHN0YXJ0OiAnbW91c2Vkb3duJyxcbiAgICBtb3ZlOiAnbW91c2Vtb3ZlJyxcbiAgICBlbmQ6ICdtb3VzZXVwJ1xuICB9LCB0b3VjaEV2ZW50cyA9IHtcbiAgICBzdGFydDogJ3RvdWNoc3RhcnQnLFxuICAgIG1vdmU6ICd0b3VjaG1vdmUnLFxuICAgIGVuZDogJ3RvdWNoZW5kJ1xuICB9LFxuICBldmVudHMgPSBpc1RvdWNoID8gdG91Y2hFdmVudHMgOiBtb3VzZUV2ZW50cyxcbiAgZHJhZ2dhYmxlcyA9IFtdLFxuICBwcmV2ZW50RG91YmxlSW5pdCA9IGZ1bmN0aW9uKGRyYWdnYWJsZSkge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBcImZvciB0aGlzIGVsZW1lbnQgRHJhZ2VlLkRyYWdnYWJsZSBpcyBhbHJlYWR5IGV4aXN0LCBkb24ndCBjcmVhdGUgaXQgdHdpY2UgXCJcbiAgICBpZiAoZHJhZ2dhYmxlcy5zb21lKGZ1bmN0aW9uKGV4aXN0aW5nKSB7XG4gICAgICByZXR1cm4gZHJhZ2dhYmxlLmVsZW1lbnQgPT09IGV4aXN0aW5nLmVsZW1lbnRcbiAgICB9KSkge1xuICAgICAgdGhyb3cgbWVzc2FnZVxuICAgIH1cbiAgICBkcmFnZ2FibGVzLnB1c2goZHJhZ2dhYmxlKVxuICB9LFxuICBhZGRUb0RlZmF1bHRTY29wZSA9IGZ1bmN0aW9uKGRyYWdnYWJsZSkge1xuICAgIGRlZmF1bHRTY29wZS5hZGREcmFnZ2FibGUoZHJhZ2dhYmxlKVxuICB9LFxuICB0cmFuc2Zvcm1Qcm9wZXJ0eSA9IGdldFN0eWxlUHJvcGVydHkoJ3RyYW5zZm9ybScpLFxuICB0cmFuc2l0aW9uUHJvcGVydHkgPSBnZXRTdHlsZVByb3BlcnR5KCd0cmFuc2l0aW9uJylcblxuZnVuY3Rpb24gRHJhZ2dhYmxlKGVsZW1lbnQsIG9wdGlvbnM9e30pIHtcbiAgY29uc3QgdGhhdCA9IHRoaXNcbiAgY29uc3QgcGFyZW50ID0gb3B0aW9ucy5wYXJlbnQgfHwgZ2V0RGVmYXVsdFBhcmVudChlbGVtZW50KVxuICB0aGlzLnRhcmdldHMgPSBbXVxuICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICBwYXJlbnQ6IHBhcmVudCxcbiAgICBib3VuZDogRHJhZ2VlLmJvdW5kLnRvRWxlbWVudChwYXJlbnQsIHBhcmVudCksXG4gICAgc3RhcnRGaWx0ZXI6IGZhbHNlLFxuICAgIGlzQ29udGVudEJveFNpemU6IGZhbHNlLFxuICAgIHBvc2l0aW9uOiBmYWxzZVxuICB9LCBvcHRpb25zKVxuXG4gIHRoaXMub25FbmQgPSBuZXcgRHJhZ2VlLkV2ZW50KHRoaXMsIHsgaXNSZXZlcnNlOiB0cnVlLCBpc1N0b3BPblRydWU6IHRydWUgfSlcbiAgdGhpcy5vbk1vdmUgPSBuZXcgRHJhZ2VlLkV2ZW50KHRoaXMpXG4gIHRoaXMub25TdGFydCA9IG5ldyBEcmFnZWUuRXZlbnQodGhpcylcblxuICB0aGlzLm9uRW5kLmFkZChmdW5jdGlvbigpIHtcbiAgICB0aGlzLm1vdmUodGhpcy5wb3NpdGlvbiwgMCwgdHJ1ZSwgdHJ1ZSlcbiAgfSlcblxuICBpZiAob3B0aW9ucy5vbkVuZCkge1xuICAgIHRoaXMub25FbmQuYWRkKG9wdGlvbnMub25FbmQpXG4gIH1cbiAgaWYgKG9wdGlvbnMub25Nb3ZlKSB7XG4gICAgdGhpcy5vbk1vdmUuYWRkKG9wdGlvbnMub25Nb3ZlKVxuICB9XG4gIGlmIChvcHRpb25zLm9uU3RhcnQpIHtcbiAgICB0aGlzLm9uU3RhcnQuYWRkKG9wdGlvbnMub25TdGFydClcbiAgfVxuICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50XG4gIHRoaXMuYm91bmQgPSB0aGlzLm9wdGlvbnMuYm91bmRcbiAgcHJldmVudERvdWJsZUluaXQodGhpcylcbiAgRHJhZ2dhYmxlLm9uQ3JlYXRlLmZpcmUodGhpcylcbiAgdGhhdC5pbml0KClcbn1cblxuRHJhZ2dhYmxlLm9uQ3JlYXRlID0gbmV3IERyYWdlZS5FdmVudChEcmFnZ2FibGUsIHsgaXNSZXZlcnNlOiB0cnVlLCBpc1N0b3BPblRydWU6IHRydWUgfSlcbkRyYWdnYWJsZS5vbkNyZWF0ZS5hZGQoYWRkVG9EZWZhdWx0U2NvcGUpXG5cbkRyYWdnYWJsZS5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLl9lbmFibGUgPSB0cnVlXG4gIHRoaXMub2Zmc2V0ID0gR2VvbWV0cnkuZ2V0T2Zmc2V0KHRoaXMuZWxlbWVudCwgdGhpcy5vcHRpb25zLnBhcmVudCwgdHJ1ZSlcbiAgdGhpcy5maXhQb3NpdGlvbiA9IHRoaXMub2Zmc2V0XG4gIHRoaXMucG9zaXRpb24gPSB0aGlzLm9mZnNldFxuICBpZiAodGhpcy5vcHRpb25zLnBvc2l0aW9uKSB7XG4gICAgdGhpcy5pbml0UG9zaXRpb24gPSB0aGlzLm9wdGlvbnMucG9zaXRpb25cbiAgICB0aGlzLm1vdmUodGhpcy5pbml0UG9zaXRpb24sIDAsIHRydWUsIHRydWUpXG4gIH0gZWxzZSB7XG4gICAgdGhpcy5pbml0UG9zaXRpb24gPSB0aGlzLm9mZnNldFxuICB9XG4gIHRoaXMuX2RyYWdTdGFydCA9IHRoaXMuZHJhZ1N0YXJ0LmJpbmQodGhpcylcbiAgdGhpcy5fZHJhZ01vdmUgPSB0aGlzLmRyYWdNb3ZlLmJpbmQodGhpcylcbiAgdGhpcy5fZHJhZ0VuZCA9IHRoaXMuZHJhZ0VuZC5iaW5kKHRoaXMpXG5cbiAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuc3RhcnQsIHRoaXMuX2RyYWdTdGFydClcbiAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuc3RhcnQsIHRoaXMuX2RyYWdTdGFydClcblxuICBpZiAodGhpcy5ib3VuZC5yZWZyZXNoKSB7XG4gICAgdGhpcy5ib3VuZC5yZWZyZXNoKClcbiAgfVxufVxuXG5EcmFnZ2FibGUucHJvdG90eXBlLnJlaW5pdCA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLm9mZnNldCA9IEdlb21ldHJ5LmdldE9mZnNldCh0aGlzLmVsZW1lbnQsIHRoaXMub3B0aW9ucy5wYXJlbnQsIHRydWUpXG4gIHRoaXMuZml4UG9zaXRpb24gPSB0aGlzLm9mZnNldFxuICB0aGlzLnBvc2l0aW9uID0gdGhpcy5vZmZzZXRcbiAgaWYgKHRoaXMub3B0aW9ucy5wb3NpdGlvbikge1xuICAgIHRoaXMuaW5pdFBvc2l0aW9uID0gdGhpcy5vcHRpb25zLnBvc2l0aW9uXG4gICAgdGhpcy5tb3ZlKHRoaXMuaW5pdFBvc2l0aW9uLCAwLCB0cnVlLCB0cnVlKVxuICB9IGVsc2Uge1xuICAgIHRoaXMuaW5pdFBvc2l0aW9uID0gdGhpcy5vZmZzZXRcbiAgfVxuXG4gIGlmICh0aGlzLmJvdW5kLnJlZnJlc2gpIHtcbiAgICB0aGlzLmJvdW5kLnJlZnJlc2goKVxuICB9XG59XG5cbkRyYWdnYWJsZS5wcm90b3R5cGUuZ2V0U2l6ZSA9IGZ1bmN0aW9uKF9yZWNhbHVsYXRlKSB7XG4gIHJldHVybiBHZW9tZXRyeS5nZXRTaXplT2ZFbGVtZW50KHRoaXMuZWxlbWVudCwgdGhpcy5vcHRpb25zLmlzQ29udGVudEJveFNpemUpXG59XG5cbkRyYWdnYWJsZS5wcm90b3R5cGUuZ2V0UG9zaXRpb24gPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5wb3NpdGlvbiA9IHRoaXMub2Zmc2V0LmFkZCh0aGlzLl90cmFuc2Zvcm1Qb3NpdGlvbiB8fCBuZXcgUG9pbnQoMCwgMCkpXG4gIHJldHVybiB0aGlzLnBvc2l0aW9uXG59XG5cbkRyYWdnYWJsZS5wcm90b3R5cGUuZ2V0Q2VudGVyID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLnBvc2l0aW9uLmFkZCh0aGlzLmdldFNpemUoKS5tdWx0KDAuNSkpXG59XG5cbkRyYWdnYWJsZS5wcm90b3R5cGUuX3NldFRyYW5zbGF0ZSA9IGZ1bmN0aW9uKHBvaW50KSB7XG4gIHRoaXMuX3RyYW5zZm9ybVBvc2l0aW9uID0gcG9pbnRcblxuICBsZXQgdHJhbnNmb3JtID0gdGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zZm9ybVByb3BlcnR5XSxcbiAgICB0cmFuc2xhdGVDc3MgPSAnIHRyYW5zbGF0ZTNkKCcgKyBwb2ludC54ICsgJ3B4LCcgKyBwb2ludC55ICsgJ3B4LCAwcHgpJ1xuXG4gIGNvbnN0IHVhID0gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnRcbiAgY29uc3QgbXNpZSA9IHVhLmluZGV4T2YoJ01TSUUgJylcblxuICBpZiAobXNpZSkge1xuICAgIHRyYW5zbGF0ZUNzcyA9ICcgdHJhbnNsYXRlKCcgKyBwb2ludC54ICsgJ3B4LCcgKyBwb2ludC55ICsgJ3B4KSdcbiAgICBpZiAoIS90cmFuc2xhdGVcXChbXildK1xcKS8udGVzdCh0cmFuc2Zvcm0pKSB7XG4gICAgICB0cmFuc2Zvcm0gKz0gdHJhbnNsYXRlQ3NzXG4gICAgfSBlbHNlIHtcbiAgICAgIHRyYW5zZm9ybSA9IHRyYW5zZm9ybS5yZXBsYWNlKC90cmFuc2xhdGVcXChbXildK1xcKS8sIHRyYW5zbGF0ZUNzcylcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKCEvdHJhbnNsYXRlM2RcXChbXildK1xcKS8udGVzdCh0cmFuc2Zvcm0pKSB7XG4gICAgICB0cmFuc2Zvcm0gKz0gdHJhbnNsYXRlQ3NzXG4gICAgfSBlbHNlIHtcbiAgICAgIHRyYW5zZm9ybSA9IHRyYW5zZm9ybS5yZXBsYWNlKC90cmFuc2xhdGUzZFxcKFteKV0rXFwpLywgdHJhbnNsYXRlQ3NzKVxuICAgIH1cbiAgfVxuXG4gIHRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2Zvcm1Qcm9wZXJ0eV0gPSB0cmFuc2Zvcm1cbn1cblxuRHJhZ2dhYmxlLnByb3RvdHlwZS5tb3ZlID0gZnVuY3Rpb24ocG9pbnQsIHRpbWUsIGlzRml4LCBpc1NpbGVudCkge1xuICB0aW1lID0gdGltZSB8fCAwXG4gIHBvaW50ID0gcG9pbnQuY2xvbmUoKVxuICBpZiAoaXNGaXgpIHtcbiAgICB0aGlzLmZpeFBvc2l0aW9uID0gcG9pbnRcbiAgfVxuXG4gIHRoaXMuZGV0ZXJtaW5lRGlyZWN0aW9uKHBvaW50KVxuXG4gIHRoaXMucG9zaXRpb24gPSBwb2ludFxuXG4gIGlmICh0cmFuc2l0aW9uUHJvcGVydHkpIHtcbiAgICB0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNpdGlvblByb3BlcnR5XSA9IHRpbWUgKyAnbXMnXG4gIH1cblxuICB0aGlzLl9zZXRUcmFuc2xhdGUocG9pbnQuc3ViKHRoaXMub2Zmc2V0KSlcbiAgaWYgKCFpc1NpbGVudCkge1xuICAgIHRoaXMub25Nb3ZlLmZpcmUoKVxuICB9XG59XG5cbkRyYWdnYWJsZS5wcm90b3R5cGUucmVmcmVzaFBvc2l0aW9uID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuc2V0UG9zaXRpb24odGhpcy5nZXRQb3NpdGlvbigpKVxufVxuXG5EcmFnZ2FibGUucHJvdG90eXBlLnNldFBvc2l0aW9uID0gZnVuY3Rpb24ocG9pbnQpIHtcbiAgcG9pbnQgPSBwb2ludC5jbG9uZSgpXG4gIHRoaXMucG9zaXRpb24gPSBwb2ludFxuXG4gIGlmICh0cmFuc2l0aW9uUHJvcGVydHkpIHtcbiAgICB0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNpdGlvblByb3BlcnR5XSA9ICcwbXMnXG4gIH1cblxuICB0aGlzLl9zZXRUcmFuc2xhdGUocG9pbnQuc3ViKHRoaXMub2Zmc2V0KSlcbn1cblxuRHJhZ2dhYmxlLnByb3RvdHlwZS5zZXRaZXJvVHJhbnNpdGlvbiA9IGZ1bmN0aW9uKCkge1xuICBpZiAodHJhbnNpdGlvblByb3BlcnR5KSB7XG4gICAgdGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zaXRpb25Qcm9wZXJ0eV0gPSAnMG1zJ1xuICB9XG59XG5cbkRyYWdnYWJsZS5wcm90b3R5cGUuZGV0ZXJtaW5lRGlyZWN0aW9uID0gZnVuY3Rpb24ocG9pbnQpIHtcbiAgdGhpcy5sZWZ0RGlyZWN0aW9uID0gKHRoaXMucG9zaXRpb24ueCA8IHBvaW50LngpXG4gIHRoaXMucmlnaHREaXJlY3Rpb24gPSAodGhpcy5wb3NpdGlvbi54ID4gcG9pbnQueClcbiAgdGhpcy51cERpcmVjdGlvbiA9ICh0aGlzLnBvc2l0aW9uLnkgPiBwb2ludC55KVxuICB0aGlzLmRvd25EaXJlY3Rpb24gPSAodGhpcy5wb3NpdGlvbi55IDwgcG9pbnQueSlcbn1cblxuRHJhZ2dhYmxlLnByb3RvdHlwZS5kcmFnU3RhcnQgPSBmdW5jdGlvbihldmVudCkge1xuICB0aGlzLmN1cnJlbnRFdmVudCA9IGV2ZW50XG4gIGlmICghdGhpcy5fZW5hYmxlIHx8ICh0aGlzLm9wdGlvbnMuc3RhcnRGaWx0ZXIgJiYgIXRoaXMub3B0aW9ucy5zdGFydEZpbHRlcihldmVudCkpKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBjb25zdCBpc1RvdWNoRXZlbnQgPSAoaXNUb3VjaCAmJiAoZXZlbnQgaW5zdGFuY2VvZiB3aW5kb3cuVG91Y2hFdmVudCkpXG5cbiAgdGhpcy5fc3RhcnRUb3VjaFBvaW50ID0gbmV3IFBvaW50KGlzVG91Y2hFdmVudCA/IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VYIDogZXZlbnQuY2xpZW50WCwgaXNUb3VjaEV2ZW50ID8gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVkgOiBldmVudC5jbGllbnRZKVxuXG4gIHRoaXMuX3N0YXJ0UG9zaXRpb24gPSB0aGlzLmdldFBvc2l0aW9uKClcbiAgaWYgKGlzVG91Y2hFdmVudCkge1xuICAgIHRoaXMuX3RvdWNoSWQgPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5pZGVudGlmaWVyXG4gIH1cbiAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgaWYgKCEoZXZlbnQudGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJbnB1dEVsZW1lbnRcbiAgICAgICAgfHwgZXZlbnQudGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJbnB1dEVsZW1lbnQpKSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICB9IGVsc2Uge1xuICAgIGV2ZW50LnRhcmdldC5mb2N1cygpXG4gIH1cblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlKVxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlKVxuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuZW5kLCB0aGlzLl9kcmFnRW5kKVxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcblxuICB0aGlzLmlzRHJhZ2VlID0gdHJ1ZVxuXG4gIHRoaXMub25TdGFydC5maXJlKGV2ZW50KVxuICBhZGRDbGFzcyh0aGlzLmVsZW1lbnQsICdhY3RpdmUnKVxuICB0aGlzLm9uTW92ZS5maXJlKGV2ZW50KVxufVxuXG5EcmFnZ2FibGUucHJvdG90eXBlLmRyYWdNb3ZlID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgdGhpcy5jdXJyZW50RXZlbnQgPSBldmVudFxuICBsZXQgdG91Y2hcblxuICBjb25zdCBpc1RvdWNoRXZlbnQgPSAoaXNUb3VjaCAmJiAoZXZlbnQgaW5zdGFuY2VvZiB3aW5kb3cuVG91Y2hFdmVudCkpXG4gIGlmIChpc1RvdWNoRXZlbnQpIHtcbiAgICB0b3VjaCA9IGdldFRvdWNoQnlJRChldmVudCwgdGhpcy5fdG91Y2hJZClcblxuICAgIGlmICghdG91Y2gpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgfVxuXG4gIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgY29uc3QgdG91Y2hQb2ludCA9IG5ldyBQb2ludChpc1RvdWNoRXZlbnQgPyB0b3VjaC5wYWdlWCA6IGV2ZW50LmNsaWVudFgsIGlzVG91Y2hFdmVudCA/IHRvdWNoLnBhZ2VZIDogZXZlbnQuY2xpZW50WSlcbiAgbGV0IHBvaW50ID0gdGhpcy5fc3RhcnRQb3NpdGlvbi5hZGQodG91Y2hQb2ludC5zdWIodGhpcy5fc3RhcnRUb3VjaFBvaW50KSlcbiAgcG9pbnQgPSB0aGlzLmJvdW5kKHBvaW50LCB0aGlzLmdldFNpemUoKSlcbiAgdGhpcy50b3VjaFBvaW50ID0gdG91Y2hQb2ludFxuICB0aGlzLm1vdmUocG9pbnQsIDApXG59XG5cbkRyYWdnYWJsZS5wcm90b3R5cGUuZHJhZ0VuZCA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gIGNvbnN0IGlzVG91Y2hFdmVudCA9IChpc1RvdWNoICYmIChldmVudCBpbnN0YW5jZW9mIHdpbmRvdy5Ub3VjaEV2ZW50KSlcbiAgbGV0IHRvdWNoXG5cbiAgaWYgKGlzVG91Y2hFdmVudCAmJiAhZ2V0VG91Y2hCeUlEKGV2ZW50LCB0aGlzLl90b3VjaElkKSkge1xuICAgIHJldHVyblxuICB9XG5cbiAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICB0aGlzLm9uRW5kLmZpcmUoZXZlbnQpXG5cbiAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5tb3ZlLCB0aGlzLl9kcmFnTW92ZSlcbiAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5tb3ZlLCB0aGlzLl9kcmFnTW92ZSlcblxuICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcbiAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQpXG5cbiAgdGhpcy5pc0RyYWdlZSA9IGZhbHNlXG4gIHJlbW92ZUNsYXNzKHRoaXMuZWxlbWVudCwgJ2FjdGl2ZScpXG59XG5cbkRyYWdnYWJsZS5wcm90b3R5cGUuZ2V0UmVjdGFuZ2xlID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgUmVjdGFuZ2xlKHRoaXMucG9zaXRpb24sIHRoaXMuZ2V0U2l6ZSgpKVxufVxuXG5EcmFnZ2FibGUucHJvdG90eXBlLnJlZnJlc2ggPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5nZXRTaXplKHRydWUpXG4gIGlmICh0aGlzLmJvdW5kLnJlZnJlc2gpIHtcbiAgICB0aGlzLmJvdW5kLnJlZnJlc2goKVxuICB9XG59XG5cbkRyYWdnYWJsZS5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5zdGFydCwgdGhpcy5fZHJhZ1N0YXJ0KVxuICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5zdGFydCwgdGhpcy5fZHJhZ1N0YXJ0KVxuICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5tb3ZlLCB0aGlzLl9kcmFnTW92ZSlcbiAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUpXG4gIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcbiAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuZW5kLCB0aGlzLl9kcmFnRW5kKVxuXG4gIHRoaXMub25FbmQucmVzZXQoKVxuICB0aGlzLm9uTW92ZS5yZXNldCgpXG59XG5cbkRyYWdnYWJsZS5wcm90b3R5cGUuX19kZWZpbmVHZXR0ZXJfXygnZW5hYmxlJywgZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLl9lbmFibGVcbn0pXG5cbkRyYWdnYWJsZS5wcm90b3R5cGUuX19kZWZpbmVTZXR0ZXJfXygnZW5hYmxlJywgZnVuY3Rpb24oZW5hYmxlKSB7XG4gIGlmIChlbmFibGUpIHtcbiAgICByZW1vdmVDbGFzcyh0aGlzLmVsZW1lbnQsICdkaXNhYmxlJylcbiAgfSBlbHNlIHtcbiAgICBhZGRDbGFzcyh0aGlzLmVsZW1lbnQsICdkaXNhYmxlJylcbiAgfVxuXG4gIHJldHVybiB0aGlzLl9lbmFibGUgPSBlbmFibGVcbn0pXG5cbmV4cG9ydCB7IERyYWdnYWJsZSwgZHJhZ2dhYmxlcywgZXZlbnRzIH1cbiIsIid1c2Ugc3RyaWN0J1xuXG5mdW5jdGlvbiBFdmVudChjb250ZXh0LCBvcHRpb25zID0ge30pIHtcbiAgdGhpcy5mdW5jcyA9IFtdXG4gIHRoaXMuY29udGV4dCA9IGNvbnRleHRcbiAgdGhpcy5pc1JldmVyc2UgPSBvcHRpb25zLmlzUmV2ZXJzZSB8fCBmYWxzZVxuICB0aGlzLmlzU3RvcE9uVHJ1ZSA9IG9wdGlvbnMuaXNTdG9wT25UcnVlIHx8IGZhbHNlXG59XG5cbkV2ZW50LnByb3RvdHlwZS5maXJlID0gZnVuY3Rpb24oKSB7XG4gIGNvbnN0IGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cylcbiAgY29uc3QgZnMgPSB0aGlzLmlzUmV2ZXJzZSA/IHRoaXMuZnVuY3Muc2xpY2UoKS5yZXZlcnNlKCkgOiB0aGlzLmZ1bmNzXG4gIGxldCByZXRWYWx1ZVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZnMubGVuZ3RoOyBpKyspIHtcbiAgICByZXRWYWx1ZSA9IGZzW2ldLmFwcGx5KHRoaXMuY29udGV4dCwgYXJncylcbiAgICBpZiAodGhpcy5pc1N0b3BPblRydWUgJiYgcmV0VmFsdWUpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICB9XG4gIHJldHVybiAhdGhpcy5pc1N0b3BPblRydWVcbn1cblxuRXZlbnQucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uKGYpIHtcbiAgdGhpcy5mdW5jcy5wdXNoKGYpXG59XG5cbkV2ZW50LnByb3RvdHlwZS51bnNoaWZ0ID0gZnVuY3Rpb24oZikge1xuICB0aGlzLmZ1bmNzLnVuc2hpZnQoZilcbn1cblxuRXZlbnQucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uKGYpIHtcbiAgY29uc3QgaW5kZXggPSB0aGlzLmZ1bmNzLmluZGV4T2YoZilcbiAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgIHRoaXMuZnVuY3Muc3BsaWNlKGluZGV4LCAxKVxuICB9XG59XG5cbkV2ZW50LnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uKF9mKSB7XG4gIHRoaXMuZnVuY3MgPSBbXVxufVxuXG5leHBvcnQgZGVmYXVsdCBFdmVudFxuIiwiLyoqKioqKioqKioqKiBBcnJheSAqKioqKioqKioqKioqKi9cblxuaWYgKCFBcnJheS5wcm90b3R5cGUucmVtb3ZlSXRlbSkge1xuICBBcnJheS5wcm90b3R5cGUucmVtb3ZlSXRlbSA9IGZ1bmN0aW9uKHZhbCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHRoaXNbaV0gPT09IHZhbCkge1xuICAgICAgICB0aGlzLnNwbGljZShpLCAxKVxuICAgICAgICBpLS1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXNcbiAgfVxufVxuXG4vKioqKioqKioqKioqKioqKioqKioqKiogMDBQICoqKioqKioqKioqKioqKioqKioqKioqKiovXG5jb25zdCBhdWdtZW50ID0gZnVuY3Rpb24ocmVjZWl2aW5nQ2xhc3MsIGdpdmluZ0NsYXNzKSB7XG4gICAgLyogb25seSBwcm92aWRlIGNlcnRhaW4gbWV0aG9kcyAqL1xuICBpZiAoYXJndW1lbnRzWzJdKSB7XG4gICAgZm9yIChsZXQgaT0yLCBsZW49YXJndW1lbnRzLmxlbmd0aDsgaTxsZW47IGkrKykge1xuICAgICAgcmVjZWl2aW5nQ2xhc3MucHJvdG90eXBlW2FyZ3VtZW50c1tpXV0gPSBnaXZpbmdDbGFzcy5wcm90b3R5cGVbYXJndW1lbnRzW2ldXVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBmb3IgKGNvbnN0IG1ldGhvZE5hbWUgaW4gZ2l2aW5nQ2xhc3MucHJvdG90eXBlKSB7XG4gICAgICAgICAgICAvKiBjaGVjayB0byBtYWtlIHN1cmUgdGhlIHJlY2VpdmluZyBjbGFzcyBkb2Vzbid0XG4gICAgICAgICAgICAgICBoYXZlIGEgbWV0aG9kIG9mIHRoZSBzYW1lIG5hbWUgYXMgdGhlIG9uZSBjdXJyZW50bHlcbiAgICAgICAgICAgICAgIGJlaW5nIHByb2Nlc3NlZCAqL1xuICAgICAgaWYgKCFyZWNlaXZpbmdDbGFzcy5wcm90b3R5cGVbbWV0aG9kTmFtZV0pIHtcbiAgICAgICAgcmVjZWl2aW5nQ2xhc3MucHJvdG90eXBlW21ldGhvZE5hbWVdID0gZ2l2aW5nQ2xhc3MucHJvdG90eXBlW21ldGhvZE5hbWVdXG4gICAgICB9XG4gICAgfVxuICB9XG59XG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5hdWdtZW50KE5vZGVMaXN0LCBBcnJheSwgJ2ZvckVhY2gnKVxuXG50cnkge1xuICBpZiAoIU9iamVjdC5wcm90b3R5cGUuX19kZWZpbmVHZXR0ZXJfXyAmJlxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ3gnLCB7IGdldDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0gfSkueCkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPYmplY3QucHJvdG90eXBlLCAnX19kZWZpbmVHZXR0ZXJfXycsXG4gICAgICB7IGVudW1lcmFibGU6IGZhbHNlLCBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbihuYW1lLCBmdW5jKSB7XG4gICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIG5hbWUsXG4gICAgICAgICAgICAgeyBnZXQ6IGZ1bmMsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9KVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPYmplY3QucHJvdG90eXBlLCAnX19kZWZpbmVTZXR0ZXJfXycsXG4gICAgICB7IGVudW1lcmFibGU6IGZhbHNlLCBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbihuYW1lLCBmdW5jKSB7XG4gICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIG5hbWUsXG4gICAgICAgICAgICAgeyBzZXQ6IGZ1bmMsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9KVxuICAgICAgICB9XG4gICAgICB9KVxuICB9XG59IGNhdGNoIChfZGVmUHJvcEV4Y2VwdGlvbikgeyAvKkRvIG5vdGhpbmcgaWYgYW4gZXhjZXB0aW9uIG9jY3VycyovIH1cbiIsIid1c2Ugc3RyaWN0J1xuaW1wb3J0IHV0aWwgZnJvbSAnLi91dGlsJ1xuXG4vKioqKioqKioqKioqKioqKioqKioqL1xuZnVuY3Rpb24gUG9pbnQoeCwgeSkge1xuICB0aGlzLnggPSB4XG4gIHRoaXMueSA9IHlcbn1cblxuUG9pbnQucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiAne3g9JyArIHRoaXMueCArICcseT0nICsgdGhpcy55ICsgJ30nXG59XG5cblBvaW50LnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbihwKSB7XG4gIHJldHVybiBuZXcgUG9pbnQodGhpcy54ICsgcC54LCB0aGlzLnkgKyBwLnkpXG59XG5cblBvaW50LnByb3RvdHlwZS5zdWIgPSBmdW5jdGlvbihwKSB7XG4gIHJldHVybiBuZXcgUG9pbnQodGhpcy54IC0gcC54LCB0aGlzLnkgLSBwLnkpXG59XG5cblBvaW50LnByb3RvdHlwZS5tdWx0ID0gZnVuY3Rpb24oaykge1xuICByZXR1cm4gbmV3IFBvaW50KHRoaXMueCAqIGssIHRoaXMueSAqIGspXG59XG5cblBvaW50LnByb3RvdHlwZS5uZWdhdGl2ZSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFBvaW50KC10aGlzLngsIC10aGlzLnkpXG59XG5cblBvaW50LnByb3RvdHlwZS5jb21wYXJlID0gZnVuY3Rpb24ocCkge1xuICByZXR1cm4gKHRoaXMueCA9PT0gcC54ICYmIHRoaXMueSA9PT0gcC55KVxufVxuXG5Qb2ludC5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLngsIHRoaXMueSlcbn1cblxuLyoqKioqKioqKioqKioqKiovXG5mdW5jdGlvbiBSZWN0YW5nbGUocG9zaXRpb24sIHNpemUpIHtcbiAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uXG4gIHRoaXMuc2l6ZSA9IHNpemVcbn1cblxuUmVjdGFuZ2xlLnByb3RvdHlwZS5nZXRQMSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5wb3NpdGlvblxufVxuXG5SZWN0YW5nbGUucHJvdG90eXBlLmdldFAyID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgUG9pbnQodGhpcy5wb3NpdGlvbi54ICsgdGhpcy5zaXplLngsIHRoaXMucG9zaXRpb24ueSlcbn1cblxuUmVjdGFuZ2xlLnByb3RvdHlwZS5nZXRQMyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5wb3NpdGlvbi5hZGQodGhpcy5zaXplKVxufVxuXG5SZWN0YW5nbGUucHJvdG90eXBlLmdldFA0ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgUG9pbnQodGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLnNpemUueSlcbn1cblxuUmVjdGFuZ2xlLnByb3RvdHlwZS5nZXRDZW50ZXIgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMucG9zaXRpb24uYWRkKHRoaXMuc2l6ZS5tdWx0KDAuNSkpXG59XG5cblJlY3RhbmdsZS5wcm90b3R5cGUub3IgPSBmdW5jdGlvbihyZWN0KSB7XG4gIGNvbnN0IHBvc2l0aW9uID0gbmV3IFBvaW50KE1hdGgubWluKHRoaXMucG9zaXRpb24ueCwgcmVjdC5wb3NpdGlvbi54KSwgTWF0aC5taW4odGhpcy5wb3NpdGlvbi55LCByZWN0LnBvc2l0aW9uLnkpKSwgc2l6ZSA9IChuZXcgUG9pbnQoTWF0aC5tYXgodGhpcy5wb3NpdGlvbi54ICsgdGhpcy5zaXplLngsIHJlY3QucG9zaXRpb24ueCArIHJlY3Quc2l6ZS54KSwgTWF0aC5tYXgodGhpcy5wb3NpdGlvbi55ICsgdGhpcy5zaXplLnksIHJlY3QucG9zaXRpb24ueSArIHJlY3Quc2l6ZS55KSkpLnN1Yihwb3NpdGlvbilcbiAgcmV0dXJuIG5ldyBSZWN0YW5nbGUocG9zaXRpb24sIHNpemUpXG59XG5cblJlY3RhbmdsZS5wcm90b3R5cGUuYW5kID0gZnVuY3Rpb24ocmVjdCkge1xuICBjb25zdCBwb3NpdGlvbiA9IG5ldyBQb2ludChNYXRoLm1heCh0aGlzLnBvc2l0aW9uLngsIHJlY3QucG9zaXRpb24ueCksIE1hdGgubWF4KHRoaXMucG9zaXRpb24ueSwgcmVjdC5wb3NpdGlvbi55KSksIHNpemUgPSAobmV3IFBvaW50KE1hdGgubWluKHRoaXMucG9zaXRpb24ueCArIHRoaXMuc2l6ZS54LCByZWN0LnBvc2l0aW9uLnggKyByZWN0LnNpemUueCksIE1hdGgubWluKHRoaXMucG9zaXRpb24ueSArIHRoaXMuc2l6ZS55LCByZWN0LnBvc2l0aW9uLnkgKyByZWN0LnNpemUueSkpKS5zdWIocG9zaXRpb24pXG4gIGlmIChzaXplLnggPD0gMCB8fCBzaXplLnkgPD0gMCkge1xuICAgIHJldHVybiBudWxsXG4gIH1cbiAgcmV0dXJuIG5ldyBSZWN0YW5nbGUocG9zaXRpb24sIHNpemUpXG59XG5cblJlY3RhbmdsZS5wcm90b3R5cGUuaW5jbHVkZVBvaW50ID0gZnVuY3Rpb24ocCkge1xuICByZXR1cm4gISh0aGlzLnBvc2l0aW9uLnggPiBwLnggfHwgdGhpcy5wb3NpdGlvbi54ICsgdGhpcy5zaXplLnggPCBwLnggfHwgdGhpcy5wb3NpdGlvbi55ID4gcC55IHx8IHRoaXMucG9zaXRpb24ueSArIHRoaXMuc2l6ZS55IDwgcC55KVxufVxuXG5SZWN0YW5nbGUucHJvdG90eXBlLmluY2x1ZGVSZWN0YW5nbGUgPSBmdW5jdGlvbihyZWN0YW5nbGUpIHtcbiAgcmV0dXJuIHRoaXMuaW5jbHVkZVBvaW50KHJlY3RhbmdsZS5wb3NpdGlvbikgJiYgdGhpcy5pbmNsdWRlUG9pbnQocmVjdGFuZ2xlLmdldFAzKCkpXG59XG5cblJlY3RhbmdsZS5wcm90b3R5cGUubW92ZVRvQm91bmQgPSBmdW5jdGlvbihyZWN0LCBheGlzKSB7XG4gIGxldCBzZWxBeGlzLCBjcm9zc1JlY3RhbmdsZVxuICBpZiAoYXhpcykge1xuICAgIHNlbEF4aXMgPSBheGlzXG4gIH0gZWxzZSB7XG4gICAgY3Jvc3NSZWN0YW5nbGUgPSB0aGlzLmFuZChyZWN0KVxuICAgIGlmICghY3Jvc3NSZWN0YW5nbGUpIHtcbiAgICAgIHJldHVybiByZWN0XG4gICAgfVxuICAgIHNlbEF4aXMgPSBjcm9zc1JlY3RhbmdsZS5zaXplLnggPiBjcm9zc1JlY3RhbmdsZS5zaXplLnkgPyAneScgOiAneCdcbiAgfVxuICBjb25zdCB0aGlzQ2VudGVyID0gdGhpcy5nZXRDZW50ZXIoKVxuICBjb25zdCByZWN0Q2VudGVyID0gcmVjdC5nZXRDZW50ZXIoKVxuICBjb25zdCBzaWduID0gdGhpc0NlbnRlcltzZWxBeGlzXSA+IHJlY3RDZW50ZXJbc2VsQXhpc10gPyAtMSA6IDFcbiAgY29uc3Qgb2Zmc2V0ID0gc2lnbiA+IDAgPyB0aGlzLnBvc2l0aW9uW3NlbEF4aXNdICsgdGhpcy5zaXplW3NlbEF4aXNdIC0gcmVjdC5wb3NpdGlvbltzZWxBeGlzXSA6IHRoaXMucG9zaXRpb25bc2VsQXhpc10gLSAocmVjdC5wb3NpdGlvbltzZWxBeGlzXSArIHJlY3Quc2l6ZVtzZWxBeGlzXSlcbiAgcmVjdC5wb3NpdGlvbltzZWxBeGlzXSA9IHJlY3QucG9zaXRpb25bc2VsQXhpc10gKyBvZmZzZXRcbiAgcmV0dXJuIHJlY3Rcbn1cblxuUmVjdGFuZ2xlLnByb3RvdHlwZS5nZXRTcXVhcmUgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuc2l6ZS54ICogdGhpcy5zaXplLnlcbn1cblxuUmVjdGFuZ2xlLnByb3RvdHlwZS5zdHlsZUFwcGx5ID0gZnVuY3Rpb24oZWwpIHtcbiAgZWwgPSBlbCB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbmQnKVxuICBlbC5zdHlsZS5sZWZ0ID0gdGhpcy5wb3NpdGlvbi54ICsgJ3B4J1xuICBlbC5zdHlsZS50b3AgPSB0aGlzLnBvc2l0aW9uLnkgKyAncHgnXG4gIGVsLnN0eWxlLndpZHRoID0gdGhpcy5zaXplLnggKyAncHgnXG4gIGVsLnN0eWxlLmhlaWdodCA9IHRoaXMuc2l6ZS55ICsgJ3B4J1xufVxuXG5SZWN0YW5nbGUucHJvdG90eXBlLmdyb3d0aCA9IGZ1bmN0aW9uKHNpemUpIHtcbiAgdGhpcy5zaXplID0gdGhpcy5zaXplLmFkZChzaXplKVxuICB0aGlzLnBvc2l0aW9uID0gdGhpcy5wb3NpdGlvbi5hZGQoc2l6ZS5tdWx0KC0wLjUpKVxufVxuXG5SZWN0YW5nbGUucHJvdG90eXBlLmdldE1pblNpZGUgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIE1hdGgubWluKHRoaXMuc2l6ZS54LCB0aGlzLnNpemUueSlcbn1cblxuLyoqKioqKioqKioqKioqKioqL1xuY29uc3QgR2VvbWV0cnkgPSB7XG4gIGdldERpc3RhbmNlOiBmdW5jdGlvbihwMSwgcDIpIHtcbiAgICBjb25zdCBkeCA9IHAxLnggLSBwMi54LCBkeSA9IHAxLnkgLSBwMi55XG4gICAgcmV0dXJuIE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSlcbiAgfSxcbiAgZGlzdGFuY2U6IGZ1bmN0aW9uKHAxLCBwMikge1xuICAgIHJldHVybiBHZW9tZXRyeS5nZXREaXN0YW5jZShwMSwgcDIpXG4gIH0sXG4gIGdldFhEaWZmZXJlbmNlOiBmdW5jdGlvbihwMSwgcDIpIHtcbiAgICByZXR1cm4gTWF0aC5hYnMocDEueCAtIHAyLngpXG4gIH0sXG4gIGdldFlEaWZmZXJlbmNlOiBmdW5jdGlvbihwMSwgcDIpIHtcbiAgICByZXR1cm4gTWF0aC5hYnMocDEueSAtIHAyLnkpXG4gIH0sXG4gIHRyYW5zZm9ybWVkU3BhY2VEaXN0YW5jZUZhY3Rvcnk6IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24ocDEsIHAyKSB7XG4gICAgICByZXR1cm4gTWF0aC5zcXJ0KFxuICAgICAgICAgICAgICAgIE1hdGgucG93KG9wdGlvbnMueCAqIE1hdGguYWJzKHAxLnggLSBwMi54KSwgMikgKyBNYXRoLnBvdyhvcHRpb25zLnkgKiBNYXRoLmFicyhwMS55IC0gcDIueSksIDIpXG4gICAgICAgICAgICApXG4gICAgfVxuICB9LFxuICBpbmRleE9mTmVhclBvaW50OiBmdW5jdGlvbihhcnIsIHZhbCwgcmFkaXVzLCBnZXREaXN0YW5jZSkge1xuICAgIGxldCBzaXplLCBpbmRleCA9IDAsIGksIHRlbXBcbiAgICBnZXREaXN0YW5jZSA9IGdldERpc3RhbmNlIHx8IEdlb21ldHJ5LmdldERpc3RhbmNlXG4gICAgaWYgKGFyci5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiAtMVxuICAgIH1cbiAgICBzaXplID0gZ2V0RGlzdGFuY2UoYXJyWzBdLCB2YWwpXG4gICAgZm9yIChpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgdGVtcCA9IGdldERpc3RhbmNlKGFycltpXSwgdmFsKVxuICAgICAgaWYgKHRlbXAgPCBzaXplKSB7XG4gICAgICAgIHNpemUgPSB0ZW1wXG4gICAgICAgIGluZGV4ID0gaVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAocmFkaXVzID49IDAgJiYgc2l6ZSA+IHJhZGl1cykge1xuICAgICAgcmV0dXJuIC0xXG4gICAgfVxuICAgIHJldHVybiBpbmRleFxuICB9LFxuICBib3VuZDogZnVuY3Rpb24obWluLCBtYXgsIHZhbCkge1xuICAgIHJldHVybiBNYXRoLm1heChtaW4sIE1hdGgubWluKG1heCwgdmFsKSlcbiAgfSxcbiAgYm91bmRQb2ludDogZnVuY3Rpb24obWluLCBtYXgsIHZhbCkge1xuICAgIGNvbnN0IHggPSBNYXRoLm1heChtaW4ueCwgTWF0aC5taW4obWF4LngsIHZhbC54KSlcbiAgICBjb25zdCB5ID0gTWF0aC5tYXgobWluLnksIE1hdGgubWluKG1heC55LCB2YWwueSkpXG4gICAgcmV0dXJuIG5ldyBQb2ludCh4LCB5KVxuICB9LFxuICAgIC8vUmV0dXJuIGNyb3NzaW5nIHBvaW50IG9mIHR3byBsaW5lc1xuICBkaXJlY3RDcm9zc2luZzogZnVuY3Rpb24oTDFQMSwgTDFQMiwgTDJQMSwgTDJQMikge1xuICAgIGxldCB0ZW1wLCBrMSwgazIsIGIxLCBiMiwgeCwgeVxuICAgIGlmIChMMlAxLnggPT09IEwyUDIueCkge1xuICAgICAgdGVtcCA9IEwyUDFcbiAgICAgIEwyUDEgPSBMMVAxXG4gICAgICBMMVAxID0gdGVtcFxuICAgICAgdGVtcCA9IEwyUDJcbiAgICAgIEwyUDIgPSBMMVAyXG4gICAgICBMMVAyID0gdGVtcFxuICAgIH1cbiAgICBpZiAoTDFQMS54ID09PSBMMVAyLngpIHtcbiAgICAgIGsyID0gKEwyUDIueSAtIEwyUDEueSkgLyAoTDJQMi54IC0gTDJQMS54KVxuICAgICAgYjIgPSAoTDJQMi54ICogTDJQMS55IC0gTDJQMS54ICogTDJQMi55KSAvIChMMlAyLnggLSBMMlAxLngpXG4gICAgICB4ID0gTDFQMS54XG4gICAgICB5ID0geCAqIGsyICsgYjJcbiAgICAgIHJldHVybiBuZXcgUG9pbnQoeCwgeSlcbiAgICB9IGVsc2Uge1xuICAgICAgazEgPSAoTDFQMi55IC0gTDFQMS55KSAvIChMMVAyLnggLSBMMVAxLngpXG4gICAgICBiMSA9IChMMVAyLnggKiBMMVAxLnkgLSBMMVAxLnggKiBMMVAyLnkpIC8gKEwxUDIueCAtIEwxUDEueClcbiAgICAgIGsyID0gKEwyUDIueSAtIEwyUDEueSkgLyAoTDJQMi54IC0gTDJQMS54KVxuICAgICAgYjIgPSAoTDJQMi54ICogTDJQMS55IC0gTDJQMS54ICogTDJQMi55KSAvIChMMlAyLnggLSBMMlAxLngpXG4gICAgICB4ID0gKGIxIC0gYjIpIC8gKGsyIC0gazEpXG4gICAgICB5ID0geCAqIGsxICsgYjFcbiAgICAgIHJldHVybiBuZXcgUG9pbnQoeCwgeSlcbiAgICB9XG4gIH0sXG4gICAgLy9HZXQgcG9pbnQgYW5kIGNoZWNrIHRoYXQgcG9pbnQgYmVsb25nIHRvIHNlZ21lbnQgb2YgdGhlIGxpbmVcbiAgICAvLyBpZiBub3QgLSByZXR1cm4gdGhlIG5lYXJlc3QgcG9pbnQgb2Ygc2VnbWVudFxuICBib3VuZFRvU2VnbWVudDogZnVuY3Rpb24oTFAxLCBMUDIsIFApIHtcbiAgICBsZXQgeCwgeVxuICAgIHggPSBHZW9tZXRyeS5ib3VuZChNYXRoLm1pbihMUDEueCwgTFAyLngpLCBNYXRoLm1heChMUDEueCwgTFAyLngpLCBQLngpXG4gICAgaWYgKHggIT09IFAueCkge1xuICAgICAgeSA9ICh4ID09PSBMUDEueCkgPyBMUDEueSA6IExQMi55XG4gICAgICBQID0gbmV3IFBvaW50KHgsIHkpXG4gICAgfVxuXG4gICAgeSA9IEdlb21ldHJ5LmJvdW5kKE1hdGgubWluKExQMS55LCBMUDIueSksIE1hdGgubWF4KExQMS55LCBMUDIueSksIFAueSlcbiAgICBpZiAoeSAhPT0gUC55KSB7XG4gICAgICB4ID0gKHkgPT09IExQMS55KSA/IExQMS54IDogTFAyLnhcbiAgICAgIFAgPSBuZXcgUG9pbnQoeCwgeSlcbiAgICB9XG5cbiAgICByZXR1cm4gUFxuICB9LFxuICBib3VuZFRvTGluZTogZnVuY3Rpb24oQSwgQiwgUCkge1xuICAgIGNvbnN0IEFQID0gbmV3IFBvaW50KFAueCAtIEEueCwgUC55IC0gQS55KSxcbiAgICAgIEFCID0gbmV3IFBvaW50KEIueCAtIEEueCwgQi55IC0gQS55KSxcbiAgICAgIGFiMiA9IEFCLnggKiBBQi54ICsgQUIueSAqIEFCLnksXG4gICAgICBhcF9hYiA9IEFQLnggKiBBQi54ICsgQVAueSAqIEFCLnksXG4gICAgICB0ID0gYXBfYWIgLyBhYjJcbiAgICByZXR1cm4gbmV3IFBvaW50KEEueCArIEFCLnggKiB0LCBBLnkgKyBBQi55ICogdClcbiAgfSxcbiAgZ2V0UG9pbnRJbkxpbmU6IGZ1bmN0aW9uKExQMSwgTFAyLCBwZXJjZW50KSB7XG4gICAgY29uc3QgZHggPSBMUDIueCAtIExQMS54LCBkeSA9IExQMi55IC0gTFAxLnlcbiAgICByZXR1cm4gbmV3IFBvaW50KExQMS54ICsgcGVyY2VudCAqIGR4LCBMUDEueSArIHBlcmNlbnQgKiBkeSlcbiAgfSxcbiAgZ2V0UG9pbnRJbkxpbmVCeUxlbmdodDogZnVuY3Rpb24oTFAxLCBMUDIsIGxlbmdodCkge1xuICAgIGNvbnN0IGR4ID0gTFAyLnggLSBMUDEueCwgZHkgPSBMUDIueSAtIExQMS55LCBwZXJjZW50ID0gbGVuZ2h0IC8gR2VvbWV0cnkuZGlzdGFuY2UoTFAxLCBMUDIpXG4gICAgcmV0dXJuIG5ldyBQb2ludChMUDEueCArIHBlcmNlbnQgKiBkeCwgTFAxLnkgKyBwZXJjZW50ICogZHkpXG4gIH0sXG4gIGNyZWF0ZVJlY3RhbmdsZUZyb21FbGVtZW50OiBmdW5jdGlvbihlbCwgcGFyZW50LCBpc0NvbnRlbnRCb3hTaXplLCBpc0NvbnNpZGVyVHJhbnNsYXRlKSB7XG4gICAgY29uc3Qgc2l6ZSA9IHRoaXMuZ2V0U2l6ZU9mRWxlbWVudChlbCwgaXNDb250ZW50Qm94U2l6ZSlcbiAgICByZXR1cm4gbmV3IFJlY3RhbmdsZSh0aGlzLmdldE9mZnNldChlbCwgcGFyZW50IHx8IGVsLnBhcmVudE5vZGUsIGlzQ29uc2lkZXJUcmFuc2xhdGUpLCBzaXplKVxuICB9LFxuICBnZXRTaXplT2ZFbGVtZW50OiBmdW5jdGlvbihlbCwgaXNDb250ZW50Qm94U2l6ZSkge1xuICAgIGxldCB3aWR0aCA9IHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsKVsnd2lkdGgnXSksIGhlaWdodCA9IHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsKVsnaGVpZ2h0J10pXG4gICAgaWYgKCFpc0NvbnRlbnRCb3hTaXplKSB7XG4gICAgICB3aWR0aCArPSB1dGlsLmdldFN1bVZhbHVlT2ZTdHlsZVJ1bGUoZWwsIFsncGFkZGluZy1sZWZ0JywgJ3BhZGRpbmctcmlnaHQnLCAnYm9yZGVyLWxlZnQtd2lkdGgnLCAnYm9yZGVyLXJpZ2h0LXdpZHRoJ10pXG4gICAgICBoZWlnaHQgKz0gdXRpbC5nZXRTdW1WYWx1ZU9mU3R5bGVSdWxlKGVsLCBbJ3BhZGRpbmctdG9wJywgJ3BhZGRpbmctYm90dG9tJywgJ2JvcmRlci10b3Atd2lkdGgnLCAnYm9yZGVyLWJvdHRvbS13aWR0aCddKVxuICAgIH1cbiAgICByZXR1cm4gbmV3IFBvaW50KHdpZHRoLCBoZWlnaHQpXG4gIH0sXG4gIGdldE9mZnNldDogZnVuY3Rpb24oZWwsIHBhcmVudCkge1xuICAgIGNvbnN0IGVsUmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLCBwYXJlbnRSZWN0ID0gcGFyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgcmV0dXJuIG5ldyBQb2ludChlbFJlY3QubGVmdCAtIHBhcmVudFJlY3QubGVmdCwgZWxSZWN0LnRvcCAtIHBhcmVudFJlY3QudG9wKVxuICB9LFxuICBnZXRQb2ludEZyb21SYWRpYWxTeXN0ZW06IGZ1bmN0aW9uKGFuZ2xlLCBsZW5ndGgsIGNlbnRlcikge1xuICAgIGNlbnRlciA9IGNlbnRlciB8fCBuZXcgUG9pbnQoMCwgMClcbiAgICByZXR1cm4gY2VudGVyLmFkZChuZXcgUG9pbnQobGVuZ3RoICogTWF0aC5jb3MoYW5nbGUpLCBsZW5ndGggKiBNYXRoLnNpbihhbmdsZSkpKVxuICB9LFxuICBhZGRQb2ludFRvQm91bmRQb2ludHM6IGZ1bmN0aW9uKGJvdW5kcG9pbnRzLCBwb2ludCwgaXNSaWdodCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IGJvdW5kcG9pbnRzLmZpbHRlcihmdW5jdGlvbihiUG9pbnQpIHtcbiAgICAgIHJldHVybiAgYlBvaW50LnkgPiBwb2ludC55IHx8IChpc1JpZ2h0ID8gYlBvaW50LnggPCBwb2ludC54IDogYlBvaW50LnggPiBwb2ludC54KVxuICAgIH0pXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlc3VsdC5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHBvaW50LnkgPCByZXN1bHRbaV0ueSkge1xuICAgICAgICByZXN1bHQuc3BsaWNlKGksIDAsIHBvaW50KVxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgICB9XG4gICAgfVxuICAgIHJlc3VsdC5wdXNoKHBvaW50KVxuICAgIHJldHVybiByZXN1bHRcbiAgfSxcbiAgZ2V0QW5nbGU6IGZ1bmN0aW9uKHAxLCBwMikge1xuICAgIGNvbnN0IGRpZmYgPSBwMi5zdWIocDEpXG4gICAgcmV0dXJuIHRoaXMubm9ybWFsaXplQW5nbGUoTWF0aC5hdGFuMihkaWZmLnksIGRpZmYueCkpXG4gIH0sXG4gIHRvUmFkaWFuOiBmdW5jdGlvbihhbmdsZSkge1xuICAgIHJldHVybiAoKGFuZ2xlICUgMzYwKSAqIE1hdGguUEkgLyAxODApXG4gIH0sXG4gIHRvRGVncmVlOiBmdW5jdGlvbihhbmdsZSkge1xuICAgIHJldHVybiAoYW5nbGUgKiAxODAgLyBNYXRoLlBJKSAlIDM2MFxuICB9LFxuICBib3VuZEFuZ2xlOiBmdW5jdGlvbihtaW4sIG1heCwgdmFsKSB7XG4gICAgbGV0IGRtaW4sIGRtYXhcbiAgICBpZiAobWluIDwgbWF4ICYmIHZhbCA+IG1pbiAmJiB2YWwgPCBtYXgpIHtcbiAgICAgIHJldHVybiB2YWxcbiAgICB9IGVsc2UgaWYgKG1heCA8IG1pbiAmJiAodmFsIDwgbWF4IHx8IHZhbCA+IG1pbikpIHtcbiAgICAgIHJldHVybiB2YWxcbiAgICB9IGVsc2Uge1xuICAgICAgZG1pbiA9IHRoaXMuZ2V0QW5nbGVEaWZmKG1pbiwgdmFsKVxuICAgICAgZG1heCA9IHRoaXMuZ2V0QW5nbGVEaWZmKG1heCwgdmFsKVxuICAgICAgaWYgKGRtaW4gPCBkbWF4KSB7XG4gICAgICAgIHJldHVybiBtaW5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBtYXhcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIGdldE5lYXJlc3RBbmdsZTogZnVuY3Rpb24oYXJyLCBhbmdsZSkge1xuICAgIGxldCBpLCB0ZW1wLCBkaWZmID0gTWF0aC5QSSAqIDIsIHZhbHVlXG4gICAgZm9yIChpID0gMDsgaSA8IGFyci5sZW5ndGg7aSsrKSB7XG4gICAgICB0ZW1wID0gR2VvbWV0cnkuZ2V0QW5nbGVEaWZmKGFycltpXSwgYW5nbGUpXG4gICAgICBpZiAoZGlmZiA8IHRlbXApIHtcbiAgICAgICAgZGlmZiA9IHRlbXBcbiAgICAgICAgdmFsdWUgPSBhcnJbaV1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlXG4gIH0sXG4gIGdldEFuZ2xlRGlmZjogZnVuY3Rpb24oYWxwaGEsIGJldGEpIHtcbiAgICBjb25zdCBtaW5BbmdsZSA9IE1hdGgubWluKGFscGhhLCBiZXRhKSxcbiAgICAgIG1heEFuZ2xlID0gIE1hdGgubWF4KGFscGhhLCBiZXRhKVxuICAgIHJldHVybiBNYXRoLm1pbihtYXhBbmdsZSAtIG1pbkFuZ2xlLCBtaW5BbmdsZSArIE1hdGguUEkqMiAtIG1heEFuZ2xlKVxuICB9LFxuICBub3JtYWxpemVBbmdsZTogZnVuY3Rpb24odmFsKSB7XG4gICAgd2hpbGUgKHZhbCA8IDApIHtcbiAgICAgIHZhbCArPSAyICogTWF0aC5QSVxuICAgIH1cbiAgICB3aGlsZSAodmFsID4gMiAqIE1hdGguUEkpIHtcbiAgICAgIHZhbCAtPSAyICogTWF0aC5QSVxuICAgIH1cbiAgICByZXR1cm4gdmFsXG4gIH1cbn1cblxuZXhwb3J0IHsgUG9pbnQsIFJlY3RhbmdsZSwgR2VvbWV0cnkgfVxuIiwiaW1wb3J0ICcuL2V4cGFuZG5hdGl2ZSdcbmltcG9ydCB7IFBvaW50LCBSZWN0YW5nbGUsIEdlb21ldHJ5IH0gZnJvbSAnLi9nZW9tZXRyeSdcbmltcG9ydCB7IERyYWdnYWJsZSB9IGZyb20gJy4vZHJhZ2dhYmxlJ1xuaW1wb3J0IHsgTGlzdCwgbGlzdEZhY3RvcnkgfSBmcm9tICcuL2xpc3QnXG5pbXBvcnQgeyB0YXJnZXRzLCBUYXJnZXQgfSBmcm9tICcuL3RhcmdldCdcbmltcG9ydCB7IHNjb3BlcywgZGVmYXVsdFNjb3BlLCBTY29wZSwgc2NvcGVGYWN0b3J5LCBzY29wZSB9IGZyb20gJy4vc2NvcGUnXG5pbXBvcnQgeyBwb3NpdGlvblR5cGUsIHNvcnRpbmdGYWN0b3J5LCBwb3NpdGlvbkZhY3RvcnkgIH0gZnJvbSAnLi9wb3NpdGlvbmluZydcbmltcG9ydCB7IGJvdW5kIH0gZnJvbSAnLi9ib3VuZCdcbmltcG9ydCB7IHNwaWRlcnMsIFNwaWRlciB9IGZyb20gJy4vc3BpZGVyJ1xuaW1wb3J0IHsgYXJjU2xpZGVycywgQXJjU2xpZGVyIH0gZnJvbSAnLi9hcmNzbGlkZXInXG5pbXBvcnQgeyBjaGFydHMsIENoYXJ0IH0gZnJvbSAnLi9jaGFydCdcbmltcG9ydCB7IGxpc3RTd2l0Y2hlckZhY3RvcnksIExpc3RTd2l0Y2hlciB9IGZyb20gJy4vbGlzdHN3aXRjaGVyJ1xuXG5leHBvcnQgeyBEcmFnZ2FibGUsXG4gIFBvaW50LCBSZWN0YW5nbGUsIEdlb21ldHJ5LFxuICBMaXN0LCBsaXN0RmFjdG9yeSxcbiAgdGFyZ2V0cywgVGFyZ2V0LFxuICBzY29wZXMsIGRlZmF1bHRTY29wZSwgU2NvcGUsIHNjb3BlRmFjdG9yeSwgc2NvcGUsXG4gIHBvc2l0aW9uVHlwZSwgc29ydGluZ0ZhY3RvcnksIHBvc2l0aW9uRmFjdG9yeSxcbiAgYm91bmQsXG4gIHNwaWRlcnMsIFNwaWRlcixcbiAgYXJjU2xpZGVycywgQXJjU2xpZGVyLFxuICBjaGFydHMsIENoYXJ0LFxuICBsaXN0U3dpdGNoZXJGYWN0b3J5LCBMaXN0U3dpdGNoZXJcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5jb25zdCBsaXN0cyA9IFtdXG5cbmltcG9ydCB1dGlsIGZyb20gJy4vdXRpbCdcbmltcG9ydCBFdmVudCBmcm9tICcuL2V2ZW50J1xuaW1wb3J0IHsgR2VvbWV0cnkgfSBmcm9tICcuL2dlb21ldHJ5J1xuaW1wb3J0IHsgYm91bmQgfSBmcm9tICcuL2JvdW5kJ1xuaW1wb3J0IHsgRHJhZ2dhYmxlLCBldmVudHMgfSBmcm9tICcuL2RyYWdnYWJsZSdcblxuY29uc3QgRHJhZ2VlID0geyB1dGlsLCBib3VuZCwgRHJhZ2dhYmxlLCBldmVudHMsIEV2ZW50IH0vL3RvZG8gcmVtb3ZlIGFmdGVyIHJlZmFjdG9yZVxuXG5mdW5jdGlvbiBMaXN0KGRyYWdnYWJsZXMsIG9wdGlvbnMpIHtcbiAgdGhpcy5vcHRpb25zID0ge1xuICAgIHRpbWVFbmQ6IDIwMCxcbiAgICB0aW1lRXhjYW5nZTogNDAwLFxuICAgIHJhZGl1czogMzAsXG4gICAgZ2V0RGlzdGFuY2U6IEdlb21ldHJ5LmdldERpc3RhbmNlLFxuICAgIGlzRGlzcGxhY2VtZW50OiBmYWxzZVxuICB9XG4gIGZvciAoY29uc3QgaSBpbiBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMuaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgIHRoaXMub3B0aW9uc1tpXSA9IG9wdGlvbnNbaV1cbiAgICB9XG4gIH1cbiAgdGhpcy5kcmFnZ2FibGVzID0gZHJhZ2dhYmxlc1xuICBsaXN0cy5wdXNoKHRoaXMpXG4gIHRoaXMub25DaGFuZ2UgPSBuZXcgRHJhZ2VlLkV2ZW50KHRoaXMpXG4gIGlmIChvcHRpb25zICYmIG9wdGlvbnMub25DaGFuZ2UpIHtcbiAgICB0aGlzLm9uQ2hhbmdlLmFkZChvcHRpb25zLm9uQ2hhbmdlKVxuICB9XG4gIHRoaXMuaW5pdCgpXG59XG5cbkxpc3QucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5fZW5hYmxlID0gdHJ1ZVxuICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCh0aGlzLmluaXREcmFnZ2FibGUsIHRoaXMpXG59XG5cbkxpc3QucHJvdG90eXBlLmluaXREcmFnZ2FibGUgPSBmdW5jdGlvbihkcmFnZ2FibGUpIHtcbiAgbGV0IG1vdmVIYW5kbGVyXG4gIGNvbnN0IHRoYXQgPSB0aGlzXG4gIGRyYWdnYWJsZS5lbmFibGUgPSB0aGlzLl9lbmFibGVcbiAgaWYgKHRoaXMub3B0aW9ucy5pc0Rpc3BsYWNlbWVudCkge1xuICAgIG1vdmVIYW5kbGVyID0gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAodGhpcy5pc0RyYWdlZSkge1xuICAgICAgICB0aGF0Lm9uU3RhcnQodGhpcylcbiAgICAgICAgZHJhZ2dhYmxlLm9uTW92ZS5yZW1vdmUobW92ZUhhbmRsZXIpXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgfVxuICAgIGRyYWdnYWJsZS5vbkVuZC5hZGQoZnVuY3Rpb24oKSB7XG4gICAgICB0aGF0Lm9uRW5kRGlzcGxheWNlbWVudCh0aGlzKVxuICAgICAgZHJhZ2dhYmxlLm9uTW92ZS5hZGQobW92ZUhhbmRsZXIpXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0pXG4gICAgZHJhZ2dhYmxlLm9uTW92ZS5hZGQobW92ZUhhbmRsZXIpXG4gIH0gZWxzZSB7XG4gICAgZHJhZ2dhYmxlLm9uRW5kLmFkZChmdW5jdGlvbigpIHtcbiAgICAgIHRoYXQub25FbmQodGhpcylcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSlcbiAgfVxufVxuXG5MaXN0LnByb3RvdHlwZS5tb3ZlT3JTYXZlID0gZnVuY3Rpb24oZHJhZ2dhYmxlLCBwb3NpdGlvbiwgdGltZSkge1xuICBpZiAoZHJhZ2dhYmxlLmlzRHJhZ2VlKSB7XG4gICAgZHJhZ2dhYmxlLmZpeFBvc2l0aW9uID0gcG9zaXRpb25cbiAgfSBlbHNlIHtcbiAgICBkcmFnZ2FibGUubW92ZShwb3NpdGlvbiwgdGltZSwgdHJ1ZSlcbiAgfVxufVxuXG5MaXN0LnByb3RvdHlwZS5vbkVuZCA9IGZ1bmN0aW9uKGRyYWdnYWJsZSkge1xuICBjb25zdCBmaXhQb3NpdGlvbnMgPSB0aGlzLmdldEN1cnJlbnRGaXhQb3NpdGlvbigpXG4gIGNvbnN0IGN1cnJlbnRJbmRleCA9IHRoaXMuZHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSlcbiAgY29uc3QgZXhjYW5nZUluZGV4ID0gR2VvbWV0cnkuaW5kZXhPZk5lYXJQb2ludChmaXhQb3NpdGlvbnMsIGRyYWdnYWJsZS5wb3NpdGlvbiwgdGhpcy5vcHRpb25zLnJhZGl1cywgdGhpcy5vcHRpb25zLmdldERpc3RhbmNlKVxuXG4gIGlmIChleGNhbmdlSW5kZXggPT09IC0xIHx8IGV4Y2FuZ2VJbmRleCA9PT0gY3VycmVudEluZGV4KSB7XG4gICAgZHJhZ2dhYmxlLm1vdmUoZHJhZ2dhYmxlLmZpeFBvc2l0aW9uLCB0aGlzLm9wdGlvbnMudGltZUVuZCwgdHJ1ZSlcbiAgfSBlbHNlIHtcbiAgICB0aGlzLm1vdmVPclNhdmUodGhpcy5kcmFnZ2FibGVzW2V4Y2FuZ2VJbmRleF0sIGZpeFBvc2l0aW9uc1tjdXJyZW50SW5kZXhdLCB0aGlzLm9wdGlvbnMudGltZUV4Y2FuZ2UpXG4gICAgdGhpcy5kcmFnZ2FibGVzW2N1cnJlbnRJbmRleF0ubW92ZShmaXhQb3NpdGlvbnNbZXhjYW5nZUluZGV4XSwgdGhpcy5vcHRpb25zLnRpbWVFbmQsIHRydWUpXG4gICAgdGhpcy5vbkNoYW5nZS5maXJlKClcbiAgfVxuICByZXR1cm4gdHJ1ZVxufVxuXG5MaXN0LnByb3RvdHlwZS5vbkVuZERpc3BsYXljZW1lbnQgPSBmdW5jdGlvbihkcmFnZ2FibGUpIHtcbiAgY29uc3Qgc29ydGVkRHJhZ2dhYmxlcyA9IHRoaXMuZ2V0U29ydGVkRHJhZ2dhYmxlcygpXG4gIGNvbnN0IGZpeFBvc2l0aW9ucyA9IHNvcnRlZERyYWdnYWJsZXMubWFwKGZ1bmN0aW9uKGRyYWdnYWJsZSkge1xuICAgIHJldHVybiBkcmFnZ2FibGUuZml4UG9zaXRpb25cbiAgfSlcblxuICBjb25zdCBjdXJyZW50SW5kZXggPSBzb3J0ZWREcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKVxuICBjb25zdCB0YXJnZXRJbmRleCA9IEdlb21ldHJ5LmluZGV4T2ZOZWFyUG9pbnQoZml4UG9zaXRpb25zLCBkcmFnZ2FibGUucG9zaXRpb24sIHRoaXMub3B0aW9ucy5yYWRpdXMsIHRoaXMub3B0aW9ucy5nZXREaXN0YW5jZSlcblxuICBpZiAodGFyZ2V0SW5kZXggIT09IC0xKSB7XG4gICAgaWYgKHRhcmdldEluZGV4IDwgY3VycmVudEluZGV4KSB7XG4gICAgICBmb3IgKGxldCBpPXRhcmdldEluZGV4OyBpPGN1cnJlbnRJbmRleDsgaSsrKSB7XG4gICAgICAgIHRoaXMubW92ZU9yU2F2ZShzb3J0ZWREcmFnZ2FibGVzW2ldLCBmaXhQb3NpdGlvbnNbaSsxXSwgdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGxldCBpPWN1cnJlbnRJbmRleDsgaTx0YXJnZXRJbmRleDsgaSsrKSB7XG4gICAgICAgIHRoaXMubW92ZU9yU2F2ZShzb3J0ZWREcmFnZ2FibGVzW2krMV0sIGZpeFBvc2l0aW9uc1tpXSwgdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlKVxuICAgICAgfVxuICAgIH1cbiAgICBkcmFnZ2FibGUubW92ZShmaXhQb3NpdGlvbnNbdGFyZ2V0SW5kZXhdLCB0aGlzLm9wdGlvbnMudGltZUVuZCwgdHJ1ZSlcbiAgfSBlbHNlIHtcbiAgICBkcmFnZ2FibGUubW92ZShkcmFnZ2FibGUuZml4UG9zaXRpb24sIHRoaXMub3B0aW9ucy50aW1lRW5kLCB0cnVlKVxuICB9XG59XG5cbkxpc3QucHJvdG90eXBlLm9uU3RhcnQgPSBmdW5jdGlvbihkcmFnZ2FibGUpIHtcbiAgbGV0IGlcbiAgY29uc3Qgc29ydGVkRHJhZ2dhYmxlcyA9IHRoaXMuZ2V0U29ydGVkRHJhZ2dhYmxlcygpXG4gIGNvbnN0IGZpeFBvc2l0aW9ucyA9IHNvcnRlZERyYWdnYWJsZXMubWFwKGZ1bmN0aW9uKGRyYWdnYWJsZSkge1xuICAgIHJldHVybiBkcmFnZ2FibGUuZml4UG9zaXRpb25cbiAgfSlcblxuICBjb25zdCBjdXJyZW50SW5kZXggPSBzb3J0ZWREcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKVxuICBmb3IgKGkgPSBjdXJyZW50SW5kZXggKyAxOyBpIDwgc29ydGVkRHJhZ2dhYmxlcy5sZW5ndGg7IGkrKykge1xuICAgIHRoaXMubW92ZU9yU2F2ZShzb3J0ZWREcmFnZ2FibGVzW2ldLCBmaXhQb3NpdGlvbnNbaSAtIDFdLCB0aGlzLm9wdGlvbnMudGltZUV4Y2FuZ2UpXG4gIH1cbiAgc29ydGVkRHJhZ2dhYmxlc1tjdXJyZW50SW5kZXhdLmZpeFBvc2l0aW9uID0gZml4UG9zaXRpb25zW2kgLSAxXVxufVxuXG5MaXN0LnByb3RvdHlwZS5nZXRDdXJyZW50Rml4UG9zaXRpb24gPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuZHJhZ2dhYmxlcy5tYXAoZnVuY3Rpb24oZHJhZ2dhYmxlKSB7XG4gICAgcmV0dXJuIGRyYWdnYWJsZS5maXhQb3NpdGlvbi5jbG9uZSgpXG4gIH0pXG59XG5cbkxpc3QucHJvdG90eXBlLmdldFNvcnRlZERyYWdnYWJsZXMgPSBmdW5jdGlvbigpIHtcbiAgY29uc3QgaW5pdFBvc2l0aW9ucyA9IHRoaXMuZHJhZ2dhYmxlcy5tYXAoZnVuY3Rpb24oZHJhZ2dhYmxlKSB7XG4gICAgcmV0dXJuIGRyYWdnYWJsZS5pbml0UG9zaXRpb25cbiAgfSlcblxuICBjb25zdCBzb3J0ZWREcmFnZ2FibGVzID0gaW5pdFBvc2l0aW9ucy5tYXAoZnVuY3Rpb24ocG9zaXRpb24pIHtcbiAgICByZXR1cm4gdGhpcy5kcmFnZ2FibGVzLmZpbHRlcihmdW5jdGlvbihkcmFnZ2FibGUpIHtcbiAgICAgIHJldHVybiBkcmFnZ2FibGUuZml4UG9zaXRpb24uY29tcGFyZShwb3NpdGlvbilcbiAgICB9LCB0aGlzKVswXVxuICB9LCB0aGlzKVxuXG4gIHJldHVybiBzb3J0ZWREcmFnZ2FibGVzXG59XG5cbkxpc3QucHJvdG90eXBlLnJlc2V0ID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKGZ1bmN0aW9uKGRyYWdnYWJsZSkge1xuICAgIGRyYWdnYWJsZS5tb3ZlKGRyYWdnYWJsZS5pbml0UG9zaXRpb24sIDAsIHRydWUsIGZhbHNlKVxuICB9KVxufVxuXG5MaXN0LnByb3RvdHlwZS5yZWZyZXNoID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKGZ1bmN0aW9uKGRyYWdnYWJsZSkge1xuICAgIGRyYWdnYWJsZS5yZWZyZXNoKClcbiAgfSlcbn1cblxuTGlzdC5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24oZHJhZ2dhYmxlcykge1xuICBpZiAoIShkcmFnZ2FibGVzIGluc3RhbmNlb2YgQXJyYXkpKSB7XG4gICAgZHJhZ2dhYmxlcyA9IFtkcmFnZ2FibGVzXVxuICB9XG4gIGRyYWdnYWJsZXMuZm9yRWFjaCh0aGlzLmluaXREcmFnZ2FibGUsIHRoaXMpXG4gIHRoaXMuZHJhZ2dhYmxlcyA9IHRoaXMuZHJhZ2dhYmxlcy5jb25jYXQoZHJhZ2dhYmxlcylcbn1cblxuTGlzdC5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24oZHJhZ2dhYmxlcykge1xuICBsZXQgalxuICBjb25zdCBpbml0UG9zaXRpb25zID0gdGhpcy5kcmFnZ2FibGVzLm1hcChmdW5jdGlvbihkcmFnZ2FibGUpIHtcbiAgICByZXR1cm4gZHJhZ2dhYmxlLmluaXRQb3NpdGlvblxuICB9KVxuICBjb25zdCBsaXN0ID0gW11cbiAgY29uc3Qgc29ydGVkRHJhZ2dhYmxlcyA9IHRoaXMuZ2V0U29ydGVkRHJhZ2dhYmxlcygpXG5cbiAgaWYgKCEoZHJhZ2dhYmxlcyBpbnN0YW5jZW9mIEFycmF5KSkge1xuICAgIGRyYWdnYWJsZXMgPSBbZHJhZ2dhYmxlc11cbiAgfVxuXG4gIGRyYWdnYWJsZXMuZm9yRWFjaChmdW5jdGlvbihkcmFnZ2FibGUpIHtcbiAgICBkcmFnZ2FibGUub25FbmQucmVzZXQoKVxuICAgIGRyYWdnYWJsZS5vbk1vdmUucmVzZXQoKS8vdG9kbyByZW1vdmUgcmVzZXQgaW4gZnV0dXJlXG4gICAgdGhpcy5kcmFnZ2FibGVzLnJlbW92ZUl0ZW0oZHJhZ2dhYmxlKVxuICAgIERyYWdlZS51dGlsLnJlbW92ZSh0aGlzLmRyYWdnYWJsZXMsIGRyYWdnYWJsZSlcbiAgfSwgdGhpcylcbiAgaiA9IDBcbiAgc29ydGVkRHJhZ2dhYmxlcy5mb3JFYWNoKGZ1bmN0aW9uKGRyYWdnYWJsZSkge1xuICAgIGlmICh0aGlzLmRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpICE9PSAtMSkge1xuICAgICAgaWYgKGRyYWdnYWJsZS5maXhQb3NpdGlvbiAhPT0gaW5pdFBvc2l0aW9uc1tqXSkge1xuICAgICAgICBkcmFnZ2FibGUubW92ZShpbml0UG9zaXRpb25zW2pdLCB0aGlzLm9wdGlvbnMudGltZUV4Y2FuZ2UsIHRydWUpXG4gICAgICB9XG4gICAgICBkcmFnZ2FibGUuaW5pdFBvc2l0aW9uID0gaW5pdFBvc2l0aW9uc1tqXVxuICAgICAgaisrXG4gICAgICBsaXN0LnB1c2goZHJhZ2dhYmxlKVxuICAgIH1cbiAgfSwgdGhpcylcbiAgdGhpcy5kcmFnZ2FibGVzID0gbGlzdFxufVxuXG5MaXN0LnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnJlbW92ZSh0aGlzLmRyYWdnYWJsZXMuc2xpY2UoKSlcbn1cblxuTGlzdC5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaChmdW5jdGlvbihkcmFnZ2FibGUpIHtcbiAgICBkcmFnZ2FibGUuZGVzdHJveSgpXG4gIH0pXG59XG5cbkxpc3QucHJvdG90eXBlLl9fZGVmaW5lR2V0dGVyX18oJ3Bvc2l0aW9ucycsIGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5nZXRDdXJyZW50Rml4UG9zaXRpb24oKVxufSlcblxuTGlzdC5wcm90b3R5cGUuX19kZWZpbmVTZXR0ZXJfXygncG9zaXRpb25zJywgZnVuY3Rpb24ocG9zaXRpb25zKSB7XG4gIGNvbnN0IG1lc3NhZ2UgPSAnd3JvbmcgYXJyYXkgbGVuZ3RoJ1xuICBpZiAocG9zaXRpb25zLmxlbmd0aCA9PT0gdGhpcy5kcmFnZ2FibGVzLmxlbmd0aCkge1xuICAgIHBvc2l0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uKHBvaW50LCBpKSB7XG4gICAgICB0aGlzLmRyYWdnYWJsZXNbaV0ubW92ZShwb2ludCwgMCwgdHJ1ZSwgdHJ1ZSlcbiAgICB9LCB0aGlzKVxuICB9IGVsc2Uge1xuICAgIHRocm93IG1lc3NhZ2VcbiAgfVxufSlcblxuTGlzdC5wcm90b3R5cGUuX19kZWZpbmVHZXR0ZXJfXygnZW5hYmxlJywgZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLl9lbmFibGVcbn0pXG5cbkxpc3QucHJvdG90eXBlLl9fZGVmaW5lU2V0dGVyX18oJ2VuYWJsZScsIGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHRoaXMuX2VuYWJsZSA9IHZhbHVlXG4gIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKGZ1bmN0aW9uKGRyYWdnYWJsZSkge1xuICAgIGRyYWdnYWJsZS5lbmFibGUgPSB2YWx1ZVxuICB9KVxufSlcblxuZnVuY3Rpb24gbGlzdEZhY3RvcnkocGFyZW50RWxlbWVudCwgZWxlbWVudHMsIG9wdGlvbnM9e30pIHtcbiAgY29uc3QgZHJhZ2dhYmxlT3B0aW9ucyA9IG9wdGlvbnMuZHJhZ2dhYmxlIHx8IHt9XG4gIGNvbnN0IGxpc3RPcHRpb25zID0gb3B0aW9ucy5saXN0IHx8IHt9XG4gIGRyYWdnYWJsZU9wdGlvbnMucGFyZW50ID0gZHJhZ2dhYmxlT3B0aW9ucy5wYXJlbnQgfHwgcGFyZW50RWxlbWVudFxuICBlbGVtZW50cyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGVsZW1lbnRzKVxuXG4gIGNvbnN0IGRyYWdnYWJsZXMgPSBlbGVtZW50cy5tYXAoZnVuY3Rpb24oZWxlbWVudCkge1xuICAgIHJldHVybiBuZXcgRHJhZ2VlLkRyYWdnYWJsZShlbGVtZW50LCBkcmFnZ2FibGVPcHRpb25zKVxuICB9KVxuXG4gIHJldHVybiBuZXcgTGlzdChkcmFnZ2FibGVzLCBsaXN0T3B0aW9ucylcbn1cblxuZXhwb3J0IHsgbGlzdHMsIExpc3QsIGxpc3RGYWN0b3J5IH1cbiIsIid1c2Ugc3RyaWN0J1xuXG5pbXBvcnQgeyBHZW9tZXRyeSwgUG9pbnQgfSBmcm9tICcuL2dlb21ldHJ5J1xuaW1wb3J0IHsgRHJhZ2dhYmxlIH0gZnJvbSAnLi9kcmFnZ2FibGUnXG5pbXBvcnQgeyBMaXN0IH0gZnJvbSAnLi9saXN0J1xuXG5jb25zdCBEcmFnZWUgPSB7IExpc3QsIERyYWdnYWJsZSB9IC8vdG9kbyByZW1vdmUgYWZ0ZXIgcmVmYWN0b3JlXG5cbmNvbnN0IGV4dGVuZCA9IGZ1bmN0aW9uKENoaWxkLCBQYXJlbnQpIHtcbiAgY29uc3QgRiA9IGZ1bmN0aW9uKCkgeyB9XG4gIEYucHJvdG90eXBlID0gUGFyZW50LnByb3RvdHlwZVxuICBDaGlsZC5wcm90b3R5cGUgPSBuZXcgRigpXG4gIENoaWxkLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IENoaWxkXG4gIENoaWxkLnN1cGVyY2xhc3MgPSBQYXJlbnQucHJvdG90eXBlXG59Ly90b2RvIHJlbW92ZSBhZnRlciByZWZhY29yZVxuXG5mdW5jdGlvbiBMaXN0U3dpdGNoZXIoZHJhZ2dhYmxlcywgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fVxuICBvcHRpb25zLnN0ZXBPbiA9IG9wdGlvbnMuc3RlcE9uIHx8IG5ldyBQb2ludCgtNTAsIDApXG4gIERyYWdlZS5MaXN0LmNhbGwodGhpcywgZHJhZ2dhYmxlcywgb3B0aW9ucylcbn1cblxuZXh0ZW5kKExpc3RTd2l0Y2hlciwgRHJhZ2VlLkxpc3QpXG5cbkxpc3RTd2l0Y2hlci5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uKCkge1xuICBjb25zdCB0aGF0ID0gdGhpc1xuICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaChmdW5jdGlvbihkcmFnZ2FibGUpIHtcbiAgICBkcmFnZ2FibGUuaXNPbiA9IGZhbHNlXG4gICAgZHJhZ2dhYmxlLm9uRW5kLmFkZChmdW5jdGlvbigpIHtcbiAgICAgIHRoYXQub25FbmQodGhpcylcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSlcbiAgfSlcbn1cblxuTGlzdFN3aXRjaGVyLnByb3RvdHlwZS5vbkVuZCA9IGZ1bmN0aW9uKGRyYWdnYWJsZSkge1xuICBjb25zdCBmaXhQb3NpdGlvbnMgPSB0aGlzLmdldEN1cnJlbnRGaXhQb3NpdGlvbldpdGhPZmYoKVxuICBjb25zdCBjdXJyZW50SW5kZXggPSB0aGlzLmRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpXG4gIGNvbnN0IGV4Y2FuZ2VJbmRleCA9IEdlb21ldHJ5LmluZGV4T2ZOZWFyUG9pbnQoZml4UG9zaXRpb25zLCBkcmFnZ2FibGUucG9zaXRpb24sIHRoaXMub3B0aW9ucy5yYWRpdXMsIHRoaXMub3B0aW9ucy5nZXREaXN0YW5jZSlcbiAgaWYgKGV4Y2FuZ2VJbmRleCA9PT0gLTEgfHwgZXhjYW5nZUluZGV4ID09PSBjdXJyZW50SW5kZXgpIHtcbiAgICB0aGlzLm1vdmVEcmFnZ2FibGUoY3VycmVudEluZGV4LCBkcmFnZ2FibGUucG9zaXRpb24sIGZpeFBvc2l0aW9uc1tjdXJyZW50SW5kZXhdLCB0aGlzLm9wdGlvbnMudGltZUVuZClcbiAgfSBlbHNlIHtcbiAgICBpZiAodGhpcy5kcmFnZ2FibGVzW2V4Y2FuZ2VJbmRleF0uaXNEcmFnZWUpIHtcbiAgICAgIHRoaXMuZml4VG9PZmYoZXhjYW5nZUluZGV4LCBmaXhQb3NpdGlvbnNbY3VycmVudEluZGV4XSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5tb3ZlRHJhZ2dhYmxlVG9PZmYoZXhjYW5nZUluZGV4LCBmaXhQb3NpdGlvbnNbY3VycmVudEluZGV4XSwgdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlKVxuICAgIH1cbiAgICB0aGlzLm1vdmVEcmFnZ2FibGUoY3VycmVudEluZGV4LCBkcmFnZ2FibGUucG9zaXRpb24sIGZpeFBvc2l0aW9uc1tleGNhbmdlSW5kZXhdLCB0aGlzLm9wdGlvbnMudGltZUVuZClcbiAgICB0aGlzLm9uQ2hhbmdlLmZpcmUoKVxuICB9XG4gIHJldHVybiB0cnVlXG59XG5cbkxpc3RTd2l0Y2hlci5wcm90b3R5cGUubW92ZURyYWdnYWJsZSA9IGZ1bmN0aW9uKGluZGV4LCBwb3NpdGlvbiwgZml4T2ZmUG9zaXRpb24sIHRpbWUpIHtcbiAgY29uc3QgcG9zaXRpb25zID0gW2ZpeE9mZlBvc2l0aW9uLCBmaXhPZmZQb3NpdGlvbi5hZGQodGhpcy5vcHRpb25zLnN0ZXBPbildLCBpc09uID0gR2VvbWV0cnkuaW5kZXhPZk5lYXJQb2ludChwb3NpdGlvbnMsIHBvc2l0aW9uLCAtMSwgR2VvbWV0cnkuZ2V0WERpZmZlcmVuY2UpXG4gIGlmICh0aGlzLmRyYWdnYWJsZXNbaW5kZXhdLmlzT24gIT09ICEhaXNPbikge1xuICAgIHRoaXMuZHJhZ2dhYmxlc1tpbmRleF0uaXNPbiA9ICEhaXNPblxuICAgIHRoaXMub25DaGFuZ2UuZmlyZSgpXG4gIH1cbiAgdGhpcy5kcmFnZ2FibGVzW2luZGV4XS5tb3ZlKHBvc2l0aW9uc1tpc09uXSwgdGltZSwgdHJ1ZSlcbn1cblxuTGlzdFN3aXRjaGVyLnByb3RvdHlwZS5maXhUb09mZiA9IGZ1bmN0aW9uKGluZGV4LCBmaXhPZmZQb3NpdGlvbikge1xuICB0aGlzLmRyYWdnYWJsZXNbaW5kZXhdLmlzT24gPSBmYWxzZVxuICB0aGlzLmRyYWdnYWJsZXNbaW5kZXhdLmZpeFBvc2l0aW9uID0gZml4T2ZmUG9zaXRpb25cbn1cblxuTGlzdFN3aXRjaGVyLnByb3RvdHlwZS5tb3ZlRHJhZ2dhYmxlVG9PZmYgPSBmdW5jdGlvbihpbmRleCwgZml4T2ZmUG9zaXRpb24sIHRpbWUpIHtcbiAgdGhpcy5kcmFnZ2FibGVzW2luZGV4XS5pc09uID0gZmFsc2VcbiAgdGhpcy5kcmFnZ2FibGVzW2luZGV4XS5tb3ZlKGZpeE9mZlBvc2l0aW9uLCB0aW1lLCB0cnVlKVxufVxuXG5MaXN0U3dpdGNoZXIucHJvdG90eXBlLmdldEN1cnJlbnRGaXhQb3NpdGlvbldpdGhPZmYgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuZHJhZ2dhYmxlcy5tYXAoZnVuY3Rpb24oZHJhZ2dhYmxlKSB7XG4gICAgcmV0dXJuIGRyYWdnYWJsZS5pc09uID8gZHJhZ2dhYmxlLmZpeFBvc2l0aW9uLnN1Yih0aGlzLm9wdGlvbnMuc3RlcE9uKSA6IGRyYWdnYWJsZS5maXhQb3NpdGlvbi5jbG9uZSgpXG4gIH0sIHRoaXMpXG59XG5cbkxpc3RTd2l0Y2hlci5wcm90b3R5cGUuZ2V0U29ydGVkRHJhZ2dhYmxlcyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5kcmFnZ2FibGVzLm1hcChcbiAgICAgIGZ1bmN0aW9uKGRyYWdnYWJsZSkge1xuICAgICAgICByZXR1cm4gZHJhZ2dhYmxlLmluaXRQb3NpdGlvblxuICAgICAgfSkubWFwKGZ1bmN0aW9uKHBvc2l0aW9uKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRyYWdnYWJsZXMuZmlsdGVyKGZ1bmN0aW9uKGRyYWdnYWJsZSkge1xuICAgICAgICAgIHJldHVybiBkcmFnZ2FibGUuZml4UG9zaXRpb24uY29tcGFyZShwb3NpdGlvbikgfHwgZHJhZ2dhYmxlLmZpeFBvc2l0aW9uLmNvbXBhcmUocG9zaXRpb24uYWRkKHRoaXMub3B0aW9ucy5zdGVwT24pKVxuICAgICAgICB9LCB0aGlzKVswXVxuICAgICAgfSwgdGhpcylcbn1cblxuTGlzdFN3aXRjaGVyLnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaChmdW5jdGlvbihkcmFnZ2FibGUpIHtcbiAgICBkcmFnZ2FibGUubW92ZShkcmFnZ2FibGUuaW5pdFBvc2l0aW9uLCAwLCB0cnVlLCBmYWxzZSlcbiAgICBkcmFnZ2FibGUuaXNPbiA9IGZhbHNlXG4gIH0pXG59XG5cbkxpc3RTd2l0Y2hlci5wcm90b3R5cGUuX19kZWZpbmVHZXR0ZXJfXygncG9zaXRpb25zJywgZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLmRyYWdnYWJsZXMubWFwKGZ1bmN0aW9uKGRyYWdnYWJsZSkge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gZHJhZ2dhYmxlLmZpeFBvc2l0aW9uLmNsb25lKClcbiAgICBwb3NpdGlvbi5pc09uID0gZHJhZ2dhYmxlLmlzT25cbiAgICByZXR1cm4gcG9zaXRpb25cbiAgfSlcbn0pXG5cbkxpc3RTd2l0Y2hlci5wcm90b3R5cGUuX19kZWZpbmVTZXR0ZXJfXygncG9zaXRpb25zJywgZnVuY3Rpb24ocG9zaXRpb25zKSB7XG4gIGNvbnN0IG1lc3NhZ2UgPSAnd3JvbmcgYXJyYXkgbGVuZ3RoJ1xuICBpZiAocG9zaXRpb25zLmxlbmd0aCA9PT0gdGhpcy5kcmFnZ2FibGVzLmxlbmd0aCkge1xuICAgIHBvc2l0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uKHBvaW50LCBpKSB7XG4gICAgICB0aGlzLmRyYWdnYWJsZXNbaV0uaXNPbiA9IHBvaW50LmlzT25cbiAgICAgIHRoaXMuZHJhZ2dhYmxlc1tpXS5tb3ZlKHBvaW50LCAwLCB0cnVlLCB0cnVlKVxuICAgIH0sIHRoaXMpXG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbWVzc2FnZVxuICB9XG59KVxuXG5mdW5jdGlvbiBsaXN0U3dpdGNoZXJGYWN0b3J5KGVsZW1lbnQsIGRyYWdnYWJsZUVsZW1lbnRzLCBvcHRpb25zPXt9KSB7XG4gIGNvbnN0IGRyYWdnYWJsZU9wdGlvbnMgPSBvcHRpb25zLmRyYWdnYWJsZSB8fCB7fVxuICBjb25zdCBsaXN0T3B0aW9ucyA9IG9wdGlvbnMubGlzdCB8fCB7fVxuXG4gIGRyYWdnYWJsZU9wdGlvbnMucGFyZW50ID0gZHJhZ2dhYmxlT3B0aW9ucy5wYXJlbnQgfHwgZWxlbWVudFxuICBkcmFnZ2FibGVFbGVtZW50cyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGRyYWdnYWJsZUVsZW1lbnRzKVxuXG4gIGNvbnN0IGRyYWdnYWJsZXMgPSBkcmFnZ2FibGVFbGVtZW50cy5tYXAoZnVuY3Rpb24oZWxlbWVudCkge1xuICAgIHJldHVybiBuZXcgRHJhZ2VlLkRyYWdnYWJsZShlbGVtZW50LCBkcmFnZ2FibGVPcHRpb25zKVxuICB9KVxuICByZXR1cm4gbmV3IExpc3RTd2l0Y2hlcihkcmFnZ2FibGVzLCBsaXN0T3B0aW9ucylcbn1cblxuZXhwb3J0IHsgbGlzdFN3aXRjaGVyRmFjdG9yeSwgTGlzdFN3aXRjaGVyIH1cbiIsIid1c2Ugc3RyaWN0J1xuaW1wb3J0IHsgR2VvbWV0cnksIFBvaW50IH0gZnJvbSAnLi9nZW9tZXRyeSdcblxuY29uc3QgcG9zaXRpb25UeXBlID0ge1xuICBub3RDcm9zc2luZzogMCxcbiAgZmxvYXRMZWZ0OiAxLFxuICBmbG9hdFJpZ2h0OiAyXG59XG5cbmZ1bmN0aW9uIHBvc2l0aW9uRmFjdG9yeSh0eXBlKSB7XG4gIHN3aXRjaCAodHlwZSkge1xuICBjYXNlIHBvc2l0aW9uVHlwZS5ub3RDcm9zc2luZzpcbiAgICByZXR1cm4gZnVuY3Rpb24ocmVjdGFuZ2xlLCBfb3B0aW9ucykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKHJlY3RhbmdsZUxpc3QsIGluZGV4ZXNPZk5ld3MpIHtcbiAgICAgICAgY29uc3QgYm91bmRSZWN0ID0gdHlwZW9mIHJlY3RhbmdsZSA9PT0gJ2Z1bmN0aW9uJyA/IHJlY3RhbmdsZSgpIDogcmVjdGFuZ2xlLFxuICAgICAgICAgIHN0YXRpY1JlY3RhbmdsZUluZGV4ZXMgPSByZWN0YW5nbGVMaXN0LnJlZHVjZShmdW5jdGlvbihpbmRleGVzLCBfcmVjdCwgaW5kZXgpIHtcbiAgICAgICAgICAgIGlmIChpbmRleGVzT2ZOZXdzLmluZGV4T2YoaW5kZXgpID09PSAtMSkge1xuICAgICAgICAgICAgICBpbmRleGVzLnB1c2goaW5kZXgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gaW5kZXhlc1xuICAgICAgICAgIH0sIFtdKVxuXG4gICAgICAgIGluZGV4ZXNPZk5ld3MuZm9yRWFjaChmdW5jdGlvbihpbmRleCkge1xuICAgICAgICAgIGxldCByZWN0ID0gcmVjdGFuZ2xlTGlzdFtpbmRleF0sIHJlbW92YWJsZSA9IGZhbHNlXG4gICAgICAgICAgc3RhdGljUmVjdGFuZ2xlSW5kZXhlcy5mb3JFYWNoKGZ1bmN0aW9uKGluZGV4T2ZTdGF0aWMpIHtcbiAgICAgICAgICAgIGNvbnN0IHN0YXRpY1JlY3QgPSByZWN0YW5nbGVMaXN0W2luZGV4T2ZTdGF0aWNdXG4gICAgICAgICAgICByZWN0ID0gc3RhdGljUmVjdC5tb3ZlVG9Cb3VuZChyZWN0KVxuICAgICAgICAgIH0pXG4gICAgICAgICAgcmVtb3ZhYmxlID0gc3RhdGljUmVjdGFuZ2xlSW5kZXhlcy5zb21lKGZ1bmN0aW9uKGluZGV4T2ZTdGF0aWMpIHtcbiAgICAgICAgICAgIGNvbnN0IHN0YXRpY1JlY3QgPSByZWN0YW5nbGVMaXN0W2luZGV4T2ZTdGF0aWNdXG4gICAgICAgICAgICByZXR1cm4gICEhc3RhdGljUmVjdC5hbmQocmVjdClcbiAgICAgICAgICB9KSB8fCByZWN0LmFuZChib3VuZFJlY3QpLmdldFNxdWFyZSgpICE9PSByZWN0LmdldFNxdWFyZSgpXG4gICAgICAgICAgaWYgKHJlbW92YWJsZSkge1xuICAgICAgICAgICAgcmVjdC5yZW1vdmFibGUgPSB0cnVlXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN0YXRpY1JlY3RhbmdsZUluZGV4ZXMucHVzaChpbmRleClcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiByZWN0YW5nbGVMaXN0XG4gICAgICB9XG4gICAgfVxuICBjYXNlIHBvc2l0aW9uVHlwZS5mbG9hdExlZnQ6XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHJlY3RhbmdsZSwgb3B0aW9ucykge1xuICAgICAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgICBwYWRkaW5nVG9wTGVmdDogbmV3IFBvaW50KDAsIDApLFxuICAgICAgICBwYWRkaW5nQm90dG9tUmlnaHQ6IG5ldyBQb2ludCgwLCAwKSxcbiAgICAgICAgeUdhcEJldHdlZW5EcmFnZ2FibGVzOiAwLFxuICAgICAgICByZW1vdmFibGU6IHRydWVcbiAgICAgIH0sIG9wdGlvbnMpXG5cbiAgICAgIHJldHVybiBmdW5jdGlvbihyZWN0YW5nbGVMaXN0LCBfaW5kZXhlc09mTmV3cykge1xuICAgICAgICBjb25zdCBib3VuZFJlY3QgPSB0eXBlb2YgcmVjdGFuZ2xlID09PSAnZnVuY3Rpb24nID8gcmVjdGFuZ2xlKCkgOiByZWN0YW5nbGVcbiAgICAgICAgY29uc3QgcmVjdFAyID0gYm91bmRSZWN0LmdldFAyKClcbiAgICAgICAgbGV0IGJvdW5kYXJ5UG9pbnRzID0gW2JvdW5kUmVjdC5wb3NpdGlvbl1cbiAgICAgICAgcmVjdGFuZ2xlTGlzdC5mb3JFYWNoKGZ1bmN0aW9uKHJlY3QpIHtcbiAgICAgICAgICBsZXQgcG9zaXRpb24sIGlzVmFsaWQgPSBmYWxzZVxuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm91bmRhcnlQb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHBvc2l0aW9uID0gKG5ldyBQb2ludChib3VuZGFyeVBvaW50c1tpXS54LCBpID4gMCA/IChib3VuZGFyeVBvaW50c1tpIC0gMV0ueSArIG9wdGlvbnMueUdhcEJldHdlZW5EcmFnZ2FibGVzKSA6IGJvdW5kUmVjdC5wb3NpdGlvbi55KSkuYWRkKG9wdGlvbnMucGFkZGluZ1RvcExlZnQpXG4gICAgICAgICAgICBpc1ZhbGlkID0gKHBvc2l0aW9uLnggKyByZWN0LnNpemUueCA8IHJlY3RQMi54KVxuICAgICAgICAgICAgaWYgKGlzVmFsaWQpIHtcbiAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFpc1ZhbGlkKSB7XG4gICAgICAgICAgICBwb3NpdGlvbiA9IChuZXcgUG9pbnQoYm91bmRSZWN0LnBvc2l0aW9uLngsIGJvdW5kYXJ5UG9pbnRzW2JvdW5kYXJ5UG9pbnRzLmxlbmd0aCAtIDFdLnkgKyBvcHRpb25zLnlHYXBCZXR3ZWVuRHJhZ2dhYmxlcykpLmFkZChvcHRpb25zLnBhZGRpbmdUb3BMZWZ0KVxuICAgICAgICAgIH1cbiAgICAgICAgICByZWN0LnBvc2l0aW9uID0gcG9zaXRpb25cbiAgICAgICAgICBpZiAob3B0aW9ucy5yZW1vdmFibGUgJiYgcmVjdC5nZXRQMygpLnkgPiBib3VuZFJlY3QuZ2V0UDMoKS55KSB7XG4gICAgICAgICAgICByZWN0LnJlbW92YWJsZSA9IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgICAgYm91bmRhcnlQb2ludHMgPSBHZW9tZXRyeS5hZGRQb2ludFRvQm91bmRQb2ludHMoYm91bmRhcnlQb2ludHMsIHJlY3QuZ2V0UDMoKS5hZGQob3B0aW9ucy5wYWRkaW5nQm90dG9tUmlnaHQpKVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gcmVjdGFuZ2xlTGlzdFxuICAgICAgfVxuICAgIH1cbiAgY2FzZSBwb3NpdGlvblR5cGUuZmxvYXRSaWdodDpcbiAgICByZXR1cm4gZnVuY3Rpb24ocmVjdGFuZ2xlLCBvcHRpb25zKSB7XG4gICAgICBvcHRpb25zID0gT2JqZWN0LmFzc2luZyh7XG4gICAgICAgIHBhZGRpbmdUb3BSaWdodDogbmV3IFBvaW50KDUsIDUpLFxuICAgICAgICBwYWRkaW5nQm90dG9tTGVmdDogbmV3IFBvaW50KDAsIDApLFxuICAgICAgICByZW1vdmFibGU6IHRydWVcbiAgICAgIH0sIG9wdGlvbnMpXG5cbiAgICAgIGNvbnN0IHBhZGRpbmdUb3BOZWdSaWdodCA9IG5ldyBQb2ludCgtb3B0aW9ucy5wYWRkaW5nVG9wUmlnaHQueCwgb3B0aW9ucy5wYWRkaW5nVG9wUmlnaHQueSlcbiAgICAgIGNvbnN0IHBhZGRpbmdCb3R0b21OZWdMZWZ0ID0gbmV3IFBvaW50KC1vcHRpb25zLnBhZGRpbmdCb3R0b21MZWZ0LngsIG9wdGlvbnMucGFkZGluZ0JvdHRvbUxlZnQueSlcbiAgICAgIHJldHVybiBmdW5jdGlvbihyZWN0YW5nbGVMaXN0LCBfaW5kZXhlc09mTmV3cykge1xuICAgICAgICBjb25zdCBib3VuZFJlY3QgPSB0eXBlb2YgcmVjdGFuZ2xlID09PSAnZnVuY3Rpb24nID8gcmVjdGFuZ2xlKCkgOiByZWN0YW5nbGVcbiAgICAgICAgbGV0IGJvdW5kYXJ5UG9pbnRzID0gW2JvdW5kUmVjdC5nZXRSaWdodFRvcFBvaW50KCldXG4gICAgICAgIHJlY3RhbmdsZUxpc3QuZm9yRWFjaChmdW5jdGlvbihyZWN0LCBfaW5kZXgpIHtcbiAgICAgICAgICBsZXQgcG9zaXRpb24sIGlzVmFsaWQgPSBmYWxzZVxuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm91bmRhcnlQb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHBvc2l0aW9uID0gKG5ldyBQb2ludChib3VuZGFyeVBvaW50c1tpXS54IC0gcmVjdC5zaXplLngsIGkgPiAwID8gYm91bmRhcnlQb2ludHNbaSAtIDFdLnkgOiBib3VuZFJlY3QucG9zaXRpb24ueSkpLmFkZChwYWRkaW5nVG9wTmVnUmlnaHQpXG4gICAgICAgICAgICBpc1ZhbGlkID0gKHBvc2l0aW9uLnggPiByZWN0LnBvc2l0aW9uLngpXG4gICAgICAgICAgICBpZiAoaXNWYWxpZCkge1xuICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIWlzVmFsaWQpIHtcbiAgICAgICAgICAgIHBvc2l0aW9uID0gbmV3IFBvaW50KGJvdW5kUmVjdC5nZXRQMigpLngsIGJvdW5kYXJ5UG9pbnRzW2JvdW5kYXJ5UG9pbnRzLmxlbmd0aCAtIDFdLnkpXG4gICAgICAgICAgfVxuICAgICAgICAgIHJlY3QucG9zaXRpb24gPSBwb3NpdGlvblxuICAgICAgICAgIGlmIChvcHRpb25zLnJlbW92YWJsZSAmJiByZWN0LmdldExlZnRCb3R0b21Qb2ludCgpLnkgPiBib3VuZFJlY3QuZ2V0UDQoKS55KSB7XG4gICAgICAgICAgICByZWN0LnJlbW92YWJsZSA9IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgICAgYm91bmRhcnlQb2ludHMgPSBHZW9tZXRyeS5hZGRQb2ludFRvQm91bmRQb2ludHMoYm91bmRhcnlQb2ludHMsIHJlY3QuZ2V0UDQoKS5hZGQocGFkZGluZ0JvdHRvbU5lZ0xlZnQpLCB0cnVlKVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gcmVjdGFuZ2xlTGlzdFxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBzb3J0aW5nRmFjdG9yeSh0eXBlKSB7XG4gIHN3aXRjaCAodHlwZSkge1xuICBjYXNlIHBvc2l0aW9uVHlwZS5ub3RDcm9zc2luZzpcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24ob2xkT2Jqc0xpc3QsIG5ld09ianMsIGluZGV4T2ZOZXdzKSB7XG4gICAgICAgIGNvbnN0IG9ianNMaXN0ID0gb2xkT2Jqc0xpc3QuY29uY2F0KG5ld09ianMpXG4gICAgICAgIG5ld09ianMuZm9yRWFjaChmdW5jdGlvbihvYmopIHtcbiAgICAgICAgICBpbmRleE9mTmV3cy5wdXNoKG9ianNMaXN0LmluZGV4T2Yob2JqKSlcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIG9ianNMaXN0XG4gICAgICB9XG4gICAgfVxuICBjYXNlIHBvc2l0aW9uVHlwZS5mbG9hdExlZnQ6XG4gIGNhc2UgcG9zaXRpb25UeXBlLmZsb2F0UmlnaHQ6XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHJhZGl1cywgZ2V0RGlzdGFuY2UsIG9wdGlvbnMpIHtcbiAgICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgZ2V0UG9zaXRpb246IGZ1bmN0aW9uKG9iaikge1xuICAgICAgICAgIHJldHVybiBvYmoucG9zaXRpb25cbiAgICAgICAgfVxuICAgICAgfSwgb3B0aW9ucylcblxuICAgICAgcmV0dXJuIGZ1bmN0aW9uKG9sZE9ianNMaXN0LCBuZXdPYmpzLCBpbmRleE9mTmV3cykge1xuICAgICAgICBjb25zdCBuZXdMaXN0ID0gb2xkT2Jqc0xpc3QuY29uY2F0KClcbiAgICAgICAgY29uc3QgbGlzdE9sZFBvc2l0aW9uID0gb2xkT2Jqc0xpc3QubWFwKG9wdGlvbnMuZ2V0UG9zaXRpb24pXG4gICAgICAgIG5ld09ianMuZm9yRWFjaChmdW5jdGlvbihuZXdPYmopIHtcbiAgICAgICAgICBsZXQgaW5kZXggPSBHZW9tZXRyeS5pbmRleE9mTmVhclBvaW50KGxpc3RPbGRQb3NpdGlvbiwgb3B0aW9ucy5nZXRQb3NpdGlvbihuZXdPYmopLCByYWRpdXMsIGdldERpc3RhbmNlKVxuICAgICAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgIGluZGV4ID0gbmV3TGlzdC5sZW5ndGhcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaW5kZXggPSBuZXdMaXN0LmluZGV4T2Yob2xkT2Jqc0xpc3RbaW5kZXhdKVxuICAgICAgICAgIH1cbiAgICAgICAgICBuZXdMaXN0LnNwbGljZShpbmRleCwgMCwgbmV3T2JqKVxuICAgICAgICB9KVxuICAgICAgICBuZXdPYmpzLmZvckVhY2goZnVuY3Rpb24obmV3T2JqKSB7XG4gICAgICAgICAgaW5kZXhPZk5ld3MucHVzaChuZXdMaXN0LmluZGV4T2YobmV3T2JqKSlcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIG5ld0xpc3RcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IHsgcG9zaXRpb25UeXBlLCBzb3J0aW5nRmFjdG9yeSwgcG9zaXRpb25GYWN0b3J5IH1cbiIsImltcG9ydCB1dGlsIGZyb20gJy4vdXRpbCdcbmltcG9ydCBFdmVudCBmcm9tICcuL2V2ZW50J1xuaW1wb3J0IHsgRHJhZ2dhYmxlIH0gZnJvbSAnLi9kcmFnZ2FibGUnXG5pbXBvcnQgeyBUYXJnZXQgfSBmcm9tICcuL3RhcmdldCdcblxuY29uc3QgRHJhZ2VlID0geyB1dGlsLCBEcmFnZ2FibGUsICBUYXJnZXQsIEV2ZW50IH0vL3RvZG8gcmVtb3ZlIGFmdGVyIHJlZmFjdG9yZVxuXG5jb25zdCBzY29wZXMgPSBbXVxuXG5mdW5jdGlvbiBTY29wZShkcmFnZ2FibGVzLCB0YXJnZXRzLCBvcHRpb25zKSB7XG4gIHNjb3Blcy5mb3JFYWNoKGZ1bmN0aW9uKHNjb3BlKSB7XG4gICAgaWYgKGRyYWdnYWJsZXMpIHtcbiAgICAgIGRyYWdnYWJsZXMuZm9yRWFjaChmdW5jdGlvbihkcmFnZ2FibGUpIHtcbiAgICAgICAgc2NvcGUuZHJhZ2dhYmxlcy5yZW1vdmVJdGVtKGRyYWdnYWJsZSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgaWYgKHRhcmdldHMpIHtcbiAgICAgIHRhcmdldHMuZm9yRWFjaChmdW5jdGlvbih0YXJnZXQpIHtcbiAgICAgICAgc2NvcGUudGFyZ2V0cy5yZW1vdmVJdGVtKHRhcmdldClcbiAgICAgIH0pXG4gICAgfVxuICB9KVxuXG4gIHRoaXMuZHJhZ2dhYmxlcyA9IGRyYWdnYWJsZXMgfHwgW11cbiAgdGhpcy50YXJnZXRzID0gdGFyZ2V0cyB8fCBbXVxuICBzY29wZXMucHVzaCh0aGlzKVxuICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgdGltZUVuZDogKG9wdGlvbnMgJiYgb3B0aW9ucy50aW1lRW5kKSB8fCA0MDBcbiAgfVxuXG4gIHRoaXMub25DaGFuZ2UgPSBuZXcgRHJhZ2VlLkV2ZW50KHRoaXMpXG4gIGlmIChvcHRpb25zICYmIG9wdGlvbnMub25DaGFuZ2UpIHtcbiAgICB0aGlzLm9uQ2hhbmdlLmFkZChvcHRpb25zLm9uQ2hhbmdlKVxuICB9XG4gIHRoaXMuaW5pdCgpXG59XG5cblNjb3BlLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24oKSB7XG4gIGNvbnN0IHRoYXQgPSB0aGlzXG4gIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKGZ1bmN0aW9uKGRyYWdnYWJsZSkge1xuICAgIGRyYWdnYWJsZS5vbkVuZC5hZGQoZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhhdC5vbkVuZCh0aGlzKVxuICAgIH0pXG4gIH0pXG59XG5cblNjb3BlLnByb3RvdHlwZS5hZGREcmFnZ2FibGUgPSBmdW5jdGlvbihkcmFnZ2FibGUpIHtcbiAgY29uc3QgdGhhdCA9IHRoaXNcblxuICB0aGlzLmRyYWdnYWJsZXMucHVzaChkcmFnZ2FibGUpXG4gIGRyYWdnYWJsZS5vbkVuZC51bnNoaWZ0KGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGF0Lm9uRW5kKHRoaXMpXG4gIH0pXG59XG5cblNjb3BlLnByb3RvdHlwZS5hZGRUYXJnZXQgPSBmdW5jdGlvbih0YXJnZXQpIHtcbiAgdGhpcy50YXJnZXRzLnB1c2godGFyZ2V0KVxufVxuXG5TY29wZS5wcm90b3R5cGUub25FbmQgPSBmdW5jdGlvbihkcmFnZ2FibGUpIHtcbiAgY29uc3Qgc2hvdFRhcmdldHMgPSB0aGlzLnRhcmdldHMuZmlsdGVyKGZ1bmN0aW9uKHRhcmdldCkge1xuICAgIHJldHVybiB0YXJnZXQuZHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSkgIT09IC0xXG4gIH0pLmZpbHRlcihmdW5jdGlvbih0YXJnZXQpIHtcbiAgICByZXR1cm4gdGFyZ2V0LmNhdGNoRHJhZ2dhYmxlKGRyYWdnYWJsZSlcbiAgfSkuc29ydChmdW5jdGlvbihhLCBiKSB7XG4gICAgcmV0dXJuIGEuZ2V0UmVjdGFuZ2xlKCkuZ2V0U3F1YXJlKCkgLSBiLmdldFJlY3RhbmdsZSgpLmdldFNxdWFyZSgpXG4gIH0pXG5cbiAgaWYgKHNob3RUYXJnZXRzLmxlbmd0aCkge1xuICAgIHNob3RUYXJnZXRzWzBdLm9uRW5kKGRyYWdnYWJsZSlcbiAgfSBlbHNlIGlmIChkcmFnZ2FibGUudGFyZ2V0cy5sZW5ndGgpIHtcbiAgICBkcmFnZ2FibGUubW92ZShkcmFnZ2FibGUuaW5pdFBvc2l0aW9uLCB0aGlzLm9wdGlvbnMudGltZUVuZCwgdHJ1ZSwgdHJ1ZSlcbiAgfVxuICB0aGlzLm9uQ2hhbmdlLmZpcmUoKVxuICByZXR1cm4gdHJ1ZVxufVxuXG5TY29wZS5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy50YXJnZXRzLmZvckVhY2goZnVuY3Rpb24odGFyZ2V0KSB7XG4gICAgdGFyZ2V0LnJlc2V0KClcbiAgfSlcbn1cblxuU2NvcGUucHJvdG90eXBlLnJlZnJlc2ggPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goZnVuY3Rpb24oZHJhZ2dhYmxlKSB7XG4gICAgZHJhZ2dhYmxlLnJlZnJlc2goKVxuICB9KVxuICB0aGlzLnRhcmdldHMuZm9yRWFjaChmdW5jdGlvbih0YXJnZXQpIHtcbiAgICB0YXJnZXQucmVmcmVzaCgpXG4gIH0pXG59XG5cblNjb3BlLnByb3RvdHlwZS5fX2RlZmluZUdldHRlcl9fKCdwb3NpdGlvbnMnLCBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMudGFyZ2V0cy5tYXAoZnVuY3Rpb24odGFyZ2V0KSB7XG4gICAgcmV0dXJuIHRhcmdldC5pbm5lckRyYWdnYWJsZXMubWFwKGZ1bmN0aW9uKGRyYWdnYWJsZSkge1xuICAgICAgcmV0dXJuIHRoaXMuZHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSlcbiAgICB9LCB0aGlzKVxuICB9LCB0aGlzKVxufSlcblxuU2NvcGUucHJvdG90eXBlLl9fZGVmaW5lU2V0dGVyX18oJ3Bvc2l0aW9ucycsIGZ1bmN0aW9uKHBvc2l0aW9ucykge1xuICBjb25zdCBtZXNzYWdlID0gJ3dyb25nIGFycmF5IGxlbmd0aCdcbiAgaWYgKHBvc2l0aW9ucy5sZW5ndGggPT09IHRoaXMudGFyZ2V0cy5sZW5ndGgpIHtcbiAgICB0aGlzLnRhcmdldHMuZm9yRWFjaChmdW5jdGlvbih0YXJnZXQpIHtcbiAgICAgIHRhcmdldC5yZXNldCgpXG4gICAgfSwgdGhpcylcbiAgICBwb3NpdGlvbnMuZm9yRWFjaChmdW5jdGlvbih0YXJnZXRJbmRleGVzLCBpKSB7XG4gICAgICB0YXJnZXRJbmRleGVzLmZvckVhY2goZnVuY3Rpb24oaW5kZXgpIHtcbiAgICAgICAgdGhpcy50YXJnZXRzW2ldLmFkZCh0aGlzLmRyYWdnYWJsZXNbaW5kZXhdKVxuICAgICAgfSwgdGhpcylcbiAgICB9LCB0aGlzKVxuICB9IGVsc2Uge1xuICAgIHRocm93IG1lc3NhZ2VcbiAgfVxufSlcblxuY29uc3QgZGVmYXVsdFNjb3BlID0gbmV3IFNjb3BlKClcblxuZnVuY3Rpb24gc2NvcGUoZm4pIHtcbiAgY29uc3QgY3VycmVudFNjb3BlID0gbmV3IFNjb3BlKCksXG4gICAgYWRkRHJhZ2dhYmxlVG9TY29wZSA9IGZ1bmN0aW9uKGRyYWdnYWJsZSkge1xuICAgICAgY3VycmVudFNjb3BlLmFkZERyYWdnYWJsZShkcmFnZ2FibGUpXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0sXG4gICAgYWRkVGFyZ2V0VG9TY29wZSA9IGZ1bmN0aW9uKHRhcmdldCkge1xuICAgICAgY3VycmVudFNjb3BlLmFkZFRhcmdldCh0YXJnZXQpXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICBEcmFnZ2FibGUub25DcmVhdGUuYWRkKGFkZERyYWdnYWJsZVRvU2NvcGUpXG4gIFRhcmdldC5vbkNyZWF0ZS5hZGQoYWRkVGFyZ2V0VG9TY29wZSlcbiAgZm4uY2FsbCgpXG4gIERyYWdnYWJsZS5vbkNyZWF0ZS5yZW1vdmUoYWRkRHJhZ2dhYmxlVG9TY29wZSlcbiAgVGFyZ2V0Lm9uQ3JlYXRlLnJlbW92ZShhZGRUYXJnZXRUb1Njb3BlKVxuICByZXR1cm4gY3VycmVudFNjb3BlXG59XG5cbmZ1bmN0aW9uIHNjb3BlRmFjdG9yeShwYXJlbnRFbGVtZW50LCBkcmFnZ2FibGVFbGVtZW50cywgdGFyZ2V0RWxlbWVudHMsIG9wdGlvbnM9e30pIHtcbiAgY29uc3QgZHJhZ2dhYmxlT3B0aW9ucyA9IG9wdGlvbnMuZHJhZ2dhYmxlIHx8IHt9XG4gIGNvbnN0IHRhcmdldE9wdGlvbnMgPSBvcHRpb25zLnRhcmdldCB8fCB7fVxuICBjb25zdCBzY29wZU9wdGlvbnMgPSBvcHRpb25zLnNjb3BlIHx8IHt9XG4gIGRyYWdnYWJsZU9wdGlvbnMucGFyZW50ID0gZHJhZ2dhYmxlT3B0aW9ucy5wYXJlbnQgfHwgcGFyZW50RWxlbWVudFxuICB0YXJnZXRPcHRpb25zLnBhcmVudCA9IHRhcmdldE9wdGlvbnMucGFyZW50IHx8IHBhcmVudEVsZW1lbnRcbiAgZHJhZ2dhYmxlRWxlbWVudHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChkcmFnZ2FibGVFbGVtZW50cylcbiAgdGFyZ2V0RWxlbWVudHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCh0YXJnZXRFbGVtZW50cylcblxuICBjb25zdCBkcmFnZ2FibGVzID0gZHJhZ2dhYmxlRWxlbWVudHMubWFwKGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gbmV3IERyYWdlZS5EcmFnZ2FibGUoZWxlbWVudCwgZHJhZ2dhYmxlT3B0aW9ucylcbiAgfSlcblxuICBjb25zdCB0YXJnZXRzID0gdGFyZ2V0RWxlbWVudHMubWFwKGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gbmV3IERyYWdlZS5UYXJnZXQoZWxlbWVudCwgZHJhZ2dhYmxlcywgdGFyZ2V0T3B0aW9ucylcbiAgfSlcbiAgcmV0dXJuIG5ldyBTY29wZShkcmFnZ2FibGVzLCB0YXJnZXRzLCBzY29wZU9wdGlvbnMpXG59XG5cbmV4cG9ydCB7IHNjb3BlcywgZGVmYXVsdFNjb3BlLCBTY29wZSwgc2NvcGVGYWN0b3J5LCBzY29wZSB9XG4iLCIndXNlIHN0cmljdCdcblxuaW1wb3J0IHV0aWwgZnJvbSAnLi91dGlsJ1xuaW1wb3J0IHsgR2VvbWV0cnkgfSBmcm9tICcuL2dlb21ldHJ5J1xuaW1wb3J0IHsgYm91bmQgfSBmcm9tICcuL2JvdW5kJ1xuaW1wb3J0IHsgRHJhZ2dhYmxlIH0gZnJvbSAnLi9kcmFnZ2FibGUnXG5cbmNvbnN0IERyYWdlZSA9IHsgdXRpbCwgYm91bmQsIERyYWdnYWJsZSB9XG5jb25zdCBzcGlkZXJzID0gW11cblxuZnVuY3Rpb24gU3BpZGVyKGFyZWEsIGVsZW1lbnRzLCBvcHRpb25zPXt9KSB7XG4gIGNvbnN0IGFyZWFSZWN0YW5nbGUgPSBHZW9tZXRyeS5jcmVhdGVSZWN0YW5nbGVGcm9tRWxlbWVudChhcmVhLCBhcmVhKVxuICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICBhbmdsZTogMCxcbiAgICBkQW5nbGU6IDIgKiBNYXRoLlBJIC8gZWxlbWVudHMubGVuZ3RoLFxuICAgIGNlbnRlcjogYXJlYVJlY3RhbmdsZS5nZXRDZW50ZXIoKSxcbiAgICBzdGFydFJhZGl1czogNTAsXG4gICAgZW5kUmFkaXVzOiBhcmVhUmVjdGFuZ2xlLmdldE1pblNpZGUoKSAvIDIsXG4gICAgbGluZVdpZHRoOiAyLFxuICAgIHN0cm9rZVN0eWxlOiAnI2ZmNTU3NycsXG4gICAgZmlsbFN0eWxlOiAncmdiYSgxNTAsMjU1LDUwLDAuOCknXG4gIH0sIG9wdGlvbnMpXG5cbiAgc3BpZGVycy5wdXNoKHRoaXMpXG4gIHRoaXMuYXJlYSA9IGFyZWFcbiAgdGhpcy5hcmVhUmVjdGFuZ2xlID0gYXJlYVJlY3RhbmdsZVxuICB0aGlzLmluaXQoZWxlbWVudHMpXG59XG5cblNwaWRlci5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uKGVsZW1lbnRzKSB7XG4gIGNvbnN0IHRoYXQgPSB0aGlzXG4gIHRoaXMuY2FudmFzID0gRHJhZ2VlLnV0aWwuY3JlYXRlQ2FudmFzKHRoaXMuYXJlYSwgdGhpcy5hcmVhUmVjdGFuZ2xlKVxuICB0aGlzLmNvbnRleHQgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpXG5cbiAgdGhpcy5kcmFnZ2FibGVzID0gZWxlbWVudHMubWFwKGZ1bmN0aW9uKGVsZW1lbnQsIGkpIHtcbiAgICBjb25zdCBhbmdsZSA9IHRoaXMub3B0aW9ucy5hbmdsZSArIGkgKiB0aGlzLm9wdGlvbnMuZEFuZ2xlLFxuICAgICAgaGFsZlNpemUgPSBHZW9tZXRyeS5nZXRTaXplT2ZFbGVtZW50KGVsZW1lbnQpLm11bHQoMC41KSxcbiAgICAgIHN0YXJ0ID0gR2VvbWV0cnkuZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtKGFuZ2xlLCB0aGlzLm9wdGlvbnMuc3RhcnRSYWRpdXMsIHRoaXMub3B0aW9ucy5jZW50ZXIpLnN1YihoYWxmU2l6ZSksXG4gICAgICBlbmQgPSBHZW9tZXRyeS5nZXRQb2ludEZyb21SYWRpYWxTeXN0ZW0oYW5nbGUsIHRoaXMub3B0aW9ucy5lbmRSYWRpdXMsIHRoaXMub3B0aW9ucy5jZW50ZXIpLnN1YihoYWxmU2l6ZSksXG4gICAgICBib3VuZCA9IERyYWdlZS5ib3VuZC50b0xpbmUoc3RhcnQsIGVuZClcblxuICAgIHJldHVybiBuZXcgRHJhZ2VlLkRyYWdnYWJsZShlbGVtZW50LCB7XG4gICAgICBwYXJlbnQ6IHRoaXMuYXJlYSxcbiAgICAgIGJvdW5kOiBib3VuZCxcbiAgICAgIHBvc2l0aW9uOiBzdGFydCxcbiAgICAgIG9uTW92ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoYXQuZHJhdygpXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgfSlcblxuICB9LCB0aGlzKVxuXG4gIHRoaXMuaXNJbml0ID0gdHJ1ZVxuICB0aGlzLmRyYXcoKVxufVxuXG5TcGlkZXIucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbigpIHtcbiAgbGV0IHBvaW50LCBpXG4gIGlmICghdGhpcy5pc0luaXQpIHtcbiAgICByZXR1cm5cbiAgfVxuICB0aGlzLmNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHRoaXMuYXJlYVJlY3RhbmdsZS5zaXplLngsIHRoaXMuYXJlYVJlY3RhbmdsZS5zaXplLnkpXG4gIHRoaXMuY29udGV4dC5iZWdpblBhdGgoKVxuICBwb2ludCA9IHRoaXMuZHJhZ2dhYmxlc1swXS5nZXRDZW50ZXIoKVxuICB0aGlzLmNvbnRleHQubW92ZVRvKHBvaW50LngsIHBvaW50LnkpXG4gIGZvciAoaSA9IDA7IGkgPCB0aGlzLmRyYWdnYWJsZXMubGVuZ3RoOyBpKyspIHtcbiAgICBwb2ludCA9IHRoaXMuZHJhZ2dhYmxlc1tpXS5nZXRDZW50ZXIoKVxuICAgIHRoaXMuY29udGV4dC5saW5lVG8ocG9pbnQueCwgcG9pbnQueSlcbiAgfVxuICB0aGlzLmNvbnRleHQuY2xvc2VQYXRoKClcbiAgdGhpcy5jb250ZXh0LmxpbmVXaWR0aCA9IHRoaXMub3B0aW9ucy5saW5lV2lkdGhcbiAgdGhpcy5jb250ZXh0LnN0cm9rZVN0eWxlID0gdGhpcy5vcHRpb25zLnN0cm9rZVN0eWxlXG4gIHRoaXMuY29udGV4dC5zdHJva2UoKVxuICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gdGhpcy5vcHRpb25zLmZpbGxTdHlsZVxuICB0aGlzLmNvbnRleHQuZmlsbCgpXG59XG5cbmV4cG9ydCB7IHNwaWRlcnMsIFNwaWRlciB9XG4iLCIndXNlIHN0cmljdCdcblxuaW1wb3J0IHV0aWwgZnJvbSAnLi91dGlsJ1xuaW1wb3J0IEV2ZW50IGZyb20gJy4vZXZlbnQnXG5pbXBvcnQgeyBHZW9tZXRyeSB9IGZyb20gJy4vZ2VvbWV0cnknXG5pbXBvcnQgeyBwb3NpdGlvblR5cGUsIHNvcnRpbmdGYWN0b3J5LCBwb3NpdGlvbkZhY3RvcnkgfSBmcm9tICcuL3Bvc2l0aW9uaW5nJ1xuaW1wb3J0IHsgc2NvcGVzLCBkZWZhdWx0U2NvcGUgfSBmcm9tICcuL3Njb3BlJ1xuXG5jb25zdCBEcmFnZWUgPSB7IHV0aWwsIHBvc2l0aW9uVHlwZSwgIHBvc2l0aW9uRmFjdG9yeSwgc29ydGluZ0ZhY3RvcnksIHNjb3BlcywgRXZlbnQgfS8vdG9kbyByZW1vdmUgYWZ0ZXIgcmVmYWN0b3JlXG5cbmNvbnN0IHRhcmdldHMgPSBbXSxcbiAgYWRkVG9EZWZhdWx0U2NvcGUgPSBmdW5jdGlvbih0YXJnZXQpIHtcbiAgICBkZWZhdWx0U2NvcGUuYWRkVGFyZ2V0KHRhcmdldClcbiAgfVxuXG5mdW5jdGlvbiBUYXJnZXQoZWxlbWVudCwgZHJhZ2dhYmxlcywgb3B0aW9ucyA9IHt9KSB7XG4gIGNvbnN0IHRhcmdldCA9IHRoaXNcbiAgY29uc3QgcGFyZW50ID0gb3B0aW9ucy5wYXJlbnQgfHwgRHJhZ2VlLnV0aWwuZ2V0RGVmYXVsdFBhcmVudChlbGVtZW50KVxuXG4gIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgIHRpbWVFbmQ6IDIwMCxcbiAgICB0aW1lRXhjYW5nZTogNDAwLFxuICAgIHBhcmVudDogcGFyZW50LFxuICAgIHNvcnRpbmc6IERyYWdlZS5zb3J0aW5nRmFjdG9yeShEcmFnZWUucG9zaXRpb25UeXBlLmZsb2F0TGVmdCkoODAsIEdlb21ldHJ5LnRyYW5zZm9ybWVkU3BhY2VEaXN0YW5jZUZhY3RvcnkoeyB4OiAxLCB5OiA0IH0pKSxcbiAgICBwb3NpdGlvbmluZzogRHJhZ2VlLnBvc2l0aW9uRmFjdG9yeShEcmFnZWUucG9zaXRpb25UeXBlLmZsb2F0TGVmdCkodGhpcy5nZXRSZWN0YW5nbGUuYmluZCh0aGlzKSwgeyByZW1vdmFibGU6IHRydWUgfSlcbiAgfSwgb3B0aW9ucylcblxuICB0YXJnZXRzLnB1c2godGhpcylcbiAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFxuICBkcmFnZ2FibGVzLmZvckVhY2goZnVuY3Rpb24oZHJhZ2dhYmxlKSB7XG4gICAgZHJhZ2dhYmxlLnRhcmdldHMucHVzaCh0YXJnZXQpXG4gIH0pXG4gIHRoaXMuZHJhZ2dhYmxlcyA9IGRyYWdnYWJsZXNcbiAgdGhpcy5vbkFkZCA9IG5ldyBEcmFnZWUuRXZlbnQodGhpcylcbiAgdGhpcy5iZWZvcmVBZGQgPSBuZXcgRHJhZ2VlLkV2ZW50KHRoaXMpXG4gIHRoaXMub25SZW1vdmUgPSBuZXcgRHJhZ2VlLkV2ZW50KHRoaXMpXG5cbiAgaWYgKG9wdGlvbnMub25SZW1vdmUpIHtcbiAgICB0aGlzLm9uUmVtb3ZlLmFkZChvcHRpb25zLm9uUmVtb3ZlKVxuICB9XG4gIGlmIChvcHRpb25zLm9uQWRkKSB7XG4gICAgdGhpcy5vbkFkZC5hZGQob3B0aW9ucy5vbkFkZClcbiAgfVxuICBpZiAob3B0aW9ucy5iZWZvcmVBZGQpIHtcbiAgICB0aGlzLmJlZm9yZUFkZC5hZGQob3B0aW9ucy5iZWZvcmVBZGQpXG4gIH1cblxuICBUYXJnZXQub25DcmVhdGUuZmlyZSh0aGlzKVxuXG4gIHRoaXMuaW5pdCgpXG59XG5cblRhcmdldC5vbkNyZWF0ZSA9IG5ldyBEcmFnZWUuRXZlbnQoVGFyZ2V0LCB7IGlzUmV2ZXJzZTogdHJ1ZSwgaXNTdG9wT25UcnVlOiB0cnVlIH0pXG5UYXJnZXQub25DcmVhdGUuYWRkKGFkZFRvRGVmYXVsdFNjb3BlKVxuXG5UYXJnZXQucHJvdG90eXBlLmdldFJlY3RhbmdsZSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gR2VvbWV0cnkuY3JlYXRlUmVjdGFuZ2xlRnJvbUVsZW1lbnQoXG4gICAgICAgIHRoaXMuZWxlbWVudCxcbiAgICAgICAgdGhpcy5vcHRpb25zLnBhcmVudCxcbiAgICAgICAgdGhpcy5vcHRpb25zLmlzQ29udGVudEJveFNpemUsXG4gICAgICAgIHRydWVcbiAgICApXG59XG5cblRhcmdldC5wcm90b3R5cGUuY2F0Y2hEcmFnZ2FibGUgPSBmdW5jdGlvbihkcmFnZ2FibGUpIHtcbiAgaWYgKHRoaXMub3B0aW9ucy5jYXRjaERyYWdnYWJsZSkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuY2F0Y2hEcmFnZ2FibGUodGhpcywgZHJhZ2dhYmxlKVxuICB9IGVsc2Uge1xuICAgIGNvbnN0IHRhcmdldFJlY3RhbmdsZSA9IHRoaXMuZ2V0UmVjdGFuZ2xlKCksXG4gICAgICBkcmFnZ2FibGVTcXVhcmUgPSBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKCkuZ2V0U3F1YXJlKClcblxuICAgIHJldHVybiBkcmFnZ2FibGVTcXVhcmUgPCB0YXJnZXRSZWN0YW5nbGUuZ2V0U3F1YXJlKClcbiAgICAgICAgICAgICYmIHRhcmdldFJlY3RhbmdsZS5pbmNsdWRlUG9pbnQoZHJhZ2dhYmxlLmdldENlbnRlcigpKVxuICB9XG59XG5cblRhcmdldC5wcm90b3R5cGUuZ2V0UG9zaXRpb24gPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuZ2V0UmVjdGFuZ2xlKCkucG9zaXRpb25cbn1cblxuVGFyZ2V0LnByb3RvdHlwZS5nZXRTaXplID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLmdldFJlY3RhbmdsZSgpLnNpemVcbn1cblxuVGFyZ2V0LnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24oKSB7XG4gIGxldCByZWN0YW5nbGVzLCBpbmRleGVzT2ZOZXdcblxuICB0aGlzLmlubmVyRHJhZ2dhYmxlcyA9IHRoaXMuZHJhZ2dhYmxlcy5maWx0ZXIoZnVuY3Rpb24oZHJhZ2dhYmxlKSB7XG4gICAgbGV0IGVsZW1lbnQgPSBkcmFnZ2FibGUuZWxlbWVudC5wYXJlbnROb2RlXG4gICAgd2hpbGUgKGVsZW1lbnQpIHtcbiAgICAgIGlmIChlbGVtZW50ID09PSB0aGlzLmVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICAgIGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudE5vZGVcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlXG4gIH0sIHRoaXMpXG5cbiAgaWYgKHRoaXMuaW5uZXJEcmFnZ2FibGVzLmxlbmd0aCkge1xuICAgIGluZGV4ZXNPZk5ldyA9IERyYWdlZS51dGlsLnJhbmdlKHRoaXMuaW5uZXJEcmFnZ2FibGVzLmxlbmd0aClcbiAgICByZWN0YW5nbGVzID0gdGhpcy5vcHRpb25zLnBvc2l0aW9uaW5nKHRoaXMuaW5uZXJEcmFnZ2FibGVzLm1hcChmdW5jdGlvbihkcmFnZ2FibGUpIHtcbiAgICAgIHJldHVybiBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKClcbiAgICB9KSwgaW5kZXhlc09mTmV3KVxuICAgIHRoaXMuc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgaW5kZXhlc09mTmV3KVxuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzLmZvckVhY2goZnVuY3Rpb24oZHJhZ2dhYmxlKSB7XG4gICAgICB0aGlzLm9uQWRkLmZpcmUoZHJhZ2dhYmxlKVxuICAgIH0sIHRoaXMpXG4gIH1cbn1cblxuVGFyZ2V0LnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gIERyYWdlZS5zY29wZXMuZm9yRWFjaChmdW5jdGlvbihzY29wZSkge1xuICAgIHNjb3BlLnRhcmdldHMucmVtb3ZlSXRlbSh0aGlzKVxuICB9LCB0aGlzKVxufVxuXG5UYXJnZXQucHJvdG90eXBlLnJlZnJlc2ggPSBmdW5jdGlvbigpIHtcbiAgY29uc3QgcmVjdGFuZ2xlcyA9IHRoaXMub3B0aW9ucy5wb3NpdGlvbmluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcy5tYXAoZnVuY3Rpb24oZHJhZ2dhYmxlKSB7XG4gICAgcmV0dXJuIGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKVxuICB9KSwgW10pXG4gIHRoaXMuc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgW10sIDApXG59XG5cblRhcmdldC5wcm90b3R5cGUub25FbmQgPSBmdW5jdGlvbihkcmFnZ2FibGUpIHtcbiAgY29uc3QgbmV3RHJhZ2dhYmxlc0luZGV4ID0gW11cbiAgY29uc3QgaW5jbHVkZVBvaW50ID0gdGhpcy5nZXRSZWN0YW5nbGUoKS5pbmNsdWRlUG9pbnQoZHJhZ2dhYmxlLmdldFBvc2l0aW9uKCkpXG5cbiAgaWYgKCFpbmNsdWRlUG9pbnQpIHtcbiAgICBpZiAodGhpcy5nZXRSZWN0YW5nbGUoKS5pbmNsdWRlUG9pbnQoZHJhZ2dhYmxlLmdldENlbnRlcigpKSkge1xuICAgICAgZHJhZ2dhYmxlLnBvc2l0aW9uID0gZHJhZ2dhYmxlLmdldENlbnRlcigpLmNsb25lKClcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICB9XG5cbiAgdGhpcy5iZWZvcmVBZGQuZmlyZShkcmFnZ2FibGUpXG5cbiAgdGhpcy5pbm5lckRyYWdnYWJsZXMgPSB0aGlzLm9wdGlvbnMuc29ydGluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcywgW2RyYWdnYWJsZV0sIG5ld0RyYWdnYWJsZXNJbmRleClcbiAgY29uc3QgcmVjdGFuZ2xlcyA9IHRoaXMub3B0aW9ucy5wb3NpdGlvbmluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcy5tYXAoZnVuY3Rpb24oZHJhZ2dhYmxlKSB7XG4gICAgcmV0dXJuIGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKVxuICB9KSwgbmV3RHJhZ2dhYmxlc0luZGV4LCBkcmFnZ2FibGUpXG5cbiAgdGhpcy5zZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBuZXdEcmFnZ2FibGVzSW5kZXgpXG4gIGlmICh0aGlzLmlubmVyRHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSkgIT09IC0xKSB7XG4gICAgdGhpcy5hZGRSZW1vdmVPbk1vdmUoZHJhZ2dhYmxlKVxuICB9XG4gIHJldHVybiB0cnVlXG59XG5cblRhcmdldC5wcm90b3R5cGUuc2V0UG9zaXRpb24gPSBmdW5jdGlvbihyZWN0YW5nbGVzLCBpbmRleGVzT2ZOZXcsIHRpbWUpIHtcbiAgdGhpcy5pbm5lckRyYWdnYWJsZXMuc2xpY2UoMCkuZm9yRWFjaChmdW5jdGlvbihkcmFnZ2FibGUsIGkpIHtcbiAgICBjb25zdCByZWN0ID0gcmVjdGFuZ2xlc1tpXSxcbiAgICAgIHRpbWVFbmQgPSB0aW1lIHx8IHRpbWUgPT09IDAgPyB0aW1lIDogaW5kZXhlc09mTmV3LmluZGV4T2YoaSkgIT09IC0xID8gdGhpcy5vcHRpb25zLnRpbWVFbmQgOiB0aGlzLm9wdGlvbnMudGltZUV4Y2FuZ2VcblxuICAgIGlmIChyZWN0LnJlbW92YWJsZSkge1xuICAgICAgZHJhZ2dhYmxlLm1vdmUoZHJhZ2dhYmxlLmluaXRQb3NpdGlvbiwgdGltZUVuZCwgdHJ1ZSwgdHJ1ZSlcbiAgICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzLnJlbW92ZUl0ZW0oZHJhZ2dhYmxlKVxuXG4gICAgICB0aGlzLm9uUmVtb3ZlLmZpcmUoZHJhZ2dhYmxlKVxuICAgIH0gZWxzZSB7XG4gICAgICBkcmFnZ2FibGUubW92ZShyZWN0LnBvc2l0aW9uLCB0aW1lRW5kLCB0cnVlLCB0cnVlKVxuICAgIH1cbiAgfSwgdGhpcylcbn1cblxuVGFyZ2V0LnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbihkcmFnZ2FibGUsIHRpbWUpIHtcbiAgY29uc3QgbmV3RHJhZ2dhYmxlc0luZGV4ID0gdGhpcy5pbm5lckRyYWdnYWJsZXMubGVuZ3RoXG5cbiAgdGhpcy5iZWZvcmVBZGQuZmlyZShkcmFnZ2FibGUpXG5cbiAgdGhpcy5wdXNoSW5uZXJEcmFnZ2FibGUoZHJhZ2dhYmxlKVxuICBjb25zdCByZWN0YW5nbGVzID0gdGhpcy5vcHRpb25zLnBvc2l0aW9uaW5nKHRoaXMuaW5uZXJEcmFnZ2FibGVzLm1hcChmdW5jdGlvbihkcmFnZ2FibGUpIHtcbiAgICByZXR1cm4gZHJhZ2dhYmxlLmdldFJlY3RhbmdsZSgpXG4gIH0pLCBuZXdEcmFnZ2FibGVzSW5kZXgsIGRyYWdnYWJsZSlcbiAgdGhpcy5zZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBbbmV3RHJhZ2dhYmxlc0luZGV4XSwgdGltZSB8fCAwKVxuICBpZiAodGhpcy5pbm5lckRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpICE9PSAtMSkge1xuICAgIHRoaXMuYWRkUmVtb3ZlT25Nb3ZlKGRyYWdnYWJsZSlcbiAgfVxufVxuXG5UYXJnZXQucHJvdG90eXBlLnB1c2hJbm5lckRyYWdnYWJsZSA9IGZ1bmN0aW9uKGRyYWdnYWJsZSkge1xuICBpZiAodGhpcy5pbm5lckRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpPT09LTEpIHtcbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5wdXNoKGRyYWdnYWJsZSlcbiAgfVxufVxuXG5UYXJnZXQucHJvdG90eXBlLmFkZFJlbW92ZU9uTW92ZSA9IGZ1bmN0aW9uKGRyYWdnYWJsZSkge1xuICBjb25zdCB0aGF0ID0gdGhpc1xuXG4gIGRyYWdnYWJsZS5vbk1vdmUuYWRkKHRoaXMucmVtb3ZlSGFuZGxlciA9IGZ1bmN0aW9uKCkge1xuICAgIHRoYXQucmVtb3ZlKGRyYWdnYWJsZSlcbiAgfSlcblxuICB0aGlzLm9uQWRkLmZpcmUoZHJhZ2dhYmxlKVxufVxuXG5UYXJnZXQucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uKGRyYWdnYWJsZSkge1xuICBkcmFnZ2FibGUub25Nb3ZlLnJlbW92ZSh0aGlzLnJlbW92ZUhhbmRsZXIpXG5cbiAgY29uc3QgaW5kZXggPSB0aGlzLmlubmVyRHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSlcbiAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgIHJldHVyblxuICB9XG5cbiAgdGhpcy5pbm5lckRyYWdnYWJsZXMuc3BsaWNlKGluZGV4LCAxKVxuXG4gIGNvbnN0IHJlY3RhbmdsZXMgPSB0aGlzLm9wdGlvbnMucG9zaXRpb25pbmcodGhpcy5pbm5lckRyYWdnYWJsZXMubWFwKGZ1bmN0aW9uKGRyYWdnYWJsZSkge1xuICAgIHJldHVybiBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKClcbiAgfSksIFtdKVxuXG4gIHRoaXMuc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgW10pXG4gIHRoaXMub25SZW1vdmUuZmlyZShkcmFnZ2FibGUpXG59XG5cblRhcmdldC5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5pbm5lckRyYWdnYWJsZXMuZm9yRWFjaChmdW5jdGlvbihkcmFnZ2FibGUpIHtcbiAgICBkcmFnZ2FibGUubW92ZShkcmFnZ2FibGUuaW5pdFBvc2l0aW9uLCAwLCB0cnVlLCB0cnVlKVxuICAgIHRoaXMub25SZW1vdmUuZmlyZShkcmFnZ2FibGUpXG4gIH0sIHRoaXMpXG4gIHRoaXMuaW5uZXJEcmFnZ2FibGVzID0gW11cbn1cblxuVGFyZ2V0LnByb3RvdHlwZS5nZXRTb3J0ZWREcmFnZ2FibGVzID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuaW5uZXJEcmFnZ2FibGVzLnNsaWNlKClcbn1cblxuZXhwb3J0IHsgdGFyZ2V0cywgVGFyZ2V0IH1cbiIsIid1c2Ugc3RyaWN0J1xuXG5mdW5jdGlvbiBnZXREZWZhdWx0UGFyZW50KGVsZW1lbnQpIHtcbiAgbGV0IHBhcmVudCA9IGVsZW1lbnQucGFyZW50Tm9kZVxuICB3aGlsZSAocGFyZW50LnBhcmVudE5vZGUgJiYgd2luZG93LmdldENvbXB1dGVkU3R5bGUocGFyZW50KVsncG9zaXRpb24nXSA9PT0gJ3N0YXRpYycpIHtcbiAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50Tm9kZVxuICB9XG4gIHJldHVybiBwYXJlbnRcbn1cblxuZnVuY3Rpb24gZ2V0VG91Y2hCeUlEKGVsZW1lbnQsIHRvdWNoSWQpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbGVtZW50LmNoYW5nZWRUb3VjaGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGVsZW1lbnQuY2hhbmdlZFRvdWNoZXNbaV0uaWRlbnRpZmllciA9PT0gdG91Y2hJZCkge1xuICAgICAgcmV0dXJuIGVsZW1lbnQuY2hhbmdlZFRvdWNoZXNbaV1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlXG59XG5cbmZ1bmN0aW9uIGdldFN1bVZhbHVlT2ZTdHlsZVJ1bGUoZWxlbWVudCwgcnVsZXMpIHtcbiAgcmV0dXJuIHJ1bGVzLnJlZHVjZShmdW5jdGlvbihzdW0sIHJ1bGUpIHtcbiAgICByZXR1cm4gc3VtICsgcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudClbcnVsZV18fDApXG4gIH0sIDApXG59XG5cbmZ1bmN0aW9uIGFwcGVuZEZpcnN0Q2hpbGQoZWxlbWVudCwgbm9kZSkge1xuICBlbGVtZW50LmZpcnN0Q2hpbGQgPyBlbGVtZW50Lmluc2VydEJlZm9yZShub2RlLCBlbGVtZW50LmZpcnN0Q2hpbGQpIDogZWxlbWVudC5hcHBlbmRDaGlsZChub2RlKVxufVxuXG5mdW5jdGlvbiByYW5nZShzdGFydCwgc3RvcCwgc3RlcCkge1xuICBjb25zdCByZXN1bHQgPSBbXVxuICBpZiAodHlwZW9mIHN0b3AgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgc3RvcCA9IHN0YXJ0XG4gICAgc3RhcnQgPSAwXG4gIH1cbiAgaWYgKHR5cGVvZiBzdGVwID09PSAndW5kZWZpbmVkJykge1xuICAgIHN0ZXAgPSAxXG4gIH1cbiAgaWYgKChzdGVwID4gMCAmJiBzdGFydCA+PSBzdG9wKSB8fCAoc3RlcCA8IDAgJiYgc3RhcnQgPD0gc3RvcCkpIHtcbiAgICByZXR1cm4gW11cbiAgfVxuICBmb3IgKGxldCBpID0gc3RhcnQ7IHN0ZXAgPiAwID8gaSA8IHN0b3AgOiBpID4gc3RvcDsgaSArPSBzdGVwKSB7XG4gICAgcmVzdWx0LnB1c2goaSlcbiAgfVxuICByZXR1cm4gcmVzdWx0XG59XG5cbmZ1bmN0aW9uIHNldFN0eWxlKGVsZW1lbnQsIHN0eWxlKSB7XG4gIHN0eWxlID0gc3R5bGUgfHwge31cbiAgbGV0IGNzc1RleHQgPSAnJ1xuICBmb3IgKGxldCBrZXkgaW4gc3R5bGUpIHtcbiAgICBpZiAoc3R5bGUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgY3NzVGV4dCArPSBrZXkgKyAnOiAnICsgc3R5bGVba2V5XSArICc7ICdcbiAgICB9XG4gIH1cblxuICBlbGVtZW50LnN0eWxlLmNzc1RleHQgPSBjc3NUZXh0XG59XG5cbmZ1bmN0aW9uIHJhbmRvbUNvbG9yKCkge1xuICBjb25zdCBybmQgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKjI1NSlcbiAgfVxuICBjb25zdCB0b0hleFN0cmluZyA9IGZ1bmN0aW9uKGRpZ2l0KSB7XG4gICAgbGV0IHN0ciA9IGRpZ2l0LnRvU3RyaW5nKDE2KVxuICAgIHdoaWxlIChzdHIubGVuZ3RoIDwgMikge1xuICAgICAgc3RyID0gJzAnICsgc3RyXG4gICAgfVxuICAgIHJldHVybiBzdHJcbiAgfVxuXG4gIHJldHVybiAnIycgKyB0b0hleFN0cmluZyhybmQoKSkgKyB0b0hleFN0cmluZyhybmQoKSkgKyB0b0hleFN0cmluZyhybmQoKSlcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ2FudmFzKGFyZWEsIHJlY3RhZ2xlKSB7XG4gIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpXG4gIGlmICh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShhcmVhKS5wb3NpdGlvbiA9PT0gJ3N0YXRpYycpIHtcbiAgICBhcmVhLnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJ1xuICB9XG5cbiAgY2FudmFzLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCByZWN0YWdsZS5zaXplLnggKyAncHgnKVxuICBjYW52YXMuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCByZWN0YWdsZS5zaXplLnkgKyAncHgnKVxuICBzZXRTdHlsZShjYW52YXMsIHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICBsZWZ0OiByZWN0YWdsZS5wb3NpdGlvbi55ICsgJ3B4JyxcbiAgICB0b3A6IHJlY3RhZ2xlLnBvc2l0aW9uLnkgKyAncHgnLFxuICAgIHdpZHRoOiByZWN0YWdsZS5zaXplLnggKyAncHgnLFxuICAgIGhlaWdodDogcmVjdGFnbGUuc2l6ZS55ICsgJ3B4J1xuICB9KVxuICBhcHBlbmRGaXJzdENoaWxkKGFyZWEsIGNhbnZhcylcbiAgcmV0dXJuIGNhbnZhc1xufVxuXG5mdW5jdGlvbiBoYXNDbGFzcyhlbGVtZW50LCBjKSB7XG4gIGNvbnN0IHJlID0gbmV3IFJlZ0V4cCgnKF58XFxcXHMpJyArIGMgKyAnKFxcXFxzfCQpJywgJ2cnKVxuICByZXR1cm4gKHJlLnRlc3QoZWxlbWVudC5jbGFzc05hbWUpKVxufVxuXG5mdW5jdGlvbiBhZGRDbGFzcyhlbGVtZW50LCBjKSB7XG4gIGlmICghaGFzQ2xhc3MoZWxlbWVudCwgYykpIHtcbiAgICBlbGVtZW50LmNsYXNzTmFtZSA9IChlbGVtZW50LmNsYXNzTmFtZSArICcgJyArIGMpLnJlcGxhY2UoL1xccysvZywgJyAnKS5yZXBsYWNlKC8oXiB8ICQpL2csICcnKVxuICB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUNsYXNzKGVsZW1lbnQsIGMpIHtcbiAgY29uc3QgcmUgPSBuZXcgUmVnRXhwKCcoXnxcXFxccyknICsgYyArICcoXFxcXHN8JCknLCAnZycpXG4gIGVsZW1lbnQuY2xhc3NOYW1lID0gZWxlbWVudC5jbGFzc05hbWUucmVwbGFjZShyZSwgJyQxJykucmVwbGFjZSgvXFxzKy9nLCAnICcpLnJlcGxhY2UoLyheIHwgJCkvZywgJycpXG59XG5cbmNvbnN0IHV0aWwgPSB7XG4gIGdldERlZmF1bHRQYXJlbnQsXG4gIGdldFRvdWNoQnlJRCxcbiAgZ2V0U3VtVmFsdWVPZlN0eWxlUnVsZSxcbiAgYXBwZW5kRmlyc3RDaGlsZCxcbiAgcmFuZ2UsXG4gIHNldFN0eWxlLFxuICByYW5kb21Db2xvcixcbiAgY3JlYXRlQ2FudmFzLFxuICBoYXNDbGFzcyxcbiAgYWRkQ2xhc3MsXG4gIHJlbW92ZUNsYXNzXG59XG5cbmV4cG9ydCB7XG4gIGdldERlZmF1bHRQYXJlbnQsXG4gIGdldFRvdWNoQnlJRCxcbiAgZ2V0U3VtVmFsdWVPZlN0eWxlUnVsZSxcbiAgYXBwZW5kRmlyc3RDaGlsZCxcbiAgcmFuZ2UsXG4gIHNldFN0eWxlLFxuICByYW5kb21Db2xvcixcbiAgY3JlYXRlQ2FudmFzLFxuICBoYXNDbGFzcyxcbiAgYWRkQ2xhc3MsXG4gIHJlbW92ZUNsYXNzXG59XG5cbmV4cG9ydCBkZWZhdWx0IHV0aWxcbiJdLCJzb3VyY2VSb290IjoiIn0=