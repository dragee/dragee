(function(){
	'use strict';
	var Dragee = window.Dragee || {},
		targetManagers = [];

	function TargetManager(element, draggables, targets, options){
		var i;
		this.element = element;
		this.draggables = draggables;
		this.targets = targets;
		targetManagers.push(this);
		this.options = {
			timeEnd: 400,
			timeWaitForRefresh: 500
		};
		for(i in options){
			if(options.hasOwnProperty(i)){
				this.options[i] = options[i];
			}
		}
		this.onChange = Dragee.util.triggerFactory({context: this});
		if(options && options.onChange){
			this.onChange.add(options.onChange);
		}
		this.init();
	}

	TargetManager.prototype.init = function(){
		var that = this;
		this.draggables.forEach(function(draggable){
			draggable.onEnd.add(function(){
				return that.onEnd(this);
			});
		});
	};

	TargetManager.prototype.addDraggable = function(draggable){
		var that = this;

		this.draggables.push(draggable);
		draggable.onEnd.unshift(function(){
			return that.onEnd(this);
		});
	};

	TargetManager.prototype.onEnd = function(draggable){
		var shotTargets = this.targets.filter(function(target){
			return target.draggables.indexOf(draggable) !== -1;
		}).filter(function(target){
			return target.catchDraggable(draggable);
		}).sort(function(a, b){
			return a.getRectangle().getSquare() - b.getRectangle().getSquare();
		});

		if(shotTargets.length){
			shotTargets[0].onEnd(draggable);
		}else{
			draggable.move(draggable.initPosition, this.options.timeEnd, true, true);
		}
		this.onChange.fire();
		return true;
	};

	TargetManager.prototype.reset = function(){
		this.targets.forEach(function(target){
			target.reset();
		});
	};

	TargetManager.prototype.refresh = function(){
		this.draggables.forEach(function(draggable){
			draggable.refresh();
		});
		this.targets.forEach(function(target){
			target.refresh();
		});
	};

	TargetManager.prototype.__defineGetter__("positions", function(){
		return this.targets.map(function(target){
			return target.innerDraggables.map(function(draggable){
				return this.draggables.indexOf(draggable);
			}, this);
		}, this);
	});

	TargetManager.prototype.__defineSetter__("positions", function(positions){
		var message = "wrong array length";
		if(positions.length === this.targets.length){
			this.targets.forEach(function(target){
				target.reset();
			}, this);
			positions.forEach(function(targetIndexes, i){
				targetIndexes.forEach(function(index){
					this.targets[i].add(this.draggables[index]);
				}, this);
			}, this);
		}else{
			alert(message);
			throw message;
		}
	});

	function targetManagerFactory(element, draggableElements, targetElements, options){
		var draggables, targets, draggableOptions, targetOptions, managerOptions;
		options = options || {};
		draggableOptions = options.draggable || {};
		targetOptions = options.target || {};
		managerOptions = options.manager || {};
		draggableOptions.parent = draggableOptions.parent || element;
		targetOptions.parent = targetOptions.parent || element;
		draggableElements = Array.prototype.slice.call(draggableElements);
		targetElements = Array.prototype.slice.call(targetElements);

		draggables = draggableElements.map(function(element){
			return new Dragee.Draggable(element, draggableOptions);
		});

		targets = targetElements.map(function(el){
			return new Dragee.Target(element, draggables, targetOptions);
		});
		return new TargetManager(element, draggables, targets, managerOptions);
	}

	Dragee.targetManagers = targetManagers;
	Dragee.TargetManager = TargetManager;
	Dragee.targetManagerFactory = targetManagerFactory;
	window.Dragee = Dragee;
})();