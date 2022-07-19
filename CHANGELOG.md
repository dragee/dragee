## [Unreleased]

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
### Remove
- Remove IE9 support

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