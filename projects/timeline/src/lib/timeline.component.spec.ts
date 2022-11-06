import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocoTimeline } from './timeline.component';

describe('CocoTimeline', () => {
  let component: CocoTimeline;
  let fixture: ComponentFixture<CocoTimeline>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CocoTimeline ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CocoTimeline);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
