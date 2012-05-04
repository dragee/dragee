(function (global, MultiDrag){
	'use strict';
	var targetManagers =[],
	TargetManager = function(el,objElements,targetElements,options){
		var i;
		this.el=el;
		targetManagers.push(this);
		this.options = {
			isParenTarget:false,
			isChangeHtmlParent:true,
			timeEnd : 400,
			timeWaitForRefresh : 500
		}
		for(i in options){ this.options[i] = options[i]; }
		this.init(objElements,targetElements);
	}

	TargetManager.prototype.init = function(objElements,targetElements){
		var that = this;
		this.objs = objElements.map(function(el){
			var obj = new MultiDrag.Obj(el,{
				parent:this.el,
				isReCalculatePosition:true,
				onEnd:function(){
					return that.onEnd(this);
				},
				onMove:function(){
					return that.onMove(this);
				}
			},this);
			return obj;
		},this);
		this.targets = targetElements.map(function(el){
			var target = new MultiDrag.Target(el,this.objs,{
				parent:this.el,
				isReCalculateRectangle:true,
				isChangeHtmlParent:this.options.isChangeHtmlParent
			});
			return target;
		},this);
		this.options.isParenTarget && this.targets.push(new MultiDrag.Target(this.el,this.objs,{
			parent:this.el,
			isChangeHtmlParent:this.options.isChangeHtmlParent
		}));
		this.MultiDraggedNowObjs=[];
		this._maxTouchCount=0;
	}

	TargetManager.prototype.onMove = function(obj){
		if(this.MultiDraggedNowObjs.indexOf(obj) === -1){
			this.MultiDraggedNowObjs.push(obj);
			this._maxTouchCount = Math.max(this._maxTouchCount,this.MultiDraggedNowObjs.length);
		}
	}

	TargetManager.prototype.onEnd = function(obj){
		var shotTargets = this.targets.filter(function(target,index){
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
		this.onEndMultiDrag(obj);
		return true;
	}

	TargetManager.prototype.onEndMultiDrag = function(obj){
		var that = this;
		MultiDrag.Util.remove(this.MultiDraggedNowObjs,obj);
		if(!this.MultiDraggedNowObjs.length){
			if(this._maxTouchCount > 1){
				setTimeout(function(){
					that.refresh();
				},this.options.timeWaitForRefresh);
			}
			this._maxTouchCount = 0;
		}
	}


	TargetManager.prototype.refresh = function(){
		this.objs.forEach(function(obj){
			obj.refresh();
		});
		this.targets.forEach(function(target){
			target.refresh();
		});
	}

	MultiDrag = MultiDrag || {};
	MultiDrag.targetManagers = targetManagers;
	MultiDrag.TargetManager = TargetManager;
	global.MultiDrag = MultiDrag;
})(window, window.MultiDrag);