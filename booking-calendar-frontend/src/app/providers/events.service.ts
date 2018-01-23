import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class EventsService {
  eventsSubject: any;
  constructor() {
    this.eventsSubject = new BehaviorSubject<Number[]>([]);
  }
}
