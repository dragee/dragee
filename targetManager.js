(function(){
	'use strict';
	var MultiDrag = window.MultiDrag || {},targetManagers = [];

	function TargetManager(el, objs, targets, options){
		var i;
		this.el = el;
		this.objs = objs;
		this.targets = targets;
		targetManagers.push(this);
		this.options = {
			isChangeHtmlParent: false,
			timeEnd: 400,
			timeWaitForRefresh: 500
		}
		for(i in options){
			if(options.hasOwnProperty(i)){
				this.options[i] = options[i];
			}
		}
		this.onChange = MultiDrag.util.triggerFactory({context: this});
		if(options && options.onChange){
			this.onChange.add(options.onChange);
		}
		this.init();
	};

	TargetManager.prototype.init = function(){
		var that = this;
		this.objs.forEach(function(obj){
			obj.onEnd.add(function(){
				return that.onEnd(this);
			});
			obj.onMove.add(function(){
				return that.onMove(this);
			});
		});
	};

	TargetManager.prototype.onMove = function(obj){

	};

	TargetManager.prototype.onEnd = function(obj){
		var shotTargets = this.targets.filter(
				function(target){
					return target.objs.indexOf(obj) !== -1;
				}).filter(
				function(target){
					var targetRectangle = target.getRectangle(), objSquare = obj.getRectangle().getSquare();
					return  objSquare < targetRectangle.getSquare() && targetRectangle.isOn(obj.getCenter());
				}).sort(function(a, b){
							return a.getRectangle().getSquare() - b.getRectangle().getSquare();
						})
		if(shotTargets.length){
			shotTargets[0].onEnd(obj);
		}else{
			obj.move(obj.initPosition, this.options.timeEnd, true, true);
			if(this.options.isChangeHtmlParent && obj._initialParent){
				setTimeout(function(){
					obj.changeHtmlParent(obj._initialParent);
				}, this.options.timeEnd + 10);
			}
		}
		this.onChange.fire();
		return true;
	};

	TargetManager.prototype.reset = function(){
		this.targets.forEach(function(target){
			target.reset();
		});
	}

	TargetManager.prototype.refresh = function(){
		this.objs.forEach(function(obj){
			obj.refresh();
		});
		this.targets.forEach(function(target){
			target.refresh();
		});
	};

	TargetManager.prototype.__defineGetter__("positions", function(){
		return this.targets.map(function(target){
			return target.innerObjs.map(function(obj){
				return this.objs.indexOf(obj);
			}, this);
		}, this);
	});

	TargetManager.prototype.__defineSetter__("positions", function(positions){
		var message = "wrong array length";
		if(positions.length === this.targets.length){
			this.targets.forEach(function(target){
				target.reset();
			}, this);
			positions.forEach(function(tIndexes, i){
				tIndexes.forEach(function(index){
					this.targets[i].add(this.objs[index]);
				}, this);
			}, this);
		}else{
			alert(message);
			throw message;
		}
	});


	function targetManagerFactory(el, objsElements, targetElements, options){
		var objs, targets, objOptions, targetOptions, managerOptions;
		options = options || {};
		objOptions = options.obj || {};
		targetOptions = options.target || {};
		managerOptions = options.manager || {};
		objOptions.parent = objOptions.parent || el;
		targetOptions.parent = targetOptions.parent || el;
		objsElements = Array.prototype.slice.call(objsElements);
		targetElements = Array.prototype.slice.call(targetElements);

		objs = objsElements.map(function(el){
			return new MultiDrag.Obj(el, objOptions);
		});

		targets = targetElements.map(function(el){
			return new MultiDrag.Target(el, objs, targetOptions);
		});
		return new TargetManager(el, objs, targets, managerOptions);
	}


	MultiDrag.targetManagers = targetManagers;
	MultiDrag.TargetManager = TargetManager;
	MultiDrag.targetManagerFactory = targetManagerFactory;
	window.MultiDrag = MultiDrag;
})();