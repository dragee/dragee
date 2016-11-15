var clone = function (o) {
    function c(o) {
        for (var i in o) {
            this[i] = o[i];
        }
    }
    return new c(o);
}


/************ Array **************/

if (!Array.prototype.forEach){
    Array.prototype.forEach = function(fun /*, thisp */){
        if (this === void 0 || this === null)
            throw new TypeError();
        var t = Object(this);
        var len = t.length >>> 0;
        if (typeof fun !== "function")
            throw new TypeError();
        var thisp = arguments[1];
        for (var i = 0; i < len; i++){
            if (i in t)
                fun.call(thisp, t[i], i, t);
        }
    };
}

if (!Array.prototype.filter){
    Array.prototype.filter = function(fun /*, thisp */){
        if (this === void 0 || this === null)
            throw new TypeError();
        var t = Object(this);
        var len = t.length >>> 0;
        if (typeof fun !== "function")
            throw new TypeError();
        var res = [];
        var thisp = arguments[1];
        for (var i = 0; i < len; i++){
            if (i in t){
                var val = t[i]; // in case fun mutates this
                if (fun.call(thisp, val, i, t))
                    res.push(val);
            }
        }
        return res;
    };
}

if (!Array.prototype.every){
        Array.prototype.every = function(fun /*, thisp */){
        if (this === void 0 || this === null)
            throw new TypeError();
        var t = Object(this);
        var len = t.length >>> 0;
        if (typeof fun !== "function")
        throw new TypeError();
        var thisp = arguments[1];
        for (var i = 0; i < len; i++){
            if (i in t && !fun.call(thisp, t[i], i, t))
                return false;
        }
        return true;
    };
}

if (!Array.prototype.map){
    Array.prototype.map = function(fun /*, thisp */){
        if (this === void 0 || this === null)
            throw new TypeError();
        var t = Object(this);
        var len = t.length >>> 0;
        if (typeof fun !== "function")
            throw new TypeError();
        var res = new Array(len);
        var thisp = arguments[1];
        for (var i = 0; i < len; i++){
            if (i in t)
                res[i] = fun.call(thisp, t[i], i, t);
        }
        return res;
    };
}

if (!Array.prototype.some){
    Array.prototype.some = function(fun /*, thisp */){
        if (this === void 0 || this === null)
            throw new TypeError();
        var t = Object(this);
        var len = t.length >>> 0;
        if (typeof fun !== "function")
            throw new TypeError();
        var thisp = arguments[1];
        for (var i = 0; i < len; i++){
            if (i in t && fun.call(thisp, t[i], i, t))
                return true;
        }
        return false;
    };
}

if (!Array.prototype.removeItem){
    Array.prototype.removeItem = function(val) {
        for (var i = 0; i < this.length; i++) {
            if (this[i] === val) {
                this.splice(i, 1);
                i--;
            }
        }
        return this;
    }
}

/*********** HTMLElement ***************/
Element.prototype.hasClass = function(c){
    var re = new RegExp("(^|\\s)" + c + "(\\s|$)", "g");
    return (re.test(this.className));
}

Element.prototype.addClass = function(c){
    if (this.hasClass(c)) return this;
    this.className = (this.className + " " + c).replace(/\s+/g, " ").replace(/(^ | $)/g, "");
    return this;
}

Element.prototype.removeClass = function(c){
    var re = new RegExp("(^|\\s)" + c + "(\\s|$)", "g")
    this.className = this.className.replace(re, "$1").replace(/\s+/g, " ").replace(/(^ | $)/g, "");
    return this;
}

HTMLElement.prototype.appbeginChild = function(node) {
    this.firstChild ? this.insertBefore(node, this.firstChild) : this.appendChild(node);
}

HTMLElement.prototype.exchange = function(refNode) {
    var tempParentNode = refNode.parentNode;
    var tempBeforeNode = refNode.nextElementSibling;
    this.parentNode.insertBefore(refNode,this);
    if(tempBeforeNode)
        tempParentNode.insertBefore(this,tempBeforeNode);
    else
        tempParentNode.appendChild(this);

    return refNode;
}

