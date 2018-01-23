import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  LOCALE_ID,
  Inject,
  ViewEncapsulation,
  OnChanges,
  OnDestroy,
  ChangeDetectorRef
} from '@angular/core';

import {
  WeekDay,
  CalendarEvent,
  MonthView,
  MonthViewDay,
  validateEvents
} from 'calendar-utils';

import * as _ from 'lodash';

import { CalendarEventTimesChangedEvent } from 'angular-calendar';
import { CalendarUtils } from 'angular-calendar';
import { Venue } from '../../shared/venue.model';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import { CalendarEventContentComponent } from '../calendar-event/calendar-event-content/calendar-event-content.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-calendar-month-view',
  templateUrl: './calendar-month-view.component.html',
  styleUrls: ['./calendar-month-view.component.css'],
  encapsulation: ViewEncapsulation.None
})

// WARNING: Whole code was copied from angular-calendar module (https://mattlewis92.github.io/angular-calendar/#/kitchen-sink)
// and modified it, by modify events and add some custom event on every day

export class CalendarMonthViewComponent implements OnInit, OnDestroy, OnChanges {

  @Input() viewDate: Date;
  @Input() venues: Venue[] = [];
  @Input() events: CalendarEvent[] = [];
  @Input() weekStartsOn: number;
  @Input() excludeDays: number[] = [];
  @Input() weekendDays: number[];
  @Input() eventsGroupped: boolean;
  @Output() eventTimesChanged = new EventEmitter<CalendarEventTimesChangedEvent>();
  @Input() refresh: Subject<any>;
  private refreshSubscription: Subscription;
  @Output()
  beforeViewRender: EventEmitter<{
    header: WeekDay[];
    body: MonthViewDay[];
  }> = new EventEmitter();
  columnHeaders: WeekDay[];
  view: MonthView;

  constructor(private utils: CalendarUtils, private dialog: MatDialog, private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    // subscribe on refresh subject, so, if we will update month or view -> we will update whole calendar
    if (this.refresh) {
      this.refreshSubscription = this.refresh.subscribe(() => {
        this.refreshAll();
        this.cdr.markForCheck();
      });
    }
  }

  ngOnChanges(changes: any): void {
    if (changes.viewDate || changes.excludeDays || changes.weekendDays) {
      this.refreshHeader();
    }

    if (changes.events) {
      validateEvents(this.events, log => {
      });
    }
    if (
      changes.viewDate ||
      changes.events ||
      changes.excludeDays ||
      changes.weekendDays
    ) {
      this.refreshBody();
    }
  }

  ngOnDestroy(): void {
    // when leave month view - unsubscribe from all subscribes
    if (this.refreshSubscription) {
      this.refreshSubscription.unsubscribe();
    }
  }

  private refreshBody(): void {
    this.view = this.utils.getMonthView({
      events: this.events,
      viewDate: this.viewDate,
      weekStartsOn: this.weekStartsOn,
      excluded: this.excludeDays,
      weekendDays: this.weekendDays
    });
    this.emitBeforeViewRender();
  }

  private refreshHeader(): void {
    this.columnHeaders = this.utils.getWeekViewHeader({
      viewDate: this.viewDate,
      weekStartsOn: this.weekStartsOn,
      excluded: this.excludeDays,
      weekendDays: this.weekendDays
    });
    this.emitBeforeViewRender();
  }

  getTodayVenues(dayEvents): Venue[] {
    const venues = [...this.venues];
    const todaysVenues = _.filter(venues, venue => {
      return venue.isPrimary || _.find(dayEvents, event => {
        return event['venue'].id === venue.id;
      });
    });
    return todaysVenues;
  }

  addNewEvent(event, venue: Venue, date: Date) {
    const dialogRef = this.dialog.open(CalendarEventContentComponent, {
      width: '80%',
      height: '80%',
      data: { startDate: date, endDate: date, venueId: venue.id, event: {} }
    });
    // When dialog closed - update month view
    dialogRef.afterClosed().subscribe(result => {
      // this.refreshBody();
      this.eventTimesChanged.emit();
    });
  }

  private refreshAll(): void {
    this.view = null;
    this.refreshHeader();
    this.refreshBody();
  }

  private emitBeforeViewRender(): void {
    if (this.view) {
      this.beforeViewRender.emit({
        header: this.columnHeaders,
        body: this.view.days
      });
    }
  }

  onEventClick(ev, event: CalendarEvent) {
    const dialogRef = this.dialog.open(CalendarEventContentComponent, {
      width: '80%',
      height: '80%',
      data: { startDate: event.start, duration: event['duration'], venueId: event['venue'].id, event }
    });

    dialogRef.afterClosed().subscribe(result => {
      // this.refreshBody();
      this.eventTimesChanged.emit();
    });
  }
}
