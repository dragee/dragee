# Bounding

```javascript
import bound from 'dragee'

new Draggable(element, {
    bounding: {
        bound: (point, size) => {
            const retPoint = point.clone()
            retPoint.y = calculusFx(point.x)
            return retPoint
        }
    }
})

new Draggable(element, {
    bounding: new Dragee.bound.BoundToCircle(new Dragee.Point(100, 90), 80)
})
```

`bounding` is object that describe bounding for `Draggable`.
It should at least have `bound` method that got point and size of Draggable as arguments when dragging and return bounded point.

### Bounding class example

```javascript
import { bound } from 'dragee'
import { Point, Rectangle } from 'dragee'
const BoundToElement = bound.BoundToRectangle

const settings = {
  cellSize: 60,
  rowNumber: 8,
  colNumber: 8
}

class BoundToCells extends BoundToElement {
    constructor(settings) {
        this.settings = settings
        const rectangle = new Rectangle(
            new Point(0, 0),
            new Point(
                settings.cellSize * settings.rowNumber,
                settings.cellSize * settings.colNumber,
            )
        )
        super(rectangle)
    }

    bound (point, size) {
        point = new Dragee.Point(
            Math.round(point.x / this.cellSize) * this.cellSize,
            Math.round(point.y / this.cellSize) * this.cellSize
        )
        return super.bound(point, size)
    }

    refresh () {
        this.rectangle = new Rectangle(
            new Point(0, 0),
            new Point(
                this.settings.cellSize * this.settings.rowNumber,
                this.settings.cellSize * this.settings.colNumber,
            )
        )
    }
}

new Draggable(element, {
    bounding: new BoundToBoard(settings)
})
```

There is preset of predefined bounding classes
```javascript
new Dragee.bound.BoundToElement(element, parent)
new Dragee.bound.BoundToRectangle(rectangle)
new Dragee.bound.BoundTolineX(x, startY, endY)
new Dragee.bound.BoundTolineY(y, startX, endX)
new Dragee.bound.BoundToLine(startPoint, endPoint)
new Dragee.bound.BoundToCircle(center, radius)
new Dragee.bound.BoundToArc(center, radius, startAgle, endAngle)
```
