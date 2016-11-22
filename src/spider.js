'use strict';

import util from './util'
import {mathPoint, Point} from './point'
import {bound} from './bound'
import {Draggable, draggables, events} from './draggable'

var Dragee = {util, bound, Draggable};
var spiders = [];

function Spider(area, elements, options){
	var i, areaRectangle = mathPoint.createRectangleFromElement(area, area);
	this.options = {
		angle: 0,
		dAngle: 2 * Math.PI / elements.length,
		center: areaRectangle.getCenter(),
		startRadius: 50,
		endRadius: areaRectangle.getMinSide() / 2,
		lineWidth: 2,
		strokeStyle: "#ff5577",
		fillStyle: "rgba(150,255,50,0.8)"
	};

	for(i in options){
		if(options.hasOwnProperty(i)){
			this.options[i] = options[i];
		}
	}
	spiders.push(this);
	this.area = area;
	this.areaRectangle = areaRectangle;
	this.init(elements);
}

Spider.prototype.init = function(elements){
	var that = this;
	this.canvas = Dragee.util.createCanvas(this.area, this.areaRectangle);
	this.context = this.canvas.getContext("2d");

	this.draggables = elements.map(function (element, i){
		var angle = this.options.angle + i * this.options.dAngle,
			halfSize = mathPoint.getSizeOfElement(element).mult(0.5),
			start = mathPoint.getPointFromRadialSystem(angle, this.options.startRadius, this.options.center).sub(halfSize),
			end = mathPoint.getPointFromRadialSystem(angle, this.options.endRadius, this.options.center).sub(halfSize),
			bound = Dragee.bound.toLine(start, end);

		return new Dragee.Draggable(element, {
			parent: this.area,
			bound: bound,
			position: start,
			onMove:function (){
				that.draw();
				return true;
			}
		});

	}, this);

	this.isInit = true;
	this.draw();
}

Spider.prototype.draw = function (){
	var point, i;
	if(!this.isInit){
		return;
	}
	this.context.clearRect(0, 0, this.areaRectangle.size.x, this.areaRectangle.size.y);
	this.context.beginPath();
	point = this.draggables[0].getCenter();
	this.context.moveTo(point.x, point.y);
	for(i = 0; i < this.draggables.length; i++){
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


export {spiders, Spider}
