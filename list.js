(function(){
	'use strict';
	var MultiDrag = window.MultiDrag || {},lists = [];

	function List(objs, options){
		var i;
		this.options = {
			timeEnd: 200,
			timeExcange: 400,
			radius: 30,
			getLength: mathPoint.getLength()
		};
		for(i in options){
			if(options.hasOwnProperty(i)){
				this.options[i] = options[i];
			}
		}
		this.objs = objs;
		lists.push(this);
		this.onChange = MultiDrag.util.triggerFactory({context: this});
		if(options && options.onChange){
			this.onChange.add(options.onChange);
		}
		this.init();
	}

	List.prototype.init = function(){
		var that = this;
		this._enable = true;
		this.objs.forEach(function(obj){
			obj.onEnd.add(function(){
				that.onEnd(this);
				return true;
			});
		});
	};

	List.prototype.onEnd = function(obj){
		var fixPositions = this.getCurrentFixPosition(), currentIndex, excangeIndex;
		currentIndex = this.objs.indexOf(obj);
		excangeIndex = mathPoint.indexOfNearPoint(fixPositions, obj.position, this.options.radius, this.options.getLength);
		if(excangeIndex === -1 || excangeIndex === currentIndex){
			obj.move(obj.fixPosition, this.options.timeEnd, true);
		}else{
			if(this.objs[excangeIndex].isMultiDrag){
				this.objs[excangeIndex].fixPosition = fixPositions[currentIndex];
			}else{
				this.objs[excangeIndex].move(fixPositions[currentIndex], this.options.timeExcange, true);
			}
			this.objs[currentIndex].move(fixPositions[excangeIndex], this.options.timeEnd, true);
			this.onChange.fire();
		}
		return true;
	};

	List.prototype.getCurrentFixPosition = function(){
		return this.objs.map(function(obj){
			return obj.fixPosition.clone();
		});
	};

	List.prototype.getSortedObjs = function(){
		return this.objs.map(function(obj){
			return 	obj.initPosition;
		}).map(function(position){
			return this.objs.filter(function(obj){
				return obj.fixPosition.compare(position);
			},this)[0];
		},this);
	};

	List.prototype.reset = function(){
		this.objs.forEach(function(obj){
			obj.move(obj.initPosition, 0, true, false);
		});
	};

	List.prototype.resetInitPosition = function(){
		this.objs.forEach(function(obj){
			obj.move(obj.initPosition, 0, true, false);
		});
	};

	List.prototype.refresh = function(){
		this.objs.forEach(function(obj){
			obj.refresh();
		});
	};

	List.prototype.add = function(objs){
		var that = this;
		if(!(objs instanceof Array)){
			objs = [objs];
		}
		objs.forEach(function(obj){
			obj.enable = this._enable;
			obj.onEnd.add(function(){
				that.onEnd(this);
				return true;
			});
			this.objs.push(obj);
		},this);
	};

	List.prototype.remove = function(objs){
		var j, initPositions = this.objs.map(function(obj){
				return 	obj.initPosition;
			}),
			list = [],
			sortedObj = this.getSortedObjs();
		if(!(objs instanceof Array)){
			objs = [objs];

		}
		objs.forEach(function(obj){
			obj.onEnd.reset();
			MultiDrag.util.remove(this.objs,obj);
		}, this);
		j = 0;
		sortedObj.forEach(function(obj, i){
			if(this.objs.indexOf(obj) !== -1){
				if(obj.fixPosition !== initPositions[j]){
					obj.move(initPositions[j], this.options.timeExcange, true);
				}
				obj.initPosition = initPositions[j];
				j++;
				list.push(obj);
			}
		}, this);
		this.objs = list;
	};

	List.prototype.clear = function(){
		this.remove(this.objs.slice());
	};

	List.prototype.destroy = function(){
		this.objs.forEach(function(obj){
			obj.destroy();
		});
	};

	List.prototype.__defineGetter__("positions", function(){
		return this.getCurrentFixPosition();
	});

	List.prototype.__defineSetter__("positions", function(positions){
		var message = "wrong array length";
		if(positions.length === this.objs.length){
			positions.forEach(function(point, i){
				this.objs[i].move(point, 0, true, true);
			}, this);
		}else{
			alert(message);
			throw message;
		}
	});

	List.prototype.__defineGetter__("enable", function(){
		return this._enable;
	});

	List.prototype.__defineSetter__("enable", function(value){
		this._enable = value;
		this.objs.forEach(function(obj){
			obj.enable = value;
		});
	});


	function listFactory(el, objsElements, options){
		var objs, objOptions, listOptions;
		options = options || {};
		objOptions = options.obj || {};
		listOptions = options.list || {};
		objOptions.parent = objOptions.parent || el;
		objsElements = Array.prototype.slice.call(objsElements);

		objs = objsElements.map(function(el){
			return new MultiDrag.Obj(el, objOptions);
		});

		return new List(objs, listOptions);
	}

	MultiDrag.lists = lists;
	MultiDrag.List = List;
	MultiDrag.listFactory = listFactory;
	window.MultiDrag = MultiDrag;
})();