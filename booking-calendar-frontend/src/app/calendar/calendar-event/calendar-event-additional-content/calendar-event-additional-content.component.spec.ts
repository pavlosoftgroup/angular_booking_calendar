import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarEventAdditionalContentComponent } from './calendar-event-additional-content.component';

describe('CalendarEventAdditionalContentComponent', () => {
  let component: CalendarEventAdditionalContentComponent;
  let fixture: ComponentFixture<CalendarEventAdditionalContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarEventAdditionalContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarEventAdditionalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
