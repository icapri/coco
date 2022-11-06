import {Component, Input, ViewEncapsulation} from '@angular/core';
import { CocoOrientation } from './timeline.types';

/**
 * Defines a component for the timeline element.
 */
@Component({
  selector: 'coco-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CocoTimeline {
  /**
   * Sets the orientation of the timeline.
   */
  @Input() set orientation(orientation: CocoOrientation) {
    this._orientation = orientation;
  }

  /**
   * Gets the orientation of the timeline.
   */
  get orientation(): CocoOrientation {
    return this._orientation;
  }

  /**
   * Contains the orientation of the timeline. Default: `'vertical'`.
   */
  private _orientation: CocoOrientation = 'vertical';
}
