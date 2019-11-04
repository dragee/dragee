# Getting Started

Install with npm

```
npm install dragee
```

Install with yarn
```
yarn add dragee
```

Import to you project
```javascript
import { Draggable, List, Chart, ... } from Dragee
```

# Usage

## Draggable
```html
<div class="area">
    <div id="draggable">
        <i class="icon-move"></i> A
    </div>
</div>
```

```javascript
import { Draggable } from 'dragee'

element = document.getElementById('draggable')
new Draggable(element[, options])
```

## Options

### handler

```javascript
new Draggable(element, {
    handler: '.icon-move'
})
```

### parent
HTMLElement that define Cartesian coordinates system. It's upper left corner is taken as the origin. By default we calculate parent(container) automatically by finding first parent that have non `static` positioning


### bounding
Bounding conception can help us to restrict `draggable` movements. We can set to move it insite rectangle, by circle, by line, etc.
By default we will resctrict movements inside parent rectangle

```javascript
new Draggable(element, {
    bounding: {
        bound: (point, size) => {
            const retPoint = point.clone()
            retPoint.y = calculusFx(point.x)
            return retPoint
        }
    }
```

### position
Start positioning. By default we automatically calculate position inside `parent` element

### isContentBoxSize
You can identify  that we should take into account element borders and paddings when we calculate draggable size

### List options:
### nativeDragAndDrop
There can be situations where we need to use html5 drag&drop instead of `dragee` realization. Example: table>tr have a lot of issues, so it's easier to fix them using html5 drag&drop realization or emulation

### emulateNativeDragAndDropOnTouch
`true` by default. Emulate native drag&drop on touch devices

### emulateNativeDragAndDropForAll
`false` by default. Emulate native drag&drop on all browsers




## Bounding

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
const BoundToRectangle = bound.BoundToRectangle

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


## List

During dragging we search nearest `Draggable` from list and if distance between them is less than radius, we excange their positions

```javascript
Dragee.List(draggables[, options])
```

## Example:

```html
<ul id="listA" class="list">
    <li>↔ A</li>
    <li>↔ B</li>
    <li>↔ C</li>
    <li>↔ D</li>

    ...
    <li>↔ Z</li>
</ul>
```

```javascript
const container = document.getElementById("listA")
const elements = [...container.querySelectorAll("li")]
const draggables = elements.map((element) => new Draggable(element, { parent: container})

new List(draggables, {
    getDistance: distance.getYDifference
})
````

## Options:

### getDistance

Function that calculate distance from one draggable to other.
We already implemented `getDistance`, `getXDifference` and `getYDifference` functions.
By default we use `getDistance` function.

```javascript
import { distance, List } from 'dragee'

new List(draggables, {
    getDistance: getYDifference
})

new List(draggables, {
    getDistance: (p1, p2) => Math.abs(p1.x - p2.x)
})
```

### radius
radius that determine if we can excange two `Draggable`.
Default: 30px

### timeEnd
time to move `draggable` to endpoint
Default: 200ms

### timeExcange
time to exchange two `draggables`
Default: 400ms
