# Bounding

```javascript
{
	bound: (point, size) => ,
	refresh: () =>
}
```

`bounding` is object that describe bounding for `Draggable`.
It should at least have `bound` method that got point and size of Draggable as arguments when dragging and return bounded point.

```javascript
function noBound(point, size){ return point; }
new Draggable(element, {
	bounding: noBound
})

new Draggable(element, {
	bounding: new Dragee.bound.BoundToCircle(new Dragee.Point(100, 90), 80)
})
```

We already implemented a lot of useful bounding classes for you

```javascript
new Dragee.bound.BoundToElement(element, parent)
new Dragee.bound.BoundToRectangle(rectangle)
new Dragee.bound.BoundTolineX(x, startY, endY)
new Dragee.bound.BoundTolineY(y, startX, endX)
new Dragee.bound.BoundToLine(startPoint, endPoint)
new Dragee.bound.BoundToCircle(center, radius)
new Dragee.bound.BoundToArc(center, radius, startAgle, endAngle)
```
