import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarEventContentComponent } from './calendar-event-content.component';

describe('CalendarEventContentComponent', () => {
  let component: CalendarEventContentComponent;
  let fixture: ComponentFixture<CalendarEventContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarEventContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarEventContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
