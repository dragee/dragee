## Bounding
![Скриншот 2019-11-04 20 10 03](https://user-images.githubusercontent.com/244409/68145781-36dd3500-ff3f-11e9-8ab2-5f0d22b1d448.png)

```javascript
import { BoundToCircle } from 'dragee'

new Draggable(element, {
    bound(point, size) {
        const retPoint = point.clone()
        retPoint.y = calculusFx(point.x)
        return retPoint
    }
})

new Draggable(element, {
    bound: BoundToCircle.bounding(new Dragee.Point(100, 90), 80)
})
```

`bound` is function that restrict movements of `Draggable`.

### Bounding class example

```javascript
import { BoundToRecangle } from 'dragee'
import { Point, Rectangle } from 'dragee'
const settings = {
  cellSize: 60,
  rowNumber: 8,
  colNumber: 8
}

class BoundToCells extends BoundToRectangle {
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
    bound: BoundToBoard.bounding(settings)
})
```

There is preset of predefined bounding classes
```javascript
BoundToElemen.bounding(element, container)
BoundToRectangle.bounding(rectangle)
BoundTolineX.bounding(x, startY, endY)
BoundTolineY.bounding(y, startX, endX)
BoundToLine.bounding(startPoint, endPoint)
BoundToCircle.bounding(center, radius)
BoundToArc.bounding(center, radius, startAgle, endAngle)
```
