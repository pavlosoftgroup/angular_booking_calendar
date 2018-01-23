import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CalendarModule } from 'angular-calendar';
import { HttpClientModule } from '@angular/common/http';
import { MatMenuModule, MatToolbarModule, MatIconModule, MatTooltipModule, MatDialogModule,
  MatButtonModule, MatCardModule, MatFormFieldModule, MatDatepickerModule, MatNativeDateModule,
  MatInputModule, MatSelectModule, MatChipsModule, MatSlideToggleModule, MatProgressSpinnerModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CalendarMonthViewComponent } from './calendar/calendar-month-view/calendar-month-view.component';
import { GroupByPipe } from './shared/group-by.pipe';
import { CalendarEventComponent } from './calendar/calendar-event/calendar-event.component';
import { CalendarEventContentComponent } from './calendar/calendar-event/calendar-event-content/calendar-event-content.component';
import { LoaderService } from './providers/loader.service';
import { EventsService } from './providers/events.service';
// tslint:disable-next-line:max-line-length
import { CalendarEventAdditionalContentComponent } from './calendar/calendar-event/calendar-event-additional-content/calendar-event-additional-content.component';
import { GrouppedEventListComponent } from './calendar/groupped-event-list/groupped-event-list.component';
import { GroupModalComponent } from './calendar/groupped-event-list/group-modal/group-modal.component';

const routes: Routes = [
  { path: '', component: CalendarComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    GroupByPipe,
    CalendarMonthViewComponent,
    CalendarEventComponent,
    CalendarEventContentComponent,
    CalendarEventAdditionalContentComponent,
    GrouppedEventListComponent,
    GroupModalComponent
  ],
  entryComponents: [
    CalendarEventContentComponent,
    GroupModalComponent
  ],
  imports: [
    BrowserModule,
    // datetimepicker
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    CalendarModule.forRoot(),
    // bootstrap module
    NgbModule.forRoot(),
    // material module
    MatNativeDateModule,
    MatMenuModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatChipsModule,
    MatDatepickerModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatTooltipModule,
    MatDialogModule,
    MatIconModule,
  ],
  providers: [LoaderService, EventsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
