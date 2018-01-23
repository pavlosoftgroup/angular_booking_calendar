import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  SimpleChanges,
  ViewEncapsulation
} from '@angular/core';

import { CalendarEvent } from 'calendar-utils';
import * as _ from 'lodash';
import { STATUSES } from '../../shared/statuses.array';
import { EventsService } from '../../providers/events.service';

@Component({
  selector: 'app-calendar-event',
  templateUrl: './calendar-event.component.html',
  styleUrls: ['./calendar-event.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CalendarEventComponent implements OnInit {
  // @Output() eventClicked = new EventEmitter<CalendarEvent>();

  @Input() event: CalendarEvent;
  @Input() eventsGroupped: boolean;
  @Output() eventClicked = new EventEmitter<CalendarEvent>();
  private selectedEvents: Number[];
  private status = STATUSES;
  public isChecked = false;

  constructor(private checkedEvents: EventsService) {
    this.checkedEvents.eventsSubject.subscribe(selectedEvents => {
      this.selectedEvents = selectedEvents;
      this.isChecked = _.find(selectedEvents, eventId => {
        return this.event['id'] === eventId;
      });
    });
  }

  ngOnInit() {
    this.event.cssClass = this.status[this.event['ticketStatus']].toLowerCase() + '-event';
  }

  eventClick(ev) {
    ev.preventDefault();
    ev.stopPropagation();
    if (ev.ctrlKey || ev.metaKey || ev.button === 1) {
      if (this.isChecked) {
        this.selectedEvents = _.pull(this.selectedEvents, this.event['id']);
      } else {
        this.selectedEvents.push(this.event['id']);
      }
      this.isChecked = !this.isChecked;
      this.checkedEvents.eventsSubject.next(this.selectedEvents);
    } else {
      this.eventClicked.emit();
    }
  }
}
