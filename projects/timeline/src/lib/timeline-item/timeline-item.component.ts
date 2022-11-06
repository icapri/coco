import { Component, ElementRef, Input } from '@angular/core';

/**
 * Defines a component for the timeline items.
 */
@Component({
  selector: 'coco-timeline-item',
  templateUrl: './timeline-item.component.html',
  styleUrls: ['./timeline-item.component.scss'],
})
export class CocoTimelineItem {
  /**
   * Sets the color of the timeline items connector. Default: `rgb(200,200,200)`.
   */
  @Input() set connectorColor(connectorColor: string) {
    this._connectorColor = connectorColor;
  }

  /**
   * Gets the color of the timeline items connector. Default: `rgb(200,200,200)`.
   */
  get connectorColor(): string {
    return this._connectorColor;
  }

  /**
   * Sets the length of the timeline items connector. Default: `80px`.
   */
  @Input() set connectorLength(connectorLength: string) {
    this._connectorLength = connectorLength;
  }

  /**
   * Gets the length of the timeline items connector. Default: `80px`.
   */
  get connectorLength(): string {
    return this._connectorLength;
  }

  /**
   * Sets the thickness of the timeline items connector. Default: `2px`.
   */
  @Input() set connectorThickness(connectorThickness: string) {
    this._connectorThickness = connectorThickness;
  }

  /**
   * Gets the thickness of the timeline items connector. Default: `2px`.
   */
  get connectorThickness(): string {
    return this._connectorThickness;
  }

  /**
   * Sets the color of the timeline item dot (circle). Default: `rgb(200,200,200)`.
   */
  @Input() set dotColor(dotColor: string) {
    this._dotColor = dotColor;
  }

  /**
   * Gets the color of the timeline item dot (circle). Default: `rgb(200,200,200)`.
   */
  get dotColor(): string {
    return this._dotColor;
  }

  /**
   * Sets the radius of the timeline item dot (circle). Default: `3px`.
   */
  @Input() set dotRadius(dotRadius: string) {
    this._dotRadius = dotRadius;
  }

  /**
   * Gets the radius of the timeline item dot (circle). Default: `3px`.
   */
  get dotRadius(): string {
    return this._dotRadius;
  }

  /**
   * Gets whether the orientation of the timeline is horizontal.
   */
  public get isHorizontal(): boolean {
    return this.timeline?.classList.contains('coco-timeline-horizontal') || false;
  }

  /**
   * Gets the parent `coco-timeline` element.
   */
  private get timeline(): HTMLElement | null {
    return this.elementRef.nativeElement.parentElement;
  }

  /**
   * Contains the color of the timeline items connector. Default: `rgb(200,200,200)`.
   */
  private _connectorColor: string = 'rgb(200,200,200)';

  /**
   * Contains the length of the timeline items connector. Default: `80px`.
   */
  private _connectorLength: string = '80px';

  /**
   * Contains the thickness of the timeline items connector. Default: `2px`.
   */
  private _connectorThickness: string = '2px';

  /**
   * Contains the color of the timeline item dot (circle). Default: `rgb(200,200,200)`.
   */
  private _dotColor: string = 'rgb(200,200,200)';

  /**
   * Contains the radius of the timeline item dot (circle). Default: `3px`.
   */
  private _dotRadius: string = '3px';

  /**
   * Initializes a new instance of the class.
   *
   * @param elementRef Contains a reference to the host HTML element.
   */
  constructor(private elementRef: ElementRef<HTMLElement>) {
  }
}
