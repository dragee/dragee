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


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }







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
      this.isDragee = true;
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
      this.isDragee = false;
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
          if (draggable.isDragee) {
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
      if (draggable.isDragee) {
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
        if (this.draggables[excangeIndex].isDragee) {
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
    indexesOfNew = Object(_util__WEBPACK_IMPORTED_MODULE_0__["range"])(this.innerDraggables.length);
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
    Object(_util__WEBPACK_IMPORTED_MODULE_0__["removeItem"])(scope.targets, this);
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
      Object(_util__WEBPACK_IMPORTED_MODULE_0__["removeItem"])(this.innerDraggables, draggable);
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
/*! exports provided: getDefaultParent, getTouchByID, getSumValueOfStyleRule, appendFirstChild, range, setStyle, randomColor, createCanvas, hasClass, addClass, removeClass, removeItem, default */
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
  appendFirstChild: appendFirstChild,
  range: range,
  setStyle: setStyle,
  randomColor: randomColor,
  createCanvas: createCanvas,
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  removeItem: removeItem
};

/* harmony default export */ __webpack_exports__["default"] = (util);

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9EcmFnZWUvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0RyYWdlZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9EcmFnZWUvLi9ub2RlX21vZHVsZXMvZGVzYW5kcm8tZ2V0LXN0eWxlLXByb3BlcnR5L2dldC1zdHlsZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9zcmMvYXJjc2xpZGVyLmpzIiwid2VicGFjazovL0RyYWdlZS8uL3NyYy9ib3VuZC5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9zcmMvY2hhcnQuanMiLCJ3ZWJwYWNrOi8vRHJhZ2VlLy4vc3JjL2RyYWdnYWJsZS5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9zcmMvZXZlbnQuanMiLCJ3ZWJwYWNrOi8vRHJhZ2VlLy4vc3JjL2V4cGFuZG5hdGl2ZS5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9zcmMvZ2VvbWV0cnkuanMiLCJ3ZWJwYWNrOi8vRHJhZ2VlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL0RyYWdlZS8uL3NyYy9saXN0LmpzIiwid2VicGFjazovL0RyYWdlZS8uL3NyYy9saXN0c3dpdGNoZXIuanMiLCJ3ZWJwYWNrOi8vRHJhZ2VlLy4vc3JjL3Bvc2l0aW9uaW5nLmpzIiwid2VicGFjazovL0RyYWdlZS8uL3NyYy9zY29wZS5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9zcmMvc3BpZGVyLmpzIiwid2VicGFjazovL0RyYWdlZS8uL3NyYy90YXJnZXQuanMiLCJ3ZWJwYWNrOi8vRHJhZ2VlLy4vc3JjL3V0aWwuanMiXSwibmFtZXMiOlsiRHJhZ2VlIiwidXRpbCIsIkRyYWdnYWJsZSIsImJvdW5kIiwiYXJjU2xpZGVycyIsIkFyY1NsaWRlciIsImFyZWEiLCJlbGVtZW50Iiwib3B0aW9ucyIsImFyZWFSZWN0YW5nbGUiLCJHZW9tZXRyeSIsImNyZWF0ZVJlY3RhbmdsZUZyb21FbGVtZW50IiwiaGFsZlNpemUiLCJnZXRTaXplT2ZFbGVtZW50IiwibXVsdCIsImkiLCJjZW50ZXIiLCJnZXRDZW50ZXIiLCJyYWRpdXMiLCJnZXRNaW5TaWRlIiwic3RhcnRBbmdsZSIsIk1hdGgiLCJQSSIsImVuZEFuZ2xlIiwiYW5nbGVzIiwib25DaGFuZ2UiLCJ0aW1lIiwiaGFzT3duUHJvcGVydHkiLCJzaGlmdGVkQ2VudGVyIiwic3ViIiwicHVzaCIsImluaXQiLCJwcm90b3R5cGUiLCJ0aGF0IiwiYW5nbGUiLCJwb3NpdGlvbiIsImdldFBvaW50RnJvbVJhZGlhbFN5c3RlbSIsInRvQXJjIiwiZHJhZ2dhYmxlIiwicGFyZW50Iiwib25Nb3ZlIiwiY2hhbmdlIiwidXBkYXRlQW5nbGUiLCJnZXRBbmdsZSIsInNldEFuZ2xlIiwibm9ybWFsaXplQW5nbGUiLCJtb3ZlIiwiYm91bmRUb1JlY3RhbmdsZSIsInJlY3RhbmdsZSIsInBvaW50Iiwic2l6ZSIsImNhbGNQb2ludCIsImNsb25lIiwicmVjdFAyIiwiZ2V0UDMiLCJ4IiwieSIsImJvdW5kVG9FbGVtZW50IiwicmV0RnVuYyIsImFwcGx5IiwiYXJndW1lbnRzIiwicmVmcmVzaCIsImJvdW5kVG9MaW5lWCIsInN0YXJ0WSIsImVuZFkiLCJib3VuZFRvTGluZVkiLCJzdGFydFgiLCJlbmRYIiwiYm91bmRUb0xpbmUiLCJzdGFydCIsImVuZCIsImFscGhhIiwiYXRhbjIiLCJiZXRhIiwic29tZUsiLCJjb3NCZXRhIiwiY29zIiwic2luQmV0YSIsInNpbiIsInBvaW50MiIsIlBvaW50IiwibmV3RW5kIiwiZ2V0UG9pbnRJbkxpbmVCeUxlbmdodCIsInBvaW50Q3Jvc3NpbmciLCJkaXJlY3RDcm9zc2luZyIsImJvdW5kVG9DaXJjbGUiLCJfc2l6ZSIsImJvdW5kZWRQb2ludCIsImJvdW5kVG9BcmMiLCJzdGFydEFnbGUiLCJib3VuZFN0YXJ0QW5nbGUiLCJib3VuZEVuZHRBbmdsZSIsImJvdW5kQW5nbGUiLCJ0b1JlY3RhbmdsZSIsInRvRWxlbWVudCIsInRvTGluZVgiLCJ0b0xpbmVZIiwidG9MaW5lIiwidG9DaXJjbGUiLCJpc1RvdWNoIiwid2luZG93IiwiY2hhcnRzIiwiZ2V0QXJyYXlXaXRoQm91bmRJbmRleGVzIiwiaW5kZXgiLCJsZW5ndGgiLCJyZXRJbmRleGVzIiwiQ2hhcnQiLCJlbGVtZW50cyIsInRvdWNoUmFkaXVzIiwiZmlsbFN0eWxlcyIsInJhbmdlIiwibWFwIiwicmFuZG9tQ29sb3IiLCJpbml0QW5nbGVzIiwidG9SYWRpYW4iLCJvbkRyYXciLCJsaW1pdEltZyIsImxpbWl0SW1nT2Zmc2V0IiwiaXNTZWxlY3RhYmxlIiwiY2FudmFzIiwiY3JlYXRlQ2FudmFzIiwiY29udGV4dCIsImdldENvbnRleHQiLCJkcmFnZ2FibGVzIiwiZ2V0Qm91bmRBbmdsZSIsImRyYXciLCJpc0luaXQiLCJpbml0U2VsZWN0Iiwic2V0QWN0aXZlQXJjIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50cyIsImUiLCJjaGFuZ2VkVG91Y2hlcyIsInBhZ2VYIiwiY2xpZW50WCIsInBhZ2VZIiwiY2xpZW50WSIsImNhbnZhc09mZnNldCIsImdldE9mZnNldCIsImdldEFyY09uUG9pbnQiLCJhY3RpdmVBcmNJbmRleCIsInVwZGF0ZUFuZ2xlcyIsImdldFNpemUiLCJpc0Nsb3NzaW5nIiwic2lnbiIsImNsZWFyUmVjdCIsImZvckVhY2giLCJfZHJhZ2dhYmxlIiwiZHJhd0FyYyIsImVuYWJsZUluZGV4ZXMiLCJpbmRleE9mIiwiZHJhd0xpbWl0SW1nIiwiY3JlYXRlQ2xvbmUiLCJvcHRzIiwiT2JqZWN0IiwiYXNzaWduIiwiY2xvbmVPYmoiLCJnZXRGaWxsU3R5bGUiLCJjYWxsIiwiY29sb3IiLCJiZWdpblBhdGgiLCJtb3ZlVG8iLCJhcmMiLCJsaW5lVG8iLCJjbG9zZVBhdGgiLCJmaWxsU3R5bGUiLCJmaWxsIiwiaW1nIiwiQXJyYXkiLCJoZWlnaHQiLCJhZGQiLCJ0cmFuc2xhdGUiLCJyb3RhdGUiLCJkcmF3SW1hZ2UiLCJzZXRUcmFuc2Zvcm0iLCJnZXRBbmdsZXNEaWZmIiwic2xpY2UiLCJiYXNlQW5nbGUiLCJkaWZmQW5nbGUiLCJnZXRQZXJjZW50IiwiZ2V0QXJjQmlzZWN0cml4cyIsImdldERpc3RhbmNlIiwib2Zmc2V0IiwiaiIsInNldEFuZ2xlcyIsImVuYWJsZSIsIkV2ZW50IiwibW91c2VFdmVudHMiLCJ0b3VjaEV2ZW50cyIsInRyYW5zZm9ybVByb3BlcnR5IiwiZ2V0U3R5bGVQcm9wZXJ0eSIsInRyYW5zaXRpb25Qcm9wZXJ0eSIsInByZXZlbnREb3VibGVJbml0IiwibWVzc2FnZSIsInNvbWUiLCJleGlzdGluZyIsImFkZFRvRGVmYXVsdFNjb3BlIiwiZGVmYXVsdFNjb3BlIiwiYWRkRHJhZ2dhYmxlIiwiZ2V0RGVmYXVsdFBhcmVudCIsInRhcmdldHMiLCJzdGFydEZpbHRlciIsImlzQ29udGVudEJveFNpemUiLCJvbkVuZCIsImlzUmV2ZXJzZSIsImlzU3RvcE9uVHJ1ZSIsIm9uU3RhcnQiLCJvbkNyZWF0ZSIsImZpcmUiLCJfZW5hYmxlIiwiZml4UG9zaXRpb24iLCJpbml0UG9zaXRpb24iLCJfZHJhZ1N0YXJ0IiwiZHJhZ1N0YXJ0IiwiYmluZCIsIl9kcmFnTW92ZSIsImRyYWdNb3ZlIiwiX2RyYWdFbmQiLCJkcmFnRW5kIiwiX3JlY2FsdWxhdGUiLCJfdHJhbnNmb3JtUG9zaXRpb24iLCJ0cmFuc2Zvcm0iLCJzdHlsZSIsInRyYW5zbGF0ZUNzcyIsInVhIiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwibXNpZSIsInRlc3QiLCJyZXBsYWNlIiwiaXNGaXgiLCJpc1NpbGVudCIsImRldGVybWluZURpcmVjdGlvbiIsIl9zZXRUcmFuc2xhdGUiLCJzZXRQb3NpdGlvbiIsImdldFBvc2l0aW9uIiwibGVmdERpcmVjdGlvbiIsInJpZ2h0RGlyZWN0aW9uIiwidXBEaXJlY3Rpb24iLCJkb3duRGlyZWN0aW9uIiwiZXZlbnQiLCJjdXJyZW50RXZlbnQiLCJpc1RvdWNoRXZlbnQiLCJUb3VjaEV2ZW50IiwiX3N0YXJ0VG91Y2hQb2ludCIsIl9zdGFydFBvc2l0aW9uIiwiX3RvdWNoSWQiLCJpZGVudGlmaWVyIiwic3RvcFByb3BhZ2F0aW9uIiwidGFyZ2V0IiwiSFRNTElucHV0RWxlbWVudCIsInByZXZlbnREZWZhdWx0IiwiZm9jdXMiLCJkb2N1bWVudCIsImlzRHJhZ2VlIiwiYWRkQ2xhc3MiLCJ0b3VjaCIsImdldFRvdWNoQnlJRCIsInRvdWNoUG9pbnQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicmVtb3ZlQ2xhc3MiLCJSZWN0YW5nbGUiLCJyZXNldCIsImZ1bmNzIiwiYXJncyIsImZzIiwicmV2ZXJzZSIsInJldFZhbHVlIiwiZiIsInVuc2hpZnQiLCJyZW1vdmUiLCJzcGxpY2UiLCJfZiIsInJlbW92ZUl0ZW0iLCJ2YWwiLCJhdWdtZW50IiwicmVjZWl2aW5nQ2xhc3MiLCJnaXZpbmdDbGFzcyIsImxlbiIsIm1ldGhvZE5hbWUiLCJOb2RlTGlzdCIsInRvU3RyaW5nIiwicCIsImsiLCJuZWdhdGl2ZSIsImNvbXBhcmUiLCJnZXRQMSIsImdldFAyIiwiZ2V0UDQiLCJvciIsInJlY3QiLCJtaW4iLCJtYXgiLCJhbmQiLCJpbmNsdWRlUG9pbnQiLCJpbmNsdWRlUmVjdGFuZ2xlIiwibW92ZVRvQm91bmQiLCJheGlzIiwic2VsQXhpcyIsImNyb3NzUmVjdGFuZ2xlIiwidGhpc0NlbnRlciIsInJlY3RDZW50ZXIiLCJnZXRTcXVhcmUiLCJzdHlsZUFwcGx5IiwiZWwiLCJxdWVyeVNlbGVjdG9yIiwibGVmdCIsInRvcCIsIndpZHRoIiwiZ3Jvd3RoIiwicDEiLCJwMiIsImR4IiwiZHkiLCJzcXJ0IiwiZGlzdGFuY2UiLCJnZXRYRGlmZmVyZW5jZSIsImFicyIsImdldFlEaWZmZXJlbmNlIiwidHJhbnNmb3JtZWRTcGFjZURpc3RhbmNlRmFjdG9yeSIsInBvdyIsImluZGV4T2ZOZWFyUG9pbnQiLCJhcnIiLCJ0ZW1wIiwiYm91bmRQb2ludCIsIkwxUDEiLCJMMVAyIiwiTDJQMSIsIkwyUDIiLCJrMSIsImsyIiwiYjEiLCJiMiIsImJvdW5kVG9TZWdtZW50IiwiTFAxIiwiTFAyIiwiUCIsIkEiLCJCIiwiQVAiLCJBQiIsImFiMiIsImFwX2FiIiwidCIsImdldFBvaW50SW5MaW5lIiwicGVyY2VudCIsImxlbmdodCIsImlzQ29uc2lkZXJUcmFuc2xhdGUiLCJwYXJlbnROb2RlIiwicGFyc2VJbnQiLCJnZXRDb21wdXRlZFN0eWxlIiwiZ2V0U3VtVmFsdWVPZlN0eWxlUnVsZSIsImVsUmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInBhcmVudFJlY3QiLCJhZGRQb2ludFRvQm91bmRQb2ludHMiLCJib3VuZHBvaW50cyIsImlzUmlnaHQiLCJyZXN1bHQiLCJmaWx0ZXIiLCJiUG9pbnQiLCJkaWZmIiwidG9EZWdyZWUiLCJkbWluIiwiZG1heCIsImdldEFuZ2xlRGlmZiIsImdldE5lYXJlc3RBbmdsZSIsInZhbHVlIiwibWluQW5nbGUiLCJtYXhBbmdsZSIsImxpc3RzIiwiTGlzdCIsInRpbWVFbmQiLCJ0aW1lRXhjYW5nZSIsImlzRGlzcGxhY2VtZW50IiwiaW5pdERyYWdnYWJsZSIsIm1vdmVIYW5kbGVyIiwibGlzdCIsIm9uRW5kRGlzcGxheWNlbWVudCIsImZpeFBvc2l0aW9ucyIsImdldEN1cnJlbnRGaXhQb3NpdGlvbiIsImN1cnJlbnRJbmRleCIsImV4Y2FuZ2VJbmRleCIsIm1vdmVPclNhdmUiLCJzb3J0ZWREcmFnZ2FibGVzIiwiZ2V0U29ydGVkRHJhZ2dhYmxlcyIsInRhcmdldEluZGV4IiwiaW5pdFBvc2l0aW9ucyIsImNvbmNhdCIsImRlc3Ryb3kiLCJwb3NpdGlvbnMiLCJsaXN0RmFjdG9yeSIsInBhcmVudEVsZW1lbnQiLCJkcmFnZ2FibGVPcHRpb25zIiwibGlzdE9wdGlvbnMiLCJMaXN0U3dpdGNoZXIiLCJzdGVwT24iLCJpc09uIiwiZ2V0Q3VycmVudEZpeFBvc2l0aW9uV2l0aE9mZiIsIm1vdmVEcmFnZ2FibGUiLCJmaXhUb09mZiIsIm1vdmVEcmFnZ2FibGVUb09mZiIsImZpeE9mZlBvc2l0aW9uIiwibGlzdFN3aXRjaGVyRmFjdG9yeSIsImRyYWdnYWJsZUVsZW1lbnRzIiwicG9zaXRpb25UeXBlIiwibm90Q3Jvc3NpbmciLCJmbG9hdExlZnQiLCJmbG9hdFJpZ2h0IiwicG9zaXRpb25GYWN0b3J5IiwidHlwZSIsIl9vcHRpb25zIiwicmVjdGFuZ2xlTGlzdCIsImluZGV4ZXNPZk5ld3MiLCJib3VuZFJlY3QiLCJzdGF0aWNSZWN0YW5nbGVJbmRleGVzIiwicmVkdWNlIiwiaW5kZXhlcyIsIl9yZWN0IiwicmVtb3ZhYmxlIiwiaW5kZXhPZlN0YXRpYyIsInN0YXRpY1JlY3QiLCJwYWRkaW5nVG9wTGVmdCIsInBhZGRpbmdCb3R0b21SaWdodCIsInlHYXBCZXR3ZWVuRHJhZ2dhYmxlcyIsIl9pbmRleGVzT2ZOZXdzIiwiYm91bmRhcnlQb2ludHMiLCJpc1ZhbGlkIiwiYXNzaW5nIiwicGFkZGluZ1RvcFJpZ2h0IiwicGFkZGluZ0JvdHRvbUxlZnQiLCJwYWRkaW5nVG9wTmVnUmlnaHQiLCJwYWRkaW5nQm90dG9tTmVnTGVmdCIsImdldFJpZ2h0VG9wUG9pbnQiLCJfaW5kZXgiLCJnZXRMZWZ0Qm90dG9tUG9pbnQiLCJzb3J0aW5nRmFjdG9yeSIsIm9sZE9ianNMaXN0IiwibmV3T2JqcyIsImluZGV4T2ZOZXdzIiwib2Jqc0xpc3QiLCJvYmoiLCJuZXdMaXN0IiwibGlzdE9sZFBvc2l0aW9uIiwibmV3T2JqIiwic2NvcGVzIiwiU2NvcGUiLCJzY29wZSIsInNob3RUYXJnZXRzIiwiY2F0Y2hEcmFnZ2FibGUiLCJzb3J0IiwiYSIsImIiLCJnZXRSZWN0YW5nbGUiLCJpbm5lckRyYWdnYWJsZXMiLCJ0YXJnZXRJbmRleGVzIiwiZm4iLCJjdXJyZW50U2NvcGUiLCJhZGREcmFnZ2FibGVUb1Njb3BlIiwiYWRkVGFyZ2V0VG9TY29wZSIsImFkZFRhcmdldCIsIlRhcmdldCIsInNjb3BlRmFjdG9yeSIsInRhcmdldEVsZW1lbnRzIiwidGFyZ2V0T3B0aW9ucyIsInNjb3BlT3B0aW9ucyIsInNwaWRlcnMiLCJTcGlkZXIiLCJkQW5nbGUiLCJzdGFydFJhZGl1cyIsImVuZFJhZGl1cyIsImxpbmVXaWR0aCIsInN0cm9rZVN0eWxlIiwic3Ryb2tlIiwic29ydGluZyIsInBvc2l0aW9uaW5nIiwib25BZGQiLCJiZWZvcmVBZGQiLCJvblJlbW92ZSIsInRhcmdldFJlY3RhbmdsZSIsImRyYWdnYWJsZVNxdWFyZSIsInJlY3RhbmdsZXMiLCJpbmRleGVzT2ZOZXciLCJuZXdEcmFnZ2FibGVzSW5kZXgiLCJhZGRSZW1vdmVPbk1vdmUiLCJwdXNoSW5uZXJEcmFnZ2FibGUiLCJyZW1vdmVIYW5kbGVyIiwidG91Y2hJZCIsInJ1bGVzIiwic3VtIiwicnVsZSIsImFwcGVuZEZpcnN0Q2hpbGQiLCJub2RlIiwiZmlyc3RDaGlsZCIsImluc2VydEJlZm9yZSIsImFwcGVuZENoaWxkIiwic3RvcCIsInN0ZXAiLCJzZXRTdHlsZSIsImNzc1RleHQiLCJrZXkiLCJybmQiLCJyb3VuZCIsInJhbmRvbSIsInRvSGV4U3RyaW5nIiwiZGlnaXQiLCJzdHIiLCJyZWN0YWdsZSIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJoYXNDbGFzcyIsImMiLCJyZSIsIlJlZ0V4cCIsImNsYXNzTmFtZSIsImFycmF5Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFD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QUFpRSxVQUFqRSxFQUE2RSxFQUE3RSxDQUFwQjtBQUNEOztBQUVELFNBQVM0QyxVQUFULENBQW9Ca1AsS0FBcEIsRUFBMkJqUCxHQUEzQixFQUFnQztBQUM5QixPQUFLLElBQUluUSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHb2YsS0FBSyxDQUFDM1osTUFBMUIsRUFBa0N6RixDQUFDLEVBQW5DLEVBQXVDO0FBQ3JDLFFBQUlvZixLQUFLLENBQUNwZixDQUFELENBQUwsS0FBYW1RLEdBQWpCLEVBQXNCO0FBQ3BCaVAsV0FBSyxDQUFDcFAsTUFBTixDQUFhaFEsQ0FBYixFQUFnQixDQUFoQjtBQUNBQSxPQUFDO0FBQ0Y7QUFDRjs7QUFDRCxTQUFPb2YsS0FBUDtBQUNEOztBQUVELElBQU1sZ0IsSUFBSSxHQUFHO0FBQ1hzTSxrQkFBZ0IsRUFBaEJBLGdCQURXO0FBRVgwRCxjQUFZLEVBQVpBLFlBRlc7QUFHWDhGLHdCQUFzQixFQUF0QkEsc0JBSFc7QUFJWDRJLGtCQUFnQixFQUFoQkEsZ0JBSlc7QUFLWDdYLE9BQUssRUFBTEEsS0FMVztBQU1Yb1ksVUFBUSxFQUFSQSxRQU5XO0FBT1hsWSxhQUFXLEVBQVhBLFdBUFc7QUFRWFEsY0FBWSxFQUFaQSxZQVJXO0FBU1hzWSxVQUFRLEVBQVJBLFFBVFc7QUFVWC9QLFVBQVEsRUFBUkEsUUFWVztBQVdYSyxhQUFXLEVBQVhBLFdBWFc7QUFZWGEsWUFBVSxFQUFWQTtBQVpXLENBQWI7QUFlQTtBQWVlaFIsbUVBQWYsRSIsImZpbGUiOiJpbmRleC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIkRyYWdlZVwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJEcmFnZWVcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiRHJhZ2VlXCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8qIVxuICogZ2V0U3R5bGVQcm9wZXJ0eSB2MS4wLjRcbiAqIG9yaWdpbmFsIGJ5IGthbmdheFxuICogaHR0cDovL3BlcmZlY3Rpb25raWxscy5jb20vZmVhdHVyZS10ZXN0aW5nLWNzcy1wcm9wZXJ0aWVzL1xuICogTUlUIGxpY2Vuc2VcbiAqL1xuXG4vKmpzaGludCBicm93c2VyOiB0cnVlLCBzdHJpY3Q6IHRydWUsIHVuZGVmOiB0cnVlICovXG4vKmdsb2JhbCBkZWZpbmU6IGZhbHNlLCBleHBvcnRzOiBmYWxzZSwgbW9kdWxlOiBmYWxzZSAqL1xuXG4oIGZ1bmN0aW9uKCB3aW5kb3cgKSB7XG5cbid1c2Ugc3RyaWN0JztcblxudmFyIHByZWZpeGVzID0gJ1dlYmtpdCBNb3ogbXMgTXMgTycuc3BsaXQoJyAnKTtcbnZhciBkb2NFbGVtU3R5bGUgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGU7XG5cbmZ1bmN0aW9uIGdldFN0eWxlUHJvcGVydHkoIHByb3BOYW1lICkge1xuICBpZiAoICFwcm9wTmFtZSApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyB0ZXN0IHN0YW5kYXJkIHByb3BlcnR5IGZpcnN0XG4gIGlmICggdHlwZW9mIGRvY0VsZW1TdHlsZVsgcHJvcE5hbWUgXSA9PT0gJ3N0cmluZycgKSB7XG4gICAgcmV0dXJuIHByb3BOYW1lO1xuICB9XG5cbiAgLy8gY2FwaXRhbGl6ZVxuICBwcm9wTmFtZSA9IHByb3BOYW1lLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgcHJvcE5hbWUuc2xpY2UoMSk7XG5cbiAgLy8gdGVzdCB2ZW5kb3Igc3BlY2lmaWMgcHJvcGVydGllc1xuICB2YXIgcHJlZml4ZWQ7XG4gIGZvciAoIHZhciBpPTAsIGxlbiA9IHByZWZpeGVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrICkge1xuICAgIHByZWZpeGVkID0gcHJlZml4ZXNbaV0gKyBwcm9wTmFtZTtcbiAgICBpZiAoIHR5cGVvZiBkb2NFbGVtU3R5bGVbIHByZWZpeGVkIF0gPT09ICdzdHJpbmcnICkge1xuICAgICAgcmV0dXJuIHByZWZpeGVkO1xuICAgIH1cbiAgfVxufVxuXG4vLyB0cmFuc3BvcnRcbmlmICggdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kICkge1xuICAvLyBBTURcbiAgZGVmaW5lKCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gZ2V0U3R5bGVQcm9wZXJ0eTtcbiAgfSk7XG59IGVsc2UgaWYgKCB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgKSB7XG4gIC8vIENvbW1vbkpTIGZvciBDb21wb25lbnRcbiAgbW9kdWxlLmV4cG9ydHMgPSBnZXRTdHlsZVByb3BlcnR5O1xufSBlbHNlIHtcbiAgLy8gYnJvd3NlciBnbG9iYWxcbiAgd2luZG93LmdldFN0eWxlUHJvcGVydHkgPSBnZXRTdHlsZVByb3BlcnR5O1xufVxuXG59KSggd2luZG93ICk7XG4iLCJpbXBvcnQgdXRpbCBmcm9tICcuL3V0aWwnXG5pbXBvcnQgeyBHZW9tZXRyeSB9IGZyb20gJy4vZ2VvbWV0cnknXG5pbXBvcnQgeyBEcmFnZ2FibGUgfSBmcm9tICcuL2RyYWdnYWJsZSdcbmltcG9ydCB7IGJvdW5kIH0gZnJvbSAnLi9ib3VuZCdcblxuY29uc3QgRHJhZ2VlID0geyB1dGlsLCBEcmFnZ2FibGUsIGJvdW5kIH0vL3RvZG8gcmVtb3ZlIGFmdGVyIHJlZmFjdG9yZVxuXG5jb25zdCBhcmNTbGlkZXJzID0gW11cblxuZnVuY3Rpb24gQXJjU2xpZGVyKGFyZWEsIGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgY29uc3QgYXJlYVJlY3RhbmdsZSA9IEdlb21ldHJ5LmNyZWF0ZVJlY3RhbmdsZUZyb21FbGVtZW50KGFyZWEsIGFyZWEpXG4gIGNvbnN0IGhhbGZTaXplID0gR2VvbWV0cnkuZ2V0U2l6ZU9mRWxlbWVudChlbGVtZW50KS5tdWx0KDAuNSlcbiAgbGV0IGlcbiAgdGhpcy5vcHRpb25zID0ge1xuICAgIGNlbnRlcjogYXJlYVJlY3RhbmdsZS5nZXRDZW50ZXIoKSxcbiAgICByYWRpdXM6IGFyZWFSZWN0YW5nbGUuZ2V0TWluU2lkZSgpIC8gMixcbiAgICBzdGFydEFuZ2xlOiBNYXRoLlBJLFxuICAgIGVuZEFuZ2xlOiAwLFxuICAgIGFuZ2xlczogW01hdGguUEksIC1NYXRoLlBJIC8gNCwgMCwgTWF0aC5QSSAvIDQsIE1hdGguUEkgLyAyXSxcbiAgICBvbkNoYW5nZTogZnVuY3Rpb24oKSB7fSxcbiAgICB0aW1lOiA1MDBcbiAgfVxuICBmb3IgKGkgaW4gb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICB0aGlzLm9wdGlvbnNbaV0gPSBvcHRpb25zW2ldXG4gICAgfVxuICB9XG4gIHRoaXMuc2hpZnRlZENlbnRlciA9IHRoaXMub3B0aW9ucy5jZW50ZXIuc3ViKGhhbGZTaXplKVxuICB0aGlzLm9uQ2hhbmdlID0gdGhpcy5vcHRpb25zLm9uQ2hhbmdlXG4gIGFyY1NsaWRlcnMucHVzaCh0aGlzKVxuICB0aGlzLmFyZWEgPSBhcmVhXG4gIHRoaXMuaW5pdChlbGVtZW50KVxufVxuXG5BcmNTbGlkZXIucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbihlbGVtZW50KSB7XG4gIGNvbnN0IHRoYXQgPSB0aGlzLFxuICAgIGFuZ2xlID0gdGhpcy5vcHRpb25zLnN0YXJ0QW5nbGUsXG4gICAgcG9zaXRpb24gPSBHZW9tZXRyeS5nZXRQb2ludEZyb21SYWRpYWxTeXN0ZW0oXG4gICAgICAgICAgICBhbmdsZSxcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5yYWRpdXMsXG4gICAgICAgICAgICB0aGlzLnNoaWZ0ZWRDZW50ZXJcbiAgICAgICAgKSxcbiAgICBib3VuZCA9IERyYWdlZS5ib3VuZC50b0FyYyhcbiAgICAgICAgICAgIHRoYXQuc2hpZnRlZENlbnRlcixcbiAgICAgICAgICAgIHRoYXQub3B0aW9ucy5yYWRpdXMsXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuc3RhcnRBbmdsZSxcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5lbmRBbmdsZVxuICAgICAgICApXG5cbiAgdGhpcy5hbmdsZSA9IGFuZ2xlXG4gIHRoaXMuZHJhZ2dhYmxlID0gbmV3IERyYWdlZS5EcmFnZ2FibGUoZWxlbWVudCwge1xuICAgIHBhcmVudDogdGhpcy5hcmVhLFxuICAgIGJvdW5kOiBib3VuZCxcbiAgICBwb3NpdGlvbjogcG9zaXRpb24sXG4gICAgb25Nb3ZlOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoYXQuY2hhbmdlKClcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICB9KVxufVxuXG5BcmNTbGlkZXIucHJvdG90eXBlLnVwZGF0ZUFuZ2xlID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuYW5nbGUgPSBHZW9tZXRyeS5nZXRBbmdsZSh0aGlzLnNoaWZ0ZWRDZW50ZXIsIHRoaXMuZHJhZ2dhYmxlLnBvc2l0aW9uKVxufVxuXG5BcmNTbGlkZXIucHJvdG90eXBlLmNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnVwZGF0ZUFuZ2xlKClcbi8vICAgICAgdmFyIGFuZ2xlID0gR2VvbWV0cnkuZ2V0TmVhcmVzdEFuZ2xlKHRoaXMub3B0aW9ucy5hbmdsZXMsIHRoaXMuYW5nbGUpO1xuLy8gICAgICB0aGlzLnNldEFuZ2xlKGFuZ2xlLHRoaXMub3B0aW9ucy50aW1lKTtcbiAgdGhpcy5vbkNoYW5nZSh0aGlzLmFuZ2xlKVxufVxuXG5BcmNTbGlkZXIucHJvdG90eXBlLnNldEFuZ2xlID0gZnVuY3Rpb24oYW5nbGUsIHRpbWUpIHtcbiAgY29uc3QgcG9zaXRpb24gPSBHZW9tZXRyeS5nZXRQb2ludEZyb21SYWRpYWxTeXN0ZW0oXG4gICAgdGhpcy5hbmdsZSxcbiAgICB0aGlzLm9wdGlvbnMucmFkaXVzLFxuICAgIHRoaXMuc2hpZnRlZENlbnRlclxuICApXG4gIHRoaXMuYW5nbGUgPSBHZW9tZXRyeS5ub3JtYWxpemVBbmdsZShhbmdsZSwgcG9zaXRpb24pXG4gIHRoaXMuZHJhZ2dhYmxlLm1vdmUocG9zaXRpb24sIHRpbWV8fDAsIHRydWUsIHRydWUpXG4gIHRoaXMub25DaGFuZ2UodGhpcy5hbmdsZSlcbn1cblxuZXhwb3J0IHsgYXJjU2xpZGVycywgQXJjU2xpZGVyIH1cbiIsIid1c2Ugc3RyaWN0J1xuaW1wb3J0IHsgR2VvbWV0cnkgfSBmcm9tICcuL2dlb21ldHJ5J1xuaW1wb3J0IHsgUG9pbnQgfSBmcm9tICcuL2dlb21ldHJ5J1xuXG5mdW5jdGlvbiBib3VuZFRvUmVjdGFuZ2xlKHJlY3RhbmdsZSkge1xuICByZXR1cm4gZnVuY3Rpb24ocG9pbnQsIHNpemUpIHtcbiAgICBjb25zdCBjYWxjUG9pbnQgPSBwb2ludC5jbG9uZSgpLFxuICAgICAgcmVjdFAyID0gcmVjdGFuZ2xlLmdldFAzKClcblxuICAgIGlmIChyZWN0YW5nbGUucG9zaXRpb24ueCA+IGNhbGNQb2ludC54KSB7XG4gICAgICAoY2FsY1BvaW50LnggPSByZWN0YW5nbGUucG9zaXRpb24ueClcbiAgICB9XG4gICAgaWYgKHJlY3RhbmdsZS5wb3NpdGlvbi55ID4gY2FsY1BvaW50LnkpIHtcbiAgICAgIGNhbGNQb2ludC55ID0gcmVjdGFuZ2xlLnBvc2l0aW9uLnlcbiAgICB9XG4gICAgaWYgKHJlY3RQMi54IDwgY2FsY1BvaW50LnggKyBzaXplLngpIHtcbiAgICAgIGNhbGNQb2ludC54ID0gcmVjdFAyLnggLSBzaXplLnhcbiAgICB9XG4gICAgaWYgKHJlY3RQMi55IDwgY2FsY1BvaW50LnkgKyBzaXplLnkpIHtcbiAgICAgIGNhbGNQb2ludC55ID0gcmVjdFAyLnkgLSBzaXplLnlcbiAgICB9XG5cbiAgICByZXR1cm4gY2FsY1BvaW50XG4gIH1cbn1cblxuZnVuY3Rpb24gYm91bmRUb0VsZW1lbnQoZWxlbWVudCwgcGFyZW50KSB7XG4gIGNvbnN0IHJldEZ1bmMgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gYm91bmQuYXBwbHkodGhpcywgYXJndW1lbnRzKVxuICB9XG4gIGxldCBib3VuZFxuXG4gIHJldEZ1bmMucmVmcmVzaCA9IGZ1bmN0aW9uKCkge1xuICAgIGJvdW5kID0gYm91bmRUb1JlY3RhbmdsZShHZW9tZXRyeS5jcmVhdGVSZWN0YW5nbGVGcm9tRWxlbWVudChlbGVtZW50LCBwYXJlbnQpKVxuICB9XG5cbiAgcmV0RnVuYy5yZWZyZXNoKClcbiAgcmV0dXJuIHJldEZ1bmNcbn1cblxuZnVuY3Rpb24gYm91bmRUb0xpbmVYKHgsIHN0YXJ0WSwgZW5kWSkge1xuICByZXR1cm4gZnVuY3Rpb24ocG9pbnQsIHNpemUpIHtcbiAgICBjb25zdCBjYWxjUG9pbnQgPSBwb2ludC5jbG9uZSgpXG4gICAgY2FsY1BvaW50LnggPSB4XG4gICAgaWYgKHN0YXJ0WSA+IGNhbGNQb2ludC55KSB7XG4gICAgICBjYWxjUG9pbnQueSA9IHN0YXJ0WVxuICAgIH1cbiAgICBpZiAoZW5kWSA8IGNhbGNQb2ludC55ICsgc2l6ZS55KSB7XG4gICAgICBjYWxjUG9pbnQueSA9IGVuZFkgLSBzaXplLnlcbiAgICB9XG5cbiAgICByZXR1cm4gY2FsY1BvaW50XG4gIH1cbn1cblxuZnVuY3Rpb24gYm91bmRUb0xpbmVZKHksIHN0YXJ0WCwgZW5kWCkge1xuICByZXR1cm4gZnVuY3Rpb24ocG9pbnQsIHNpemUpIHtcbiAgICBjb25zdCBjYWxjUG9pbnQgPSBwb2ludC5jbG9uZSgpXG4gICAgY2FsY1BvaW50LnkgPSB5XG4gICAgaWYgKHN0YXJ0WCA+IGNhbGNQb2ludC54KSB7XG4gICAgICBjYWxjUG9pbnQueCA9IHN0YXJ0WFxuICAgIH1cbiAgICBpZiAoZW5kWCA8IGNhbGNQb2ludC54ICsgc2l6ZS54KSB7XG4gICAgICBjYWxjUG9pbnQueCA9IGVuZFggLSBzaXplLnhcbiAgICB9XG4gICAgcmV0dXJuIGNhbGNQb2ludFxuICB9XG59XG5cbmZ1bmN0aW9uIGJvdW5kVG9MaW5lKHN0YXJ0LCBlbmQpIHtcbiAgY29uc3QgYWxwaGEgPSBNYXRoLmF0YW4yKGVuZC55IC0gc3RhcnQueSwgZW5kLnggLSBzdGFydC54KSxcbiAgICBiZXRhID0gYWxwaGEgKyBNYXRoLlBJIC8gMixcbiAgICBzb21lSyA9IDEwLFxuICAgIGNvc0JldGEgPSBNYXRoLmNvcyhiZXRhKSxcbiAgICBzaW5CZXRhID0gTWF0aC5zaW4oYmV0YSlcblxuICByZXR1cm4gZnVuY3Rpb24ocG9pbnQsIHNpemUpIHtcbiAgICBjb25zdCBwb2ludDIgPSBuZXcgUG9pbnQocG9pbnQueCArIHNvbWVLICogY29zQmV0YSwgcG9pbnQueSArIHNvbWVLICogc2luQmV0YSksXG4gICAgICBuZXdFbmQgPSBHZW9tZXRyeS5nZXRQb2ludEluTGluZUJ5TGVuZ2h0KGVuZCwgc3RhcnQsIHNpemUueClcbiAgICBsZXQgcG9pbnRDcm9zc2luZyA9IEdlb21ldHJ5LmRpcmVjdENyb3NzaW5nKHN0YXJ0LCBlbmQsIHBvaW50LCBwb2ludDIpXG5cbiAgICBwb2ludENyb3NzaW5nID0gR2VvbWV0cnkuYm91bmRUb0xpbmUoc3RhcnQsIG5ld0VuZCwgcG9pbnRDcm9zc2luZylcbiAgICByZXR1cm4gcG9pbnRDcm9zc2luZ1xuICB9XG59XG5cbmZ1bmN0aW9uIGJvdW5kVG9DaXJjbGUoY2VudGVyLCByYWRpdXMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHBvaW50LCBfc2l6ZSkge1xuICAgIGNvbnN0IGJvdW5kZWRQb2ludCA9IEdlb21ldHJ5LmdldFBvaW50SW5MaW5lQnlMZW5naHQoY2VudGVyLCBwb2ludCwgcmFkaXVzKVxuICAgIHJldHVybiBib3VuZGVkUG9pbnRcbiAgfVxufVxuXG5mdW5jdGlvbiBib3VuZFRvQXJjKGNlbnRlciwgcmFkaXVzLCBzdGFydEFnbGUsIGVuZEFuZ2xlKSB7XG4gIHJldHVybiBmdW5jdGlvbihwb2ludCwgX3NpemUpIHtcbiAgICBjb25zdCBib3VuZFN0YXJ0QW5nbGUgPSB0eXBlb2Ygc3RhcnRBZ2xlID09PSAnZnVuY3Rpb24nID8gc3RhcnRBZ2xlKCkgOiBzdGFydEFnbGVcbiAgICBjb25zdCBib3VuZEVuZHRBbmdsZSA9IHR5cGVvZiBzdGFydEFnbGUgPT09ICdmdW5jdGlvbicgPyBlbmRBbmdsZSgpIDogZW5kQW5nbGVcblxuICAgIGxldCBhbmdsZSA9IEdlb21ldHJ5LmdldEFuZ2xlKGNlbnRlciwgcG9pbnQpXG4gICAgYW5nbGUgPSBHZW9tZXRyeS5ub3JtYWxpemVBbmdsZShhbmdsZSlcbiAgICBhbmdsZSA9IEdlb21ldHJ5LmJvdW5kQW5nbGUoYm91bmRTdGFydEFuZ2xlLCBib3VuZEVuZHRBbmdsZSwgYW5nbGUpXG4gICAgcmV0dXJuIEdlb21ldHJ5LmdldFBvaW50RnJvbVJhZGlhbFN5c3RlbShhbmdsZSwgcmFkaXVzLCBjZW50ZXIpXG4gIH1cbn1cblxuY29uc3QgYm91bmQgPSB7XG4gIHRvUmVjdGFuZ2xlOiBib3VuZFRvUmVjdGFuZ2xlLFxuICB0b0VsZW1lbnQ6IGJvdW5kVG9FbGVtZW50LFxuICB0b0xpbmVYOiBib3VuZFRvTGluZVgsXG4gIHRvTGluZVk6IGJvdW5kVG9MaW5lWSxcbiAgdG9MaW5lOiBib3VuZFRvTGluZSxcbiAgdG9DaXJjbGU6IGJvdW5kVG9DaXJjbGUsXG4gIHRvQXJjOiBib3VuZFRvQXJjXG59XG5cbmV4cG9ydCB7IGJvdW5kIH1cbiIsImltcG9ydCB1dGlsIGZyb20gJy4vdXRpbCdcbmltcG9ydCB7IEdlb21ldHJ5LCBQb2ludCB9IGZyb20gJy4vZ2VvbWV0cnknXG5pbXBvcnQgeyBEcmFnZ2FibGUsIGV2ZW50cyB9IGZyb20gJy4vZHJhZ2dhYmxlJ1xuaW1wb3J0IHsgYm91bmQgfSBmcm9tICcuL2JvdW5kJ1xuXG5jb25zdCBEcmFnZWUgPSB7IHV0aWwsIGJvdW5kLCBEcmFnZ2FibGUgfS8vdG9kbyByZW1vdmUgYWZ0ZXIgcmVmYWN0b3JlXG5cbmNvbnN0IGlzVG91Y2ggPSAnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3dcbmNvbnN0IGNoYXJ0cyA9IFtdXG5cbmZ1bmN0aW9uIGdldEFycmF5V2l0aEJvdW5kSW5kZXhlcyhpbmRleCwgbGVuZ3RoKSB7XG4gIGNvbnN0IHJldEluZGV4ZXMgPSBbXVxuICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgcmV0SW5kZXhlcy5wdXNoKGluZGV4KVxuICAgIHJldEluZGV4ZXMucHVzaCgoaW5kZXggKyAxKSAlIGxlbmd0aClcbiAgfVxuXG4gIHJldHVybiByZXRJbmRleGVzXG59XG5cbmZ1bmN0aW9uIENoYXJ0KGFyZWEsIGVsZW1lbnRzLCBvcHRpb25zKSB7XG4gIGNvbnN0IGFyZWFSZWN0YW5nbGUgPSBHZW9tZXRyeS5jcmVhdGVSZWN0YW5nbGVGcm9tRWxlbWVudChhcmVhLCBhcmVhKVxuICBsZXQgaVxuICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgY2VudGVyOiBhcmVhUmVjdGFuZ2xlLmdldENlbnRlcigpLFxuICAgIHJhZGl1czogYXJlYVJlY3RhbmdsZS5nZXRNaW5TaWRlKCkgLyAyLFxuICAgIHRvdWNoUmFkaXVzOiBhcmVhUmVjdGFuZ2xlLmdldE1pblNpZGUoKSAvIDIsXG4gICAgYm91bmRBbmdsZTogTWF0aC5QSS85LFxuICAgIGZpbGxTdHlsZXM6IERyYWdlZS51dGlsLnJhbmdlKDAsIGVsZW1lbnRzLmxlbmd0aCkubWFwKGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIERyYWdlZS51dGlsLnJhbmRvbUNvbG9yKClcbiAgICB9KSxcbiAgICBpbml0QW5nbGVzOiBEcmFnZWUudXRpbC5yYW5nZSgtOTAsIDI3MCwgMzYwIC8gZWxlbWVudHMubGVuZ3RoKS5tYXAoZnVuY3Rpb24oYW5nbGUpIHtcbiAgICAgIHJldHVybiBHZW9tZXRyeS50b1JhZGlhbihhbmdsZSlcbiAgICB9KSxcbiAgICBvbkRyYXc6IGZ1bmN0aW9uKCkge30sXG4gICAgbGltaXRJbWc6IG51bGwsXG4gICAgbGltaXRJbWdPZmZzZXQ6IG5ldyBQb2ludCgwLCAwKSxcbiAgICBpc1NlbGVjdGFibGU6IGZhbHNlXG4gIH1cbiAgZm9yIChpIGluIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucy5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgdGhpcy5vcHRpb25zW2ldID0gb3B0aW9uc1tpXVxuICAgIH1cbiAgfVxuXG4gIGNoYXJ0cy5wdXNoKHRoaXMpXG4gIHRoaXMub25EcmF3ID0gdGhpcy5vcHRpb25zLm9uRHJhd1xuICB0aGlzLmFyZWEgPSBhcmVhXG4gIHRoaXMuYXJlYVJlY3RhbmdsZSA9IGFyZWFSZWN0YW5nbGVcbiAgdGhpcy5pbml0KGVsZW1lbnRzKVxufVxuXG5DaGFydC5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uKGVsZW1lbnRzKSB7XG4gIGNvbnN0IHRoYXQgPSB0aGlzXG4gIHRoaXMuY2FudmFzID0gRHJhZ2VlLnV0aWwuY3JlYXRlQ2FudmFzKHRoaXMuYXJlYSwgdGhpcy5hcmVhUmVjdGFuZ2xlKVxuICB0aGlzLmNvbnRleHQgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpXG4gIHRoaXMuZHJhZ2dhYmxlcyA9IGVsZW1lbnRzLm1hcChmdW5jdGlvbihlbGVtZW50LCBpKSB7XG4gICAgY29uc3QgYW5nbGUgPSB0aGlzLm9wdGlvbnMuaW5pdEFuZ2xlc1tpXSxcbiAgICAgIGhhbGZTaXplID0gR2VvbWV0cnkuZ2V0U2l6ZU9mRWxlbWVudChlbGVtZW50KS5tdWx0KDAuNSksXG4gICAgICBwb3NpdGlvbiA9IEdlb21ldHJ5LmdldFBvaW50RnJvbVJhZGlhbFN5c3RlbShcbiAgICAgICAgICAgICAgICBhbmdsZSxcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMudG91Y2hSYWRpdXMsXG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLmNlbnRlci5zdWIoaGFsZlNpemUpXG4gICAgICAgICAgICApLFxuICAgICAgYm91bmQgPSBEcmFnZWUuYm91bmQudG9BcmMoXG4gICAgICAgICAgICAgICAgdGhhdC5vcHRpb25zLmNlbnRlci5zdWIoaGFsZlNpemUpLFxuICAgICAgICAgICAgICAgIHRoYXQub3B0aW9ucy50b3VjaFJhZGl1cyxcbiAgICAgICAgICAgICAgICB0aGF0LmdldEJvdW5kQW5nbGUoaSwgZmFsc2UpLFxuICAgICAgICAgICAgICAgIHRoYXQuZ2V0Qm91bmRBbmdsZShpLCB0cnVlKVxuICAgICAgICAgICAgKVxuXG4gICAgcmV0dXJuIG5ldyBEcmFnZWUuRHJhZ2dhYmxlKGVsZW1lbnQsIHtcbiAgICAgIHBhcmVudDogdGhpcy5hcmVhLFxuICAgICAgYm91bmQ6IGJvdW5kLFxuICAgICAgcG9zaXRpb246IHBvc2l0aW9uLFxuICAgICAgb25Nb3ZlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhhdC5kcmF3KClcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICB9KVxuICB9LCB0aGlzKVxuXG4gIHRoaXMuaXNJbml0ID0gdHJ1ZVxuICBpZiAodGhpcy5vcHRpb25zLmlzU2VsZWN0YWJsZSkge1xuICAgIHRoaXMuaW5pdFNlbGVjdCgpXG4gIH1cbiAgdGhpcy5kcmF3KClcbn1cblxuQ2hhcnQucHJvdG90eXBlLmluaXRTZWxlY3QgPSBmdW5jdGlvbigpIHtcbiAgY29uc3QgdGhhdCA9IHRoaXNcbiAgdGhpcy5zZXRBY3RpdmVBcmMoLTEpXG5cbiAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihldmVudHMuc3RhcnQsIGZ1bmN0aW9uKGUpIHtcbiAgICBsZXQgcG9pbnQgPSBuZXcgUG9pbnQoXG4gICAgICBpc1RvdWNoID8gZS5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWCA6IGUuY2xpZW50WCxcbiAgICAgIGlzVG91Y2ggPyBlLmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VZIDogZS5jbGllbnRZXG4gICAgKVxuXG4gICAgaWYgKCF0aGF0LmNhbnZhc09mZnNldCkge1xuICAgICAgdGhhdC5jYW52YXNPZmZzZXQgPSBHZW9tZXRyeS5nZXRPZmZzZXQodGhhdC5jYW52YXMpXG4gICAgfVxuXG4gICAgcG9pbnQgPSBwb2ludC5zdWIodGhhdC5jYW52YXNPZmZzZXQpXG4gICAgY29uc3QgaW5kZXggPSB0aGF0LmdldEFyY09uUG9pbnQocG9pbnQpXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgdGhhdC5zZXRBY3RpdmVBcmMoKHRoYXQuYWN0aXZlQXJjSW5kZXggIT09IGluZGV4KSA/IGluZGV4IDogLTEpXG4gICAgfVxuICB9KVxufVxuXG5DaGFydC5wcm90b3R5cGUudXBkYXRlQW5nbGVzID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuYW5nbGVzID0gdGhpcy5kcmFnZ2FibGVzLm1hcChmdW5jdGlvbihkcmFnZ2FibGUpIHtcbiAgICBjb25zdCBoYWxmU2l6ZSA9IGRyYWdnYWJsZS5nZXRTaXplKCkubXVsdCgwLjUpXG4gICAgcmV0dXJuIEdlb21ldHJ5LmdldEFuZ2xlKHRoaXMub3B0aW9ucy5jZW50ZXIuc3ViKGhhbGZTaXplKSwgZHJhZ2dhYmxlLnBvc2l0aW9uKVxuICB9LCB0aGlzKVxufVxuXG5DaGFydC5wcm90b3R5cGUuZ2V0Qm91bmRBbmdsZSA9IGZ1bmN0aW9uKGluZGV4LCBpc0Nsb3NzaW5nKSB7XG4gIGNvbnN0IHRoYXQgPSB0aGlzLCBzaWduID0gaXNDbG9zc2luZz8xOi0xXG5cbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIGxldCBpID0gKGluZGV4ICsgc2lnbikgJSB0aGF0LmFuZ2xlcy5sZW5ndGhcbiAgICBpZiAoaSA8IDApIHtcbiAgICAgIGkgKz0gdGhhdC5hbmdsZXMubGVuZ3RoXG4gICAgfVxuICAgIHJldHVybiBHZW9tZXRyeS5ub3JtYWxpemVBbmdsZSh0aGF0LmFuZ2xlc1tpXSAtIHNpZ24gKiB0aGF0Lm9wdGlvbnMuYm91bmRBbmdsZSlcbiAgfVxufVxuXG5DaGFydC5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uKCkge1xuICBpZiAoIXRoaXMuaXNJbml0KSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICB0aGlzLnVwZGF0ZUFuZ2xlcygpXG4gIHRoaXMuY29udGV4dC5jbGVhclJlY3QoMCwgMCwgdGhpcy5hcmVhUmVjdGFuZ2xlLnNpemUueCwgdGhpcy5hcmVhUmVjdGFuZ2xlLnNpemUueSlcbiAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goZnVuY3Rpb24oX2RyYWdnYWJsZSwgaW5kZXgpIHtcbiAgICB0aGlzLmRyYXdBcmModGhpcy5jb250ZXh0LCB0aGlzLm9wdGlvbnMuY2VudGVyLCB0aGlzLm9wdGlvbnMucmFkaXVzLCBpbmRleClcbiAgfSwgdGhpcylcblxuICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaChmdW5jdGlvbihfZHJhZ2dhYmxlLCBpbmRleCkge1xuICAgIGxldCBlbmFibGVJbmRleGVzXG4gICAgaWYgKHRoaXMub3B0aW9ucy5pc1NlbGVjdGFibGUpIHtcbiAgICAgIGVuYWJsZUluZGV4ZXMgPSBnZXRBcnJheVdpdGhCb3VuZEluZGV4ZXModGhpcy5hY3RpdmVBcmNJbmRleCwgdGhpcy5kcmFnZ2FibGVzLmxlbmd0aClcbiAgICAgIGlmIChlbmFibGVJbmRleGVzLmluZGV4T2YoaW5kZXgpICE9PSAtMSkge1xuICAgICAgICB0aGlzLmRyYXdMaW1pdEltZyhpbmRleClcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kcmF3TGltaXRJbWcoaW5kZXgpXG4gICAgfVxuICB9LCB0aGlzKVxuICB0aGlzLm9uRHJhdygpXG59XG5cbkNoYXJ0LnByb3RvdHlwZS5jcmVhdGVDbG9uZSA9IGZ1bmN0aW9uKGVsZW1lbnQsIG9wdGlvbnMgPSB7fSkge1xuICBjb25zdCB0aGF0ID0gdGhpc1xuICBpZiAoIXRoaXMuaXNJbml0KSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgY29uc3QgcmVjdGFuZ2xlID0gR2VvbWV0cnkuY3JlYXRlUmVjdGFuZ2xlRnJvbUVsZW1lbnQoZWxlbWVudCwgZWxlbWVudClcbiAgY29uc3Qgb3B0cyA9IE9iamVjdC5hc3NpZ24oe1xuICAgIGNlbnRlcjogcmVjdGFuZ2xlLmdldENlbnRlcigpLFxuICAgIHJhZGl1czogcmVjdGFuZ2xlLmdldE1pblNpZGUoKSAvIDIsXG4gICAgZmlsbFN0eWxlczogdGhpcy5vcHRpb25zLmZpbGxTdHlsZXNcbiAgfSwgb3B0aW9ucylcblxuICBjb25zdCBjYW52YXMgPSBEcmFnZWUudXRpbC5jcmVhdGVDYW52YXMoZWxlbWVudCwgcmVjdGFuZ2xlKVxuICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJylcbiAgY29uc3QgY2xvbmVPYmogPSB7XG4gICAgZHJhdzogZnVuY3Rpb24oKSB7XG4gICAgICBjb250ZXh0LmNsZWFyUmVjdCgwLCAwLCByZWN0YW5nbGUuc2l6ZS54LCByZWN0YW5nbGUuc2l6ZS55KVxuICAgICAgdGhhdC5kcmFnZ2FibGVzLmZvckVhY2goZnVuY3Rpb24oX2RyYWdnYWJsZSwgaW5kZXgpIHtcbiAgICAgICAgdGhhdC5kcmF3QXJjKGNvbnRleHQsIG9wdHMuY2VudGVyLCBvcHRzLnJhZGl1cywgaW5kZXgpXG4gICAgICB9KVxuICAgIH1cbiAgfVxuICBjbG9uZU9iai5kcmF3KClcbiAgcmV0dXJuIGNsb25lT2JqXG59XG5cbkNoYXJ0LnByb3RvdHlwZS5nZXRGaWxsU3R5bGUgPSBmdW5jdGlvbihpbmRleCkge1xuICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5maWxsU3R5bGVzW2luZGV4XSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHRoaXMub3B0aW9ucy5maWxsU3R5bGVzW2luZGV4XSA9IHRoaXMub3B0aW9ucy5maWxsU3R5bGVzW2luZGV4XS5jYWxsKHRoaXMpXG4gIH1cbiAgcmV0dXJuIHRoaXMub3B0aW9ucy5maWxsU3R5bGVzW2luZGV4XVxufVxuXG5DaGFydC5wcm90b3R5cGUuZHJhd0FyYyA9IGZ1bmN0aW9uKGNvbnRleHQsIGNlbnRlciwgcmFkaXVzLCBpbmRleCkge1xuICBjb25zdCBzdGFydEFuZ2xlID0gdGhpcy5hbmdsZXNbaW5kZXhdLFxuICAgIGVuZEFuZ2xlID0gdGhpcy5hbmdsZXNbKGluZGV4KzEpJXRoaXMuYW5nbGVzLmxlbmd0aF0sXG4gICAgY29sb3IgPSB0aGlzLmdldEZpbGxTdHlsZShpbmRleClcblxuICBjb250ZXh0LmJlZ2luUGF0aCgpXG4gIGNvbnRleHQubW92ZVRvKGNlbnRlci54LCBjZW50ZXIueSlcbiAgY29udGV4dC5hcmMoY2VudGVyLngsIGNlbnRlci55LCByYWRpdXMsIHN0YXJ0QW5nbGUsIGVuZEFuZ2xlLCBmYWxzZSlcbiAgY29udGV4dC5saW5lVG8oY2VudGVyLngsIGNlbnRlci55KVxuICBjb250ZXh0LmNsb3NlUGF0aCgpXG4gIGNvbnRleHQuZmlsbFN0eWxlID0gY29sb3JcbiAgY29udGV4dC5maWxsKClcbn1cblxuQ2hhcnQucHJvdG90eXBlLmRyYXdMaW1pdEltZyA9IGZ1bmN0aW9uKGluZGV4KSB7XG4gIGxldCBwb2ludCwgaW1nXG4gIGlmICh0aGlzLm9wdGlvbnMubGltaXRJbWcpIHtcbiAgICBpbWcgPSB0aGlzLm9wdGlvbnMubGltaXRJbWcgaW5zdGFuY2VvZiBBcnJheSA/IHRoaXMub3B0aW9ucy5saW1pdEltZ1tpbmRleF0gOiB0aGlzLm9wdGlvbnMubGltaXRJbWdcbiAgfVxuXG4gIGlmIChpbWcpIHtcbiAgICBjb25zdCBhbmdsZSA9IEdlb21ldHJ5Lm5vcm1hbGl6ZUFuZ2xlKHRoaXMuYW5nbGVzW2luZGV4XSlcbiAgICBwb2ludCA9IG5ldyBQb2ludCgwLCAtaW1nLmhlaWdodCAvIDIpXG4gICAgcG9pbnQgPSBwb2ludC5hZGQodGhpcy5vcHRpb25zLmxpbWl0SW1nT2Zmc2V0KVxuICAgIHRoaXMuY29udGV4dC50cmFuc2xhdGUodGhpcy5hcmVhUmVjdGFuZ2xlLnNpemUueCAvIDIsIHRoaXMuYXJlYVJlY3RhbmdsZS5zaXplLnkgLyAyKVxuICAgIHRoaXMuY29udGV4dC5yb3RhdGUoYW5nbGUpXG4gICAgdGhpcy5jb250ZXh0LmRyYXdJbWFnZShpbWcsIHBvaW50LngsIHBvaW50LnkpXG4gICAgdGhpcy5jb250ZXh0LnNldFRyYW5zZm9ybSgxLCAwLCAwLCAxLCAwLCAwKVxuICB9XG59XG5cbkNoYXJ0LnByb3RvdHlwZS5nZXRBbmdsZXNEaWZmID0gZnVuY3Rpb24oKSB7XG4gIGNvbnN0IGFuZ2xlcyA9IHRoaXMuYW5nbGVzLnNsaWNlKDEpXG4gIGxldCBiYXNlQW5nbGUgPSB0aGlzLmFuZ2xlc1swXVxuXG4gIGFuZ2xlcy5wdXNoKGJhc2VBbmdsZSlcbiAgcmV0dXJuIGFuZ2xlcy5tYXAoZnVuY3Rpb24oYW5nbGUpIHtcbiAgICBjb25zdCBkaWZmQW5nbGUgPSBHZW9tZXRyeS5ub3JtYWxpemVBbmdsZShhbmdsZSAtIGJhc2VBbmdsZSlcbiAgICBiYXNlQW5nbGUgPSBhbmdsZVxuICAgIHJldHVybiBkaWZmQW5nbGVcbiAgfSlcbn1cblxuQ2hhcnQucHJvdG90eXBlLmdldFBlcmNlbnQgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuZ2V0QW5nbGVzRGlmZigpLm1hcChmdW5jdGlvbihkaWZmQW5nbGUpIHtcbiAgICByZXR1cm4gZGlmZkFuZ2xlIC8gKDIgKiBNYXRoLlBJKVxuICB9KVxufVxuXG5DaGFydC5wcm90b3R5cGUuZ2V0QXJjQmlzZWN0cml4cyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5nZXRBbmdsZXNEaWZmKCkubWFwKGZ1bmN0aW9uKGRpZmZBbmdsZSwgaSkge1xuICAgIHJldHVybiBHZW9tZXRyeS5ub3JtYWxpemVBbmdsZSh0aGlzLmFuZ2xlc1tpXSArIGRpZmZBbmdsZSAvIDIpXG4gIH0sIHRoaXMpXG59XG5cbkNoYXJ0LnByb3RvdHlwZS5nZXRBcmNPblBvaW50ID0gZnVuY3Rpb24ocG9pbnQpIHtcbiAgY29uc3QgYW5nbGUgPSBHZW9tZXRyeS5nZXRBbmdsZSh0aGlzLm9wdGlvbnMuY2VudGVyLCBwb2ludClcbiAgY29uc3QgcmFkaXVzID0gR2VvbWV0cnkuZ2V0RGlzdGFuY2UodGhpcy5vcHRpb25zLmNlbnRlciwgcG9pbnQpXG5cbiAgaWYgKHJhZGl1cyA+IHRoaXMub3B0aW9ucy5yYWRpdXMpIHtcbiAgICByZXR1cm4gLTFcbiAgfVxuXG4gIGxldCBvZmZzZXQgPSAtMSwgaSwgalxuICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5hbmdsZXMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAob2Zmc2V0ID09PSAtMSB8fCB0aGlzLmFuZ2xlc1tvZmZzZXRdID4gdGhpcy5hbmdsZXNbaV0pIHtcbiAgICAgIG9mZnNldCA9IGlcbiAgICB9XG4gIH1cbiAgZm9yIChpID0gMCwgaiA9IG9mZnNldDsgaSA8IHRoaXMuYW5nbGVzLmxlbmd0aDsgaSsrLCBqID0gKGkgKyBvZmZzZXQpICUgdGhpcy5hbmdsZXMubGVuZ3RoKSB7XG4gICAgaWYgKGFuZ2xlIDwgdGhpcy5hbmdsZXNbal0pIHtcbiAgICAgIGJyZWFrXG4gICAgfVxuICB9XG4gIGlmICgtLWogPCAwKSB7XG4gICAgaiArPSB0aGlzLmFuZ2xlcy5sZW5ndGhcbiAgfVxuICByZXR1cm4galxufVxuXG5DaGFydC5wcm90b3R5cGUuc2V0QW5nbGVzID0gZnVuY3Rpb24oYW5nbGVzKSB7XG4gIHRoaXMuYW5nbGVzID0gYW5nbGVzXG4gIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKGZ1bmN0aW9uKGRyYWdnYWJsZSwgaSkge1xuICAgIGNvbnN0IGFuZ2xlID0gdGhpcy5hbmdsZXNbaV0sXG4gICAgICBoYWxmU2l6ZSA9IGRyYWdnYWJsZS5nZXRTaXplKCkubXVsdCgwLjUpLFxuICAgICAgcG9zaXRpb24gPSBHZW9tZXRyeS5nZXRQb2ludEZyb21SYWRpYWxTeXN0ZW0oXG4gICAgICAgICAgICAgICAgYW5nbGUsXG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLnRvdWNoUmFkaXVzLFxuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5jZW50ZXIuc3ViKGhhbGZTaXplKVxuICAgICAgICAgICAgKVxuXG4gICAgZHJhZ2dhYmxlLm1vdmUocG9zaXRpb24sIDAsIHRydWUsIHRydWUpXG4gIH0sIHRoaXMpXG4gIHRoaXMuZHJhdygpXG59XG5cbkNoYXJ0LnByb3RvdHlwZS5zZXRBY3RpdmVBcmMgPSBmdW5jdGlvbihpbmRleCkge1xuICBjb25zdCBlbmFibGVJbmRleGVzID0gZ2V0QXJyYXlXaXRoQm91bmRJbmRleGVzKGluZGV4LCB0aGlzLmRyYWdnYWJsZXMubGVuZ3RoKVxuICB0aGlzLmFjdGl2ZUFyY0luZGV4ID0gaW5kZXhcbiAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goZnVuY3Rpb24oZHJhZ2dhYmxlLCBpKSB7XG4gICAgZHJhZ2dhYmxlLmVuYWJsZSA9IGVuYWJsZUluZGV4ZXMuaW5kZXhPZihpKSAhPT0gLTFcbiAgfSlcbiAgdGhpcy5kcmF3KClcbn1cblxuZXhwb3J0IHsgY2hhcnRzLCBDaGFydCB9XG4iLCIndXNlIHN0cmljdCdcblxuaW1wb3J0IHtcbiAgZ2V0RGVmYXVsdFBhcmVudCxcbiAgZ2V0VG91Y2hCeUlELFxuICBhZGRDbGFzcywgcmVtb3ZlQ2xhc3Ncbn0gZnJvbSAnLi91dGlsJ1xuXG5pbXBvcnQgRXZlbnQgZnJvbSAnLi9ldmVudCdcbmltcG9ydCBnZXRTdHlsZVByb3BlcnR5IGZyb20gJ2Rlc2FuZHJvLWdldC1zdHlsZS1wcm9wZXJ0eSdcbmltcG9ydCB7IGJvdW5kIH0gZnJvbSAnLi9ib3VuZCdcbmltcG9ydCB7IEdlb21ldHJ5LCBQb2ludCwgUmVjdGFuZ2xlIH0gZnJvbSAnLi9nZW9tZXRyeSdcbmltcG9ydCB7IGRlZmF1bHRTY29wZSB9IGZyb20gJy4vc2NvcGUnXG5cbmNvbnN0IERyYWdlZSA9IHsgYm91bmQsIEV2ZW50IH0gLy90b2RvIHJlbW92ZSBhZnRlciByZWZhY3RvcmVcblxuY29uc3QgaXNUb3VjaCA9ICdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdywgbW91c2VFdmVudHMgPSB7XG4gICAgc3RhcnQ6ICdtb3VzZWRvd24nLFxuICAgIG1vdmU6ICdtb3VzZW1vdmUnLFxuICAgIGVuZDogJ21vdXNldXAnXG4gIH0sIHRvdWNoRXZlbnRzID0ge1xuICAgIHN0YXJ0OiAndG91Y2hzdGFydCcsXG4gICAgbW92ZTogJ3RvdWNobW92ZScsXG4gICAgZW5kOiAndG91Y2hlbmQnXG4gIH0sXG4gIGV2ZW50cyA9IGlzVG91Y2ggPyB0b3VjaEV2ZW50cyA6IG1vdXNlRXZlbnRzLFxuICBkcmFnZ2FibGVzID0gW10sXG4gIHRyYW5zZm9ybVByb3BlcnR5ID0gZ2V0U3R5bGVQcm9wZXJ0eSgndHJhbnNmb3JtJyksXG4gIHRyYW5zaXRpb25Qcm9wZXJ0eSA9IGdldFN0eWxlUHJvcGVydHkoJ3RyYW5zaXRpb24nKVxuXG5mdW5jdGlvbiBwcmV2ZW50RG91YmxlSW5pdChkcmFnZ2FibGUpIHtcbiAgY29uc3QgbWVzc2FnZSA9IFwiZm9yIHRoaXMgZWxlbWVudCBEcmFnZWUuRHJhZ2dhYmxlIGlzIGFscmVhZHkgZXhpc3QsIGRvbid0IGNyZWF0ZSBpdCB0d2ljZSBcIlxuICBpZiAoZHJhZ2dhYmxlcy5zb21lKChleGlzdGluZykgPT4gZHJhZ2dhYmxlLmVsZW1lbnQgPT09IGV4aXN0aW5nLmVsZW1lbnQpKSB7XG4gICAgdGhyb3cgbWVzc2FnZVxuICB9XG4gIGRyYWdnYWJsZXMucHVzaChkcmFnZ2FibGUpXG59XG5cbmZ1bmN0aW9uIGFkZFRvRGVmYXVsdFNjb3BlKGRyYWdnYWJsZSkge1xuICBkZWZhdWx0U2NvcGUuYWRkRHJhZ2dhYmxlKGRyYWdnYWJsZSlcbn1cblxuY2xhc3MgRHJhZ2dhYmxlIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgb3B0aW9ucz17fSkge1xuICAgIGNvbnN0IHBhcmVudCA9IG9wdGlvbnMucGFyZW50IHx8IGdldERlZmF1bHRQYXJlbnQoZWxlbWVudClcbiAgICB0aGlzLnRhcmdldHMgPSBbXVxuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgcGFyZW50OiBwYXJlbnQsXG4gICAgICBib3VuZDogRHJhZ2VlLmJvdW5kLnRvRWxlbWVudChwYXJlbnQsIHBhcmVudCksXG4gICAgICBzdGFydEZpbHRlcjogZmFsc2UsXG4gICAgICBpc0NvbnRlbnRCb3hTaXplOiBmYWxzZSxcbiAgICAgIHBvc2l0aW9uOiBmYWxzZVxuICAgIH0sIG9wdGlvbnMpXG5cbiAgICB0aGlzLm9uRW5kID0gbmV3IERyYWdlZS5FdmVudCh0aGlzLCB7IGlzUmV2ZXJzZTogdHJ1ZSwgaXNTdG9wT25UcnVlOiB0cnVlIH0pXG4gICAgdGhpcy5vbk1vdmUgPSBuZXcgRHJhZ2VlLkV2ZW50KHRoaXMpXG4gICAgdGhpcy5vblN0YXJ0ID0gbmV3IERyYWdlZS5FdmVudCh0aGlzKVxuXG4gICAgdGhpcy5vbkVuZC5hZGQoKCkgPT4gdGhpcy5tb3ZlKHRoaXMucG9zaXRpb24sIDAsIHRydWUsIHRydWUpKVxuXG4gICAgaWYgKG9wdGlvbnMub25FbmQpIHtcbiAgICAgIHRoaXMub25FbmQuYWRkKG9wdGlvbnMub25FbmQpXG4gICAgfVxuICAgIGlmIChvcHRpb25zLm9uTW92ZSkge1xuICAgICAgdGhpcy5vbk1vdmUuYWRkKG9wdGlvbnMub25Nb3ZlKVxuICAgIH1cbiAgICBpZiAob3B0aW9ucy5vblN0YXJ0KSB7XG4gICAgICB0aGlzLm9uU3RhcnQuYWRkKG9wdGlvbnMub25TdGFydClcbiAgICB9XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFxuICAgIHRoaXMuYm91bmQgPSB0aGlzLm9wdGlvbnMuYm91bmRcbiAgICBwcmV2ZW50RG91YmxlSW5pdCh0aGlzKVxuICAgIERyYWdnYWJsZS5vbkNyZWF0ZS5maXJlKHRoaXMpXG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5fZW5hYmxlID0gdHJ1ZVxuICAgIHRoaXMub2Zmc2V0ID0gR2VvbWV0cnkuZ2V0T2Zmc2V0KHRoaXMuZWxlbWVudCwgdGhpcy5vcHRpb25zLnBhcmVudCwgdHJ1ZSlcbiAgICB0aGlzLmZpeFBvc2l0aW9uID0gdGhpcy5vZmZzZXRcbiAgICB0aGlzLnBvc2l0aW9uID0gdGhpcy5vZmZzZXRcbiAgICBpZiAodGhpcy5vcHRpb25zLnBvc2l0aW9uKSB7XG4gICAgICB0aGlzLmluaXRQb3NpdGlvbiA9IHRoaXMub3B0aW9ucy5wb3NpdGlvblxuICAgICAgdGhpcy5tb3ZlKHRoaXMuaW5pdFBvc2l0aW9uLCAwLCB0cnVlLCB0cnVlKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmluaXRQb3NpdGlvbiA9IHRoaXMub2Zmc2V0XG4gICAgfVxuICAgIHRoaXMuX2RyYWdTdGFydCA9IHRoaXMuZHJhZ1N0YXJ0LmJpbmQodGhpcylcbiAgICB0aGlzLl9kcmFnTW92ZSA9IHRoaXMuZHJhZ01vdmUuYmluZCh0aGlzKVxuICAgIHRoaXMuX2RyYWdFbmQgPSB0aGlzLmRyYWdFbmQuYmluZCh0aGlzKVxuXG4gICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuc3RhcnQsIHRoaXMuX2RyYWdTdGFydClcbiAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5zdGFydCwgdGhpcy5fZHJhZ1N0YXJ0KVxuXG4gICAgaWYgKHRoaXMuYm91bmQucmVmcmVzaCkge1xuICAgICAgdGhpcy5ib3VuZC5yZWZyZXNoKClcbiAgICB9XG4gIH1cblxuICByZWluaXQoKSB7XG4gICAgdGhpcy5vZmZzZXQgPSBHZW9tZXRyeS5nZXRPZmZzZXQodGhpcy5lbGVtZW50LCB0aGlzLm9wdGlvbnMucGFyZW50LCB0cnVlKVxuICAgIHRoaXMuZml4UG9zaXRpb24gPSB0aGlzLm9mZnNldFxuICAgIHRoaXMucG9zaXRpb24gPSB0aGlzLm9mZnNldFxuICAgIGlmICh0aGlzLm9wdGlvbnMucG9zaXRpb24pIHtcbiAgICAgIHRoaXMuaW5pdFBvc2l0aW9uID0gdGhpcy5vcHRpb25zLnBvc2l0aW9uXG4gICAgICB0aGlzLm1vdmUodGhpcy5pbml0UG9zaXRpb24sIDAsIHRydWUsIHRydWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5pdFBvc2l0aW9uID0gdGhpcy5vZmZzZXRcbiAgICB9XG5cbiAgICBpZiAodGhpcy5ib3VuZC5yZWZyZXNoKSB7XG4gICAgICB0aGlzLmJvdW5kLnJlZnJlc2goKVxuICAgIH1cbiAgfVxuXG4gIGdldFNpemUoX3JlY2FsdWxhdGUpIHtcbiAgICByZXR1cm4gR2VvbWV0cnkuZ2V0U2l6ZU9mRWxlbWVudCh0aGlzLmVsZW1lbnQsIHRoaXMub3B0aW9ucy5pc0NvbnRlbnRCb3hTaXplKVxuICB9XG5cbiAgZ2V0UG9zaXRpb24oKSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHRoaXMub2Zmc2V0LmFkZCh0aGlzLl90cmFuc2Zvcm1Qb3NpdGlvbiB8fCBuZXcgUG9pbnQoMCwgMCkpXG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb25cbiAgfVxuXG4gIGdldENlbnRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbi5hZGQodGhpcy5nZXRTaXplKCkubXVsdCgwLjUpKVxuICB9XG5cbiAgX3NldFRyYW5zbGF0ZShwb2ludCkge1xuICAgIHRoaXMuX3RyYW5zZm9ybVBvc2l0aW9uID0gcG9pbnRcblxuICAgIGxldCB0cmFuc2Zvcm0gPSB0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNmb3JtUHJvcGVydHldXG4gICAgbGV0IHRyYW5zbGF0ZUNzcyA9ICcgdHJhbnNsYXRlM2QoJyArIHBvaW50LnggKyAncHgsJyArIHBvaW50LnkgKyAncHgsIDBweCknXG5cbiAgICBjb25zdCB1YSA9IHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50XG4gICAgY29uc3QgbXNpZSA9IHVhLmluZGV4T2YoJ01TSUUgJylcblxuICAgIGlmIChtc2llKSB7XG4gICAgICB0cmFuc2xhdGVDc3MgPSAnIHRyYW5zbGF0ZSgnICsgcG9pbnQueCArICdweCwnICsgcG9pbnQueSArICdweCknXG4gICAgICBpZiAoIS90cmFuc2xhdGVcXChbXildK1xcKS8udGVzdCh0cmFuc2Zvcm0pKSB7XG4gICAgICAgIHRyYW5zZm9ybSArPSB0cmFuc2xhdGVDc3NcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyYW5zZm9ybSA9IHRyYW5zZm9ybS5yZXBsYWNlKC90cmFuc2xhdGVcXChbXildK1xcKS8sIHRyYW5zbGF0ZUNzcylcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCEvdHJhbnNsYXRlM2RcXChbXildK1xcKS8udGVzdCh0cmFuc2Zvcm0pKSB7XG4gICAgICAgIHRyYW5zZm9ybSArPSB0cmFuc2xhdGVDc3NcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyYW5zZm9ybSA9IHRyYW5zZm9ybS5yZXBsYWNlKC90cmFuc2xhdGUzZFxcKFteKV0rXFwpLywgdHJhbnNsYXRlQ3NzKVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2Zvcm1Qcm9wZXJ0eV0gPSB0cmFuc2Zvcm1cbiAgfVxuXG4gIG1vdmUocG9pbnQsIHRpbWU9MCwgaXNGaXg9ZmFsc2UsIGlzU2lsZW50PWZhbHNlKSB7XG4gICAgcG9pbnQgPSBwb2ludC5jbG9uZSgpXG4gICAgaWYgKGlzRml4KSB7XG4gICAgICB0aGlzLmZpeFBvc2l0aW9uID0gcG9pbnRcbiAgICB9XG5cbiAgICB0aGlzLmRldGVybWluZURpcmVjdGlvbihwb2ludClcblxuICAgIHRoaXMucG9zaXRpb24gPSBwb2ludFxuXG4gICAgaWYgKHRyYW5zaXRpb25Qcm9wZXJ0eSkge1xuICAgICAgdGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zaXRpb25Qcm9wZXJ0eV0gPSB0aW1lICsgJ21zJ1xuICAgIH1cblxuICAgIHRoaXMuX3NldFRyYW5zbGF0ZShwb2ludC5zdWIodGhpcy5vZmZzZXQpKVxuICAgIGlmICghaXNTaWxlbnQpIHtcbiAgICAgIHRoaXMub25Nb3ZlLmZpcmUoKVxuICAgIH1cbiAgfVxuXG4gIHJlZnJlc2hQb3NpdGlvbiAoKSB7XG4gICAgdGhpcy5zZXRQb3NpdGlvbih0aGlzLmdldFBvc2l0aW9uKCkpXG4gIH1cblxuICBzZXRQb3NpdGlvbihwb2ludCkge1xuICAgIHBvaW50ID0gcG9pbnQuY2xvbmUoKVxuICAgIHRoaXMucG9zaXRpb24gPSBwb2ludFxuXG4gICAgaWYgKHRyYW5zaXRpb25Qcm9wZXJ0eSkge1xuICAgICAgdGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zaXRpb25Qcm9wZXJ0eV0gPSAnMG1zJ1xuICAgIH1cblxuICAgIHRoaXMuX3NldFRyYW5zbGF0ZShwb2ludC5zdWIodGhpcy5vZmZzZXQpKVxuICB9XG5cbiAgc2V0WmVyb1RyYW5zaXRpb24oKSB7XG4gICAgaWYgKHRyYW5zaXRpb25Qcm9wZXJ0eSkge1xuICAgICAgdGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zaXRpb25Qcm9wZXJ0eV0gPSAnMG1zJ1xuICAgIH1cbiAgfVxuXG4gIGRldGVybWluZURpcmVjdGlvbihwb2ludCkge1xuICAgIHRoaXMubGVmdERpcmVjdGlvbiA9ICh0aGlzLnBvc2l0aW9uLnggPCBwb2ludC54KVxuICAgIHRoaXMucmlnaHREaXJlY3Rpb24gPSAodGhpcy5wb3NpdGlvbi54ID4gcG9pbnQueClcbiAgICB0aGlzLnVwRGlyZWN0aW9uID0gKHRoaXMucG9zaXRpb24ueSA+IHBvaW50LnkpXG4gICAgdGhpcy5kb3duRGlyZWN0aW9uID0gKHRoaXMucG9zaXRpb24ueSA8IHBvaW50LnkpXG4gIH1cblxuICBkcmFnU3RhcnQoZXZlbnQpIHtcbiAgICB0aGlzLmN1cnJlbnRFdmVudCA9IGV2ZW50XG4gICAgaWYgKCF0aGlzLl9lbmFibGUgfHwgKHRoaXMub3B0aW9ucy5zdGFydEZpbHRlciAmJiAhdGhpcy5vcHRpb25zLnN0YXJ0RmlsdGVyKGV2ZW50KSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGlzVG91Y2hFdmVudCA9IChpc1RvdWNoICYmIChldmVudCBpbnN0YW5jZW9mIHdpbmRvdy5Ub3VjaEV2ZW50KSlcblxuICAgIHRoaXMuX3N0YXJ0VG91Y2hQb2ludCA9IG5ldyBQb2ludChpc1RvdWNoRXZlbnQgPyBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWCA6IGV2ZW50LmNsaWVudFgsIGlzVG91Y2hFdmVudCA/IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VZIDogZXZlbnQuY2xpZW50WSlcblxuICAgIHRoaXMuX3N0YXJ0UG9zaXRpb24gPSB0aGlzLmdldFBvc2l0aW9uKClcbiAgICBpZiAoaXNUb3VjaEV2ZW50KSB7XG4gICAgICB0aGlzLl90b3VjaElkID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uaWRlbnRpZmllclxuICAgIH1cbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgIGlmICghKGV2ZW50LnRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSW5wdXRFbGVtZW50IHx8XG4gICAgICAgICAgZXZlbnQudGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJbnB1dEVsZW1lbnQpKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgfSBlbHNlIHtcbiAgICAgIGV2ZW50LnRhcmdldC5mb2N1cygpXG4gICAgfVxuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5tb3ZlLCB0aGlzLl9kcmFnTW92ZSlcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlKVxuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQpXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQpXG5cbiAgICB0aGlzLmlzRHJhZ2VlID0gdHJ1ZVxuXG4gICAgdGhpcy5vblN0YXJ0LmZpcmUoZXZlbnQpXG4gICAgYWRkQ2xhc3ModGhpcy5lbGVtZW50LCAnYWN0aXZlJylcbiAgICB0aGlzLm9uTW92ZS5maXJlKGV2ZW50KVxuICB9XG5cbiAgZHJhZ01vdmUoZXZlbnQpIHtcbiAgICB0aGlzLmN1cnJlbnRFdmVudCA9IGV2ZW50XG4gICAgbGV0IHRvdWNoXG5cbiAgICBjb25zdCBpc1RvdWNoRXZlbnQgPSAoaXNUb3VjaCAmJiAoZXZlbnQgaW5zdGFuY2VvZiB3aW5kb3cuVG91Y2hFdmVudCkpXG4gICAgaWYgKGlzVG91Y2hFdmVudCkge1xuICAgICAgdG91Y2ggPSBnZXRUb3VjaEJ5SUQoZXZlbnQsIHRoaXMuX3RvdWNoSWQpXG5cbiAgICAgIGlmICghdG91Y2gpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgY29uc3QgdG91Y2hQb2ludCA9IG5ldyBQb2ludChpc1RvdWNoRXZlbnQgPyB0b3VjaC5wYWdlWCA6IGV2ZW50LmNsaWVudFgsIGlzVG91Y2hFdmVudCA/IHRvdWNoLnBhZ2VZIDogZXZlbnQuY2xpZW50WSlcbiAgICBsZXQgcG9pbnQgPSB0aGlzLl9zdGFydFBvc2l0aW9uLmFkZCh0b3VjaFBvaW50LnN1Yih0aGlzLl9zdGFydFRvdWNoUG9pbnQpKVxuICAgIHBvaW50ID0gdGhpcy5ib3VuZChwb2ludCwgdGhpcy5nZXRTaXplKCkpXG4gICAgdGhpcy50b3VjaFBvaW50ID0gdG91Y2hQb2ludFxuICAgIHRoaXMubW92ZShwb2ludCwgMClcbiAgfVxuXG4gIGRyYWdFbmQoZXZlbnQpIHtcbiAgICBjb25zdCBpc1RvdWNoRXZlbnQgPSAoaXNUb3VjaCAmJiAoZXZlbnQgaW5zdGFuY2VvZiB3aW5kb3cuVG91Y2hFdmVudCkpXG5cbiAgICBpZiAoaXNUb3VjaEV2ZW50ICYmICFnZXRUb3VjaEJ5SUQoZXZlbnQsIHRoaXMuX3RvdWNoSWQpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICB0aGlzLm9uRW5kLmZpcmUoZXZlbnQpXG5cbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUpXG5cbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcblxuICAgIHRoaXMuaXNEcmFnZWUgPSBmYWxzZVxuICAgIHJlbW92ZUNsYXNzKHRoaXMuZWxlbWVudCwgJ2FjdGl2ZScpXG4gIH1cblxuICBnZXRSZWN0YW5nbGUoKSB7XG4gICAgcmV0dXJuIG5ldyBSZWN0YW5nbGUodGhpcy5wb3NpdGlvbiwgdGhpcy5nZXRTaXplKCkpXG4gIH1cblxuICByZWZyZXNoKCkge1xuICAgIHRoaXMuZ2V0U2l6ZSh0cnVlKVxuICAgIGlmICh0aGlzLmJvdW5kLnJlZnJlc2gpIHtcbiAgICAgIHRoaXMuYm91bmQucmVmcmVzaCgpXG4gICAgfVxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5zdGFydCwgdGhpcy5fZHJhZ1N0YXJ0KVxuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLnN0YXJ0LCB0aGlzLl9kcmFnU3RhcnQpXG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUpXG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUpXG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuZW5kLCB0aGlzLl9kcmFnRW5kKVxuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcblxuICAgIHRoaXMub25FbmQucmVzZXQoKVxuICAgIHRoaXMub25Nb3ZlLnJlc2V0KClcbiAgfVxuXG4gIGdldCBlbmFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VuYWJsZVxuICB9XG5cbiAgc2V0IGVuYWJsZShlbmFibGUpIHtcbiAgICBpZiAoZW5hYmxlKSB7XG4gICAgICByZW1vdmVDbGFzcyh0aGlzLmVsZW1lbnQsICdkaXNhYmxlJylcbiAgICB9IGVsc2Uge1xuICAgICAgYWRkQ2xhc3ModGhpcy5lbGVtZW50LCAnZGlzYWJsZScpXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX2VuYWJsZSA9IGVuYWJsZVxuICB9XG59XG5cbkRyYWdnYWJsZS5vbkNyZWF0ZSA9IG5ldyBEcmFnZWUuRXZlbnQoRHJhZ2dhYmxlLCB7IGlzUmV2ZXJzZTogdHJ1ZSwgaXNTdG9wT25UcnVlOiB0cnVlIH0pXG5EcmFnZ2FibGUub25DcmVhdGUuYWRkKGFkZFRvRGVmYXVsdFNjb3BlKVxuXG5leHBvcnQgeyBEcmFnZ2FibGUsIGRyYWdnYWJsZXMsIGV2ZW50cyB9XG4iLCIndXNlIHN0cmljdCdcblxuZnVuY3Rpb24gRXZlbnQoY29udGV4dCwgb3B0aW9ucyA9IHt9KSB7XG4gIHRoaXMuZnVuY3MgPSBbXVxuICB0aGlzLmNvbnRleHQgPSBjb250ZXh0XG4gIHRoaXMuaXNSZXZlcnNlID0gb3B0aW9ucy5pc1JldmVyc2UgfHwgZmFsc2VcbiAgdGhpcy5pc1N0b3BPblRydWUgPSBvcHRpb25zLmlzU3RvcE9uVHJ1ZSB8fCBmYWxzZVxufVxuXG5FdmVudC5wcm90b3R5cGUuZmlyZSA9IGZ1bmN0aW9uKCkge1xuICBjb25zdCBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMpXG4gIGNvbnN0IGZzID0gdGhpcy5pc1JldmVyc2UgPyB0aGlzLmZ1bmNzLnNsaWNlKCkucmV2ZXJzZSgpIDogdGhpcy5mdW5jc1xuICBsZXQgcmV0VmFsdWVcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGZzLmxlbmd0aDsgaSsrKSB7XG4gICAgcmV0VmFsdWUgPSBmc1tpXS5hcHBseSh0aGlzLmNvbnRleHQsIGFyZ3MpXG4gICAgaWYgKHRoaXMuaXNTdG9wT25UcnVlICYmIHJldFZhbHVlKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgfVxuICByZXR1cm4gIXRoaXMuaXNTdG9wT25UcnVlXG59XG5cbkV2ZW50LnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbihmKSB7XG4gIHRoaXMuZnVuY3MucHVzaChmKVxufVxuXG5FdmVudC5wcm90b3R5cGUudW5zaGlmdCA9IGZ1bmN0aW9uKGYpIHtcbiAgdGhpcy5mdW5jcy51bnNoaWZ0KGYpXG59XG5cbkV2ZW50LnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbihmKSB7XG4gIGNvbnN0IGluZGV4ID0gdGhpcy5mdW5jcy5pbmRleE9mKGYpXG4gIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICB0aGlzLmZ1bmNzLnNwbGljZShpbmRleCwgMSlcbiAgfVxufVxuXG5FdmVudC5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbihfZikge1xuICB0aGlzLmZ1bmNzID0gW11cbn1cblxuZXhwb3J0IGRlZmF1bHQgRXZlbnRcbiIsIi8qKioqKioqKioqKiogQXJyYXkgKioqKioqKioqKioqKiovXG5cbmlmICghQXJyYXkucHJvdG90eXBlLnJlbW92ZUl0ZW0pIHtcbiAgQXJyYXkucHJvdG90eXBlLnJlbW92ZUl0ZW0gPSBmdW5jdGlvbih2YWwpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh0aGlzW2ldID09PSB2YWwpIHtcbiAgICAgICAgdGhpcy5zcGxpY2UoaSwgMSlcbiAgICAgICAgaS0tXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzXG4gIH1cbn1cblxuLyoqKioqKioqKioqKioqKioqKioqKioqIDAwUCAqKioqKioqKioqKioqKioqKioqKioqKioqL1xuY29uc3QgYXVnbWVudCA9IGZ1bmN0aW9uKHJlY2VpdmluZ0NsYXNzLCBnaXZpbmdDbGFzcykge1xuICAgIC8qIG9ubHkgcHJvdmlkZSBjZXJ0YWluIG1ldGhvZHMgKi9cbiAgaWYgKGFyZ3VtZW50c1syXSkge1xuICAgIGZvciAobGV0IGk9MiwgbGVuPWFyZ3VtZW50cy5sZW5ndGg7IGk8bGVuOyBpKyspIHtcbiAgICAgIHJlY2VpdmluZ0NsYXNzLnByb3RvdHlwZVthcmd1bWVudHNbaV1dID0gZ2l2aW5nQ2xhc3MucHJvdG90eXBlW2FyZ3VtZW50c1tpXV1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZm9yIChjb25zdCBtZXRob2ROYW1lIGluIGdpdmluZ0NsYXNzLnByb3RvdHlwZSkge1xuICAgICAgICAgICAgLyogY2hlY2sgdG8gbWFrZSBzdXJlIHRoZSByZWNlaXZpbmcgY2xhc3MgZG9lc24ndFxuICAgICAgICAgICAgICAgaGF2ZSBhIG1ldGhvZCBvZiB0aGUgc2FtZSBuYW1lIGFzIHRoZSBvbmUgY3VycmVudGx5XG4gICAgICAgICAgICAgICBiZWluZyBwcm9jZXNzZWQgKi9cbiAgICAgIGlmICghcmVjZWl2aW5nQ2xhc3MucHJvdG90eXBlW21ldGhvZE5hbWVdKSB7XG4gICAgICAgIHJlY2VpdmluZ0NsYXNzLnByb3RvdHlwZVttZXRob2ROYW1lXSA9IGdpdmluZ0NsYXNzLnByb3RvdHlwZVttZXRob2ROYW1lXVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuYXVnbWVudChOb2RlTGlzdCwgQXJyYXksICdmb3JFYWNoJylcbiIsIid1c2Ugc3RyaWN0J1xuaW1wb3J0IHV0aWwgZnJvbSAnLi91dGlsJ1xuXG4vKioqKioqKioqKioqKioqKioqKioqL1xuZnVuY3Rpb24gUG9pbnQoeCwgeSkge1xuICB0aGlzLnggPSB4XG4gIHRoaXMueSA9IHlcbn1cblxuUG9pbnQucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiAne3g9JyArIHRoaXMueCArICcseT0nICsgdGhpcy55ICsgJ30nXG59XG5cblBvaW50LnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbihwKSB7XG4gIHJldHVybiBuZXcgUG9pbnQodGhpcy54ICsgcC54LCB0aGlzLnkgKyBwLnkpXG59XG5cblBvaW50LnByb3RvdHlwZS5zdWIgPSBmdW5jdGlvbihwKSB7XG4gIHJldHVybiBuZXcgUG9pbnQodGhpcy54IC0gcC54LCB0aGlzLnkgLSBwLnkpXG59XG5cblBvaW50LnByb3RvdHlwZS5tdWx0ID0gZnVuY3Rpb24oaykge1xuICByZXR1cm4gbmV3IFBvaW50KHRoaXMueCAqIGssIHRoaXMueSAqIGspXG59XG5cblBvaW50LnByb3RvdHlwZS5uZWdhdGl2ZSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFBvaW50KC10aGlzLngsIC10aGlzLnkpXG59XG5cblBvaW50LnByb3RvdHlwZS5jb21wYXJlID0gZnVuY3Rpb24ocCkge1xuICByZXR1cm4gKHRoaXMueCA9PT0gcC54ICYmIHRoaXMueSA9PT0gcC55KVxufVxuXG5Qb2ludC5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLngsIHRoaXMueSlcbn1cblxuLyoqKioqKioqKioqKioqKiovXG5mdW5jdGlvbiBSZWN0YW5nbGUocG9zaXRpb24sIHNpemUpIHtcbiAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uXG4gIHRoaXMuc2l6ZSA9IHNpemVcbn1cblxuUmVjdGFuZ2xlLnByb3RvdHlwZS5nZXRQMSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5wb3NpdGlvblxufVxuXG5SZWN0YW5nbGUucHJvdG90eXBlLmdldFAyID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgUG9pbnQodGhpcy5wb3NpdGlvbi54ICsgdGhpcy5zaXplLngsIHRoaXMucG9zaXRpb24ueSlcbn1cblxuUmVjdGFuZ2xlLnByb3RvdHlwZS5nZXRQMyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5wb3NpdGlvbi5hZGQodGhpcy5zaXplKVxufVxuXG5SZWN0YW5nbGUucHJvdG90eXBlLmdldFA0ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgUG9pbnQodGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLnNpemUueSlcbn1cblxuUmVjdGFuZ2xlLnByb3RvdHlwZS5nZXRDZW50ZXIgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMucG9zaXRpb24uYWRkKHRoaXMuc2l6ZS5tdWx0KDAuNSkpXG59XG5cblJlY3RhbmdsZS5wcm90b3R5cGUub3IgPSBmdW5jdGlvbihyZWN0KSB7XG4gIGNvbnN0IHBvc2l0aW9uID0gbmV3IFBvaW50KE1hdGgubWluKHRoaXMucG9zaXRpb24ueCwgcmVjdC5wb3NpdGlvbi54KSwgTWF0aC5taW4odGhpcy5wb3NpdGlvbi55LCByZWN0LnBvc2l0aW9uLnkpKSwgc2l6ZSA9IChuZXcgUG9pbnQoTWF0aC5tYXgodGhpcy5wb3NpdGlvbi54ICsgdGhpcy5zaXplLngsIHJlY3QucG9zaXRpb24ueCArIHJlY3Quc2l6ZS54KSwgTWF0aC5tYXgodGhpcy5wb3NpdGlvbi55ICsgdGhpcy5zaXplLnksIHJlY3QucG9zaXRpb24ueSArIHJlY3Quc2l6ZS55KSkpLnN1Yihwb3NpdGlvbilcbiAgcmV0dXJuIG5ldyBSZWN0YW5nbGUocG9zaXRpb24sIHNpemUpXG59XG5cblJlY3RhbmdsZS5wcm90b3R5cGUuYW5kID0gZnVuY3Rpb24ocmVjdCkge1xuICBjb25zdCBwb3NpdGlvbiA9IG5ldyBQb2ludChNYXRoLm1heCh0aGlzLnBvc2l0aW9uLngsIHJlY3QucG9zaXRpb24ueCksIE1hdGgubWF4KHRoaXMucG9zaXRpb24ueSwgcmVjdC5wb3NpdGlvbi55KSksIHNpemUgPSAobmV3IFBvaW50KE1hdGgubWluKHRoaXMucG9zaXRpb24ueCArIHRoaXMuc2l6ZS54LCByZWN0LnBvc2l0aW9uLnggKyByZWN0LnNpemUueCksIE1hdGgubWluKHRoaXMucG9zaXRpb24ueSArIHRoaXMuc2l6ZS55LCByZWN0LnBvc2l0aW9uLnkgKyByZWN0LnNpemUueSkpKS5zdWIocG9zaXRpb24pXG4gIGlmIChzaXplLnggPD0gMCB8fCBzaXplLnkgPD0gMCkge1xuICAgIHJldHVybiBudWxsXG4gIH1cbiAgcmV0dXJuIG5ldyBSZWN0YW5nbGUocG9zaXRpb24sIHNpemUpXG59XG5cblJlY3RhbmdsZS5wcm90b3R5cGUuaW5jbHVkZVBvaW50ID0gZnVuY3Rpb24ocCkge1xuICByZXR1cm4gISh0aGlzLnBvc2l0aW9uLnggPiBwLnggfHwgdGhpcy5wb3NpdGlvbi54ICsgdGhpcy5zaXplLnggPCBwLnggfHwgdGhpcy5wb3NpdGlvbi55ID4gcC55IHx8IHRoaXMucG9zaXRpb24ueSArIHRoaXMuc2l6ZS55IDwgcC55KVxufVxuXG5SZWN0YW5nbGUucHJvdG90eXBlLmluY2x1ZGVSZWN0YW5nbGUgPSBmdW5jdGlvbihyZWN0YW5nbGUpIHtcbiAgcmV0dXJuIHRoaXMuaW5jbHVkZVBvaW50KHJlY3RhbmdsZS5wb3NpdGlvbikgJiYgdGhpcy5pbmNsdWRlUG9pbnQocmVjdGFuZ2xlLmdldFAzKCkpXG59XG5cblJlY3RhbmdsZS5wcm90b3R5cGUubW92ZVRvQm91bmQgPSBmdW5jdGlvbihyZWN0LCBheGlzKSB7XG4gIGxldCBzZWxBeGlzLCBjcm9zc1JlY3RhbmdsZVxuICBpZiAoYXhpcykge1xuICAgIHNlbEF4aXMgPSBheGlzXG4gIH0gZWxzZSB7XG4gICAgY3Jvc3NSZWN0YW5nbGUgPSB0aGlzLmFuZChyZWN0KVxuICAgIGlmICghY3Jvc3NSZWN0YW5nbGUpIHtcbiAgICAgIHJldHVybiByZWN0XG4gICAgfVxuICAgIHNlbEF4aXMgPSBjcm9zc1JlY3RhbmdsZS5zaXplLnggPiBjcm9zc1JlY3RhbmdsZS5zaXplLnkgPyAneScgOiAneCdcbiAgfVxuICBjb25zdCB0aGlzQ2VudGVyID0gdGhpcy5nZXRDZW50ZXIoKVxuICBjb25zdCByZWN0Q2VudGVyID0gcmVjdC5nZXRDZW50ZXIoKVxuICBjb25zdCBzaWduID0gdGhpc0NlbnRlcltzZWxBeGlzXSA+IHJlY3RDZW50ZXJbc2VsQXhpc10gPyAtMSA6IDFcbiAgY29uc3Qgb2Zmc2V0ID0gc2lnbiA+IDAgPyB0aGlzLnBvc2l0aW9uW3NlbEF4aXNdICsgdGhpcy5zaXplW3NlbEF4aXNdIC0gcmVjdC5wb3NpdGlvbltzZWxBeGlzXSA6IHRoaXMucG9zaXRpb25bc2VsQXhpc10gLSAocmVjdC5wb3NpdGlvbltzZWxBeGlzXSArIHJlY3Quc2l6ZVtzZWxBeGlzXSlcbiAgcmVjdC5wb3NpdGlvbltzZWxBeGlzXSA9IHJlY3QucG9zaXRpb25bc2VsQXhpc10gKyBvZmZzZXRcbiAgcmV0dXJuIHJlY3Rcbn1cblxuUmVjdGFuZ2xlLnByb3RvdHlwZS5nZXRTcXVhcmUgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuc2l6ZS54ICogdGhpcy5zaXplLnlcbn1cblxuUmVjdGFuZ2xlLnByb3RvdHlwZS5zdHlsZUFwcGx5ID0gZnVuY3Rpb24oZWwpIHtcbiAgZWwgPSBlbCB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbmQnKVxuICBlbC5zdHlsZS5sZWZ0ID0gdGhpcy5wb3NpdGlvbi54ICsgJ3B4J1xuICBlbC5zdHlsZS50b3AgPSB0aGlzLnBvc2l0aW9uLnkgKyAncHgnXG4gIGVsLnN0eWxlLndpZHRoID0gdGhpcy5zaXplLnggKyAncHgnXG4gIGVsLnN0eWxlLmhlaWdodCA9IHRoaXMuc2l6ZS55ICsgJ3B4J1xufVxuXG5SZWN0YW5nbGUucHJvdG90eXBlLmdyb3d0aCA9IGZ1bmN0aW9uKHNpemUpIHtcbiAgdGhpcy5zaXplID0gdGhpcy5zaXplLmFkZChzaXplKVxuICB0aGlzLnBvc2l0aW9uID0gdGhpcy5wb3NpdGlvbi5hZGQoc2l6ZS5tdWx0KC0wLjUpKVxufVxuXG5SZWN0YW5nbGUucHJvdG90eXBlLmdldE1pblNpZGUgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIE1hdGgubWluKHRoaXMuc2l6ZS54LCB0aGlzLnNpemUueSlcbn1cblxuLyoqKioqKioqKioqKioqKioqL1xuY29uc3QgR2VvbWV0cnkgPSB7XG4gIGdldERpc3RhbmNlOiBmdW5jdGlvbihwMSwgcDIpIHtcbiAgICBjb25zdCBkeCA9IHAxLnggLSBwMi54LCBkeSA9IHAxLnkgLSBwMi55XG4gICAgcmV0dXJuIE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSlcbiAgfSxcbiAgZGlzdGFuY2U6IGZ1bmN0aW9uKHAxLCBwMikge1xuICAgIHJldHVybiBHZW9tZXRyeS5nZXREaXN0YW5jZShwMSwgcDIpXG4gIH0sXG4gIGdldFhEaWZmZXJlbmNlOiBmdW5jdGlvbihwMSwgcDIpIHtcbiAgICByZXR1cm4gTWF0aC5hYnMocDEueCAtIHAyLngpXG4gIH0sXG4gIGdldFlEaWZmZXJlbmNlOiBmdW5jdGlvbihwMSwgcDIpIHtcbiAgICByZXR1cm4gTWF0aC5hYnMocDEueSAtIHAyLnkpXG4gIH0sXG4gIHRyYW5zZm9ybWVkU3BhY2VEaXN0YW5jZUZhY3Rvcnk6IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24ocDEsIHAyKSB7XG4gICAgICByZXR1cm4gTWF0aC5zcXJ0KFxuICAgICAgICAgICAgICAgIE1hdGgucG93KG9wdGlvbnMueCAqIE1hdGguYWJzKHAxLnggLSBwMi54KSwgMikgKyBNYXRoLnBvdyhvcHRpb25zLnkgKiBNYXRoLmFicyhwMS55IC0gcDIueSksIDIpXG4gICAgICAgICAgICApXG4gICAgfVxuICB9LFxuICBpbmRleE9mTmVhclBvaW50OiBmdW5jdGlvbihhcnIsIHZhbCwgcmFkaXVzLCBnZXREaXN0YW5jZSkge1xuICAgIGxldCBzaXplLCBpbmRleCA9IDAsIGksIHRlbXBcbiAgICBnZXREaXN0YW5jZSA9IGdldERpc3RhbmNlIHx8IEdlb21ldHJ5LmdldERpc3RhbmNlXG4gICAgaWYgKGFyci5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiAtMVxuICAgIH1cbiAgICBzaXplID0gZ2V0RGlzdGFuY2UoYXJyWzBdLCB2YWwpXG4gICAgZm9yIChpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgdGVtcCA9IGdldERpc3RhbmNlKGFycltpXSwgdmFsKVxuICAgICAgaWYgKHRlbXAgPCBzaXplKSB7XG4gICAgICAgIHNpemUgPSB0ZW1wXG4gICAgICAgIGluZGV4ID0gaVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAocmFkaXVzID49IDAgJiYgc2l6ZSA+IHJhZGl1cykge1xuICAgICAgcmV0dXJuIC0xXG4gICAgfVxuICAgIHJldHVybiBpbmRleFxuICB9LFxuICBib3VuZDogZnVuY3Rpb24obWluLCBtYXgsIHZhbCkge1xuICAgIHJldHVybiBNYXRoLm1heChtaW4sIE1hdGgubWluKG1heCwgdmFsKSlcbiAgfSxcbiAgYm91bmRQb2ludDogZnVuY3Rpb24obWluLCBtYXgsIHZhbCkge1xuICAgIGNvbnN0IHggPSBNYXRoLm1heChtaW4ueCwgTWF0aC5taW4obWF4LngsIHZhbC54KSlcbiAgICBjb25zdCB5ID0gTWF0aC5tYXgobWluLnksIE1hdGgubWluKG1heC55LCB2YWwueSkpXG4gICAgcmV0dXJuIG5ldyBQb2ludCh4LCB5KVxuICB9LFxuICAgIC8vUmV0dXJuIGNyb3NzaW5nIHBvaW50IG9mIHR3byBsaW5lc1xuICBkaXJlY3RDcm9zc2luZzogZnVuY3Rpb24oTDFQMSwgTDFQMiwgTDJQMSwgTDJQMikge1xuICAgIGxldCB0ZW1wLCBrMSwgazIsIGIxLCBiMiwgeCwgeVxuICAgIGlmIChMMlAxLnggPT09IEwyUDIueCkge1xuICAgICAgdGVtcCA9IEwyUDFcbiAgICAgIEwyUDEgPSBMMVAxXG4gICAgICBMMVAxID0gdGVtcFxuICAgICAgdGVtcCA9IEwyUDJcbiAgICAgIEwyUDIgPSBMMVAyXG4gICAgICBMMVAyID0gdGVtcFxuICAgIH1cbiAgICBpZiAoTDFQMS54ID09PSBMMVAyLngpIHtcbiAgICAgIGsyID0gKEwyUDIueSAtIEwyUDEueSkgLyAoTDJQMi54IC0gTDJQMS54KVxuICAgICAgYjIgPSAoTDJQMi54ICogTDJQMS55IC0gTDJQMS54ICogTDJQMi55KSAvIChMMlAyLnggLSBMMlAxLngpXG4gICAgICB4ID0gTDFQMS54XG4gICAgICB5ID0geCAqIGsyICsgYjJcbiAgICAgIHJldHVybiBuZXcgUG9pbnQoeCwgeSlcbiAgICB9IGVsc2Uge1xuICAgICAgazEgPSAoTDFQMi55IC0gTDFQMS55KSAvIChMMVAyLnggLSBMMVAxLngpXG4gICAgICBiMSA9IChMMVAyLnggKiBMMVAxLnkgLSBMMVAxLnggKiBMMVAyLnkpIC8gKEwxUDIueCAtIEwxUDEueClcbiAgICAgIGsyID0gKEwyUDIueSAtIEwyUDEueSkgLyAoTDJQMi54IC0gTDJQMS54KVxuICAgICAgYjIgPSAoTDJQMi54ICogTDJQMS55IC0gTDJQMS54ICogTDJQMi55KSAvIChMMlAyLnggLSBMMlAxLngpXG4gICAgICB4ID0gKGIxIC0gYjIpIC8gKGsyIC0gazEpXG4gICAgICB5ID0geCAqIGsxICsgYjFcbiAgICAgIHJldHVybiBuZXcgUG9pbnQoeCwgeSlcbiAgICB9XG4gIH0sXG4gICAgLy9HZXQgcG9pbnQgYW5kIGNoZWNrIHRoYXQgcG9pbnQgYmVsb25nIHRvIHNlZ21lbnQgb2YgdGhlIGxpbmVcbiAgICAvLyBpZiBub3QgLSByZXR1cm4gdGhlIG5lYXJlc3QgcG9pbnQgb2Ygc2VnbWVudFxuICBib3VuZFRvU2VnbWVudDogZnVuY3Rpb24oTFAxLCBMUDIsIFApIHtcbiAgICBsZXQgeCwgeVxuICAgIHggPSBHZW9tZXRyeS5ib3VuZChNYXRoLm1pbihMUDEueCwgTFAyLngpLCBNYXRoLm1heChMUDEueCwgTFAyLngpLCBQLngpXG4gICAgaWYgKHggIT09IFAueCkge1xuICAgICAgeSA9ICh4ID09PSBMUDEueCkgPyBMUDEueSA6IExQMi55XG4gICAgICBQID0gbmV3IFBvaW50KHgsIHkpXG4gICAgfVxuXG4gICAgeSA9IEdlb21ldHJ5LmJvdW5kKE1hdGgubWluKExQMS55LCBMUDIueSksIE1hdGgubWF4KExQMS55LCBMUDIueSksIFAueSlcbiAgICBpZiAoeSAhPT0gUC55KSB7XG4gICAgICB4ID0gKHkgPT09IExQMS55KSA/IExQMS54IDogTFAyLnhcbiAgICAgIFAgPSBuZXcgUG9pbnQoeCwgeSlcbiAgICB9XG5cbiAgICByZXR1cm4gUFxuICB9LFxuICBib3VuZFRvTGluZTogZnVuY3Rpb24oQSwgQiwgUCkge1xuICAgIGNvbnN0IEFQID0gbmV3IFBvaW50KFAueCAtIEEueCwgUC55IC0gQS55KSxcbiAgICAgIEFCID0gbmV3IFBvaW50KEIueCAtIEEueCwgQi55IC0gQS55KSxcbiAgICAgIGFiMiA9IEFCLnggKiBBQi54ICsgQUIueSAqIEFCLnksXG4gICAgICBhcF9hYiA9IEFQLnggKiBBQi54ICsgQVAueSAqIEFCLnksXG4gICAgICB0ID0gYXBfYWIgLyBhYjJcbiAgICByZXR1cm4gbmV3IFBvaW50KEEueCArIEFCLnggKiB0LCBBLnkgKyBBQi55ICogdClcbiAgfSxcbiAgZ2V0UG9pbnRJbkxpbmU6IGZ1bmN0aW9uKExQMSwgTFAyLCBwZXJjZW50KSB7XG4gICAgY29uc3QgZHggPSBMUDIueCAtIExQMS54LCBkeSA9IExQMi55IC0gTFAxLnlcbiAgICByZXR1cm4gbmV3IFBvaW50KExQMS54ICsgcGVyY2VudCAqIGR4LCBMUDEueSArIHBlcmNlbnQgKiBkeSlcbiAgfSxcbiAgZ2V0UG9pbnRJbkxpbmVCeUxlbmdodDogZnVuY3Rpb24oTFAxLCBMUDIsIGxlbmdodCkge1xuICAgIGNvbnN0IGR4ID0gTFAyLnggLSBMUDEueCwgZHkgPSBMUDIueSAtIExQMS55LCBwZXJjZW50ID0gbGVuZ2h0IC8gR2VvbWV0cnkuZGlzdGFuY2UoTFAxLCBMUDIpXG4gICAgcmV0dXJuIG5ldyBQb2ludChMUDEueCArIHBlcmNlbnQgKiBkeCwgTFAxLnkgKyBwZXJjZW50ICogZHkpXG4gIH0sXG4gIGNyZWF0ZVJlY3RhbmdsZUZyb21FbGVtZW50OiBmdW5jdGlvbihlbCwgcGFyZW50LCBpc0NvbnRlbnRCb3hTaXplLCBpc0NvbnNpZGVyVHJhbnNsYXRlKSB7XG4gICAgY29uc3Qgc2l6ZSA9IHRoaXMuZ2V0U2l6ZU9mRWxlbWVudChlbCwgaXNDb250ZW50Qm94U2l6ZSlcbiAgICByZXR1cm4gbmV3IFJlY3RhbmdsZSh0aGlzLmdldE9mZnNldChlbCwgcGFyZW50IHx8IGVsLnBhcmVudE5vZGUsIGlzQ29uc2lkZXJUcmFuc2xhdGUpLCBzaXplKVxuICB9LFxuICBnZXRTaXplT2ZFbGVtZW50OiBmdW5jdGlvbihlbCwgaXNDb250ZW50Qm94U2l6ZSkge1xuICAgIGxldCB3aWR0aCA9IHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsKVsnd2lkdGgnXSksIGhlaWdodCA9IHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsKVsnaGVpZ2h0J10pXG4gICAgaWYgKCFpc0NvbnRlbnRCb3hTaXplKSB7XG4gICAgICB3aWR0aCArPSB1dGlsLmdldFN1bVZhbHVlT2ZTdHlsZVJ1bGUoZWwsIFsncGFkZGluZy1sZWZ0JywgJ3BhZGRpbmctcmlnaHQnLCAnYm9yZGVyLWxlZnQtd2lkdGgnLCAnYm9yZGVyLXJpZ2h0LXdpZHRoJ10pXG4gICAgICBoZWlnaHQgKz0gdXRpbC5nZXRTdW1WYWx1ZU9mU3R5bGVSdWxlKGVsLCBbJ3BhZGRpbmctdG9wJywgJ3BhZGRpbmctYm90dG9tJywgJ2JvcmRlci10b3Atd2lkdGgnLCAnYm9yZGVyLWJvdHRvbS13aWR0aCddKVxuICAgIH1cbiAgICByZXR1cm4gbmV3IFBvaW50KHdpZHRoLCBoZWlnaHQpXG4gIH0sXG4gIGdldE9mZnNldDogZnVuY3Rpb24oZWwsIHBhcmVudCkge1xuICAgIGNvbnN0IGVsUmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLCBwYXJlbnRSZWN0ID0gcGFyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgcmV0dXJuIG5ldyBQb2ludChlbFJlY3QubGVmdCAtIHBhcmVudFJlY3QubGVmdCwgZWxSZWN0LnRvcCAtIHBhcmVudFJlY3QudG9wKVxuICB9LFxuICBnZXRQb2ludEZyb21SYWRpYWxTeXN0ZW06IGZ1bmN0aW9uKGFuZ2xlLCBsZW5ndGgsIGNlbnRlcikge1xuICAgIGNlbnRlciA9IGNlbnRlciB8fCBuZXcgUG9pbnQoMCwgMClcbiAgICByZXR1cm4gY2VudGVyLmFkZChuZXcgUG9pbnQobGVuZ3RoICogTWF0aC5jb3MoYW5nbGUpLCBsZW5ndGggKiBNYXRoLnNpbihhbmdsZSkpKVxuICB9LFxuICBhZGRQb2ludFRvQm91bmRQb2ludHM6IGZ1bmN0aW9uKGJvdW5kcG9pbnRzLCBwb2ludCwgaXNSaWdodCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IGJvdW5kcG9pbnRzLmZpbHRlcihmdW5jdGlvbihiUG9pbnQpIHtcbiAgICAgIHJldHVybiAgYlBvaW50LnkgPiBwb2ludC55IHx8IChpc1JpZ2h0ID8gYlBvaW50LnggPCBwb2ludC54IDogYlBvaW50LnggPiBwb2ludC54KVxuICAgIH0pXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlc3VsdC5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHBvaW50LnkgPCByZXN1bHRbaV0ueSkge1xuICAgICAgICByZXN1bHQuc3BsaWNlKGksIDAsIHBvaW50KVxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgICB9XG4gICAgfVxuICAgIHJlc3VsdC5wdXNoKHBvaW50KVxuICAgIHJldHVybiByZXN1bHRcbiAgfSxcbiAgZ2V0QW5nbGU6IGZ1bmN0aW9uKHAxLCBwMikge1xuICAgIGNvbnN0IGRpZmYgPSBwMi5zdWIocDEpXG4gICAgcmV0dXJuIHRoaXMubm9ybWFsaXplQW5nbGUoTWF0aC5hdGFuMihkaWZmLnksIGRpZmYueCkpXG4gIH0sXG4gIHRvUmFkaWFuOiBmdW5jdGlvbihhbmdsZSkge1xuICAgIHJldHVybiAoKGFuZ2xlICUgMzYwKSAqIE1hdGguUEkgLyAxODApXG4gIH0sXG4gIHRvRGVncmVlOiBmdW5jdGlvbihhbmdsZSkge1xuICAgIHJldHVybiAoYW5nbGUgKiAxODAgLyBNYXRoLlBJKSAlIDM2MFxuICB9LFxuICBib3VuZEFuZ2xlOiBmdW5jdGlvbihtaW4sIG1heCwgdmFsKSB7XG4gICAgbGV0IGRtaW4sIGRtYXhcbiAgICBpZiAobWluIDwgbWF4ICYmIHZhbCA+IG1pbiAmJiB2YWwgPCBtYXgpIHtcbiAgICAgIHJldHVybiB2YWxcbiAgICB9IGVsc2UgaWYgKG1heCA8IG1pbiAmJiAodmFsIDwgbWF4IHx8IHZhbCA+IG1pbikpIHtcbiAgICAgIHJldHVybiB2YWxcbiAgICB9IGVsc2Uge1xuICAgICAgZG1pbiA9IHRoaXMuZ2V0QW5nbGVEaWZmKG1pbiwgdmFsKVxuICAgICAgZG1heCA9IHRoaXMuZ2V0QW5nbGVEaWZmKG1heCwgdmFsKVxuICAgICAgaWYgKGRtaW4gPCBkbWF4KSB7XG4gICAgICAgIHJldHVybiBtaW5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBtYXhcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIGdldE5lYXJlc3RBbmdsZTogZnVuY3Rpb24oYXJyLCBhbmdsZSkge1xuICAgIGxldCBpLCB0ZW1wLCBkaWZmID0gTWF0aC5QSSAqIDIsIHZhbHVlXG4gICAgZm9yIChpID0gMDsgaSA8IGFyci5sZW5ndGg7aSsrKSB7XG4gICAgICB0ZW1wID0gR2VvbWV0cnkuZ2V0QW5nbGVEaWZmKGFycltpXSwgYW5nbGUpXG4gICAgICBpZiAoZGlmZiA8IHRlbXApIHtcbiAgICAgICAgZGlmZiA9IHRlbXBcbiAgICAgICAgdmFsdWUgPSBhcnJbaV1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlXG4gIH0sXG4gIGdldEFuZ2xlRGlmZjogZnVuY3Rpb24oYWxwaGEsIGJldGEpIHtcbiAgICBjb25zdCBtaW5BbmdsZSA9IE1hdGgubWluKGFscGhhLCBiZXRhKSxcbiAgICAgIG1heEFuZ2xlID0gIE1hdGgubWF4KGFscGhhLCBiZXRhKVxuICAgIHJldHVybiBNYXRoLm1pbihtYXhBbmdsZSAtIG1pbkFuZ2xlLCBtaW5BbmdsZSArIE1hdGguUEkqMiAtIG1heEFuZ2xlKVxuICB9LFxuICBub3JtYWxpemVBbmdsZTogZnVuY3Rpb24odmFsKSB7XG4gICAgd2hpbGUgKHZhbCA8IDApIHtcbiAgICAgIHZhbCArPSAyICogTWF0aC5QSVxuICAgIH1cbiAgICB3aGlsZSAodmFsID4gMiAqIE1hdGguUEkpIHtcbiAgICAgIHZhbCAtPSAyICogTWF0aC5QSVxuICAgIH1cbiAgICByZXR1cm4gdmFsXG4gIH1cbn1cblxuZXhwb3J0IHsgUG9pbnQsIFJlY3RhbmdsZSwgR2VvbWV0cnkgfVxuIiwiaW1wb3J0ICcuL2V4cGFuZG5hdGl2ZSdcbmltcG9ydCB7IFBvaW50LCBSZWN0YW5nbGUsIEdlb21ldHJ5IH0gZnJvbSAnLi9nZW9tZXRyeSdcbmltcG9ydCB7IERyYWdnYWJsZSB9IGZyb20gJy4vZHJhZ2dhYmxlJ1xuaW1wb3J0IHsgTGlzdCwgbGlzdEZhY3RvcnkgfSBmcm9tICcuL2xpc3QnXG5pbXBvcnQgeyB0YXJnZXRzLCBUYXJnZXQgfSBmcm9tICcuL3RhcmdldCdcbmltcG9ydCB7IHNjb3BlcywgZGVmYXVsdFNjb3BlLCBTY29wZSwgc2NvcGVGYWN0b3J5LCBzY29wZSB9IGZyb20gJy4vc2NvcGUnXG5pbXBvcnQgeyBwb3NpdGlvblR5cGUsIHNvcnRpbmdGYWN0b3J5LCBwb3NpdGlvbkZhY3RvcnkgIH0gZnJvbSAnLi9wb3NpdGlvbmluZydcbmltcG9ydCB7IGJvdW5kIH0gZnJvbSAnLi9ib3VuZCdcbmltcG9ydCB7IHNwaWRlcnMsIFNwaWRlciB9IGZyb20gJy4vc3BpZGVyJ1xuaW1wb3J0IHsgYXJjU2xpZGVycywgQXJjU2xpZGVyIH0gZnJvbSAnLi9hcmNzbGlkZXInXG5pbXBvcnQgeyBjaGFydHMsIENoYXJ0IH0gZnJvbSAnLi9jaGFydCdcbmltcG9ydCB7IGxpc3RTd2l0Y2hlckZhY3RvcnksIExpc3RTd2l0Y2hlciB9IGZyb20gJy4vbGlzdHN3aXRjaGVyJ1xuXG5leHBvcnQgeyBEcmFnZ2FibGUsXG4gIFBvaW50LCBSZWN0YW5nbGUsIEdlb21ldHJ5LFxuICBMaXN0LCBsaXN0RmFjdG9yeSxcbiAgdGFyZ2V0cywgVGFyZ2V0LFxuICBzY29wZXMsIGRlZmF1bHRTY29wZSwgU2NvcGUsIHNjb3BlRmFjdG9yeSwgc2NvcGUsXG4gIHBvc2l0aW9uVHlwZSwgc29ydGluZ0ZhY3RvcnksIHBvc2l0aW9uRmFjdG9yeSxcbiAgYm91bmQsXG4gIHNwaWRlcnMsIFNwaWRlcixcbiAgYXJjU2xpZGVycywgQXJjU2xpZGVyLFxuICBjaGFydHMsIENoYXJ0LFxuICBsaXN0U3dpdGNoZXJGYWN0b3J5LCBMaXN0U3dpdGNoZXJcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5jb25zdCBsaXN0cyA9IFtdXG5cbmltcG9ydCB7IHJlbW92ZUl0ZW0gfSBmcm9tICcuL3V0aWwnXG5pbXBvcnQgRXZlbnQgZnJvbSAnLi9ldmVudCdcbmltcG9ydCB7IEdlb21ldHJ5IH0gZnJvbSAnLi9nZW9tZXRyeSdcbmltcG9ydCB7IERyYWdnYWJsZSB9IGZyb20gJy4vZHJhZ2dhYmxlJ1xuXG5jb25zdCBEcmFnZWUgPSB7IEV2ZW50IH0gLy90b2RvIHJlbW92ZSBhZnRlciByZWZhY3RvcmVcblxuY2xhc3MgTGlzdCB7XG4gIGNvbnN0cnVjdG9yKGRyYWdnYWJsZXMsIG9wdGlvbnM9e30pIHtcbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIHRpbWVFbmQ6IDIwMCxcbiAgICAgIHRpbWVFeGNhbmdlOiA0MDAsXG4gICAgICByYWRpdXM6IDMwLFxuICAgICAgZ2V0RGlzdGFuY2U6IEdlb21ldHJ5LmdldERpc3RhbmNlLFxuICAgICAgaXNEaXNwbGFjZW1lbnQ6IGZhbHNlXG4gICAgfSwgb3B0aW9ucylcblxuICAgIHRoaXMuZHJhZ2dhYmxlcyA9IGRyYWdnYWJsZXNcbiAgICBsaXN0cy5wdXNoKHRoaXMpXG4gICAgdGhpcy5vbkNoYW5nZSA9IG5ldyBEcmFnZWUuRXZlbnQodGhpcylcbiAgICBpZiAob3B0aW9ucy5vbkNoYW5nZSkge1xuICAgICAgdGhpcy5vbkNoYW5nZS5hZGQob3B0aW9ucy5vbkNoYW5nZSlcbiAgICB9XG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5fZW5hYmxlID0gdHJ1ZVxuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKHRoaXMuaW5pdERyYWdnYWJsZSwgdGhpcylcbiAgfVxuXG4gIGluaXREcmFnZ2FibGUoZHJhZ2dhYmxlKSB7XG4gICAgbGV0IG1vdmVIYW5kbGVyXG4gICAgY29uc3QgbGlzdCA9IHRoaXNcblxuICAgIGRyYWdnYWJsZS5lbmFibGUgPSB0aGlzLl9lbmFibGVcbiAgICBpZiAodGhpcy5vcHRpb25zLmlzRGlzcGxhY2VtZW50KSB7XG4gICAgICBtb3ZlSGFuZGxlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoZHJhZ2dhYmxlLmlzRHJhZ2VlKSB7XG4gICAgICAgICAgbGlzdC5vblN0YXJ0KGRyYWdnYWJsZSlcbiAgICAgICAgICBkcmFnZ2FibGUub25Nb3ZlLnJlbW92ZShtb3ZlSGFuZGxlcilcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGRyYWdnYWJsZS5vbkVuZC5hZGQoKCkgPT4ge1xuICAgICAgICB0aGlzLm9uRW5kRGlzcGxheWNlbWVudChkcmFnZ2FibGUpXG4gICAgICAgIGRyYWdnYWJsZS5vbk1vdmUuYWRkKG1vdmVIYW5kbGVyKVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfSlcblxuICAgICAgZHJhZ2dhYmxlLm9uTW92ZS5hZGQobW92ZUhhbmRsZXIpXG4gICAgfSBlbHNlIHtcbiAgICAgIGRyYWdnYWJsZS5vbkVuZC5hZGQoKCkgPT4ge1xuICAgICAgICB0aGlzLm9uRW5kKGRyYWdnYWJsZSlcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgbW92ZU9yU2F2ZShkcmFnZ2FibGUsIHBvc2l0aW9uLCB0aW1lKSB7XG4gICAgaWYgKGRyYWdnYWJsZS5pc0RyYWdlZSkge1xuICAgICAgZHJhZ2dhYmxlLmZpeFBvc2l0aW9uID0gcG9zaXRpb25cbiAgICB9IGVsc2Uge1xuICAgICAgZHJhZ2dhYmxlLm1vdmUocG9zaXRpb24sIHRpbWUsIHRydWUpXG4gICAgfVxuICB9XG5cbiAgb25FbmQoZHJhZ2dhYmxlKSB7XG4gICAgY29uc3QgZml4UG9zaXRpb25zID0gdGhpcy5nZXRDdXJyZW50Rml4UG9zaXRpb24oKVxuICAgIGNvbnN0IGN1cnJlbnRJbmRleCA9IHRoaXMuZHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSlcbiAgICBjb25zdCBleGNhbmdlSW5kZXggPSBHZW9tZXRyeS5pbmRleE9mTmVhclBvaW50KGZpeFBvc2l0aW9ucywgZHJhZ2dhYmxlLnBvc2l0aW9uLCB0aGlzLm9wdGlvbnMucmFkaXVzLCB0aGlzLm9wdGlvbnMuZ2V0RGlzdGFuY2UpXG5cbiAgICBpZiAoZXhjYW5nZUluZGV4ID09PSAtMSB8fCBleGNhbmdlSW5kZXggPT09IGN1cnJlbnRJbmRleCkge1xuICAgICAgZHJhZ2dhYmxlLm1vdmUoZHJhZ2dhYmxlLmZpeFBvc2l0aW9uLCB0aGlzLm9wdGlvbnMudGltZUVuZCwgdHJ1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5tb3ZlT3JTYXZlKHRoaXMuZHJhZ2dhYmxlc1tleGNhbmdlSW5kZXhdLCBmaXhQb3NpdGlvbnNbY3VycmVudEluZGV4XSwgdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlKVxuICAgICAgdGhpcy5kcmFnZ2FibGVzW2N1cnJlbnRJbmRleF0ubW92ZShmaXhQb3NpdGlvbnNbZXhjYW5nZUluZGV4XSwgdGhpcy5vcHRpb25zLnRpbWVFbmQsIHRydWUpXG4gICAgICB0aGlzLm9uQ2hhbmdlLmZpcmUoKVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgb25FbmREaXNwbGF5Y2VtZW50KGRyYWdnYWJsZSkge1xuICAgIGNvbnN0IHNvcnRlZERyYWdnYWJsZXMgPSB0aGlzLmdldFNvcnRlZERyYWdnYWJsZXMoKVxuICAgIGNvbnN0IGZpeFBvc2l0aW9ucyA9IHNvcnRlZERyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5maXhQb3NpdGlvbilcblxuICAgIGNvbnN0IGN1cnJlbnRJbmRleCA9IHNvcnRlZERyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpXG4gICAgY29uc3QgdGFyZ2V0SW5kZXggPSBHZW9tZXRyeS5pbmRleE9mTmVhclBvaW50KGZpeFBvc2l0aW9ucywgZHJhZ2dhYmxlLnBvc2l0aW9uLCB0aGlzLm9wdGlvbnMucmFkaXVzLCB0aGlzLm9wdGlvbnMuZ2V0RGlzdGFuY2UpXG5cbiAgICBpZiAodGFyZ2V0SW5kZXggIT09IC0xKSB7XG4gICAgICBpZiAodGFyZ2V0SW5kZXggPCBjdXJyZW50SW5kZXgpIHtcbiAgICAgICAgZm9yIChsZXQgaT10YXJnZXRJbmRleDsgaTxjdXJyZW50SW5kZXg7IGkrKykge1xuICAgICAgICAgIHRoaXMubW92ZU9yU2F2ZShzb3J0ZWREcmFnZ2FibGVzW2ldLCBmaXhQb3NpdGlvbnNbaSsxXSwgdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKGxldCBpPWN1cnJlbnRJbmRleDsgaTx0YXJnZXRJbmRleDsgaSsrKSB7XG4gICAgICAgICAgdGhpcy5tb3ZlT3JTYXZlKHNvcnRlZERyYWdnYWJsZXNbaSsxXSwgZml4UG9zaXRpb25zW2ldLCB0aGlzLm9wdGlvbnMudGltZUV4Y2FuZ2UpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGRyYWdnYWJsZS5tb3ZlKGZpeFBvc2l0aW9uc1t0YXJnZXRJbmRleF0sIHRoaXMub3B0aW9ucy50aW1lRW5kLCB0cnVlKVxuICAgIH0gZWxzZSB7XG4gICAgICBkcmFnZ2FibGUubW92ZShkcmFnZ2FibGUuZml4UG9zaXRpb24sIHRoaXMub3B0aW9ucy50aW1lRW5kLCB0cnVlKVxuICAgIH1cbiAgfVxuXG4gIG9uU3RhcnQoZHJhZ2dhYmxlKSB7XG4gICAgbGV0IGlcbiAgICBjb25zdCBzb3J0ZWREcmFnZ2FibGVzID0gdGhpcy5nZXRTb3J0ZWREcmFnZ2FibGVzKClcbiAgICBjb25zdCBmaXhQb3NpdGlvbnMgPSBzb3J0ZWREcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUuZml4UG9zaXRpb24pXG5cbiAgICBjb25zdCBjdXJyZW50SW5kZXggPSBzb3J0ZWREcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKVxuICAgIGZvciAoaSA9IGN1cnJlbnRJbmRleCArIDE7IGkgPCBzb3J0ZWREcmFnZ2FibGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLm1vdmVPclNhdmUoc29ydGVkRHJhZ2dhYmxlc1tpXSwgZml4UG9zaXRpb25zW2kgLSAxXSwgdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlKVxuICAgIH1cbiAgICBzb3J0ZWREcmFnZ2FibGVzW2N1cnJlbnRJbmRleF0uZml4UG9zaXRpb24gPSBmaXhQb3NpdGlvbnNbaSAtIDFdXG4gIH1cblxuICBnZXRDdXJyZW50Rml4UG9zaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLmZpeFBvc2l0aW9uLmNsb25lKCkpXG4gIH1cblxuICBnZXRTb3J0ZWREcmFnZ2FibGVzKCkge1xuICAgIGNvbnN0IGluaXRQb3NpdGlvbnMgPSB0aGlzLmRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5pbml0UG9zaXRpb24pXG5cbiAgICBjb25zdCBzb3J0ZWREcmFnZ2FibGVzID0gaW5pdFBvc2l0aW9ucy5tYXAoKHBvc2l0aW9uKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5kcmFnZ2FibGVzLmZpbHRlcigoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUuZml4UG9zaXRpb24uY29tcGFyZShwb3NpdGlvbikpWzBdXG4gICAgfSlcblxuICAgIHJldHVybiBzb3J0ZWREcmFnZ2FibGVzXG4gIH1cblxuICByZXNldCgpIHtcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBkcmFnZ2FibGUubW92ZShkcmFnZ2FibGUuaW5pdFBvc2l0aW9uLCAwLCB0cnVlLCBmYWxzZSlcbiAgICB9KVxuICB9XG5cbiAgcmVmcmVzaCgpIHtcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBkcmFnZ2FibGUucmVmcmVzaCgpXG4gICAgfSlcbiAgfVxuXG4gIGFkZChkcmFnZ2FibGVzKSB7XG4gICAgaWYgKCEoZHJhZ2dhYmxlcyBpbnN0YW5jZW9mIEFycmF5KSkge1xuICAgICAgZHJhZ2dhYmxlcyA9IFtkcmFnZ2FibGVzXVxuICAgIH1cbiAgICBkcmFnZ2FibGVzLmZvckVhY2godGhpcy5pbml0RHJhZ2dhYmxlLCB0aGlzKVxuICAgIHRoaXMuZHJhZ2dhYmxlcyA9IHRoaXMuZHJhZ2dhYmxlcy5jb25jYXQoZHJhZ2dhYmxlcylcbiAgfVxuXG4gIHJlbW92ZShkcmFnZ2FibGVzKSB7XG4gICAgY29uc3QgaW5pdFBvc2l0aW9ucyA9IHRoaXMuZHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLmluaXRQb3NpdGlvbilcbiAgICBjb25zdCBsaXN0ID0gW11cbiAgICBjb25zdCBzb3J0ZWREcmFnZ2FibGVzID0gdGhpcy5nZXRTb3J0ZWREcmFnZ2FibGVzKClcblxuICAgIGlmICghKGRyYWdnYWJsZXMgaW5zdGFuY2VvZiBBcnJheSkpIHtcbiAgICAgIGRyYWdnYWJsZXMgPSBbZHJhZ2dhYmxlc11cbiAgICB9XG5cbiAgICBkcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgZHJhZ2dhYmxlLm9uRW5kLnJlc2V0KClcbiAgICAgIGRyYWdnYWJsZS5vbk1vdmUucmVzZXQoKSAvL3RvZG8gcmVtb3ZlIHJlc2V0IGluIGZ1dHVyZVxuICAgICAgcmVtb3ZlSXRlbSh0aGlzLmRyYWdnYWJsZXMsIGRyYWdnYWJsZSlcbiAgICB9KVxuXG4gICAgbGV0IGogPSAwXG4gICAgc29ydGVkRHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIGlmICh0aGlzLmRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpICE9PSAtMSkge1xuICAgICAgICBpZiAoZHJhZ2dhYmxlLmZpeFBvc2l0aW9uICE9PSBpbml0UG9zaXRpb25zW2pdKSB7XG4gICAgICAgICAgZHJhZ2dhYmxlLm1vdmUoaW5pdFBvc2l0aW9uc1tqXSwgdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlLCB0cnVlKVxuICAgICAgICB9XG4gICAgICAgIGRyYWdnYWJsZS5pbml0UG9zaXRpb24gPSBpbml0UG9zaXRpb25zW2pdXG4gICAgICAgIGorK1xuICAgICAgICBsaXN0LnB1c2goZHJhZ2dhYmxlKVxuICAgICAgfVxuICAgIH0pXG4gICAgdGhpcy5kcmFnZ2FibGVzID0gbGlzdFxuICB9XG5cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy5yZW1vdmUodGhpcy5kcmFnZ2FibGVzLnNsaWNlKCkpXG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5kZXN0cm95KCkpXG4gIH1cblxuICBnZXQgcG9zaXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmdldEN1cnJlbnRGaXhQb3NpdGlvbigpXG4gIH1cblxuICBzZXQgcG9zaXRpb25zKHBvc2l0aW9ucykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSAnd3JvbmcgYXJyYXkgbGVuZ3RoJ1xuICAgIGlmIChwb3NpdGlvbnMubGVuZ3RoID09PSB0aGlzLmRyYWdnYWJsZXMubGVuZ3RoKSB7XG4gICAgICBwb3NpdGlvbnMuZm9yRWFjaCgocG9pbnQsIGkpID0+IHtcbiAgICAgICAgdGhpcy5kcmFnZ2FibGVzW2ldLm1vdmUocG9pbnQsIDAsIHRydWUsIHRydWUpXG4gICAgICB9LCB0aGlzKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBtZXNzYWdlXG4gICAgfVxuICB9XG5cbiAgZ2V0IGVuYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZW5hYmxlXG4gIH1cblxuICBzZXQgZW5hYmxlKGVuYWJsZSkge1xuICAgIHRoaXMuX2VuYWJsZSA9IGVuYWJsZVxuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIGRyYWdnYWJsZS5lbmFibGUgPSBlbmFibGVcbiAgICB9KVxuICB9XG59XG5cbmZ1bmN0aW9uIGxpc3RGYWN0b3J5KHBhcmVudEVsZW1lbnQsIGVsZW1lbnRzLCBvcHRpb25zPXt9KSB7XG4gIGNvbnN0IGRyYWdnYWJsZU9wdGlvbnMgPSBvcHRpb25zLmRyYWdnYWJsZSB8fCB7fVxuICBjb25zdCBsaXN0T3B0aW9ucyA9IG9wdGlvbnMubGlzdCB8fCB7fVxuICBkcmFnZ2FibGVPcHRpb25zLnBhcmVudCA9IGRyYWdnYWJsZU9wdGlvbnMucGFyZW50IHx8IHBhcmVudEVsZW1lbnRcbiAgZWxlbWVudHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChlbGVtZW50cylcblxuICBjb25zdCBkcmFnZ2FibGVzID0gZWxlbWVudHMubWFwKChlbGVtZW50KSA9PiB7XG4gICAgcmV0dXJuIG5ldyBEcmFnZ2FibGUoZWxlbWVudCwgZHJhZ2dhYmxlT3B0aW9ucylcbiAgfSlcblxuICByZXR1cm4gbmV3IExpc3QoZHJhZ2dhYmxlcywgbGlzdE9wdGlvbnMpXG59XG5cbmV4cG9ydCB7IGxpc3RzLCBMaXN0LCBsaXN0RmFjdG9yeSB9XG4iLCIndXNlIHN0cmljdCdcblxuaW1wb3J0IHsgR2VvbWV0cnksIFBvaW50IH0gZnJvbSAnLi9nZW9tZXRyeSdcbmltcG9ydCB7IERyYWdnYWJsZSB9IGZyb20gJy4vZHJhZ2dhYmxlJ1xuaW1wb3J0IHsgTGlzdCB9IGZyb20gJy4vbGlzdCdcblxuY2xhc3MgTGlzdFN3aXRjaGVyIGV4dGVuZHMgTGlzdCB7XG4gIGNvbnN0cnVjdG9yKGRyYWdnYWJsZXMsIG9wdGlvbnM9e30pIHtcbiAgICBvcHRpb25zLnN0ZXBPbiA9IG9wdGlvbnMuc3RlcE9uIHx8IG5ldyBQb2ludCgtNTAsIDApXG4gICAgc3VwZXIoZHJhZ2dhYmxlcywgb3B0aW9ucylcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgZHJhZ2dhYmxlLmlzT24gPSBmYWxzZVxuICAgICAgZHJhZ2dhYmxlLm9uRW5kLmFkZCgoKSA9PiB7XG4gICAgICAgIHRoaXMub25FbmQoZHJhZ2dhYmxlKVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgb25FbmQoZHJhZ2dhYmxlKSB7XG4gICAgY29uc3QgZml4UG9zaXRpb25zID0gdGhpcy5nZXRDdXJyZW50Rml4UG9zaXRpb25XaXRoT2ZmKClcbiAgICBjb25zdCBjdXJyZW50SW5kZXggPSB0aGlzLmRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpXG4gICAgY29uc3QgZXhjYW5nZUluZGV4ID0gR2VvbWV0cnkuaW5kZXhPZk5lYXJQb2ludChmaXhQb3NpdGlvbnMsIGRyYWdnYWJsZS5wb3NpdGlvbiwgdGhpcy5vcHRpb25zLnJhZGl1cywgdGhpcy5vcHRpb25zLmdldERpc3RhbmNlKVxuXG4gICAgaWYgKGV4Y2FuZ2VJbmRleCA9PT0gLTEgfHwgZXhjYW5nZUluZGV4ID09PSBjdXJyZW50SW5kZXgpIHtcbiAgICAgIHRoaXMubW92ZURyYWdnYWJsZShjdXJyZW50SW5kZXgsIGRyYWdnYWJsZS5wb3NpdGlvbiwgZml4UG9zaXRpb25zW2N1cnJlbnRJbmRleF0sIHRoaXMub3B0aW9ucy50aW1lRW5kKVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5kcmFnZ2FibGVzW2V4Y2FuZ2VJbmRleF0uaXNEcmFnZWUpIHtcbiAgICAgICAgdGhpcy5maXhUb09mZihleGNhbmdlSW5kZXgsIGZpeFBvc2l0aW9uc1tjdXJyZW50SW5kZXhdKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5tb3ZlRHJhZ2dhYmxlVG9PZmYoZXhjYW5nZUluZGV4LCBmaXhQb3NpdGlvbnNbY3VycmVudEluZGV4XSwgdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlKVxuICAgICAgfVxuICAgICAgdGhpcy5tb3ZlRHJhZ2dhYmxlKGN1cnJlbnRJbmRleCwgZHJhZ2dhYmxlLnBvc2l0aW9uLCBmaXhQb3NpdGlvbnNbZXhjYW5nZUluZGV4XSwgdGhpcy5vcHRpb25zLnRpbWVFbmQpXG4gICAgICB0aGlzLm9uQ2hhbmdlLmZpcmUoKVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgbW92ZURyYWdnYWJsZShpbmRleCwgcG9zaXRpb24sIGZpeE9mZlBvc2l0aW9uLCB0aW1lKSB7XG4gICAgY29uc3QgcG9zaXRpb25zID0gW2ZpeE9mZlBvc2l0aW9uLCBmaXhPZmZQb3NpdGlvbi5hZGQodGhpcy5vcHRpb25zLnN0ZXBPbildXG4gICAgY29uc3QgaXNPbiA9IEdlb21ldHJ5LmluZGV4T2ZOZWFyUG9pbnQocG9zaXRpb25zLCBwb3NpdGlvbiwgLTEsIEdlb21ldHJ5LmdldFhEaWZmZXJlbmNlKVxuXG4gICAgaWYgKHRoaXMuZHJhZ2dhYmxlc1tpbmRleF0uaXNPbiAhPT0gISFpc09uKSB7XG4gICAgICB0aGlzLmRyYWdnYWJsZXNbaW5kZXhdLmlzT24gPSAhIWlzT25cbiAgICAgIHRoaXMub25DaGFuZ2UuZmlyZSgpXG4gICAgfVxuXG4gICAgdGhpcy5kcmFnZ2FibGVzW2luZGV4XS5tb3ZlKHBvc2l0aW9uc1tpc09uXSwgdGltZSwgdHJ1ZSlcbiAgfVxuXG4gIGZpeFRvT2ZmKGluZGV4LCBmaXhPZmZQb3NpdGlvbikge1xuICAgIHRoaXMuZHJhZ2dhYmxlc1tpbmRleF0uaXNPbiA9IGZhbHNlXG4gICAgdGhpcy5kcmFnZ2FibGVzW2luZGV4XS5maXhQb3NpdGlvbiA9IGZpeE9mZlBvc2l0aW9uXG4gIH1cblxuICBtb3ZlRHJhZ2dhYmxlVG9PZmYoaW5kZXgsIGZpeE9mZlBvc2l0aW9uLCB0aW1lKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzW2luZGV4XS5pc09uID0gZmFsc2VcbiAgICB0aGlzLmRyYWdnYWJsZXNbaW5kZXhdLm1vdmUoZml4T2ZmUG9zaXRpb24sIHRpbWUsIHRydWUpXG4gIH1cblxuICBnZXRDdXJyZW50Rml4UG9zaXRpb25XaXRoT2ZmKCkge1xuICAgIHJldHVybiB0aGlzLmRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIHJldHVybiBkcmFnZ2FibGUuaXNPbiA/IGRyYWdnYWJsZS5maXhQb3NpdGlvbi5zdWIodGhpcy5vcHRpb25zLnN0ZXBPbikgOiBkcmFnZ2FibGUuZml4UG9zaXRpb24uY2xvbmUoKVxuICAgIH0sIHRoaXMpXG4gIH1cblxuICBnZXRTb3J0ZWREcmFnZ2FibGVzKCkge1xuICAgIHJldHVybiB0aGlzLmRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5pbml0UG9zaXRpb24pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoKHBvc2l0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZHJhZ2dhYmxlcy5maWx0ZXIoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRyYWdnYWJsZS5maXhQb3NpdGlvbi5jb21wYXJlKHBvc2l0aW9uKSB8fCBkcmFnZ2FibGUuZml4UG9zaXRpb24uY29tcGFyZShwb3NpdGlvbi5hZGQodGhpcy5vcHRpb25zLnN0ZXBPbikpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgdGhpcylbMF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgdGhpcylcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIGRyYWdnYWJsZS5tb3ZlKGRyYWdnYWJsZS5pbml0UG9zaXRpb24sIDAsIHRydWUsIGZhbHNlKVxuICAgICAgZHJhZ2dhYmxlLmlzT24gPSBmYWxzZVxuICAgIH0pXG4gIH1cblxuICBnZXQgcG9zaXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIGNvbnN0IHBvc2l0aW9uID0gZHJhZ2dhYmxlLmZpeFBvc2l0aW9uLmNsb25lKClcbiAgICAgIHBvc2l0aW9uLmlzT24gPSBkcmFnZ2FibGUuaXNPblxuICAgICAgcmV0dXJuIHBvc2l0aW9uXG4gICAgfSlcbiAgfVxuXG4gIHNldCBwb3NpdGlvbnMocG9zaXRpb25zKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9ICd3cm9uZyBhcnJheSBsZW5ndGgnXG4gICAgaWYgKHBvc2l0aW9ucy5sZW5ndGggPT09IHRoaXMuZHJhZ2dhYmxlcy5sZW5ndGgpIHtcbiAgICAgIHBvc2l0aW9ucy5mb3JFYWNoKChwb2ludCwgaSkgPT4ge1xuICAgICAgICB0aGlzLmRyYWdnYWJsZXNbaV0uaXNPbiA9IHBvaW50LmlzT25cbiAgICAgICAgdGhpcy5kcmFnZ2FibGVzW2ldLm1vdmUocG9pbnQsIDAsIHRydWUsIHRydWUpXG4gICAgICB9LCB0aGlzKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBtZXNzYWdlXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGxpc3RTd2l0Y2hlckZhY3RvcnkoZWxlbWVudCwgZHJhZ2dhYmxlRWxlbWVudHMsIG9wdGlvbnM9e30pIHtcbiAgY29uc3QgZHJhZ2dhYmxlT3B0aW9ucyA9IG9wdGlvbnMuZHJhZ2dhYmxlIHx8IHt9XG4gIGNvbnN0IGxpc3RPcHRpb25zID0gb3B0aW9ucy5saXN0IHx8IHt9XG5cbiAgZHJhZ2dhYmxlT3B0aW9ucy5wYXJlbnQgPSBkcmFnZ2FibGVPcHRpb25zLnBhcmVudCB8fCBlbGVtZW50XG4gIGRyYWdnYWJsZUVsZW1lbnRzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZHJhZ2dhYmxlRWxlbWVudHMpXG5cbiAgY29uc3QgZHJhZ2dhYmxlcyA9IGRyYWdnYWJsZUVsZW1lbnRzLm1hcCgoZWxlbWVudCkgPT4ge1xuICAgIHJldHVybiBuZXcgRHJhZ2dhYmxlKGVsZW1lbnQsIGRyYWdnYWJsZU9wdGlvbnMpXG4gIH0pXG4gIHJldHVybiBuZXcgTGlzdFN3aXRjaGVyKGRyYWdnYWJsZXMsIGxpc3RPcHRpb25zKVxufVxuXG5leHBvcnQgeyBsaXN0U3dpdGNoZXJGYWN0b3J5LCBMaXN0U3dpdGNoZXIgfVxuIiwiJ3VzZSBzdHJpY3QnXG5pbXBvcnQgeyBHZW9tZXRyeSwgUG9pbnQgfSBmcm9tICcuL2dlb21ldHJ5J1xuXG5jb25zdCBwb3NpdGlvblR5cGUgPSB7XG4gIG5vdENyb3NzaW5nOiAwLFxuICBmbG9hdExlZnQ6IDEsXG4gIGZsb2F0UmlnaHQ6IDJcbn1cblxuZnVuY3Rpb24gcG9zaXRpb25GYWN0b3J5KHR5cGUpIHtcbiAgc3dpdGNoICh0eXBlKSB7XG4gIGNhc2UgcG9zaXRpb25UeXBlLm5vdENyb3NzaW5nOlxuICAgIHJldHVybiBmdW5jdGlvbihyZWN0YW5nbGUsIF9vcHRpb25zKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24ocmVjdGFuZ2xlTGlzdCwgaW5kZXhlc09mTmV3cykge1xuICAgICAgICBjb25zdCBib3VuZFJlY3QgPSB0eXBlb2YgcmVjdGFuZ2xlID09PSAnZnVuY3Rpb24nID8gcmVjdGFuZ2xlKCkgOiByZWN0YW5nbGUsXG4gICAgICAgICAgc3RhdGljUmVjdGFuZ2xlSW5kZXhlcyA9IHJlY3RhbmdsZUxpc3QucmVkdWNlKGZ1bmN0aW9uKGluZGV4ZXMsIF9yZWN0LCBpbmRleCkge1xuICAgICAgICAgICAgaWYgKGluZGV4ZXNPZk5ld3MuaW5kZXhPZihpbmRleCkgPT09IC0xKSB7XG4gICAgICAgICAgICAgIGluZGV4ZXMucHVzaChpbmRleClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBpbmRleGVzXG4gICAgICAgICAgfSwgW10pXG5cbiAgICAgICAgaW5kZXhlc09mTmV3cy5mb3JFYWNoKGZ1bmN0aW9uKGluZGV4KSB7XG4gICAgICAgICAgbGV0IHJlY3QgPSByZWN0YW5nbGVMaXN0W2luZGV4XSwgcmVtb3ZhYmxlID0gZmFsc2VcbiAgICAgICAgICBzdGF0aWNSZWN0YW5nbGVJbmRleGVzLmZvckVhY2goZnVuY3Rpb24oaW5kZXhPZlN0YXRpYykge1xuICAgICAgICAgICAgY29uc3Qgc3RhdGljUmVjdCA9IHJlY3RhbmdsZUxpc3RbaW5kZXhPZlN0YXRpY11cbiAgICAgICAgICAgIHJlY3QgPSBzdGF0aWNSZWN0Lm1vdmVUb0JvdW5kKHJlY3QpXG4gICAgICAgICAgfSlcbiAgICAgICAgICByZW1vdmFibGUgPSBzdGF0aWNSZWN0YW5nbGVJbmRleGVzLnNvbWUoZnVuY3Rpb24oaW5kZXhPZlN0YXRpYykge1xuICAgICAgICAgICAgY29uc3Qgc3RhdGljUmVjdCA9IHJlY3RhbmdsZUxpc3RbaW5kZXhPZlN0YXRpY11cbiAgICAgICAgICAgIHJldHVybiAgISFzdGF0aWNSZWN0LmFuZChyZWN0KVxuICAgICAgICAgIH0pIHx8IHJlY3QuYW5kKGJvdW5kUmVjdCkuZ2V0U3F1YXJlKCkgIT09IHJlY3QuZ2V0U3F1YXJlKClcbiAgICAgICAgICBpZiAocmVtb3ZhYmxlKSB7XG4gICAgICAgICAgICByZWN0LnJlbW92YWJsZSA9IHRydWVcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3RhdGljUmVjdGFuZ2xlSW5kZXhlcy5wdXNoKGluZGV4KVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIHJlY3RhbmdsZUxpc3RcbiAgICAgIH1cbiAgICB9XG4gIGNhc2UgcG9zaXRpb25UeXBlLmZsb2F0TGVmdDpcbiAgICByZXR1cm4gZnVuY3Rpb24ocmVjdGFuZ2xlLCBvcHRpb25zKSB7XG4gICAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIHBhZGRpbmdUb3BMZWZ0OiBuZXcgUG9pbnQoMCwgMCksXG4gICAgICAgIHBhZGRpbmdCb3R0b21SaWdodDogbmV3IFBvaW50KDAsIDApLFxuICAgICAgICB5R2FwQmV0d2VlbkRyYWdnYWJsZXM6IDAsXG4gICAgICAgIHJlbW92YWJsZTogdHJ1ZVxuICAgICAgfSwgb3B0aW9ucylcblxuICAgICAgcmV0dXJuIGZ1bmN0aW9uKHJlY3RhbmdsZUxpc3QsIF9pbmRleGVzT2ZOZXdzKSB7XG4gICAgICAgIGNvbnN0IGJvdW5kUmVjdCA9IHR5cGVvZiByZWN0YW5nbGUgPT09ICdmdW5jdGlvbicgPyByZWN0YW5nbGUoKSA6IHJlY3RhbmdsZVxuICAgICAgICBjb25zdCByZWN0UDIgPSBib3VuZFJlY3QuZ2V0UDIoKVxuICAgICAgICBsZXQgYm91bmRhcnlQb2ludHMgPSBbYm91bmRSZWN0LnBvc2l0aW9uXVxuICAgICAgICByZWN0YW5nbGVMaXN0LmZvckVhY2goZnVuY3Rpb24ocmVjdCkge1xuICAgICAgICAgIGxldCBwb3NpdGlvbiwgaXNWYWxpZCA9IGZhbHNlXG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBib3VuZGFyeVBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcG9zaXRpb24gPSAobmV3IFBvaW50KGJvdW5kYXJ5UG9pbnRzW2ldLngsIGkgPiAwID8gKGJvdW5kYXJ5UG9pbnRzW2kgLSAxXS55ICsgb3B0aW9ucy55R2FwQmV0d2VlbkRyYWdnYWJsZXMpIDogYm91bmRSZWN0LnBvc2l0aW9uLnkpKS5hZGQob3B0aW9ucy5wYWRkaW5nVG9wTGVmdClcbiAgICAgICAgICAgIGlzVmFsaWQgPSAocG9zaXRpb24ueCArIHJlY3Quc2l6ZS54IDwgcmVjdFAyLngpXG4gICAgICAgICAgICBpZiAoaXNWYWxpZCkge1xuICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIWlzVmFsaWQpIHtcbiAgICAgICAgICAgIHBvc2l0aW9uID0gKG5ldyBQb2ludChib3VuZFJlY3QucG9zaXRpb24ueCwgYm91bmRhcnlQb2ludHNbYm91bmRhcnlQb2ludHMubGVuZ3RoIC0gMV0ueSArIG9wdGlvbnMueUdhcEJldHdlZW5EcmFnZ2FibGVzKSkuYWRkKG9wdGlvbnMucGFkZGluZ1RvcExlZnQpXG4gICAgICAgICAgfVxuICAgICAgICAgIHJlY3QucG9zaXRpb24gPSBwb3NpdGlvblxuICAgICAgICAgIGlmIChvcHRpb25zLnJlbW92YWJsZSAmJiByZWN0LmdldFAzKCkueSA+IGJvdW5kUmVjdC5nZXRQMygpLnkpIHtcbiAgICAgICAgICAgIHJlY3QucmVtb3ZhYmxlID0gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgICBib3VuZGFyeVBvaW50cyA9IEdlb21ldHJ5LmFkZFBvaW50VG9Cb3VuZFBvaW50cyhib3VuZGFyeVBvaW50cywgcmVjdC5nZXRQMygpLmFkZChvcHRpb25zLnBhZGRpbmdCb3R0b21SaWdodCkpXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiByZWN0YW5nbGVMaXN0XG4gICAgICB9XG4gICAgfVxuICBjYXNlIHBvc2l0aW9uVHlwZS5mbG9hdFJpZ2h0OlxuICAgIHJldHVybiBmdW5jdGlvbihyZWN0YW5nbGUsIG9wdGlvbnMpIHtcbiAgICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaW5nKHtcbiAgICAgICAgcGFkZGluZ1RvcFJpZ2h0OiBuZXcgUG9pbnQoNSwgNSksXG4gICAgICAgIHBhZGRpbmdCb3R0b21MZWZ0OiBuZXcgUG9pbnQoMCwgMCksXG4gICAgICAgIHJlbW92YWJsZTogdHJ1ZVxuICAgICAgfSwgb3B0aW9ucylcblxuICAgICAgY29uc3QgcGFkZGluZ1RvcE5lZ1JpZ2h0ID0gbmV3IFBvaW50KC1vcHRpb25zLnBhZGRpbmdUb3BSaWdodC54LCBvcHRpb25zLnBhZGRpbmdUb3BSaWdodC55KVxuICAgICAgY29uc3QgcGFkZGluZ0JvdHRvbU5lZ0xlZnQgPSBuZXcgUG9pbnQoLW9wdGlvbnMucGFkZGluZ0JvdHRvbUxlZnQueCwgb3B0aW9ucy5wYWRkaW5nQm90dG9tTGVmdC55KVxuICAgICAgcmV0dXJuIGZ1bmN0aW9uKHJlY3RhbmdsZUxpc3QsIF9pbmRleGVzT2ZOZXdzKSB7XG4gICAgICAgIGNvbnN0IGJvdW5kUmVjdCA9IHR5cGVvZiByZWN0YW5nbGUgPT09ICdmdW5jdGlvbicgPyByZWN0YW5nbGUoKSA6IHJlY3RhbmdsZVxuICAgICAgICBsZXQgYm91bmRhcnlQb2ludHMgPSBbYm91bmRSZWN0LmdldFJpZ2h0VG9wUG9pbnQoKV1cbiAgICAgICAgcmVjdGFuZ2xlTGlzdC5mb3JFYWNoKGZ1bmN0aW9uKHJlY3QsIF9pbmRleCkge1xuICAgICAgICAgIGxldCBwb3NpdGlvbiwgaXNWYWxpZCA9IGZhbHNlXG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBib3VuZGFyeVBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcG9zaXRpb24gPSAobmV3IFBvaW50KGJvdW5kYXJ5UG9pbnRzW2ldLnggLSByZWN0LnNpemUueCwgaSA+IDAgPyBib3VuZGFyeVBvaW50c1tpIC0gMV0ueSA6IGJvdW5kUmVjdC5wb3NpdGlvbi55KSkuYWRkKHBhZGRpbmdUb3BOZWdSaWdodClcbiAgICAgICAgICAgIGlzVmFsaWQgPSAocG9zaXRpb24ueCA+IHJlY3QucG9zaXRpb24ueClcbiAgICAgICAgICAgIGlmIChpc1ZhbGlkKSB7XG4gICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghaXNWYWxpZCkge1xuICAgICAgICAgICAgcG9zaXRpb24gPSBuZXcgUG9pbnQoYm91bmRSZWN0LmdldFAyKCkueCwgYm91bmRhcnlQb2ludHNbYm91bmRhcnlQb2ludHMubGVuZ3RoIC0gMV0ueSlcbiAgICAgICAgICB9XG4gICAgICAgICAgcmVjdC5wb3NpdGlvbiA9IHBvc2l0aW9uXG4gICAgICAgICAgaWYgKG9wdGlvbnMucmVtb3ZhYmxlICYmIHJlY3QuZ2V0TGVmdEJvdHRvbVBvaW50KCkueSA+IGJvdW5kUmVjdC5nZXRQNCgpLnkpIHtcbiAgICAgICAgICAgIHJlY3QucmVtb3ZhYmxlID0gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgICBib3VuZGFyeVBvaW50cyA9IEdlb21ldHJ5LmFkZFBvaW50VG9Cb3VuZFBvaW50cyhib3VuZGFyeVBvaW50cywgcmVjdC5nZXRQNCgpLmFkZChwYWRkaW5nQm90dG9tTmVnTGVmdCksIHRydWUpXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiByZWN0YW5nbGVMaXN0XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHNvcnRpbmdGYWN0b3J5KHR5cGUpIHtcbiAgc3dpdGNoICh0eXBlKSB7XG4gIGNhc2UgcG9zaXRpb25UeXBlLm5vdENyb3NzaW5nOlxuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihvbGRPYmpzTGlzdCwgbmV3T2JqcywgaW5kZXhPZk5ld3MpIHtcbiAgICAgICAgY29uc3Qgb2Jqc0xpc3QgPSBvbGRPYmpzTGlzdC5jb25jYXQobmV3T2JqcylcbiAgICAgICAgbmV3T2Jqcy5mb3JFYWNoKGZ1bmN0aW9uKG9iaikge1xuICAgICAgICAgIGluZGV4T2ZOZXdzLnB1c2gob2Jqc0xpc3QuaW5kZXhPZihvYmopKVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gb2Jqc0xpc3RcbiAgICAgIH1cbiAgICB9XG4gIGNhc2UgcG9zaXRpb25UeXBlLmZsb2F0TGVmdDpcbiAgY2FzZSBwb3NpdGlvblR5cGUuZmxvYXRSaWdodDpcbiAgICByZXR1cm4gZnVuY3Rpb24ocmFkaXVzLCBnZXREaXN0YW5jZSwgb3B0aW9ucykge1xuICAgICAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgICBnZXRQb3NpdGlvbjogZnVuY3Rpb24ob2JqKSB7XG4gICAgICAgICAgcmV0dXJuIG9iai5wb3NpdGlvblxuICAgICAgICB9XG4gICAgICB9LCBvcHRpb25zKVxuXG4gICAgICByZXR1cm4gZnVuY3Rpb24ob2xkT2Jqc0xpc3QsIG5ld09ianMsIGluZGV4T2ZOZXdzKSB7XG4gICAgICAgIGNvbnN0IG5ld0xpc3QgPSBvbGRPYmpzTGlzdC5jb25jYXQoKVxuICAgICAgICBjb25zdCBsaXN0T2xkUG9zaXRpb24gPSBvbGRPYmpzTGlzdC5tYXAob3B0aW9ucy5nZXRQb3NpdGlvbilcbiAgICAgICAgbmV3T2Jqcy5mb3JFYWNoKGZ1bmN0aW9uKG5ld09iaikge1xuICAgICAgICAgIGxldCBpbmRleCA9IEdlb21ldHJ5LmluZGV4T2ZOZWFyUG9pbnQobGlzdE9sZFBvc2l0aW9uLCBvcHRpb25zLmdldFBvc2l0aW9uKG5ld09iaiksIHJhZGl1cywgZ2V0RGlzdGFuY2UpXG4gICAgICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgaW5kZXggPSBuZXdMaXN0Lmxlbmd0aFxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpbmRleCA9IG5ld0xpc3QuaW5kZXhPZihvbGRPYmpzTGlzdFtpbmRleF0pXG4gICAgICAgICAgfVxuICAgICAgICAgIG5ld0xpc3Quc3BsaWNlKGluZGV4LCAwLCBuZXdPYmopXG4gICAgICAgIH0pXG4gICAgICAgIG5ld09ianMuZm9yRWFjaChmdW5jdGlvbihuZXdPYmopIHtcbiAgICAgICAgICBpbmRleE9mTmV3cy5wdXNoKG5ld0xpc3QuaW5kZXhPZihuZXdPYmopKVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gbmV3TGlzdFxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgeyBwb3NpdGlvblR5cGUsIHNvcnRpbmdGYWN0b3J5LCBwb3NpdGlvbkZhY3RvcnkgfVxuIiwiaW1wb3J0IHsgcmVtb3ZlSXRlbSB9IGZyb20gJy4vdXRpbCdcbmltcG9ydCBFdmVudCBmcm9tICcuL2V2ZW50J1xuaW1wb3J0IHsgRHJhZ2dhYmxlIH0gZnJvbSAnLi9kcmFnZ2FibGUnXG5pbXBvcnQgeyBUYXJnZXQgfSBmcm9tICcuL3RhcmdldCdcblxuY29uc3QgRHJhZ2VlID0geyBFdmVudCB9IC8vdG9kbyByZW1vdmUgYWZ0ZXIgcmVmYWN0b3JlXG5cbmNvbnN0IHNjb3BlcyA9IFtdXG5cbmNsYXNzIFNjb3BlIHtcbiAgY29uc3RydWN0b3IoZHJhZ2dhYmxlcywgdGFyZ2V0cywgb3B0aW9ucz17fSkge1xuICAgIHNjb3Blcy5mb3JFYWNoKChzY29wZSkgPT4ge1xuICAgICAgaWYgKGRyYWdnYWJsZXMpIHtcbiAgICAgICAgZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHtcbiAgICAgICAgICByZW1vdmVJdGVtKHNjb3BlLmRyYWdnYWJsZXMsIGRyYWdnYWJsZSlcbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgaWYgKHRhcmdldHMpIHtcbiAgICAgICAgdGFyZ2V0cy5mb3JFYWNoKCh0YXJnZXQpID0+IHtcbiAgICAgICAgICByZW1vdmVJdGVtKHNjb3BlLnRhcmdldHMsIHRhcmdldClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgdGhpcy5kcmFnZ2FibGVzID0gZHJhZ2dhYmxlcyB8fCBbXVxuICAgIHRoaXMudGFyZ2V0cyA9IHRhcmdldHMgfHwgW11cbiAgICBzY29wZXMucHVzaCh0aGlzKVxuICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgIHRpbWVFbmQ6IChvcHRpb25zLnRpbWVFbmQpIHx8IDQwMFxuICAgIH1cblxuICAgIHRoaXMub25DaGFuZ2UgPSBuZXcgRHJhZ2VlLkV2ZW50KHRoaXMpXG4gICAgaWYgKG9wdGlvbnMub25DaGFuZ2UpIHtcbiAgICAgIHRoaXMub25DaGFuZ2UuYWRkKG9wdGlvbnMub25DaGFuZ2UpXG4gICAgfVxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIGRyYWdnYWJsZS5vbkVuZC5hZGQoKCkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5vbkVuZChkcmFnZ2FibGUpXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBhZGREcmFnZ2FibGUoZHJhZ2dhYmxlKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzLnB1c2goZHJhZ2dhYmxlKVxuICAgIGRyYWdnYWJsZS5vbkVuZC51bnNoaWZ0KCgpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLm9uRW5kKGRyYWdnYWJsZSlcbiAgICB9KVxuICB9XG5cbiAgYWRkVGFyZ2V0KHRhcmdldCkge1xuICAgIHRoaXMudGFyZ2V0cy5wdXNoKHRhcmdldClcbiAgfVxuXG4gIG9uRW5kKGRyYWdnYWJsZSkge1xuICAgIGNvbnN0IHNob3RUYXJnZXRzID0gdGhpcy50YXJnZXRzLmZpbHRlcigodGFyZ2V0KSA9PiB7XG4gICAgICByZXR1cm4gdGFyZ2V0LmRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpICE9PSAtMVxuICAgIH0pLmZpbHRlcigodGFyZ2V0KSA9PiB7XG4gICAgICByZXR1cm4gdGFyZ2V0LmNhdGNoRHJhZ2dhYmxlKGRyYWdnYWJsZSlcbiAgICB9KS5zb3J0KChhLCBiKSA9PiB7XG4gICAgICByZXR1cm4gYS5nZXRSZWN0YW5nbGUoKS5nZXRTcXVhcmUoKSAtIGIuZ2V0UmVjdGFuZ2xlKCkuZ2V0U3F1YXJlKClcbiAgICB9KVxuXG4gICAgaWYgKHNob3RUYXJnZXRzLmxlbmd0aCkge1xuICAgICAgc2hvdFRhcmdldHNbMF0ub25FbmQoZHJhZ2dhYmxlKVxuICAgIH0gZWxzZSBpZiAoZHJhZ2dhYmxlLnRhcmdldHMubGVuZ3RoKSB7XG4gICAgICBkcmFnZ2FibGUubW92ZShkcmFnZ2FibGUuaW5pdFBvc2l0aW9uLCB0aGlzLm9wdGlvbnMudGltZUVuZCwgdHJ1ZSwgdHJ1ZSlcbiAgICB9XG4gICAgdGhpcy5vbkNoYW5nZS5maXJlKClcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy50YXJnZXRzLmZvckVhY2goKHRhcmdldCkgPT4gdGFyZ2V0LnJlc2V0KCkpXG4gIH1cblxuICByZWZyZXNoKCkge1xuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5yZWZyZXNoKCkpXG4gICAgdGhpcy50YXJnZXRzLmZvckVhY2goKHRhcmdldCkgPT4gdGFyZ2V0LnJlZnJlc2goKSlcbiAgfVxuXG4gIGdldCBwb3NpdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMudGFyZ2V0cy5tYXAoKHRhcmdldCkgPT4ge1xuICAgICAgcmV0dXJuIHRhcmdldC5pbm5lckRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IHRoaXMuZHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSkpXG4gICAgfSlcbiAgfVxuXG4gIHNldCBwb3NpdGlvbnMocG9zaXRpb25zKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9ICd3cm9uZyBhcnJheSBsZW5ndGgnXG4gICAgaWYgKHBvc2l0aW9ucy5sZW5ndGggPT09IHRoaXMudGFyZ2V0cy5sZW5ndGgpIHtcbiAgICAgIHRoaXMudGFyZ2V0cy5mb3JFYWNoKCh0YXJnZXQpID0+IHRhcmdldC5yZXNldCgpKVxuXG4gICAgICBwb3NpdGlvbnMuZm9yRWFjaCgodGFyZ2V0SW5kZXhlcywgaSkgPT4ge1xuICAgICAgICB0YXJnZXRJbmRleGVzLmZvckVhY2goKGluZGV4KSA9PiB7XG4gICAgICAgICAgdGhpcy50YXJnZXRzW2ldLmFkZCh0aGlzLmRyYWdnYWJsZXNbaW5kZXhdKVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbWVzc2FnZVxuICAgIH1cbiAgfVxufVxuXG5jb25zdCBkZWZhdWx0U2NvcGUgPSBuZXcgU2NvcGUoKVxuXG5mdW5jdGlvbiBzY29wZShmbikge1xuICBjb25zdCBjdXJyZW50U2NvcGUgPSBuZXcgU2NvcGUoKVxuICBjb25zdCBhZGREcmFnZ2FibGVUb1Njb3BlID0gZnVuY3Rpb24oZHJhZ2dhYmxlKSB7XG4gICAgY3VycmVudFNjb3BlLmFkZERyYWdnYWJsZShkcmFnZ2FibGUpXG4gICAgcmV0dXJuIHRydWVcbiAgfVxuICBjb25zdCBhZGRUYXJnZXRUb1Njb3BlID0gZnVuY3Rpb24odGFyZ2V0KSB7XG4gICAgY3VycmVudFNjb3BlLmFkZFRhcmdldCh0YXJnZXQpXG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIERyYWdnYWJsZS5vbkNyZWF0ZS5hZGQoYWRkRHJhZ2dhYmxlVG9TY29wZSlcbiAgVGFyZ2V0Lm9uQ3JlYXRlLmFkZChhZGRUYXJnZXRUb1Njb3BlKVxuICBmbi5jYWxsKClcbiAgRHJhZ2dhYmxlLm9uQ3JlYXRlLnJlbW92ZShhZGREcmFnZ2FibGVUb1Njb3BlKVxuICBUYXJnZXQub25DcmVhdGUucmVtb3ZlKGFkZFRhcmdldFRvU2NvcGUpXG4gIHJldHVybiBjdXJyZW50U2NvcGVcbn1cblxuZnVuY3Rpb24gc2NvcGVGYWN0b3J5KHBhcmVudEVsZW1lbnQsIGRyYWdnYWJsZUVsZW1lbnRzLCB0YXJnZXRFbGVtZW50cywgb3B0aW9ucz17fSkge1xuICBjb25zdCBkcmFnZ2FibGVPcHRpb25zID0gb3B0aW9ucy5kcmFnZ2FibGUgfHwge31cbiAgY29uc3QgdGFyZ2V0T3B0aW9ucyA9IG9wdGlvbnMudGFyZ2V0IHx8IHt9XG4gIGNvbnN0IHNjb3BlT3B0aW9ucyA9IG9wdGlvbnMuc2NvcGUgfHwge31cbiAgZHJhZ2dhYmxlT3B0aW9ucy5wYXJlbnQgPSBkcmFnZ2FibGVPcHRpb25zLnBhcmVudCB8fCBwYXJlbnRFbGVtZW50XG4gIHRhcmdldE9wdGlvbnMucGFyZW50ID0gdGFyZ2V0T3B0aW9ucy5wYXJlbnQgfHwgcGFyZW50RWxlbWVudFxuICBkcmFnZ2FibGVFbGVtZW50cyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGRyYWdnYWJsZUVsZW1lbnRzKVxuICB0YXJnZXRFbGVtZW50cyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHRhcmdldEVsZW1lbnRzKVxuXG4gIGNvbnN0IGRyYWdnYWJsZXMgPSBkcmFnZ2FibGVFbGVtZW50cy5tYXAoKGVsZW1lbnQpID0+IHtcbiAgICByZXR1cm4gbmV3IERyYWdnYWJsZShlbGVtZW50LCBkcmFnZ2FibGVPcHRpb25zKVxuICB9KVxuXG4gIGNvbnN0IHRhcmdldHMgPSB0YXJnZXRFbGVtZW50cy5tYXAoKGVsZW1lbnQpID0+IHtcbiAgICByZXR1cm4gbmV3IFRhcmdldChlbGVtZW50LCBkcmFnZ2FibGVzLCB0YXJnZXRPcHRpb25zKVxuICB9KVxuICByZXR1cm4gbmV3IFNjb3BlKGRyYWdnYWJsZXMsIHRhcmdldHMsIHNjb3BlT3B0aW9ucylcbn1cblxuZXhwb3J0IHsgc2NvcGVzLCBkZWZhdWx0U2NvcGUsIFNjb3BlLCBzY29wZUZhY3RvcnksIHNjb3BlIH1cbiIsIid1c2Ugc3RyaWN0J1xuXG5pbXBvcnQgdXRpbCBmcm9tICcuL3V0aWwnXG5pbXBvcnQgeyBHZW9tZXRyeSB9IGZyb20gJy4vZ2VvbWV0cnknXG5pbXBvcnQgeyBib3VuZCB9IGZyb20gJy4vYm91bmQnXG5pbXBvcnQgeyBEcmFnZ2FibGUgfSBmcm9tICcuL2RyYWdnYWJsZSdcblxuY29uc3QgRHJhZ2VlID0geyB1dGlsLCBib3VuZCwgRHJhZ2dhYmxlIH1cbmNvbnN0IHNwaWRlcnMgPSBbXVxuXG5mdW5jdGlvbiBTcGlkZXIoYXJlYSwgZWxlbWVudHMsIG9wdGlvbnM9e30pIHtcbiAgY29uc3QgYXJlYVJlY3RhbmdsZSA9IEdlb21ldHJ5LmNyZWF0ZVJlY3RhbmdsZUZyb21FbGVtZW50KGFyZWEsIGFyZWEpXG4gIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgIGFuZ2xlOiAwLFxuICAgIGRBbmdsZTogMiAqIE1hdGguUEkgLyBlbGVtZW50cy5sZW5ndGgsXG4gICAgY2VudGVyOiBhcmVhUmVjdGFuZ2xlLmdldENlbnRlcigpLFxuICAgIHN0YXJ0UmFkaXVzOiA1MCxcbiAgICBlbmRSYWRpdXM6IGFyZWFSZWN0YW5nbGUuZ2V0TWluU2lkZSgpIC8gMixcbiAgICBsaW5lV2lkdGg6IDIsXG4gICAgc3Ryb2tlU3R5bGU6ICcjZmY1NTc3JyxcbiAgICBmaWxsU3R5bGU6ICdyZ2JhKDE1MCwyNTUsNTAsMC44KSdcbiAgfSwgb3B0aW9ucylcblxuICBzcGlkZXJzLnB1c2godGhpcylcbiAgdGhpcy5hcmVhID0gYXJlYVxuICB0aGlzLmFyZWFSZWN0YW5nbGUgPSBhcmVhUmVjdGFuZ2xlXG4gIHRoaXMuaW5pdChlbGVtZW50cylcbn1cblxuU3BpZGVyLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24oZWxlbWVudHMpIHtcbiAgY29uc3QgdGhhdCA9IHRoaXNcbiAgdGhpcy5jYW52YXMgPSBEcmFnZWUudXRpbC5jcmVhdGVDYW52YXModGhpcy5hcmVhLCB0aGlzLmFyZWFSZWN0YW5nbGUpXG4gIHRoaXMuY29udGV4dCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJylcblxuICB0aGlzLmRyYWdnYWJsZXMgPSBlbGVtZW50cy5tYXAoZnVuY3Rpb24oZWxlbWVudCwgaSkge1xuICAgIGNvbnN0IGFuZ2xlID0gdGhpcy5vcHRpb25zLmFuZ2xlICsgaSAqIHRoaXMub3B0aW9ucy5kQW5nbGUsXG4gICAgICBoYWxmU2l6ZSA9IEdlb21ldHJ5LmdldFNpemVPZkVsZW1lbnQoZWxlbWVudCkubXVsdCgwLjUpLFxuICAgICAgc3RhcnQgPSBHZW9tZXRyeS5nZXRQb2ludEZyb21SYWRpYWxTeXN0ZW0oYW5nbGUsIHRoaXMub3B0aW9ucy5zdGFydFJhZGl1cywgdGhpcy5vcHRpb25zLmNlbnRlcikuc3ViKGhhbGZTaXplKSxcbiAgICAgIGVuZCA9IEdlb21ldHJ5LmdldFBvaW50RnJvbVJhZGlhbFN5c3RlbShhbmdsZSwgdGhpcy5vcHRpb25zLmVuZFJhZGl1cywgdGhpcy5vcHRpb25zLmNlbnRlcikuc3ViKGhhbGZTaXplKSxcbiAgICAgIGJvdW5kID0gRHJhZ2VlLmJvdW5kLnRvTGluZShzdGFydCwgZW5kKVxuXG4gICAgcmV0dXJuIG5ldyBEcmFnZWUuRHJhZ2dhYmxlKGVsZW1lbnQsIHtcbiAgICAgIHBhcmVudDogdGhpcy5hcmVhLFxuICAgICAgYm91bmQ6IGJvdW5kLFxuICAgICAgcG9zaXRpb246IHN0YXJ0LFxuICAgICAgb25Nb3ZlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhhdC5kcmF3KClcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICB9KVxuXG4gIH0sIHRoaXMpXG5cbiAgdGhpcy5pc0luaXQgPSB0cnVlXG4gIHRoaXMuZHJhdygpXG59XG5cblNwaWRlci5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uKCkge1xuICBsZXQgcG9pbnQsIGlcbiAgaWYgKCF0aGlzLmlzSW5pdCkge1xuICAgIHJldHVyblxuICB9XG4gIHRoaXMuY29udGV4dC5jbGVhclJlY3QoMCwgMCwgdGhpcy5hcmVhUmVjdGFuZ2xlLnNpemUueCwgdGhpcy5hcmVhUmVjdGFuZ2xlLnNpemUueSlcbiAgdGhpcy5jb250ZXh0LmJlZ2luUGF0aCgpXG4gIHBvaW50ID0gdGhpcy5kcmFnZ2FibGVzWzBdLmdldENlbnRlcigpXG4gIHRoaXMuY29udGV4dC5tb3ZlVG8ocG9pbnQueCwgcG9pbnQueSlcbiAgZm9yIChpID0gMDsgaSA8IHRoaXMuZHJhZ2dhYmxlcy5sZW5ndGg7IGkrKykge1xuICAgIHBvaW50ID0gdGhpcy5kcmFnZ2FibGVzW2ldLmdldENlbnRlcigpXG4gICAgdGhpcy5jb250ZXh0LmxpbmVUbyhwb2ludC54LCBwb2ludC55KVxuICB9XG4gIHRoaXMuY29udGV4dC5jbG9zZVBhdGgoKVxuICB0aGlzLmNvbnRleHQubGluZVdpZHRoID0gdGhpcy5vcHRpb25zLmxpbmVXaWR0aFxuICB0aGlzLmNvbnRleHQuc3Ryb2tlU3R5bGUgPSB0aGlzLm9wdGlvbnMuc3Ryb2tlU3R5bGVcbiAgdGhpcy5jb250ZXh0LnN0cm9rZSgpXG4gIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSB0aGlzLm9wdGlvbnMuZmlsbFN0eWxlXG4gIHRoaXMuY29udGV4dC5maWxsKClcbn1cblxuZXhwb3J0IHsgc3BpZGVycywgU3BpZGVyIH1cbiIsImltcG9ydCB7XG4gIGdldERlZmF1bHRQYXJlbnQsXG4gIHJlbW92ZUl0ZW0sXG4gIHJhbmdlXG59IGZyb20gJy4vdXRpbCdcblxuaW1wb3J0IEV2ZW50IGZyb20gJy4vZXZlbnQnXG5pbXBvcnQgeyBHZW9tZXRyeSB9IGZyb20gJy4vZ2VvbWV0cnknXG5pbXBvcnQgeyBwb3NpdGlvblR5cGUsIHNvcnRpbmdGYWN0b3J5LCBwb3NpdGlvbkZhY3RvcnkgfSBmcm9tICcuL3Bvc2l0aW9uaW5nJ1xuaW1wb3J0IHsgc2NvcGVzLCBkZWZhdWx0U2NvcGUgfSBmcm9tICcuL3Njb3BlJ1xuXG5jb25zdCBEcmFnZWUgPSB7IHBvc2l0aW9uVHlwZSwgIHBvc2l0aW9uRmFjdG9yeSwgc29ydGluZ0ZhY3RvcnksIHNjb3BlcywgRXZlbnQgfS8vdG9kbyByZW1vdmUgYWZ0ZXIgcmVmYWN0b3JlXG5cbmNvbnN0IHRhcmdldHMgPSBbXSxcbiAgYWRkVG9EZWZhdWx0U2NvcGUgPSBmdW5jdGlvbih0YXJnZXQpIHtcbiAgICBkZWZhdWx0U2NvcGUuYWRkVGFyZ2V0KHRhcmdldClcbiAgfVxuXG5mdW5jdGlvbiBUYXJnZXQoZWxlbWVudCwgZHJhZ2dhYmxlcywgb3B0aW9ucyA9IHt9KSB7XG4gIGNvbnN0IHRhcmdldCA9IHRoaXNcbiAgY29uc3QgcGFyZW50ID0gb3B0aW9ucy5wYXJlbnQgfHwgZ2V0RGVmYXVsdFBhcmVudChlbGVtZW50KVxuXG4gIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgIHRpbWVFbmQ6IDIwMCxcbiAgICB0aW1lRXhjYW5nZTogNDAwLFxuICAgIHBhcmVudDogcGFyZW50LFxuICAgIHNvcnRpbmc6IERyYWdlZS5zb3J0aW5nRmFjdG9yeShEcmFnZWUucG9zaXRpb25UeXBlLmZsb2F0TGVmdCkoODAsIEdlb21ldHJ5LnRyYW5zZm9ybWVkU3BhY2VEaXN0YW5jZUZhY3RvcnkoeyB4OiAxLCB5OiA0IH0pKSxcbiAgICBwb3NpdGlvbmluZzogRHJhZ2VlLnBvc2l0aW9uRmFjdG9yeShEcmFnZWUucG9zaXRpb25UeXBlLmZsb2F0TGVmdCkodGhpcy5nZXRSZWN0YW5nbGUuYmluZCh0aGlzKSwgeyByZW1vdmFibGU6IHRydWUgfSlcbiAgfSwgb3B0aW9ucylcblxuICB0YXJnZXRzLnB1c2godGhpcylcbiAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFxuICBkcmFnZ2FibGVzLmZvckVhY2goZnVuY3Rpb24oZHJhZ2dhYmxlKSB7XG4gICAgZHJhZ2dhYmxlLnRhcmdldHMucHVzaCh0YXJnZXQpXG4gIH0pXG4gIHRoaXMuZHJhZ2dhYmxlcyA9IGRyYWdnYWJsZXNcbiAgdGhpcy5vbkFkZCA9IG5ldyBEcmFnZWUuRXZlbnQodGhpcylcbiAgdGhpcy5iZWZvcmVBZGQgPSBuZXcgRHJhZ2VlLkV2ZW50KHRoaXMpXG4gIHRoaXMub25SZW1vdmUgPSBuZXcgRHJhZ2VlLkV2ZW50KHRoaXMpXG5cbiAgaWYgKG9wdGlvbnMub25SZW1vdmUpIHtcbiAgICB0aGlzLm9uUmVtb3ZlLmFkZChvcHRpb25zLm9uUmVtb3ZlKVxuICB9XG4gIGlmIChvcHRpb25zLm9uQWRkKSB7XG4gICAgdGhpcy5vbkFkZC5hZGQob3B0aW9ucy5vbkFkZClcbiAgfVxuICBpZiAob3B0aW9ucy5iZWZvcmVBZGQpIHtcbiAgICB0aGlzLmJlZm9yZUFkZC5hZGQob3B0aW9ucy5iZWZvcmVBZGQpXG4gIH1cblxuICBUYXJnZXQub25DcmVhdGUuZmlyZSh0aGlzKVxuXG4gIHRoaXMuaW5pdCgpXG59XG5cblRhcmdldC5vbkNyZWF0ZSA9IG5ldyBEcmFnZWUuRXZlbnQoVGFyZ2V0LCB7IGlzUmV2ZXJzZTogdHJ1ZSwgaXNTdG9wT25UcnVlOiB0cnVlIH0pXG5UYXJnZXQub25DcmVhdGUuYWRkKGFkZFRvRGVmYXVsdFNjb3BlKVxuXG5UYXJnZXQucHJvdG90eXBlLmdldFJlY3RhbmdsZSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gR2VvbWV0cnkuY3JlYXRlUmVjdGFuZ2xlRnJvbUVsZW1lbnQoXG4gICAgICAgIHRoaXMuZWxlbWVudCxcbiAgICAgICAgdGhpcy5vcHRpb25zLnBhcmVudCxcbiAgICAgICAgdGhpcy5vcHRpb25zLmlzQ29udGVudEJveFNpemUsXG4gICAgICAgIHRydWVcbiAgICApXG59XG5cblRhcmdldC5wcm90b3R5cGUuY2F0Y2hEcmFnZ2FibGUgPSBmdW5jdGlvbihkcmFnZ2FibGUpIHtcbiAgaWYgKHRoaXMub3B0aW9ucy5jYXRjaERyYWdnYWJsZSkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuY2F0Y2hEcmFnZ2FibGUodGhpcywgZHJhZ2dhYmxlKVxuICB9IGVsc2Uge1xuICAgIGNvbnN0IHRhcmdldFJlY3RhbmdsZSA9IHRoaXMuZ2V0UmVjdGFuZ2xlKCksXG4gICAgICBkcmFnZ2FibGVTcXVhcmUgPSBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKCkuZ2V0U3F1YXJlKClcblxuICAgIHJldHVybiBkcmFnZ2FibGVTcXVhcmUgPCB0YXJnZXRSZWN0YW5nbGUuZ2V0U3F1YXJlKClcbiAgICAgICAgICAgICYmIHRhcmdldFJlY3RhbmdsZS5pbmNsdWRlUG9pbnQoZHJhZ2dhYmxlLmdldENlbnRlcigpKVxuICB9XG59XG5cblRhcmdldC5wcm90b3R5cGUuZ2V0UG9zaXRpb24gPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuZ2V0UmVjdGFuZ2xlKCkucG9zaXRpb25cbn1cblxuVGFyZ2V0LnByb3RvdHlwZS5nZXRTaXplID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLmdldFJlY3RhbmdsZSgpLnNpemVcbn1cblxuVGFyZ2V0LnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24oKSB7XG4gIGxldCByZWN0YW5nbGVzLCBpbmRleGVzT2ZOZXdcblxuICB0aGlzLmlubmVyRHJhZ2dhYmxlcyA9IHRoaXMuZHJhZ2dhYmxlcy5maWx0ZXIoZnVuY3Rpb24oZHJhZ2dhYmxlKSB7XG4gICAgbGV0IGVsZW1lbnQgPSBkcmFnZ2FibGUuZWxlbWVudC5wYXJlbnROb2RlXG4gICAgd2hpbGUgKGVsZW1lbnQpIHtcbiAgICAgIGlmIChlbGVtZW50ID09PSB0aGlzLmVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICAgIGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudE5vZGVcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlXG4gIH0sIHRoaXMpXG5cbiAgaWYgKHRoaXMuaW5uZXJEcmFnZ2FibGVzLmxlbmd0aCkge1xuICAgIGluZGV4ZXNPZk5ldyA9IHJhbmdlKHRoaXMuaW5uZXJEcmFnZ2FibGVzLmxlbmd0aClcbiAgICByZWN0YW5nbGVzID0gdGhpcy5vcHRpb25zLnBvc2l0aW9uaW5nKHRoaXMuaW5uZXJEcmFnZ2FibGVzLm1hcChmdW5jdGlvbihkcmFnZ2FibGUpIHtcbiAgICAgIHJldHVybiBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKClcbiAgICB9KSwgaW5kZXhlc09mTmV3KVxuICAgIHRoaXMuc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgaW5kZXhlc09mTmV3KVxuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzLmZvckVhY2goZnVuY3Rpb24oZHJhZ2dhYmxlKSB7XG4gICAgICB0aGlzLm9uQWRkLmZpcmUoZHJhZ2dhYmxlKVxuICAgIH0sIHRoaXMpXG4gIH1cbn1cblxuVGFyZ2V0LnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gIERyYWdlZS5zY29wZXMuZm9yRWFjaChmdW5jdGlvbihzY29wZSkge1xuICAgIHJlbW92ZUl0ZW0oc2NvcGUudGFyZ2V0cywgdGhpcylcbiAgfSwgdGhpcylcbn1cblxuVGFyZ2V0LnByb3RvdHlwZS5yZWZyZXNoID0gZnVuY3Rpb24oKSB7XG4gIGNvbnN0IHJlY3RhbmdsZXMgPSB0aGlzLm9wdGlvbnMucG9zaXRpb25pbmcodGhpcy5pbm5lckRyYWdnYWJsZXMubWFwKGZ1bmN0aW9uKGRyYWdnYWJsZSkge1xuICAgIHJldHVybiBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKClcbiAgfSksIFtdKVxuICB0aGlzLnNldFBvc2l0aW9uKHJlY3RhbmdsZXMsIFtdLCAwKVxufVxuXG5UYXJnZXQucHJvdG90eXBlLm9uRW5kID0gZnVuY3Rpb24oZHJhZ2dhYmxlKSB7XG4gIGNvbnN0IG5ld0RyYWdnYWJsZXNJbmRleCA9IFtdXG4gIGNvbnN0IGluY2x1ZGVQb2ludCA9IHRoaXMuZ2V0UmVjdGFuZ2xlKCkuaW5jbHVkZVBvaW50KGRyYWdnYWJsZS5nZXRQb3NpdGlvbigpKVxuXG4gIGlmICghaW5jbHVkZVBvaW50KSB7XG4gICAgaWYgKHRoaXMuZ2V0UmVjdGFuZ2xlKCkuaW5jbHVkZVBvaW50KGRyYWdnYWJsZS5nZXRDZW50ZXIoKSkpIHtcbiAgICAgIGRyYWdnYWJsZS5wb3NpdGlvbiA9IGRyYWdnYWJsZS5nZXRDZW50ZXIoKS5jbG9uZSgpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIHRoaXMuYmVmb3JlQWRkLmZpcmUoZHJhZ2dhYmxlKVxuXG4gIHRoaXMuaW5uZXJEcmFnZ2FibGVzID0gdGhpcy5vcHRpb25zLnNvcnRpbmcodGhpcy5pbm5lckRyYWdnYWJsZXMsIFtkcmFnZ2FibGVdLCBuZXdEcmFnZ2FibGVzSW5kZXgpXG4gIGNvbnN0IHJlY3RhbmdsZXMgPSB0aGlzLm9wdGlvbnMucG9zaXRpb25pbmcodGhpcy5pbm5lckRyYWdnYWJsZXMubWFwKGZ1bmN0aW9uKGRyYWdnYWJsZSkge1xuICAgIHJldHVybiBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKClcbiAgfSksIG5ld0RyYWdnYWJsZXNJbmRleCwgZHJhZ2dhYmxlKVxuXG4gIHRoaXMuc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgbmV3RHJhZ2dhYmxlc0luZGV4KVxuICBpZiAodGhpcy5pbm5lckRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpICE9PSAtMSkge1xuICAgIHRoaXMuYWRkUmVtb3ZlT25Nb3ZlKGRyYWdnYWJsZSlcbiAgfVxuICByZXR1cm4gdHJ1ZVxufVxuXG5UYXJnZXQucHJvdG90eXBlLnNldFBvc2l0aW9uID0gZnVuY3Rpb24ocmVjdGFuZ2xlcywgaW5kZXhlc09mTmV3LCB0aW1lKSB7XG4gIHRoaXMuaW5uZXJEcmFnZ2FibGVzLnNsaWNlKDApLmZvckVhY2goZnVuY3Rpb24oZHJhZ2dhYmxlLCBpKSB7XG4gICAgY29uc3QgcmVjdCA9IHJlY3RhbmdsZXNbaV0sXG4gICAgICB0aW1lRW5kID0gdGltZSB8fCB0aW1lID09PSAwID8gdGltZSA6IGluZGV4ZXNPZk5ldy5pbmRleE9mKGkpICE9PSAtMSA/IHRoaXMub3B0aW9ucy50aW1lRW5kIDogdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlXG5cbiAgICBpZiAocmVjdC5yZW1vdmFibGUpIHtcbiAgICAgIGRyYWdnYWJsZS5tb3ZlKGRyYWdnYWJsZS5pbml0UG9zaXRpb24sIHRpbWVFbmQsIHRydWUsIHRydWUpXG4gICAgICByZW1vdmVJdGVtKHRoaXMuaW5uZXJEcmFnZ2FibGVzLCBkcmFnZ2FibGUpXG5cbiAgICAgIHRoaXMub25SZW1vdmUuZmlyZShkcmFnZ2FibGUpXG4gICAgfSBlbHNlIHtcbiAgICAgIGRyYWdnYWJsZS5tb3ZlKHJlY3QucG9zaXRpb24sIHRpbWVFbmQsIHRydWUsIHRydWUpXG4gICAgfVxuICB9LCB0aGlzKVxufVxuXG5UYXJnZXQucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uKGRyYWdnYWJsZSwgdGltZSkge1xuICBjb25zdCBuZXdEcmFnZ2FibGVzSW5kZXggPSB0aGlzLmlubmVyRHJhZ2dhYmxlcy5sZW5ndGhcblxuICB0aGlzLmJlZm9yZUFkZC5maXJlKGRyYWdnYWJsZSlcblxuICB0aGlzLnB1c2hJbm5lckRyYWdnYWJsZShkcmFnZ2FibGUpXG4gIGNvbnN0IHJlY3RhbmdsZXMgPSB0aGlzLm9wdGlvbnMucG9zaXRpb25pbmcodGhpcy5pbm5lckRyYWdnYWJsZXMubWFwKGZ1bmN0aW9uKGRyYWdnYWJsZSkge1xuICAgIHJldHVybiBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKClcbiAgfSksIG5ld0RyYWdnYWJsZXNJbmRleCwgZHJhZ2dhYmxlKVxuICB0aGlzLnNldFBvc2l0aW9uKHJlY3RhbmdsZXMsIFtuZXdEcmFnZ2FibGVzSW5kZXhdLCB0aW1lIHx8IDApXG4gIGlmICh0aGlzLmlubmVyRHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSkgIT09IC0xKSB7XG4gICAgdGhpcy5hZGRSZW1vdmVPbk1vdmUoZHJhZ2dhYmxlKVxuICB9XG59XG5cblRhcmdldC5wcm90b3R5cGUucHVzaElubmVyRHJhZ2dhYmxlID0gZnVuY3Rpb24oZHJhZ2dhYmxlKSB7XG4gIGlmICh0aGlzLmlubmVyRHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSk9PT0tMSkge1xuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzLnB1c2goZHJhZ2dhYmxlKVxuICB9XG59XG5cblRhcmdldC5wcm90b3R5cGUuYWRkUmVtb3ZlT25Nb3ZlID0gZnVuY3Rpb24oZHJhZ2dhYmxlKSB7XG4gIGNvbnN0IHRoYXQgPSB0aGlzXG5cbiAgZHJhZ2dhYmxlLm9uTW92ZS5hZGQodGhpcy5yZW1vdmVIYW5kbGVyID0gZnVuY3Rpb24oKSB7XG4gICAgdGhhdC5yZW1vdmUoZHJhZ2dhYmxlKVxuICB9KVxuXG4gIHRoaXMub25BZGQuZmlyZShkcmFnZ2FibGUpXG59XG5cblRhcmdldC5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24oZHJhZ2dhYmxlKSB7XG4gIGRyYWdnYWJsZS5vbk1vdmUucmVtb3ZlKHRoaXMucmVtb3ZlSGFuZGxlcilcblxuICBjb25zdCBpbmRleCA9IHRoaXMuaW5uZXJEcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKVxuICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5zcGxpY2UoaW5kZXgsIDEpXG5cbiAgY29uc3QgcmVjdGFuZ2xlcyA9IHRoaXMub3B0aW9ucy5wb3NpdGlvbmluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcy5tYXAoZnVuY3Rpb24oZHJhZ2dhYmxlKSB7XG4gICAgcmV0dXJuIGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKVxuICB9KSwgW10pXG5cbiAgdGhpcy5zZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBbXSlcbiAgdGhpcy5vblJlbW92ZS5maXJlKGRyYWdnYWJsZSlcbn1cblxuVGFyZ2V0LnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5mb3JFYWNoKGZ1bmN0aW9uKGRyYWdnYWJsZSkge1xuICAgIGRyYWdnYWJsZS5tb3ZlKGRyYWdnYWJsZS5pbml0UG9zaXRpb24sIDAsIHRydWUsIHRydWUpXG4gICAgdGhpcy5vblJlbW92ZS5maXJlKGRyYWdnYWJsZSlcbiAgfSwgdGhpcylcbiAgdGhpcy5pbm5lckRyYWdnYWJsZXMgPSBbXVxufVxuXG5UYXJnZXQucHJvdG90eXBlLmdldFNvcnRlZERyYWdnYWJsZXMgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5pbm5lckRyYWdnYWJsZXMuc2xpY2UoKVxufVxuXG5leHBvcnQgeyB0YXJnZXRzLCBUYXJnZXQgfVxuIiwiJ3VzZSBzdHJpY3QnXG5cbmZ1bmN0aW9uIGdldERlZmF1bHRQYXJlbnQoZWxlbWVudCkge1xuICBsZXQgcGFyZW50ID0gZWxlbWVudC5wYXJlbnROb2RlXG4gIHdoaWxlIChwYXJlbnQucGFyZW50Tm9kZSAmJiB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShwYXJlbnQpWydwb3NpdGlvbiddID09PSAnc3RhdGljJykge1xuICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnROb2RlXG4gIH1cbiAgcmV0dXJuIHBhcmVudFxufVxuXG5mdW5jdGlvbiBnZXRUb3VjaEJ5SUQoZWxlbWVudCwgdG91Y2hJZCkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGVsZW1lbnQuY2hhbmdlZFRvdWNoZXMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZWxlbWVudC5jaGFuZ2VkVG91Y2hlc1tpXS5pZGVudGlmaWVyID09PSB0b3VjaElkKSB7XG4gICAgICByZXR1cm4gZWxlbWVudC5jaGFuZ2VkVG91Y2hlc1tpXVxuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2Vcbn1cblxuZnVuY3Rpb24gZ2V0U3VtVmFsdWVPZlN0eWxlUnVsZShlbGVtZW50LCBydWxlcykge1xuICByZXR1cm4gcnVsZXMucmVkdWNlKGZ1bmN0aW9uKHN1bSwgcnVsZSkge1xuICAgIHJldHVybiBzdW0gKyBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KVtydWxlXXx8MClcbiAgfSwgMClcbn1cblxuZnVuY3Rpb24gYXBwZW5kRmlyc3RDaGlsZChlbGVtZW50LCBub2RlKSB7XG4gIGVsZW1lbnQuZmlyc3RDaGlsZCA/IGVsZW1lbnQuaW5zZXJ0QmVmb3JlKG5vZGUsIGVsZW1lbnQuZmlyc3RDaGlsZCkgOiBlbGVtZW50LmFwcGVuZENoaWxkKG5vZGUpXG59XG5cbmZ1bmN0aW9uIHJhbmdlKHN0YXJ0LCBzdG9wLCBzdGVwKSB7XG4gIGNvbnN0IHJlc3VsdCA9IFtdXG4gIGlmICh0eXBlb2Ygc3RvcCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBzdG9wID0gc3RhcnRcbiAgICBzdGFydCA9IDBcbiAgfVxuICBpZiAodHlwZW9mIHN0ZXAgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgc3RlcCA9IDFcbiAgfVxuICBpZiAoKHN0ZXAgPiAwICYmIHN0YXJ0ID49IHN0b3ApIHx8IChzdGVwIDwgMCAmJiBzdGFydCA8PSBzdG9wKSkge1xuICAgIHJldHVybiBbXVxuICB9XG4gIGZvciAobGV0IGkgPSBzdGFydDsgc3RlcCA+IDAgPyBpIDwgc3RvcCA6IGkgPiBzdG9wOyBpICs9IHN0ZXApIHtcbiAgICByZXN1bHQucHVzaChpKVxuICB9XG4gIHJldHVybiByZXN1bHRcbn1cblxuZnVuY3Rpb24gc2V0U3R5bGUoZWxlbWVudCwgc3R5bGUpIHtcbiAgc3R5bGUgPSBzdHlsZSB8fCB7fVxuICBsZXQgY3NzVGV4dCA9ICcnXG4gIGZvciAoY29uc3Qga2V5IGluIHN0eWxlKSB7XG4gICAgaWYgKHN0eWxlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIGNzc1RleHQgKz0ga2V5ICsgJzogJyArIHN0eWxlW2tleV0gKyAnOyAnXG4gICAgfVxuICB9XG5cbiAgZWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gY3NzVGV4dFxufVxuXG5mdW5jdGlvbiByYW5kb21Db2xvcigpIHtcbiAgY29uc3Qgcm5kID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSoyNTUpXG4gIH1cbiAgY29uc3QgdG9IZXhTdHJpbmcgPSBmdW5jdGlvbihkaWdpdCkge1xuICAgIGxldCBzdHIgPSBkaWdpdC50b1N0cmluZygxNilcbiAgICB3aGlsZSAoc3RyLmxlbmd0aCA8IDIpIHtcbiAgICAgIHN0ciA9ICcwJyArIHN0clxuICAgIH1cbiAgICByZXR1cm4gc3RyXG4gIH1cblxuICByZXR1cm4gJyMnICsgdG9IZXhTdHJpbmcocm5kKCkpICsgdG9IZXhTdHJpbmcocm5kKCkpICsgdG9IZXhTdHJpbmcocm5kKCkpXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNhbnZhcyhhcmVhLCByZWN0YWdsZSkge1xuICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKVxuICBpZiAod2luZG93LmdldENvbXB1dGVkU3R5bGUoYXJlYSkucG9zaXRpb24gPT09ICdzdGF0aWMnKSB7XG4gICAgYXJlYS5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSdcbiAgfVxuXG4gIGNhbnZhcy5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgcmVjdGFnbGUuc2l6ZS54ICsgJ3B4JylcbiAgY2FudmFzLnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgcmVjdGFnbGUuc2l6ZS55ICsgJ3B4JylcbiAgc2V0U3R5bGUoY2FudmFzLCB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgbGVmdDogcmVjdGFnbGUucG9zaXRpb24ueSArICdweCcsXG4gICAgdG9wOiByZWN0YWdsZS5wb3NpdGlvbi55ICsgJ3B4JyxcbiAgICB3aWR0aDogcmVjdGFnbGUuc2l6ZS54ICsgJ3B4JyxcbiAgICBoZWlnaHQ6IHJlY3RhZ2xlLnNpemUueSArICdweCdcbiAgfSlcbiAgYXBwZW5kRmlyc3RDaGlsZChhcmVhLCBjYW52YXMpXG4gIHJldHVybiBjYW52YXNcbn1cblxuZnVuY3Rpb24gaGFzQ2xhc3MoZWxlbWVudCwgYykge1xuICBjb25zdCByZSA9IG5ldyBSZWdFeHAoJyhefFxcXFxzKScgKyBjICsgJyhcXFxcc3wkKScsICdnJylcbiAgcmV0dXJuIChyZS50ZXN0KGVsZW1lbnQuY2xhc3NOYW1lKSlcbn1cblxuZnVuY3Rpb24gYWRkQ2xhc3MoZWxlbWVudCwgYykge1xuICBpZiAoIWhhc0NsYXNzKGVsZW1lbnQsIGMpKSB7XG4gICAgZWxlbWVudC5jbGFzc05hbWUgPSAoZWxlbWVudC5jbGFzc05hbWUgKyAnICcgKyBjKS5yZXBsYWNlKC9cXHMrL2csICcgJykucmVwbGFjZSgvKF4gfCAkKS9nLCAnJylcbiAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmVDbGFzcyhlbGVtZW50LCBjKSB7XG4gIGNvbnN0IHJlID0gbmV3IFJlZ0V4cCgnKF58XFxcXHMpJyArIGMgKyAnKFxcXFxzfCQpJywgJ2cnKVxuICBlbGVtZW50LmNsYXNzTmFtZSA9IGVsZW1lbnQuY2xhc3NOYW1lLnJlcGxhY2UocmUsICckMScpLnJlcGxhY2UoL1xccysvZywgJyAnKS5yZXBsYWNlKC8oXiB8ICQpL2csICcnKVxufVxuXG5mdW5jdGlvbiByZW1vdmVJdGVtKGFycmF5LCB2YWwpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChhcnJheVtpXSA9PT0gdmFsKSB7XG4gICAgICBhcnJheS5zcGxpY2UoaSwgMSlcbiAgICAgIGktLVxuICAgIH1cbiAgfVxuICByZXR1cm4gYXJyYXlcbn1cblxuY29uc3QgdXRpbCA9IHtcbiAgZ2V0RGVmYXVsdFBhcmVudCxcbiAgZ2V0VG91Y2hCeUlELFxuICBnZXRTdW1WYWx1ZU9mU3R5bGVSdWxlLFxuICBhcHBlbmRGaXJzdENoaWxkLFxuICByYW5nZSxcbiAgc2V0U3R5bGUsXG4gIHJhbmRvbUNvbG9yLFxuICBjcmVhdGVDYW52YXMsXG4gIGhhc0NsYXNzLFxuICBhZGRDbGFzcyxcbiAgcmVtb3ZlQ2xhc3MsXG4gIHJlbW92ZUl0ZW1cbn1cblxuZXhwb3J0IHtcbiAgZ2V0RGVmYXVsdFBhcmVudCxcbiAgZ2V0VG91Y2hCeUlELFxuICBnZXRTdW1WYWx1ZU9mU3R5bGVSdWxlLFxuICBhcHBlbmRGaXJzdENoaWxkLFxuICByYW5nZSxcbiAgc2V0U3R5bGUsXG4gIHJhbmRvbUNvbG9yLFxuICBjcmVhdGVDYW52YXMsXG4gIGhhc0NsYXNzLFxuICBhZGRDbGFzcyxcbiAgcmVtb3ZlQ2xhc3MsXG4gIHJlbW92ZUl0ZW1cbn1cblxuZXhwb3J0IGRlZmF1bHQgdXRpbFxuIl0sInNvdXJjZVJvb3QiOiIifQ==