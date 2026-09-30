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

### container
DOM element that positions are measured from; the outer edge of its border is the origin. Defaults to `element.offsetParent`, the nearest positioned ancestor. Any ancestor can be passed, including one with `position: static`.


### bounding
Bounding conception can help us to restrict `draggable` movements. We can set to move it insite rectangle, by circle, by line, etc.
By default movements are not restricted.

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
Start positioning. By default we automatically calculate position inside `container`

## List options:
### nativeDragAndDrop
There can be situations where we need to use html5 drag&drop instead of `dragee` realization.

Example: `table>tr` have a lot of issues, so it's easier to fix them using html5 drag&drop realization or emulation

### emulateNativeDragAndDropOnTouch
`true` by default. Emulate native drag&drop on touch devices

### emulateNativeDragAndDropForAll
`false` by default. Emulate native drag&drop on all browsers
