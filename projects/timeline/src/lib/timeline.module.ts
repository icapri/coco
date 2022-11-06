import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CocoTimelineItem } from './timeline-item/timeline-item.component';
import { CocoTimeline } from './timeline.component';

@NgModule({
  declarations: [
    CocoTimeline,
    CocoTimelineItem,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CocoTimeline,
    CocoTimelineItem,
  ]
})
export class CocoTimelineModule { }
