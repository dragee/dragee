(function (global, MultiDrag){
	'use strict';
	var targetManagers =[],targetManagerFactory,
	TargetManager = function(el,objs,targets,options){
		var i;
		this.el=el;
		this.objs = objs;
		this.targets = targets;
		targetManagers.push(this);
		this.options = {
			isChangeHtmlParent:false,
			timeEnd : 400,
			timeWaitForRefresh : 500
		}
		for(i in options){ this.options[i] = options[i]; }
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
		var shotTargets = this.targets.filter(function(target){
			return target.objs.indexOf(obj) !== -1;
		}).filter(function(target){
			var targetRectangle = target.getRectangle(),
			objSquare = obj.getRectangle().getSquare();
			return  objSquare < targetRectangle.getSquare() && targetRectangle.isOn(obj.getCenter());
		}).sort(function(a,b){
			return a.getRectangle().getSquare() - b.getRectangle().getSquare();
		})
		if(shotTargets.length){
			shotTargets[0].onEnd(obj);
		}else{
			obj.move(obj.initPosition,this.options.timeEnd,true,true);
			this.options.isChangeHtmlParent && obj._initialParent && setTimeout(function(){
				obj.changeHtmlParent(obj._initialParent);
			},this.options.timeEnd+10);
		}
		return true;
	};


	TargetManager.prototype.refresh = function(){
		this.objs.forEach(function(obj){
			obj.refresh();
		});
		this.targets.forEach(function(target){
			target.refresh();
		});
	};


	targetManagerFactory = function(el,objsElements,targetElements,options){
		var objs,targets,objOptions,targetOptions,managerOptions;
		options = options || {};
		objOptions = options.obj || {};
		targetOptions = options.target || {};
		managerOptions = options.manager || {};
		objOptions.parent = objOptions.parent || el;
		targetOptions.parent = targetOptions.parent || el;
		objsElements=Array.prototype.slice.call(objsElements);
		targetElements=Array.prototype.slice.call(targetElements);

		objs = objsElements.map(function(el){
			return new MultiDrag.Obj(el,objOptions);
		});

		targets = targetElements.map(function(el){
			return new MultiDrag.Target(el,objs,targetOptions);
		});
		return new TargetManager(el,objs,targets,managerOptions);
	}


	MultiDrag = MultiDrag || {};
	MultiDrag.targetManagers = targetManagers;
	MultiDrag.TargetManager = TargetManager;
	MultiDrag.targetManagerFactory = targetManagerFactory;
	global.MultiDrag = MultiDrag;
})(window, window.MultiDrag);