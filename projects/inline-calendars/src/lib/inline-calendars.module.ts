import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InlineCalendarsComponent } from './inline-calendars.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { InlineCalendarHeaderComponent } from './inline-calendar-header/inline-calendar-header.component';


@NgModule({
  declarations: [InlineCalendarsComponent, InlineCalendarHeaderComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDatepickerModule,
    MatIconModule,
  ],
  exports: [InlineCalendarsComponent]
})
export class InlineCalendarsModule { }
