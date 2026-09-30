## [Unreleased]

### Breaking
- all instances (`Draggable`, `List`, `BubblingList`, `Tray`, `Scope`) are standard `EventTarget`s. Listeners receive an event that carries the payload as its own properties (also in `event.detail`) instead of positional arguments:
  - `drag:start` / `drag:move` / `drag:end`: `{ draggable }`
  - `list:change` / `list:reordered`: `{ list, draggable }`
  - `tray:beforeAdd` / `tray:add` / `tray:remove`: `{ tray, draggable }`
  - `scope:change`: `{ scope, draggable }`
- listener semantics follow `EventTarget`: the same function added twice is registered once, and an exception in one listener no longer stops the others
- rename `Target` to `Tray`, together with `draggable.trays`, `scope.trays` / `scope.addTray()`, the `tray:*` / `dragee:tray-*` events and the `{ tray, draggable }` event data
- requires Chrome / Edge 90+, Firefox 86+, Safari 15+ (`EventTarget` subclassing and the `signal` listener option)
- `move()` and `pinPosition()` take an options object `{ duration, silent }` instead of positional `time` / `silent` arguments
- `package.json` declares `exports`: only `dragee` (and `dragee/package.json`) can be imported, deep imports such as `dragee/src/…` or `dragee/dist/…` fail. The npm package ships only the built bundles, README and CHANGELOG
- errors are thrown as `Error` objects instead of strings: `Error` for a second `Draggable` on the same element, `RangeError` for `positions` of the wrong length on `List` / `Scope`
- rename the `timeExcange` option to `timeExchange` (`List`, `BubblingList`, `Tray`); the old name is ignored
- remove `prependOn()`, `resetOn()`, `resetEmitter()`, `interrupt()`, `Draggable.emitter` and `Target.emitter`. `scope()` tracks new instances itself and can be nested
- `drag:start` fires before the drag listeners are attached, so calling `cancelDragging()` or `destroy()` from a `drag:start` listener no longer stops the drag; call `event.cancel()` instead
- a drop refused by a tray returns the draggable to its initial position (previously it stayed where it was dropped)
- replace the overridable `dragEndAction()` with the cancelable `drag:release` event; `List` and `Scope` place their draggables through it. `scope:change` is emitted only for draggables that belong to trays

### Added
- `on()` returns a function that removes the listener; add `off()` and `once()`. Standard listener options such as `{ signal }` are supported. `unsubscribe()` is an alias for `off()`
- cancelable events: `event.cancel()` on `drag:start` cancels the drag; on `drag:release` it skips the default placement; on `tray:beforeAdd` it refuses the draggable
- `event.cancel()` / `event.canceled` on dragee events as clearer names for `preventDefault()` / `defaultPrevented` (both keep working); `emit()` returns the dispatched event
- bubbling DOM events (disable with the `domEvents: false` option), with the same event data as the instance events:
  - `Draggable`: `dragee:start` / `dragee:move` / `dragee:release` / `dragee:end` from its element
  - `List` / `BubblingList`: `dragee:list-change` / `dragee:list-reordered` from the dragged item's element
  - `Tray`: `dragee:tray-before-add` / `dragee:tray-add` / `dragee:tray-remove` from the tray element
- horizontal mode for `BubblingList` via the `axis: 'x'` option (default `'y'`)
- the `gap` option for `BubblingList`; `verticalGap` is an alias for it. An explicit `0` gap is now respected instead of triggering auto-detection
- the `scope` option for `Draggable` and `Tray` to join a given scope, e.g. for instances created after `scope()` has returned
- `Tray.accept(draggable)` lets a draggable be dropped into a tray without placing it there, e.g. for draggables created after the tray
- `Draggable.remeasure()` re-reads the element's place in the layout; a draggable at its initial position moves to the new one, others keep their position

