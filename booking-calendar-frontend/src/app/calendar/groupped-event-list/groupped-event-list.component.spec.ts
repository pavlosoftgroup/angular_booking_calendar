import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrouppedEventListComponent } from './groupped-event-list.component';

describe('GrouppedEventListComponent', () => {
  let component: GrouppedEventListComponent;
  let fixture: ComponentFixture<GrouppedEventListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrouppedEventListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrouppedEventListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
