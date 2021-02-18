import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OptimaInlineCalendarsComponent } from './optima-inline-calendars.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { OptimaInlineCalendarHeaderComponent } from './optima-inline-calendar-header/optima-inline-calendar-header.component';


@NgModule({
  declarations: [OptimaInlineCalendarsComponent, OptimaInlineCalendarHeaderComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDatepickerModule,
    MatIconModule,
  ],
  exports: [OptimaInlineCalendarsComponent]
})
export class OptimaInlineCalendarsModule { }
