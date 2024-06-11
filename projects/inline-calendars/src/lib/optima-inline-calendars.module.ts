import { OptimaInlineCalendarsComponent } from './optima-inline-calendars.component';
import { OptimaInlineCalendarHeaderComponent } from './optima-inline-calendar-header/optima-inline-calendar-header.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    OptimaInlineCalendarsComponent,
    OptimaInlineCalendarHeaderComponent,
  ],
  imports: [CommonModule, MatButtonModule, MatDatepickerModule, MatIconModule],
  exports: [OptimaInlineCalendarsComponent],
})
export class OptimaInlineCalendarsModule {}
