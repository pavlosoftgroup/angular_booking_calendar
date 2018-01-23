import { CalendarEvent } from './calendar-event.model';

export class Venue {
  id: number;
  title: string;
  color?: string;
  isPrimary: boolean;
  events: CalendarEvent[];
}