### Fixed
- a drag started on an `<input>` inside a draggable focused it right away (on touch devices this opened the on-screen keyboard). Form fields now get focus from the browser as usual; the explicit `focus()` call was left over from when `mousedown` was prevented
- `Scope.addDraggable()` / `addTarget()` left the instance in its previous scope as well (e.g. `defaultScope`)
- `List.remove()` wiped user `drag:move` / `drag:end` listeners and left the `BubblingList` `drag:start` listener attached
- `Target` kept a single `drag:move` handler for all its draggables, so removing one draggable could unsubscribe another listener. A target now watches each of its draggables, including ones added with `add()`, until `destroy()`, and keeps its own copy of the `draggables` array, so `add()` doesn't leak a draggable into other targets sharing that array
- a draggable released from a `List` or `Scope` was still handled by it on drop
- a draggable outside lists and targets did not update its `pinnedPosition` on drop
- targets created inside `scope()` were added to the default scope too
- `Draggable.destroy()` did not remove the draggable from its scope (this also leaked the clone used for touch drag emulation)
- `Tray` (`Target` in 1.x) did not react to layout changes such as window resize: its draggables kept stale offsets and positions. It now re-measures them and lays them out again
- `Tray.add()` crashed with `NotCrossingStrategy` (the index of the new draggable was passed as a number instead of an array)
- `reorderOnChange` did nothing unless the list had the `container` option; it now reorders the elements within their parent. Without it, a later resize (e.g. expanding an item) reset the items to their old DOM order
- `BubblingList.remove()` detected the gap and start position after removal (measured across the hole, so remaining items were not reflowed)
- swapped `leftDirection` / `rightDirection` flags in `Draggable` (moving right used to set `leftDirection`)

## 1.3.1
- add `dragStartThreshold` option for `Draggable`. It can be helpful to prevent accidental drags when the user just wants to click — drag activates only after the pointer travels this distance
- fix `Point.toString()` missing closing brace
- fix missing `return` in `Target.getSortedDraggables()` and in `Draggable.isConsiderTransformOffset` getter

## 1.3.0
- we have added the `considerTransformOffset` option to define whether we should consider `transform: translate` offset when computing `offset`. This is a breaking change; previously, we took it into account, but now `considerTransformOffset` is false by default.
- removed List and BubblingList factories
- changed the default bounding for Draggable. From now on, it should not restrict movements inside the parent container by default. If you want to implement this, please use the `BoundToElement` helper.

## 1.2.2
- add the `scrollRootContainer` option to define which parents we should listen for scrolling

## 1.2.1
- remove `nativeDragStartDelay` option and add `swappingDisabled` instead
- add the `dragee-native-emulation` class to the element that emulates native drag&drop behaviour on mobile devices

## 1.2.0
- add `nativeDragStartDelay` option. It can be helpful when draggable elements change their sizes or position when we start dragging
- minor transition property fix
- get rid of dependencies as we no longer need them due to the fact of better browser compatibility

## 1.1.12
- improve `nativeDragAndDrop` mode, prevents from dragging when nested elements start dragging

## 1.1.11
- remove `rollup-plugin-terser` from dependencies

## 1.1.10
- rename `stopPropagationOnStart` option to `stopPropagationOnStartDrag`
- always stop propagation on native drag start event to prevent parent sortable from receiving it

## 1.1.9
- Add `stopPropagationOnStart` option for `draggable`. It can be useful when we have nested draggables

## 1.1.8
- Improve draggable positioning while scrolling all parents

## 1.1.7
- Improve `elementSize` calculation, remove `isContentBoxSize` option

## 1.1.6
- We do not need to call `bubbling` after removing all `draggables`

## 1.1.5
- Auto detect `verticalGap` and `startPosition` on remove draggable, as it can be called before the first `dragstart`

## 1.1.4
- Improve `verticalGap` option definition

## 1.1.3
- Made `verticalGap` configurable. Automatically we try to autodetect it on the first `dragstart`
- Fix infinite loop while dragging by bubbling only in the dragging direction
- Fix determining direction when the `nativeDragAndDrop` option is turned on, and while emulating it on mobiles, and while scrolling.

