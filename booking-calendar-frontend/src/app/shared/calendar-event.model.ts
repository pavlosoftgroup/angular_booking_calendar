import { Venue } from './venue.model';

export class CalendarEvent {
  id: number;
  title: string;
  venue: Venue;
  start: Date;
  status: number;
  promoter: any;
  ticketStatus: number;
  color: string;
  duration: string;
  isDaytime: boolean;
  draggable?: boolean;
  isTicketOffline?: boolean;
  expirationDateTemp?: string;
  expirationDate?: Date;
  liveDate?: string;
  price?: string;
  doorPrice?: string;
  willCallEmailRecipient?: string;
  numberOfTicketsForSale?: string;
  moneyOwed?: string;
  specialPricing?: string;
  ticketOrListing?: boolean;
  description?: string;
  mediaCode?: string;
  mediaLink?: string;
  externalLinkDescription?: string;
  fbEventLink?: string;
  techNotes?: string;
  genreType?: string;
  festival?: string;
  priority: number;
  techArrival?: string;
  supportingPerformers?: Object[];
  poster?: string;
  rider?: string;
}
