import { Pipe, PipeTransform } from '@angular/core';
import { Venue } from './venue.model';
import * as _ from 'lodash';

@Pipe({
  name: 'groupBy'
})
export class GroupByPipe implements PipeTransform {

  public transform(venues: any[], events: any[] = []): any[] {
    if (!Array.isArray(venues) || !Array.isArray(events) || events.length === 0) {
      return _.map(venues, venue => {
        venue.events = [];
        return venue;
      });
    }
    return _.map(venues, venue => {
      const filteredEvents = _.filter(events, event => {
        return event.venue.id === venue.id;
      });
      venue.events = filteredEvents;
      return venue;
    });
  }
}
