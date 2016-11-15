(function(global) {
    // Requirements: Dragee, dombuilder, get-style-property
    var rotateOffset = 20,
        roles = ["lefttop", "righttop", "rightbottom", "leftbottom", "rotate"],
        transformProperty = getStyleProperty('transform'),
        transformOriginProperty = getStyleProperty('transformOrigin');

    function boundPoint(point, size){ return point; }

    function Block(element, container, options){
        var that=this,
            onEnd = options.onEnd || function(){};

        this.prevscale = 1;
        this.currentZoom = 1;
        this.angle = 0;

        this.element = element;

        this.container = container;

        this.element.addClass("re-ro-block");

        this.corners = {};

        this.startWidth = this.getWidth() / options.scale||1;

        this.proportion = +this.getWidth() / +that.getHeight();

        that.draggable = new Dragee.Draggable(that.element, {
            bound: boundPoint.bind(this),
            onMove: that.moveCorners.bind(this),
            onEnd: onEnd
        });

        roles.forEach(function(role){
            this.corners[role] = new Corner(this, role);
        }, this);

        this.element.addEventListener('gesturestart', function(e) {
            that.draggable.enable = false;
            that.startZoomWidth = that.getWidth();
            that.startRotation = that.angle;
            that.prevRotation = 0;
            that.circle180 = 0;
            that.circle360 = 0;
        });

        this.element.addEventListener('gesturechange', function(e) {
            var zoom = Math.sqrt(event.scale/that.prevscale), width,
                rotation = e.rotation;
            that.prevscale = e.scale;
            that.currentZoom *= zoom;

            if(Math.abs(that.prevRotation-e.rotation)>280) {
                if(e.rotation<0) {
                    that.circle360 += 1;
                } else {
                    that.circle360 -= 1;
                }
            } else if(Math.abs(that.prevRotation-e.rotation)>100) {
                if(e.rotation<0) {
                    that.circle180 += 1;
                } else {
                    that.circle180 -= 1;
                }
            }

            rotation += 180 * that.circle180 + 360*that.circle360;

            that.prevRotation = e.rotation;

            e.stopPropagation();

            width = that.startZoomWidth * that.currentZoom;

            requestAnimationFrame(function(){
                that.setWidth(width);
                if(that.prevRotation) {
                    that.rotate(that.startRotation + rotation);
                }
            });

        });

        this.element.addEventListener('gestureend', function(e) {
            that.draggable.enable = true;
        });

        this.refreshTransformOrigin();
    }

    Block.prototype = {
        select: function(){
            this.element.addClass("selected");
            for(var ci in this.corners){
                var corner = this.corners[ci];
                corner.cornerElement.addClass("selected");
            }
        },
        deselect: function(){
            this.element.removeClass("selected");
            for(var ci in this.corners){
                var corner = this.corners[ci];
                corner.cornerElement.removeClass("selected");
            }
        },
        refreshTransformOrigin: function(){
            this.element.style[transformOriginProperty] = (this.getWidth()/2) + "px " + (this.getHeight()/2)+"px";
        },
        getWidth: function(){
            return parseInt(this.element.getAttribute("width")) || this.element.clientWidth;
        },
        setWidth: function(width){
            var height = width/this.proportion;

            this.element.setAttribute("width", width);
            this.element.setAttribute("height", height);
            this.refreshTransformOrigin();
        },
        getHeight: function(){
            return parseInt(this.element.getAttribute("height")) || this.element.clientHeight;
        },
        getPosition: function(){
            return this.draggable.getPosition();
        },
        setPosition: function(position){
            this.draggable.setPosition(position);
        },
        calculatePositionFromBlock: function(role){
            switch(role){
                case "lefttop":
                    return this.draggable.getPosition();
                case "righttop":
                    return new Point(
                        this.draggable.getPosition().x + this.getWidth(),
                        this.draggable.getPosition().y
                    )
                case "rightbottom":
                    return new Point(
                        this.draggable.getPosition().x + this.getWidth(),
                        this.draggable.getPosition().y + this.getHeight()
                    )
                case "leftbottom":
                    return new Point(
                        this.draggable.getPosition().x,
                        this.draggable.getPosition().y + this.getHeight()
                    )
                case "rotate":
                    return new Point(
                        this.draggable.getPosition().x + this.getWidth()/2,
                        this.draggable.getPosition().y - rotateOffset
                    )
            };
        },
        moveCorners: function(skipCorner){
            for(var ci in this.corners){
                if(ci==skipCorner) continue;
                var corner = this.corners[ci];
                corner.copyPositionFromBlock();
            }
        },
        rotate: function(angle){
            this.angle = angle;

            var transform = this.element.style[transformProperty],
            translateCss = ' rotate(' + angle + 'deg)';

            if(!/rotate\([^)]+\)/.test(transform)){
                transform += translateCss;
            } else {
                transform = transform.replace(/rotate\([^)]+\)/, translateCss);
            }

            this.element.style[transformProperty] = transform;

            this.rotateCorners();
        },
        getAngle: function(){
            return this.angle || 0;
        },
        rotateCorners: function(){
            for(var ci in this.corners){
                var corner = this.corners[ci];
                corner.rotateCorner();
            }
        },
        getOppositeCorner: function(role){
            switch (role) {
                case "lefttop":
                    return this.corners.rightbottom;
                case "rightbottom":
                    return this.corners.lefttop;
                case "righttop":
                    return this.corners.leftbottom;
                case "leftbottom":
                    return this.corners.righttop;
            }
        },
        getOppositeVerticalLine: function(role){
            switch (role) {
                case "lefttop":
                case "leftbottom":
                    return {
                        start: this.corners.righttop.getPosition(),
                        end: this.corners.rightbottom.getPosition()
                    };
                case "righttop":
                case "rightbottom":
                    return {
                        start: this.corners.lefttop.getPosition(),
                        end: this.corners.leftbottom.getPosition()
                    };
            }
        },
        getCenter: function(){
            return new Point(
                this.getPosition().x + this.getWidth()/2,
                this.getPosition().y + this.getHeight()/2
            )
        },
        getRadius: function(){
            var width = this.getWidth()/2,
                height = this.getHeight()/2;
            return Math.sqrt(width*width + height*height);
        },
        getRotateRadius: function(){
            return this.getHeight()/2 + rotateOffset;
        },
        zoom: function(scale){
            var rrmScale = this.getWidth()/this.startWidth/(this.scale || 1);
            this.setWidth(this.startWidth * scale * rrmScale);
            this.moveCorners();

            this.scale = scale;
        },
        destroy: function(){
            this.draggable.destroy();
            this.element.parentNode.removeChild(this.element);
            for(var ci in this.corners){
                var corner = this.corners[ci];
                corner.destroy();
            }
        }
    }

    function Corner(block, role){
        this.block = block;
        this.role = role;
        this.render();
    }

    Corner.prototype = {
        setPosition: function(position){
            this.draggable.setPosition(position);
        },
        getPosition: function(){
            return this.draggable.getPosition();
        },
        render: function(){
            var that = this;
            this.cornerElement = dom("div", {
                "class": "re-ro-corner",
                "data-role": this.role
            });

            this.block.container.appendChild(this.cornerElement);

            this.draggable = new Dragee.Draggable(this.cornerElement, {
                parent: this.block.container,
                bound: this.autoDetectBoundFunction(),
                onMove: this.effectOnBlock.bind(this)
            });

            this.copyPositionFromBlock();
        },
        destroy: function(){
            this.draggable.destroy();
            this.cornerElement.parentNode.removeChild(this.cornerElement);
        },
        copyPositionFromBlock: function(){
            var position = this.block.calculatePositionFromBlock(this.role);
            position = this.amendmentOnAngle(position);

            this.setPosition(position);
        },
        calculatePositionRevertingAngle: function(newPosition, oppositePosition){
            var angle = this.getDefaultAngle(),
                centerPoint = new Point(
                    (newPosition.x + oppositePosition.x)/2,
                    (newPosition.y + oppositePosition.y)/2
                ),
                radius = mathPoint.distance(newPosition, centerPoint);

            return new Point(
                centerPoint.x + Math.cos(angle*(Math.PI/180)) * radius,
                centerPoint.y + Math.sin(angle*(Math.PI/180)) * radius
            );
        },
        amendmentOnAngle: function(position){
            if(!this.block.angle) return position;

            var centerPoint = this.block.getCenter(),
                currentPoint = this.getPosition(),
                angle = this.getDefaultAngle() + this.block.angle;

            if(this.role === "rotate") {
                radius = this.block.getRotateRadius();
            } else {
                radius = this.block.getRadius();
            }

            return new Point(
                centerPoint.x + Math.cos(angle*(Math.PI/180)) * radius,
                centerPoint.y + Math.sin(angle*(Math.PI/180)) * radius
            );
        },
        getDiagonalLine: function(){
            var startPoint = this.getPosition();
                endPoint = this.block.getOppositeCorner(this.role).getPosition();

            startPoint = this.amendmentOnAngle(startPoint);
            endPoint = this.block.getOppositeCorner(this.role).amendmentOnAngle(endPoint);

            return {
                start: startPoint,
                end: endPoint
            }
        },
        rotateBlock: function(){
            var centerPoint = this.block.getCenter(),
                rotatePoint = this.getPosition(),
                angle = Math.atan2(rotatePoint.y - centerPoint.y, rotatePoint.x - centerPoint.x) * (180/Math.PI) - this.getDefaultAngle();

            this.block.rotate(angle);
        },
        rotateCorner: function(){
            this.setPosition(this.amendmentOnAngle(this.getPosition()));
        },
        effectOnBlock: function(){
            if(this.role=="rotate"){
                this.rotateBlock();
            } else {
                var block = this.block,
                    width = this.calculateBlockWidth(),
                    position = this.calculateBlockPosition();

                block.setWidth(width);
                block.setPosition(position);

                block.moveCorners(this.role);
            }
        },
        calculateBlockWidth: function(){
            var corners = this.block.corners,
                position = this.getPosition(),
                line = this.block.getOppositeVerticalLine(this.role),
                startPoint = line.start,
                endPoint = line.end,
                boundedPosition = mathPoint.boundOnLine(startPoint, endPoint, position);

            return mathPoint.distance(position, boundedPosition);
        },
        calculateBlockPosition: function(){
            var corners = this.block.corners,
                position = this.getPosition(),
                boundedPosition = mathPoint.boundOnLine(corners.righttop.getPosition(), corners.rightbottom.getPosition(), position);

            return corners.lefttop.calculatePositionRevertingAngle(position, this.block.getOppositeCorner(this.role).getPosition());
        },
        getDefaultAngle: function(){
            var radius = this.block.getRadius(),
                leg = this.block.getHeight()/2.0,
                angle = Math.asin(leg/radius) * 180/Math.PI;

            switch(this.role) {
                case "lefttop": return -180 + angle;
                case "rotate": return -90;
                case "righttop": return -angle;
                case "rightbottom": return angle;
                case "leftbottom": return -180 - angle;
            }
        },
        autoDetectBoundFunction: function(){
            if(this.role !== "rotate") {
                return this.lineBound.bind(this);
            } else {
                return this.circleBound.bind(this);
            }
        },
        lineBound: function(point, size){
            var line = this.getDiagonalLine(),
                start = line.start,
                end = line.end,
                alpha = Math.atan2(end.y - start.y, end.x - start.x),
                beta = alpha + Math.PI / 2,
                someK = 10,
                cosBeta = Math.cos(beta),
                sinBeta = Math.sin(beta),
                point2 = new Point(point.x + someK * cosBeta, point.y + someK * sinBeta),
                pointCrossing = mathPoint.directCrossing(start, end, point, point2),
                newEnd = mathPoint.getPointInLineByLenght(end, start, size.x);

            pointCrossing = mathPoint.boundOnLine(start, newEnd, pointCrossing);
            return pointCrossing;
        },
        circleBound: function(point, size){
            var center = this.block.getCenter(),
                startPoint = this.getPosition(),
                radius = this.block.getRotateRadius(),
                boundedPoint = mathPoint.getPointInLineByLenght(center, point, radius);

            return boundedPoint;
        },
        destroy: function(){
            this.draggable.destroy();
            this.cornerElement.parentNode.removeChild(this.cornerElement);
        }
    }

    global.ReRoMove = Block;

})(window);