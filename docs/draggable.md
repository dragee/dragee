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
    bound(point, size) {
        const retPoint = point.clone()
        retPoint.y = calculusFx(point.x)
        return retPoint
    }
)
```

### position
Start positioning. By default we automatically calculate position inside `parent` element

### isContentBoxSize
You can identify  that we should take into account element borders and paddings when we calculate draggable size

## List options:
### nativeDragAndDrop
There can be situations where we need to use html5 drag&drop instead of `dragee` realization.

Example: `table>tr` have a lot of issues, so it's easier to fix them using html5 drag&drop realization or emulation

### emulateNativeDragAndDropOnTouch
`true` by default. Emulate native drag&drop on touch devices

### emulateNativeDragAndDropForAll
`false` by default. Emulate native drag&drop on all browsers
