(function (global, MultiDrag){
	'use strict';
	var spiders = [],
		Spider = function (area, elements, options){
			var i, areaRectangle = mathPoint.createRectangleFromElement(area, area);
			this.options = {
				angle:0,
				dAngle:2 * Math.PI / elements.length,
				center:areaRectangle.getCenter(),
				startRadius:50,
				endRadius:areaRectangle.getMinSide() / 2,
				lineWidth:2,
				strokeStyle:"#ff5577",
				fillStyle:"rgba(150,255,50,0.8)"
			};
			for(i in options){
				this.options[i] = options[i];
			}
			spiders.push(this);
			this.area = area;
			this.areaRectangle = areaRectangle;
			this.init(elements);
		}

	Spider.prototype.init = function (elements){
		var that = this;
		this.createCanvas();
		this.objs = elements.map(function (element, i){
			var angle = this.options.angle + i * this.options.dAngle,
				halfSize = mathPoint.getSizeOfElement(element).mult(0.5),
				start = mathPoint.getPointFromRadialSystem(angle, this.options.startRadius, this.options.center).sub(halfSize),
				end = mathPoint.getPointFromRadialSystem(angle, this.options.endRadius, this.options.center).sub(halfSize),
				bound = MultiDrag.BoundFactory(MultiDrag.boundType.line)(start, end);
			return new MultiDrag.Obj(element, {parent:this.area, bound:bound, position:start, onMove:function (){
				that.draw();
				return true;
			}});
		}, this);
		this.isInit = true;
		this.draw();
	}

	Spider.prototype.createCanvas = function (){
		if(window.getComputedStyle(this.area)["position"] === "static"){
			this.area.style.position = "relative";
		}
		this.canvas = document.createElement("canvas");
		this.canvas.setAttribute("width", this.areaRectangle.size.x + "px");
		this.canvas.setAttribute("height", this.areaRectangle.size.y + "px");
		MultiDrag.util.setStyle(this.canvas, {
			position:"absolute",
			top:"0",
			left:"0",
			width:this.areaRectangle.size.x + "px",
			height:this.areaRectangle.size.y + "px"
		});
		MultiDrag.util.appendFirstChild(this.area, this.canvas);
		this.context = this.canvas.getContext("2d");
	}

	Spider.prototype.draw = function (){
		var point, i;
		if(!this.isInit){
			return;
		}
		this.context.clearRect(0, 0, this.areaRectangle.size.x, this.areaRectangle.size.y);
		this.context.beginPath();
		point = this.objs[0].getCenter();
		this.context.moveTo(point.x, point.y);
		for(i = 0; i < this.objs.length; i++){
			point = this.objs[i].getCenter();
			this.context.lineTo(point.x, point.y);
		}
		this.context.closePath();
		this.context.lineWidth = this.options.lineWidth;
		this.context.strokeStyle = this.options.strokeStyle;
		this.context.stroke();
		this.context.fillStyle = this.options.fillStyle;
		this.context.fill();
	}

	MultiDrag = MultiDrag || {};
	MultiDrag.spiders = spiders;
	MultiDrag.Spider = Spider;
	global.MultiDrag = MultiDrag;
})(window, window.MultiDrag);