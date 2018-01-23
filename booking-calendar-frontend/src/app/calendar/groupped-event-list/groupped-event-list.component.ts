import { Component,
  OnInit,
  Input,
  Output,
  HostBinding,
  SimpleChanges,
  OnChanges,
  EventEmitter,
  ViewEncapsulation
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as _ from 'lodash';
import { LoaderService } from '../../providers/loader.service';
import { EventsService } from '../../providers/events.service';
import { CalendarEvent } from '../../shared/calendar-event.model';

@Component({
  selector: 'app-groupped-event-list',
  templateUrl: './groupped-event-list.component.html',
  styleUrls: ['./groupped-event-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class GrouppedEventListComponent implements OnInit, OnChanges {
  @Input() event;
  public groups = [];
  private events: CalendarEvent[];
  constructor(private http: HttpClient, private loader: LoaderService, private eventService: EventsService) {
  }

  ngOnInit() {
    this.getGroups();
    this.eventService.eventsSubject.subscribe( events => {
      this.events = events;
    });
  }

  getGroups() {
    this.http.get('egroup/groups-list').subscribe(
      resp => {
        this.groups = _.values(resp['data']);
        this.groups.push({ title: 'All Events', gid: 0 });
      }
    );
  }

  ngOnChanges(changes: SimpleChanges) {

  }

  showEventsByGroup(gid): void {
    if (gid === 0) {
      this.eventService.eventsSubject.next([]);
      return null;
    }
    this.loader.loadingSubject.next(true);
    this.http.get(`${location.origin}/en/egroup/event-list/${gid}`).subscribe(
      resp => {
        this.loader.loadingSubject.next(false);
        this.eventService.eventsSubject.next(resp['events']);
      }
    );
  }

  editGroup(gid: string): void {
    this.loader.loadingSubject.next(true);
    this.http.post(`${location.origin}/en/egroup/add-events`, { 'events': this.events, 'gid': gid }).subscribe(
      resp => {
        this.loader.loadingSubject.next(false);
        this.eventService.eventsSubject.next(this.events);
      }
    );
  }

  removeGroup(gid: string): void {
    this.loader.loadingSubject.next(true);
    this.http.post(`${location.origin}/en/egroup/delete-group`, { 'gid': gid }).subscribe(
      resp => {
        this.loader.loadingSubject.next(false);
        this.eventService.eventsSubject.next([]);
        this.getGroups();
      }
    );
  }

}