## 1.1.2
- Decrease default `dragOverThrottleDuration` to 10ms

## 1.1.1
- Throttle `dragover` handler. Make duration configurable with `dragOverThrottleDuration` option.

## 1.1.0
- Improve `BubblingList` performance by using smarter bubbling algorithm. We now sort only dragging draggable and its siblings with recursion.
- Removed `emulateNativeDragAndDropOnAllDevices` option

## 1.0.26
- Fix `verticalGap` detection

## 1.0.25
- Improve `BubblingList` detection of `startPosition` and `verticalGap`. Do it only once.

## 1.0.24
- Improve how draggable works with transition property

## 1.0.23
- Improve list autorefresh draggable positioning when the container changes its size for `BubblingList`. We should call `autoDetectVerticalGap` too, as resize can be called during dragging.

## 1.0.22
- Improve list autorefresh draggable positioning when the container changes its size. It can be useful when some block inside(not draggable) was removed.

## 1.0.21
- Fix bug: `BubblingList` should emit `list:change` event when we use `emulateNativeDragAndDrop` on mobiles

## 1.0.20
- Add possibility to customize `copyStyles` whe we use `emulateNativeDragAndDrop`

## 1.0.19
- Fix bug: `BubblingList` should auto detect `startPosition` before bubbling on remove `draggable`

## 1.0.18
- Fix bug: `BubblingList` dragging when `nativeDragAndDrop` on mobile devices

## 1.0.17
- By default on touch devices we should not emulate native drag&drop
- `touchDraggingThreshold` from now equal to zero

## 1.0.16
- Add the `touchDraggingThreshold` option that defines threshold between scrolling and dragging

## 1.0.15
- Performance improvements

## 1.0.14
- Fix `bubblingList` remove function

## 1.0.13
- Improve `reorderElements` performance

## 1.0.12
- Remove `event.preventDefault` and `event.stopPropagation` from dragend if element was not moved

## 1.0.11
- Remove `event.preventDefault` from drag start

## 1.0.10
- Remove `event.stopPropagation` from drag start

## 1.0.9
- Improve(fix) adding and removing items of `bubblingList`

## 1.0.8
- Move `reorderOnChange` from `factory` to `List` class
- Improve emulation of native `drag & drop` functionality. Does not emulate on Desktop Safari

## 1.0.7
- Remove `addClass` and `removeClass` utils
- Support `reorderOnChange` for `BubblingList.factory`
- Refresh `List` when draggable element change it size

## 1.0.6
- 'Draggable' should not fire `drag:move` event on dragStart

## 1.0.5
- Improved EventEmiter. Remove `context` property. From now we should use arrow functions instead of `context`

## 1.0.4
- Improved initial catch of Draggable by Target

## 1.0.3

## 1.0.2
- Move Chart, Spider, and ArcSlider to separate repo

## 1.0.1
- Improve docs and specs
- Rename parent to container

## 1.0.0
### Removed
- Removed IE9 support

### Added
- shouldRemoveZeroTranslate option for draggable
- cover with basic specs

## 0.9.6
- Improve Bubbling List sorting on scroll.
- Update docs

## 0.9.5
- Take window scrolling into account
- Implement basic BubblingList. Now it works only vertically. It's helps us to sort draggables of different sizes
- Simplify bounding conception

## 0.9.4
- Add build to umd format(for jest)

## 0.9.3
- Fix Rectangle import/export
- Improve docs
- Improve the sorting of draggables in the list. Make it customizable. It also fixes `Vue` issue, when we add draggable in the middle of the list

## 0.9.2
- Fix handler + native drag&drop issue

## 0.9.1
- Fix html5 drag and drop issues
- Emulate html5 drag and drop on desktop safari
- Add the possibility to emulate native drag and drop on all devices

## 0.9.0
All functionality was reviewed and all files were refactored to 'modern' javascript