var fullOffset = function(element, axis, parent_id){
    var tor = 0;
    while((element) && (element.id!=parent_id)){  //&& (element!="")
        if( axis == "x" )
        {
            if(element.offsetLeft)
                tor += element.offsetLeft;
        }
        if( axis == "y" )
        {
            if(element.offsetTop)
                tor += element.offsetTop;
        }
            element = element.parentNode;
    }
    return tor;
}

/*********************** 00P *************************/
var extend = function(Child, Parent) {
    var F = function() { }
    F.prototype = Parent.prototype;
    Child.prototype = new F();
    Child.prototype.constructor = Child;
    Child.superclass = Parent.prototype;
}

var augment = function(receivingClass, givingClass) {
    /* only provide certain methods */
    if (arguments[2]) {
        for (var i=2, len=arguments.length; i<len; i++) {
            receivingClass.prototype[arguments[i]] = givingClass.prototype[arguments[i]];
        }
    }
    /* provide all methods*/
    else {
        for (methodName in givingClass.prototype) {
            /* check to make sure the receiving class doesn't
               have a method of the same name as the one currently
               being processed */
            if (!receivingClass.prototype[methodName]) {
                receivingClass.prototype[methodName] = givingClass.prototype[methodName];
            }
        }
    }
}
/**************************************************/
augment(NodeList,Array,'forEach');

/**************************************************/
Math.getNearIndex = function(arr, val){
    var delta = Math.abs(arr[0] - val);
    var index = 0;
    for(var i=0; i<arr.length; i++){
        var temp = Math.abs(arr[i] - val);
        if(temp<delta){
            delta = temp;
            index = i;
        }
    }
    return index;
}

Math.getNearIndexWithCaptureRadius = function(arr, radius, val){
    var delta=Math.abs(arr[0]-val);
    var index=0;
    for(var i=0;i<arr.length;i++){
        var temp=Math.abs(arr[i]-val);
        if(temp<delta){
            delta=temp;
            index=i;
        }
    }
    if(delta>radius){
        return -1;
    }
    return index;
}

Math.bound = function(min, max, val){
    //console.log(min,max,val)
    return Math.max(min,Math.min(max,val));
}
Math.boundPoint = function(min, max, val){
    var x = Math.max(min.x, Math.min(max.x, val.x));
    var y = Math.max(min.y, Math.min(max.y, val.y));
    return new Point(x, y);
}
Math.getLength = function(p1, p2){
    var dx = p1.x - p2.x;
    var dy = p1.y - p2.y;
    return Math.sqrt(dx*dx + dy*dy);
}

Math.toRadian = function(angle){
    return ((angle % 361) * Math.PI / 180);
}
/********************************************/

String.prototype.substrend = function(length) {
    return this.substr(0, this.length - length);
}
/********************************************/

function XmlHttpRequest() {
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    if (xmlhttp == null) {
        alert("Your browser does not support XMLHTTP.");
    }
    return xmlhttp;
}

window.requestAnimationFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          window.oRequestAnimationFrame      ||
          window.msRequestAnimationFrame     ||
          function(/* function */ callback, /* DOMElement */ element){
            window.setTimeout(callback, 1000 / 60);
          };
})();

try {
    if(!Object.prototype.__defineGetter__ &&
    Object.defineProperty({}, "x", { get: function() { return true } }).x) {
        Object.defineProperty(Object.prototype, "__defineGetter__",
     { enumerable: false, configurable: true,
        value: function(name, func) {
            Object.defineProperty(this, name,
             { get: func, enumerable: true, configurable: true });
        }
     });
        Object.defineProperty(Object.prototype, "__defineSetter__",
     { enumerable: false, configurable: true,
        value: function(name, func) {
            Object.defineProperty(this, name,
             { set: func, enumerable: true, configurable: true });
        }
     });
    }
} catch(defPropException) { /*Do nothing if an exception occurs*/ };
