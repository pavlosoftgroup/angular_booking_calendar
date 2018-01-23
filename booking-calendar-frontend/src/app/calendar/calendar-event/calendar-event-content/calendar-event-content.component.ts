import {Component, HostBinding, HostListener, OnInit, TemplateRef, ViewChild, ViewEncapsulation, Inject} from '@angular/core';
import { ESCAPE } from '@angular/cdk/keycodes';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { STATUSES } from '../../../shared/statuses.array';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import { Venue } from '../../../shared/venue.model';
import { CalendarEvent } from 'calendar-utils';
import { Promoter } from '../../../shared/promoter.model';
import { Contact } from '../../../shared/contact.model';
import * as _ from 'lodash';
import { HttpClient } from '@angular/common/http';
import { LoaderService } from '../../../providers/loader.service';

const DAY_OF_WEEKS = [
  'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
];

@Component({
  selector: 'app-calendar-event-content',
  templateUrl: './calendar-event-content.component.html',
  styleUrls: ['./calendar-event-content.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CalendarEventContentComponent implements OnInit {

  public eventForm: FormGroup;
  public statuses = STATUSES;
  public dayOfWeek = 'Sunday';
  public choosedDate: Date;
  public venues: Venue[] = [];
  public companies = [];
  public address = 'Select promoter';
  public ticketStatus = 0;
  public promoters = [];
  private files = {};
  public link = '';

  constructor(@Inject(MAT_DIALOG_DATA) private data: any, private dialogRef: MatDialogRef<CalendarEventContentComponent>,
  private http: HttpClient, private loader: LoaderService) {
    this.dayOfWeek = DAY_OF_WEEKS[this.data.startDate.getDay()];
    this.choosedDate = this.data.startDate;
  }

  ngOnInit() {
    this._createForm();

    this.loader.loadingSubject.next(true);
    this.http.get('venue').subscribe(data => {
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
        return modifiedVenue;
      });
      this.promoters = _.map(_.values(data['companies']), company => {
        return company;
      });
      const eventsPromoter = _.find(this.promoters, company => {
        return company.tid === this.data.event.promoter;
      });
      this.address = eventsPromoter && eventsPromoter['field_will_call_email'] &&
            eventsPromoter['field_will_call_email']['und'] &&
            eventsPromoter['field_will_call_email']['und'][0] &&
            eventsPromoter['field_will_call_email']['und'][0]['email'] || '';
    },
    err => {
      this.loader.loadingSubject.next(false);
    },
    () => {
      this.loader.loadingSubject.next(false);
    });
  }

  onSubmit(event) {
    event.preventDefault();
    this.choosedDate.setHours(this.eventForm.value.startHours.hour);
    this.choosedDate.setMinutes(this.eventForm.value.startHours.minute);
    const data = {
      ...this.data.event,
      'start': this.choosedDate.toString(),
      'ticketStatus': this.ticketStatus,
      ...this.eventForm.value,
      ...this.files
    };
    this.loader.loadingSubject.next(true);
    if (this.data.event.id) {
      this.http.post(`edit/${this.data.event.id}`, data).subscribe(resp => {
        this.loader.loadingSubject.next(false);
        this.dialogRef.close(true);
      });
    } else {
      this.http.post('create', data).subscribe(resp => {
        this.loader.loadingSubject.next(false);
        this.dialogRef.close(true);
      });
    }
  }

  changePromoter({value}) {
    const eventsPromoter = _.find(this.promoters, company => {
      return company.tid === value;
    });
    this.address = eventsPromoter && eventsPromoter['field_will_call_email'] &&
          eventsPromoter['field_will_call_email']['und'] &&
          eventsPromoter['field_will_call_email']['und'][0] &&
          eventsPromoter['field_will_call_email']['und'][0]['email'] || '';
  }

  fileLoaded({key, value, extension, width, height}) {
    this.files[key] = {'data': value, extension, width, height};
  }

  changeEventStatus(status: number): void {
    this.ticketStatus = status;
  }

  private _createForm() {
    const startHours = {
      'hour': this.data.startDate.getHours(),
      'minute': this.data.startDate.getMinutes()
    };
    this.ticketStatus = parseInt(this.data.event['ticketStatus'], 10) || 0;
    this.link = `${location.origin}/admin/commerce/products/${this.data.event.id}?destination=tickets/edit`;
    this.eventForm = new FormGroup({
      venue: new FormControl(this.data.venueId || 0, [Validators.required]),
      title: new FormControl(this.data.event.title || '', [Validators.required]),
      startHours: new FormControl(startHours, [Validators.required]),
      isDaytime: new FormControl(this.data.event.isDaytime, [Validators.required]),
      duration: new FormControl(this.data.event.duration || 0, [Validators.required]),
      promoter: new FormControl(this.data.event.promoter || '', [Validators.required]),
      isTicketOffline: new FormControl(this.data.event.isTicketOffline || false),
      expirationDate: new FormControl(this.data.event.expirationDate || null),
      moneyOwed: new FormControl(this.data.event.moneyOwed || ''),
      liveDate: new FormControl(this.data.event.liveDate || null),
      priority: new FormControl(this.data.event.priority),
      price: new FormControl(this.data.event.price || 0),
      doorPrice: new FormControl(this.data.event.doorPrice || 0),
      specialPricing: new FormControl(this.data.event.specialPricing || ''),
      fbEventLink: new FormControl(this.data.event.fbEventLink || ''),
      externalLinkDescription: new FormControl(this.data.event.externalLinkDescription || ''),
      mediaEmbedCode: new FormControl(this.data.event.mediaCode || ''),
      mediaLink: new FormControl(this.data.event.mediaLink || ''),
      description: new FormControl(this.data.event.description || ''),
      techNotes: new FormControl(this.data.event.techNotes || ''),
      genreType: new FormControl(this.data.event.genreType || ''),
      festival: new FormControl(this.data.event.festival || ''),
      rider: new FormControl(this.data.event.rider || ''),
      poster: new FormControl(this.data.event.poster || ''),
      supportingPerformers: new FormControl(this.data.event.supportingPerformers || [], [Validators.maxLength(5)]),
      techArrival: new FormControl(this.data.event.techArrival || ''),
      willCallEmailRecipient: new FormControl(this.data.event.willCallEmailRecipient || ''),
      numberOfTicketsForSale: new FormControl(this.data.event.numberOfTicketsForSale || ''),
      ticketOrListing: new FormControl(this.data.event.ticketOrListing || ''),
    });
  }

}
