import {
  Component, Input, OnInit, ViewEncapsulation
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as _ from 'lodash';
import 'rxjs/add/operator/switchMap';

import { Venue } from '../shared/venue.model';
import { CalendarEvent } from '../shared/calendar-event.model';
import { STATUSES } from '../shared/statuses.array';
import { LoaderService } from '../providers/loader.service';
import { EventsService } from '../providers/events.service';
import { GroupModalComponent } from './groupped-event-list/group-modal/group-modal.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CalendarComponent implements OnInit {

  public viewDate: Date = new Date();
  public statuses = STATUSES;
  public eventsGroupped = false;
  private selectedEvents: Number[];

  public events: CalendarEvent[] = [];
  public venues: Venue[] = [];
  public loaded = false;
  public mouseClickGroupEvent = {};

  constructor(private http: HttpClient, private dialog: MatDialog, private loader: LoaderService, private checkedEvents: EventsService) { }

  ngOnInit() {
    this.getData();
    this.loader.loadingSubject.subscribe(resp => {
      this.loaded = resp;
    });
    this.checkedEvents.eventsSubject.subscribe(selectedEvents => {
      this.selectedEvents = [...selectedEvents];
    });
  }

  getData(): void {
    this.loader.loadingSubject.next(true);
    this.http.get('venue').switchMap(data => {
      // Read the result field from the JSON response.
      this.venues = _.map(_.values(data['venues']), venue => {
        const modifiedVenue = new Venue();
        modifiedVenue.events = [];
        modifiedVenue.color = venue['field_color'] &&
                  venue['field_color']['und'] &&
                  venue['field_color']['und'][0] &&
                  venue['field_color']['und'][0]['value'] ? venue['field_color']['und'][0]['value'] : '';
        modifiedVenue.id = venue['tid'];
        modifiedVenue.title = venue['name'];
        modifiedVenue.isPrimary = venue['field_calendar_primary'] &&
                  venue['field_calendar_primary']['und'] &&
                  venue['field_calendar_primary']['und'][0] &&
                  venue['field_calendar_primary']['und'][0]['value'] === '1';
        return modifiedVenue;
      });
      return this.http.get(`month/${this.viewDate.getUTCDate()}/${this.viewDate.getUTCMonth() + 1}/${this.viewDate.getUTCFullYear()}`);
    }).subscribe(data => {
      // Read the result field from the JSON response.
      const sortedByDateEvents = _.groupBy(_.values(data), event => {
        const date = new Date(event['field_date']['und'][0]['value']);
        return `${date.getFullYear()} ${date.getDate()}`;
      });
      this.events = _.map(_.values(data), event => {
        const modifiedEvent = new CalendarEvent();
        modifiedEvent.id = event['product_id'];
        modifiedEvent.title = event['title'];
        modifiedEvent.promoter = event['field_company'] &&
                    event['field_company']['und'] &&
                    event['field_company']['und'][0]['tid'];
        modifiedEvent.duration = event['field_duration'] &&
                    event['field_duration']['und'] &&
                    event['field_duration']['und'][0] &&
                    event['field_duration']['und'][0]['value'] ? event['field_duration']['und'][0]['value'] : '00:00';
        modifiedEvent.ticketStatus = event['field_ticket_hold_status'] &&
                    event['field_ticket_hold_status']['und'] &&
                    event['field_ticket_hold_status']['und'][0] &&
                    event['field_ticket_hold_status']['und'][0]['value'] ? parseInt(event['field_ticket_hold_status']['und'][0]['value'], 10) : 1;
        modifiedEvent.start = event['field_date'] &&
                    event['field_date']['und'] &&
                    event['field_date']['und'][0] &&
                    event['field_date']['und'][0]['value'] ? new Date(event['field_date']['und'][0]['value']) : null;
        modifiedEvent.venue = new Venue();
        modifiedEvent.isDaytime = event['field_day_night'] &&
                    event['field_day_night']['und'] &&
                    event['field_day_night']['und'][0] &&
                    event['field_day_night']['und'][0]['value'] === '1';
        modifiedEvent.venue.id = event['field_venue'] &&
                    event['field_venue']['und'] &&
                    event['field_venue']['und'][0] &&
                    event['field_venue']['und'][0]['tid'] ? event['field_venue']['und'][0]['tid'] : -1;
        modifiedEvent.isTicketOffline = this.getValue(event, 'field_ticket_offline_online', 0) === '1' ? true : false;
        const expirationDateTemp = this.getValue(event, 'field_expiration_date', null);
        modifiedEvent.expirationDate = _.isNull(expirationDateTemp) ? null : new Date(expirationDateTemp.toString());
        modifiedEvent.liveDate = this.getValue(event, 'field_live_date_auto', null);
        modifiedEvent.price = this.getValue(event, 'commerce_price', 0, 'amount');
        modifiedEvent.doorPrice = this.getValue(event, 'field_door_price', 0);
        modifiedEvent.willCallEmailRecipient = this.getValue(event, 'field_promoter_email', '', 'email');
        modifiedEvent.numberOfTicketsForSale = this.getValue(event, 'commerce_stock', 0);
        modifiedEvent.moneyOwed = this.getValue(event, 'field_band_financials', '');
        modifiedEvent.specialPricing = this.getValue(event, 'field_special_pricing', '', 'tid');
        modifiedEvent.ticketOrListing = this.getValue(event, 'field_ticket_status', 0) === '1' ? true : false;
        modifiedEvent.description = this.getValue(event, 'field_description', '');
        modifiedEvent.mediaCode = this.getValue(event, 'field_media_embed_code', '');
        modifiedEvent.mediaLink = this.getValue(event, 'field_media_link_oembed', '', 'url');
        modifiedEvent.externalLinkDescription = this.getValue(event, 'field_link_description', '', 'url');
        modifiedEvent.fbEventLink = this.getValue(event, 'field_facebook_event_link', '', 'url');
        modifiedEvent.techNotes = this.getValue(event, 'field_tech_rider', '');
        modifiedEvent.genreType = this.getValue(event, 'field_type', '', 'tid');
        modifiedEvent.priority = this.getHoldOrder(event, sortedByDateEvents, modifiedEvent.start, modifiedEvent.venue.id);
        modifiedEvent.festival = this.getValue(event, 'field_special_event_taxonomy', '', 'tid');
        modifiedEvent.techArrival = this.getValue(event, 'field_tech_arrival', '');
        modifiedEvent.rider = this.getValue(event, 'field_booking_documents', '', 'filename');
        modifiedEvent.poster = event['posterURL'];
        modifiedEvent.supportingPerformers = event['field_supporting_performers'] &&
          event['field_supporting_performers']['und'] || [];
        return modifiedEvent;
      });
    },
    err => {
        this.loader.loadingSubject.next(false);
    },
    () => {
        this.loader.loadingSubject.next(false);
    });
  }

  private getHoldOrder(event, events, start, venueId): number {
    const priority = this.getValue(event, 'field_hold_order', -1);
    if (priority !== -1) {
      return priority;
    }
    let todaysEvents = events[`${start.getFullYear()} ${start.getDate()}`];
    todaysEvents = _.filter(todaysEvents, todaysEvent => {
      const todaysEventVenueID = this.getValue(todaysEvent, 'field_venue', -1, 'tid');
      return venueId === todaysEventVenueID;
    });
    todaysEvents = _.orderBy(todaysEvents, ['field_hold_order']['created'], ['asc', 'asc']);
    return _.findIndex(todaysEvents, sortedEvent => {
      return sortedEvent['product_id'] === event['product_id'];
    }) + 1;
  }

  private getValue(event, fieldName, defaultValue, valueName = 'value') {
    return event[fieldName] &&
      event[fieldName]['und'] &&
      event[fieldName]['und'][0] &&
      event[fieldName]['und'][0][valueName] || defaultValue;
  }

  showPreviousDate(): void {
    const date = new Date(this.viewDate);
    date.setMonth(date.getMonth() - 1);
    this.viewDate = new Date(date);
    this.getData();
  }

  showNextDate(): void {
    const date = new Date(this.viewDate);
    date.setMonth(date.getMonth() + 1);
    this.viewDate = new Date(date);
    this.getData();
  }

  eventTimesChanged(event): void {
    this.getData();
  }

  changeStatus(status: string): void {
    const index = this.statuses.indexOf(status.toUpperCase());
    this.loader.loadingSubject.next(true);
    this.http.post('update-events-multiple', {'events': this.selectedEvents, 'status': index}).subscribe(
      resp => {
        console.log(resp);
        this.checkedEvents.eventsSubject.next([]);
        this.getData();
      },
      err => {
        this.loader.loadingSubject.next(false);
      }
    );
  }

  createNewGroup(): void {
    const dialogRef = this.dialog.open(GroupModalComponent, {
      height: '200px',
      width: '400px',
    });
    dialogRef.afterClosed().subscribe(result => {
      if (!result) {
        return null;
      }
      this.http.post(`${location.origin}/en/egroup/create`, {'title': result, 'status': 1}).subscribe(
        resp => {
          console.log(resp);
        }
      );
    });

  }
}
