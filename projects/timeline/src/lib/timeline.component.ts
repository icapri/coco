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
   * Sets the width of the timeline item connector. Default: `2px`.
   */
  @Input() set connectorWidth(connectorWidth: string) {
    this._connectorWidth = connectorWidth;
  }

  /**
   * Gets the width of the timeline item connector. Default: `2px`.
   */
  get connectorWidth(): string {
    return this._connectorWidth;
  }

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
   * Contains the width of the timeline item connector. Default: `2px`.
   */
  private _connectorWidth: string = '2px';

  /**
   * Contains the orientation of the timeline. Default: `'vertical'`.
   */
  private _orientation: CocoOrientation = 'vertical';
}
