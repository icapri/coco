## Timeline Angular

## API
* Class: `CocoTimeline`

### Inputs
* `orientation` The orientation of the timeline. Default: `vertical`.

* Class: `CocoTimelineItem`
### Inputs
* `connectorColor` The color of the timeline items connector. Default: `rgb(200,200,200)`.
* `connectorLength` The length of the timeline items connector. Default: `80px`.
* `connectorThickness` The thickness of the timeline items connector. Default: `2px`.
* `dotColor` The color of the timeline item dot (circle). Default: `rgb(200,200,200)`.
* `dotRadius` The radius of the timeline item dot (circle). Default: `3px`.


## Usage

Simple Usage Example:
```html
<coco-timeline orientation="vertical">
  <coco-timeline-item>Ohio</coco-timeline-item>
  <coco-timeline-item>New York</coco-timeline-item>
  <coco-timeline-item>Dallas</coco-timeline-item>
  <coco-timeline-item>Mississipi</coco-timeline-item>
  <coco-timeline-item>Jew Jersey</coco-timeline-item>
  <coco-timeline-item>California</coco-timeline-item>
</coco-timeline>
```