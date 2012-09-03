(function(){
	'use strict';
	var MultiDrag = window.MultiDrag || {},spiders = [];

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
		this.canvas = MultiDrag.util.createCanvas(this.area,this.areaRectangle);
		this.context = this.canvas.getContext("2d");
		this.objs = elements.map(function (el, i){
			var angle = this.options.angle + i * this.options.dAngle,
				halfSize = mathPoint.getSizeOfElement(el).mult(0.5),
				start = mathPoint.getPointFromRadialSystem(angle, this.options.startRadius, this.options.center).sub(halfSize),
				end = mathPoint.getPointFromRadialSystem(angle, this.options.endRadius, this.options.center).sub(halfSize),
				bound = function(){
					return MultiDrag.boundFactory(MultiDrag.boundType.line)(start, end);
				};
			return new MultiDrag.Obj(el, {parent:this.area, bound:bound, position:start, onMove:function (){
				that.draw();
				return true;
			}});
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

	MultiDrag.spiders = spiders;
	MultiDrag.Spider = Spider;
	window.MultiDrag = MultiDrag;
})();