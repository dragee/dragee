(function(){
    'use strict';
    var Dragee = window.Dragee || {}, util;

    util = {
        getDefaultParent: function (element){
            var parent = element.parentNode;
            while(parent.parentNode && window.getComputedStyle(parent)["position"] === "static"){
                parent = parent.parentNode;
            }
            return parent;
        },
        bind: function(func, context){
            return function(){
                return func.apply(context, [].splice.call(arguments, 0));
            };
        },
        getTouchByID: function(element, touchId){
            var i;
            for(i = 0; i < element.changedTouches.length; i++){
                if(element.changedTouches[i].identifier === touchId){
                    return element.changedTouches[i];
                }
            }
            return false;
        },
        getSumValueOfStyleRule: function(element, rules){
            return rules.reduce(function(sum, rule){
                return sum + parseInt(window.getComputedStyle(element)[rule]||0);
            }, 0);
        },
        appendFirstChild: function(element, node){
            element.firstChild ? element.insertBefore(node, element.firstChild) : element.appendChild(node);
        },
        range: function(start, stop, step){
            var result = [];
            if(typeof stop === 'undefined'){
                stop = start;
                start = 0;
            }
            if(typeof step === 'undefined'){
                step = 1;
            }
            if((step > 0 && start >= stop) || (step < 0 && start <= stop)){
                return [];
            }
            for(var i = start; step > 0 ? i < stop : i > stop; i += step){
                result.push(i);
            }
            return result;
        },
        setStyle: function(element, style){
            style = style || {};
            var cssText = "", key;
            for(key in style){
                if(style.hasOwnProperty(key)){
                    cssText += key + ": " + style[key] + "; ";
                }
            }

            element.style.cssText = cssText;
        },
        randomColor:function(){
            var rnd = function(){
                    return Math.round(Math.random()*255);
                },
                toHexString = function(digit){
                    var str = digit.toString(16);
                    while(str.length < 2){
                        str = "0" + str;
                    }
                    return str;
                },
                red = rnd(),
                green = rnd(),
                blue = rnd();

            return "#" + toHexString(red) + toHexString(green) + toHexString(blue);
        },
        createCanvas: function(area, rectagle){
            var canvas;
            if(window.getComputedStyle(area).position === "static"){
                area.style.position = "relative";
            }
            canvas = document.createElement("canvas");
            canvas.setAttribute("width", rectagle.size.x + "px");
            canvas.setAttribute("height", rectagle.size.y + "px");
            util.setStyle(canvas, {
                position: "absolute",
                left: rectagle.position.y + "px",
                top: rectagle.position.y + "px",
                width: rectagle.size.x + "px",
                height: rectagle.size.y + "px"
            });
            util.appendFirstChild(area, canvas);
            return canvas;
        }
    };

    Dragee.util = util;
    window.Dragee = Dragee;
})();