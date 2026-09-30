
# Dragee

[![npm version](https://badge.fury.io/js/dragee.svg)](https://badge.fury.io/js/dragee)
[![bundle size](https://img.shields.io/bundlephobia/minzip/dragee)](https://bundlephobia.com/package/dragee)
[![license](https://img.shields.io/npm/l/dragee)](https://www.npmjs.com/package/dragee)

Drag-and-drop for JavaScript with precise movement constraints. No dependencies. Includes 7 geometric bounds, sortable lists (vertical and horizontal), trays to drop into, scopes to keep groups apart, and bubbling DOM events for framework integration.

[Documentation & Demos](https://dragee.github.io/) | [GitHub](https://github.com/dragee/dragee)

## Installation

```bash
npm install dragee
```

```javascript
import { Draggable, Point } from 'dragee'
```

CommonJS works too: `const { Draggable } = require('dragee')`.

## Browser support

Chrome / Edge 90+, Firefox 86+, Safari 15+ (iOS 15+). Dragee 2 extends [`EventTarget`](https://caniuse.com/mdn-api_eventtarget_eventtarget) and uses the [`signal` listener option](https://caniuse.com/mdn-api_eventtarget_addeventlistener_options_parameter_options_signal_parameter). For older browsers use dragee 1.x.

## Quick Start

```javascript
import { Draggable } from 'dragee'

new Draggable(document.getElementById('my-element'))
```

The element can now be dragged. Positions are measured relative to its offset parent.

## Draggable

Makes an element draggable.

```javascript
import { Draggable, Point } from 'dragee'

const draggable = new Draggable(element, {
  container: parentElement,
  position: new Point(100, 50),
  bound: (point) => new Point(point.x, Math.max(0, point.y)),
  handler: '.drag-handle',
  on: {
    'drag:end': ({ draggable }) => console.log('dropped at', draggable.position)
  }
})
```

### Options

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `container` / `parent` | `Element` | `element.offsetParent` | Element that positions are measured from |
| `position` | `Point` | current place | Initial position |
| `bound` | `(point, size) => Point` | none | Function that limits where the element can move (see [Bounding](#bounding)) |
| `bounding` | `Bound` | none | The same as `bound`, as a `Bound` instance |
| `handler` | `Element` \| `string` | the element | Part of the element (or a CSS selector) the drag starts from |
| `dragStartThreshold` | `number` | `0` | Pixels the pointer must move before the drag starts, so a click stays a click |
| `touchDraggingThreshold` | `number` | `0` | Milliseconds after touch start; a touch that moves earlier is treated as scrolling |
| `nativeDragAndDrop` | `boolean` | `false` | Use the HTML5 Drag and Drop API |
| `emulateNativeDragAndDropOnTouch` | `boolean` | `false` | Emulate native drag and drop on touch devices with a moving copy of the element |
| `copyStyles` | `(source, copy) => void` | copies computed styles | How the touch emulation copy gets its styles |
| `dragOverThrottleDuration` | `number` | `16` | Throttle (ms) for native `dragover` handling |
| `considerTransformOffset` | `boolean` | `false` | Measure the position with `getBoundingClientRect`, including CSS transforms |
| `scrollRootContainer` | `Element` | `container` | Scrolling of parents up to this element moves the dragged element along |
| `shouldRemoveZeroTranslate` | `boolean` | `false` | Remove `translate3d(0, 0, 0)` at the initial position |
| `stopPropagationOnDragStart` | `boolean` | `false` | Stop propagation of the event that starts the drag |
| `domEvents` | `boolean` | `true` | Dispatch bubbling `dragee:*` DOM events |
| `scope` | `Scope` | current scope | Scope to join (see [Scope](#scope)) |
| `on` | `object` | — | Listeners, e.g. `{ 'drag:start': fn }` |

Pressing an `input`, `textarea`, `select` or `contenteditable` element inside a draggable never starts a drag, so these fields stay editable. With nested draggables only the innermost one starts dragging.

### Events

| Event | Data | DOM event | When |
| --- | --- | --- | --- |
| `drag:start` | `{ draggable }` | `dragee:start` | The drag starts (after `dragStartThreshold`). **Cancelable** |
| `drag:move` | `{ draggable }` | `dragee:move` | The position changes during the drag |
| `drag:release` | `{ draggable }` | `dragee:release` | The draggable is released, before it is placed. **Cancelable** |
| `drag:end` | `{ draggable }` | `dragee:end` | The drag is over |

DOM events are dispatched from the element and bubble, so one listener on a common ancestor covers all draggables:

```javascript
container.addEventListener('dragee:end', ({ draggable }) => {
  console.log('dropped', draggable.element)
})
```

Canceling `drag:start` stops the drag:

```javascript
draggable.on('drag:start', (event) => {
  if (isLocked) event.cancel()
})
```

A released draggable stays where it was dropped. Canceling `drag:release` lets you place it yourself:

```javascript
draggable.on('drag:release', (event) => {
  event.cancel()
  draggable.pinPosition(snapToGrid(draggable.position), { duration: 200 })
})
```

Lists and scopes place their draggables through the same event and skip a draggable that an earlier listener has already placed.

### Methods

| Method | Signature | Description |
| --- | --- | --- |
| `move` | `(point, { duration?, silent? })` | Move to `point`, animated over `duration` ms (default `0`). Emits `drag:move` unless `silent` |
| `pinPosition` | `(point, { duration?, silent? })` | Move and remember `point` as the rest position (`pinnedPosition`). Silent by default |
| `setPosition` | `(point)` | Move instantly, without animation or events |
| `resetPositionToInitial` | `()` | Go back to `initialPosition` |
| `refreshPosition` | `()` | Re-apply the current position |
| `remeasure` | `()` | Re-read the element's place after the layout changed. A draggable at its initial position moves to the new one |
| `getPosition` | `()` → `Point` | Current position |
| `getCenter` | `()` → `Point` | Center of the element |
| `getSize` | `()` → `Point` | Width and height |
| `getRectangle` | `()` → `Rectangle` | Position and size |
| `cancelDragging` | `()` | Stop the current drag |
| `refresh` | `()` | Re-read the bounding (e.g. the size of a `BoundToElement` element) |
| `destroy` | `()` | Remove all listeners and leave its scope and trays |

### Properties

| Property | Type | Description |
| --- | --- | --- |
| `element` | `Element` | The DOM element |
| `position` | `Point` | Current position |
| `pinnedPosition` | `Point` | Rest position |
| `initialPosition` | `Point` | Position to go back to on reset |
| `isDragging` | `boolean` | Whether it is being dragged |
| `trays` | `Tray[]` | Trays it can be dropped into |
| `enable` | `boolean` | Set to `false` to disable dragging |

---

## Bounding

Bounds limit where a draggable can move. Pass a `Bound` instance as `bounding`, or a function as `bound`. Every class also has a static `.bounding(...args)` that creates an instance and returns its `bound` function.

```javascript
import { Draggable, BoundToElement, BoundToCircle, Point } from 'dragee'

new Draggable(el, {
  bounding: new BoundToElement(area, area)
})

new Draggable(el, {
  bound: BoundToCircle.bounding(new Point(200, 200), 100)
})
```

| Class | Constructor | Keeps the element |
| --- | --- | --- |
| `Bound` | `()` | anywhere (base class) |
| `BoundToRectangle` | `(rectangle)` | inside a `Rectangle` |
| `BoundToElement` | `(element, container?)` | inside an element; re-reads its size on `refresh()` |
| `BoundToLineX` | `(x, startY, endY)` | on the vertical line `x`, between `startY` and `endY` |
| `BoundToLineY` | `(y, startX, endX)` | on the horizontal line `y`, between `startX` and `endX` |
| `BoundToLine` | `(startPoint, endPoint)` | on the segment between two points |
| `BoundToCircle` | `(center, radius)` | on a circle |
| `BoundToArc` | `(center, radius, startAngle, endAngle)` | on an arc; the angles can be functions |

A custom `bound` function receives the wanted position and the element size, and returns the allowed position:

```javascript
new Draggable(el, {
  bound: (point, size) => new Point(Math.max(0, Math.min(300 - size.x, point.x)), point.y)
})
```

---

## Sortable Lists

### List

A sortable list or grid: a dragged item swaps with the slot it comes within `radius` of.

```javascript
import { Draggable, List } from 'dragee'

const container = document.querySelector('.grid')
const draggables = Array.from(container.querySelectorAll('.item'), (item) => new Draggable(item, { container }))

const list = new List(draggables, { container, radius: 40, reorderOnChange: true })

list.on('list:change', ({ draggable }) => console.log('order changed by', draggable.element))
```

#### Options

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `radius` | `number` | `30` | How close (px) a dragged item must come to a slot to take it |
| `timeEnd` | `number` | `200` | Animation ms of the dropped item settling into its slot |
| `timeExchange` | `number` | `400` | Animation ms of the other items moving aside |
| `reorderOnChange` | `boolean` | `false` | Also reorder the DOM elements after a change |
| `container` | `Element` | — | Re-lay out the items when this element is resized |
| `sorting` | `(a, b) => number` | by y, then x | Order of the items |
| `getDistance` | `(p1, p2) => number` | Euclidean | Distance used with `radius` |
| `domEvents` | `boolean` | `true` | Dispatch bubbling `dragee:*` DOM events |
| `on` | `object` | — | Listeners |

#### Events

| Event | Data | DOM event | When |
| --- | --- | --- | --- |
| `list:change` | `{ list, draggable }` | `dragee:list-change` | A drop changed the order; `draggable` is the dragged item |
| `list:reordered` | `{ list, draggable }` | `dragee:list-reordered` | The DOM elements were reordered (with `reorderOnChange`) |

DOM events are dispatched from the dragged item's element and bubble. With nested lists, `event.list` tells them apart.

#### Methods

| Method | Signature | Description |
| --- | --- | --- |
| `add` | `(draggable \| draggable[])` | Add items |
| `remove` | `(draggable \| draggable[])` | Remove items and close the gap |
| `clear` | `()` | Remove all items |
| `reset` | `()` | Move all items back to their initial positions |
| `refresh` | `()` | Call `refresh()` on all items |
| `getSortedDraggables` | `()` → `Draggable[]` | Items in their current order |
| `getCurrentPinnedPositions` | `()` → `Point[]` | The same as `positions` |
| `destroy` | `()` | Destroy the list and its draggables |

#### Properties

| Property | Type | Description |
| --- | --- | --- |
| `draggables` | `Draggable[]` | Items, in the order they were given |
| `positions` | `Point[]` | Rest positions of `draggables`. Set it to restore a saved layout; the wrong length throws a `RangeError` |
| `enable` | `boolean` | Set to `false` to disable dragging of all items |
| `swappingDisabled` | `boolean` | Set to `true` to stop items from swapping |

### BubblingList

A list along one axis whose items can have different sizes: they are laid out one after another from the first item. Extends `List` and supports its options, methods, events and properties; `radius` is not used.

```javascript
import { Draggable, BubblingList } from 'dragee'

const container = document.querySelector('.list')
const draggables = Array.from(container.querySelectorAll('.item'), (item) => new Draggable(item, { container }))

new BubblingList(draggables, { container, reorderOnChange: true })
new BubblingList(horizontalDraggables, { axis: 'x', gap: 8 })
```

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `axis` | `'y'` \| `'x'` | `'y'` | `'y'` — vertical, `'x'` — horizontal |
| `gap` | `number` | detected | Space between items; detected from the first two items if not set |
| `verticalGap` | `number` | — | Alias for `gap` |

The `gap` property reads and changes the gap.

---

## Tray

An area that draggables are dropped into. It lays them out with a positioning strategy and lets a draggable go as soon as it is dragged away. It re-lays them out when the page layout changes.

```javascript
import { Tray, FloatLeftStrategy } from 'dragee'

const tray = new Tray(trayElement, draggables, {
  strategy: new FloatLeftStrategy(() => tray.getRectangle(), { radius: 80 })
})

tray.on('tray:add', ({ draggable }) => console.log('added', draggable.element))
```

### Options

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `strategy` | `Strategy` | `FloatLeftStrategy` | How the draggables are laid out |
| `catchDraggable` | `(tray, draggable) => boolean` | center inside and smaller than the tray | Whether a dropped draggable is taken |
| `bound` | `(point, size) => Point` | inside the tray | Where a dropped draggable may land |
| `timeEnd` | `number` | `200` | Animation ms of a dropped draggable moving into place |
| `timeExchange` | `number` | `400` | Animation ms of the other draggables moving aside |
| `container` / `parent` | `Element` | `element.offsetParent` | Element that positions are measured from |
| `domEvents` | `boolean` | `true` | Dispatch bubbling `dragee:*` DOM events |
| `scope` | `Scope` | current scope | Scope to join |
| `on` | `object` | — | Listeners |

### Events

| Event | Data | DOM event | When |
| --- | --- | --- | --- |
| `tray:beforeAdd` | `{ tray, draggable }` | `dragee:tray-before-add` | Before a draggable is added. **Cancelable** |
| `tray:add` | `{ tray, draggable }` | `dragee:tray-add` | A draggable was added |
| `tray:remove` | `{ tray, draggable }` | `dragee:tray-remove` | A draggable left the tray |

Canceling `tray:beforeAdd` refuses the draggable: a dropped one goes back to its initial position. For example, a column that holds at most 5 cards:

```javascript
tray.on('tray:beforeAdd', (event) => {
  if (tray.innerDraggables.length >= 5) event.cancel()
})
```

DOM events are dispatched from the tray element and bubble, so one listener on a board covers all its columns:

```javascript
board.addEventListener('dragee:tray-add', ({ tray, draggable }) => {
  console.log(draggable.element, 'moved to', tray.element)
})
```

### Methods

| Method | Signature | Description |
| --- | --- | --- |
| `add` | `(draggable, { duration? })` | Put a draggable into the tray, animated over `duration` ms (default `0`) |
| `remove` | `(draggable)` | Take a draggable out of the tray |
| `accept` | `(draggable)` | Let a draggable be dropped into the tray, e.g. one created later |
| `releaseDraggable` | `(draggable)` | Stop accepting a draggable |
| `reset` | `()` | Take all draggables out |
| `refresh` | `()` | Lay out the draggables again |
| `getSortedDraggables` | `()` → `Draggable[]` | Draggables inside, in order |
| `getRectangle` / `getPosition` / `getSize` | `()` | The tray's rectangle, position and size |
| `destroy` | `()` | Stop watching the draggables and leave all scopes |

### Properties

| Property | Type | Description |
| --- | --- | --- |
| `element` | `Element` | The tray element |
| `innerDraggables` | `Draggable[]` | Draggables inside the tray |
| `draggables` | `Draggable[]` | Draggables that can be dropped into it |
| `container` | `Element` | Element that positions are measured from |

---

## Positioning Strategies

A strategy decides where the draggables in a tray go. Each takes the tray's rectangle (or a function returning it) and options.

### FloatLeftStrategy

Places draggables like CSS `float: left`: side by side from the top-left corner, wrapping to the next row.

```javascript
new FloatLeftStrategy(() => tray.getRectangle(), {
  radius: 80,
  paddingTopLeft: new Point(10, 10),
  yGapBetweenDraggables: 5
})
```

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `radius` | `number` | `80` | How close a dropped draggable must come to a place to take it |
| `paddingTopLeft` | `Point` | `(0, 0)` | Space to the left of each draggable and above the first row |
| `paddingBottomRight` | `Point` | `(0, 0)` | Space to the right of and below each draggable |
| `yGapBetweenDraggables` | `number` | `0` | Vertical gap between rows |
| `getDistance` | `(p1, p2) => number` | Euclidean | Distance used with `radius` |
| `getPosition` | `(draggable) => Point` | `draggable.position` | Point of a draggable used for the distance |
| `removable` | `boolean` | `true` | Send draggables that don't fit at the bottom back to their initial position |

### FloatRightStrategy

Like `float: right`, from the top-right corner. Extends `FloatLeftStrategy`; instead of the paddings above it takes `paddingTopRight` (default `(5, 5)`) and `paddingBottomLeft` (default `(0, 0)`).

### NotCrossingStrategy

Leaves draggables where they are dropped, but doesn't let them overlap.

```javascript
new NotCrossingStrategy(() => tray.getRectangle())
```

---

## Scope

A scope decides which trays a draggable can be dropped into: only the trays of its own scope. Without scopes all instances share `defaultScope`.

### scope()

Instances created inside the callback join the new scope. Calls can be nested; instances join the innermost scope.

```javascript
import { scope, Draggable, Tray } from 'dragee'

let columns
const board = scope(() => {
  const cards = cardElements.map((el) => new Draggable(el))
  columns = columnElements.map((el) => new Tray(el, cards))
})

board.on('scope:change', () => console.log(board.positions))
```

Instances created later, for example after an `await` or by an "Add card" button, join with the `scope` option, and trays have to accept them:

```javascript
const card = new Draggable(el, { scope: board })
columns.forEach((column) => column.accept(card))
```

### Scope

`new Scope(draggables, trays, { timeEnd })` creates a scope directly.

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `timeEnd` | `number` | `400` | Animation ms of a refused draggable going back to its initial position |

| Method | Description |
| --- | --- |
| `addDraggable(draggable)` | Move a draggable into this scope from its previous one |
| `addTray(tray)` | Move a tray into this scope from its previous one |
| `reset()` | Empty all trays |
| `refresh()` | Refresh all draggables and trays |

| Property | Type | Description |
| --- | --- | --- |
| `draggables` | `Draggable[]` | Draggables of the scope |
| `trays` | `Tray[]` | Trays of the scope |
| `positions` | `number[][]` | For each tray, the indexes in `draggables` of the draggables inside. Set it to restore a saved layout; the wrong length throws a `RangeError` |

| Event | Data | When |
| --- | --- | --- |
| `scope:change` | `{ scope, draggable }` | A draggable that belongs to trays was dropped |

`defaultScope` and `scopes` (all scopes) are exported too.

---

## Geometry

### Point

A 2D point or vector: `new Point(x, y)`.

| Method | Returns |
| --- | --- |
| `add(p)` / `sub(p)` | Sum / difference with another point |
| `mult(k)` | The point multiplied by a number |
| `negative()` | The point with both coordinates negated |
| `compare(p)` | Whether both coordinates are equal |
| `clone()` | A copy |
| `Point.elementOffset(element, parent?)` | Position of an element relative to `parent` |
| `Point.elementBoundingOffset(element, parent?)` | The same, from `getBoundingClientRect` (includes transforms) |
| `Point.elementSize(element)` | Width and height of an element |

### Rectangle

`new Rectangle(position, size)`, both `Point`s.

| Method | Returns |
| --- | --- |
| `getP1()` … `getP4()` | Corners: top-left, top-right, bottom-right, bottom-left |
| `getCenter()` | The center |
| `getSquare()` | The area |
| `includePoint(p)` / `includeRectangle(r)` | Whether the point / rectangle is inside |
| `or(r)` / `and(r)` | The bounding rectangle of both / their intersection (or `null`) |
| `Rectangle.fromElement(element, parent?, considerTranslate?)` | The rectangle of an element |

### Distance functions

| Function | Returns |
| --- | --- |
| `getDistance(p1, p2)` | Euclidean distance |
| `getXDifference(p1, p2)` / `getYDifference(p1, p2)` | Distance along one axis |
| `transformedSpaceDistanceFactory({ x, y })` | A distance function that weights the axes, e.g. `{ x: 1, y: 4 }` for wide items |
| `indexOfNearestPoint(points, point, radius, getDistance?)` | Index of the nearest point within `radius`, or `-1` |

---

## Events

`Draggable`, `List`, `BubblingList`, `Tray` and `Scope` are standard [`EventTarget`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget)s. A listener receives an event that carries its data as properties, so it can be destructured: `({ draggable }) => {}`. The data is also in `event.detail`. Cancel a cancelable event with `event.cancel()` (or `event.preventDefault()`), called on the event itself.

| Method | Description |
| --- | --- |
| `on(name, fn, options?)` | Add a listener; returns a function that removes it |
| `off(name, fn)` | Remove a listener (`unsubscribe` is an alias) |
| `once(name, fn)` | Add a listener for the next event only |

`addEventListener` works as well, and so do its options, for example removing several listeners at once with an `AbortController`:

```javascript
const controller = new AbortController()
draggable.on('drag:move', onMove, { signal: controller.signal })
controller.abort()
```

The `on` option of every constructor adds listeners too: `new Draggable(el, { on: { 'drag:end': fn } })`.

---

## CSS Classes

| Class | Set when |
| --- | --- |
| `dragee-active` | The element is being dragged |
| `dragee-disable` | `enable` is `false` |
| `dragee-placeholder` | The original element during a native (or emulated) drag |
| `dragee-native-emulation` | The moving copy during touch emulation |

---

## Migrating from 1.x

- **Browsers:** Chrome / Edge 90+, Firefox 86+, Safari 15+.
- **Listeners get an event:** `tray.on('tray:add', ({ draggable }) => {})` instead of `target.on('target:add', (draggable) => {})`.
- **`Target` is now `Tray`**, also in `draggable.trays`, `scope.trays`, `scope.addTray()` and the `tray:*` / `dragee:tray-*` events.
- **Options objects:** `pinPosition(point, { duration: 200 })`, `move(point, { silent: true })` and `tray.add(draggable, { duration: 200 })` instead of positional arguments.
- **`timeExcange` is now `timeExchange`.** The old name is ignored.
- **`dragEndAction` is gone.** To place a dropped draggable yourself, cancel `drag:release`.
- **Removed:** `prependOn`, `resetOn`, `resetEmitter`, `interrupt`, `Draggable.emitter` and `Target.emitter`. Create instances inside `scope()` or pass the `scope` option.
- **Listeners work like `addEventListener`:** the same function added twice is called once, and an error in one listener doesn't stop the others.
- **A draggable refused by a tray** goes back to its initial position.
- **Form fields inside a draggable** (`input`, `textarea`, `select`, `contenteditable`) no longer start a drag.
- **Errors are `Error` objects** (`RangeError` for `positions` of the wrong length) instead of strings.
- **Import from `dragee` only:** deep imports such as `dragee/src/…` or `dragee/dist/…` fail.

---

## License

ISC
