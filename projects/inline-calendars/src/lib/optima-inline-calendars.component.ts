import {
  Component,
  forwardRef,
  Input,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCalendar, MatDatepickerModule } from '@angular/material/datepicker';
import * as moment_ from 'moment';
import { Moment } from 'moment';
import { OptimaInlineCalendarHeaderComponent } from './optima-inline-calendar-header/optima-inline-calendar-header.component';
import { OptimaInlineCalendarsService } from './optima-inline-calendars.service';

const moment = moment_;

@Component({
  selector: 'optima-inline-calendars',
  templateUrl: './optima-inline-calendars.component.html',
  styleUrls: ['./optima-inline-calendars.component.scss'],
  standalone: true,
  imports: [CommonModule, MatDatepickerModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => OptimaInlineCalendarsComponent),
      multi: true,
    },
  ],
})
export class OptimaInlineCalendarsComponent
  implements OnInit, ControlValueAccessor
{
  @Input() public startAt: Date | null;
  @Input() public totalCalendars = 3;
  @ViewChildren(MatCalendar) calendars: QueryList<MatCalendar<Moment>>;

  public calendarInstances: any[] = [];
  public customHeader;
  public disabled = false;
  public value: string[] = [];
  public onChange: any = () => {};
  public onTouched: any = () => {};

  constructor(private oicService: OptimaInlineCalendarsService) {}

  public ngOnInit(): void {
    if (!this.startAt) {
      this.startAt = new Date();
    }

    if (this.disabled) {
      return;
    }

    this.customHeader = OptimaInlineCalendarHeaderComponent;
    this.setupCalendars();
  }

  public onSelect(selectedDate: Moment): void {
    if (this.disabled) {
      return;
    }

    if (!Array.isArray(this.value)) {
      this.value = [];
    }

    const formattedDate = selectedDate.format('YYYY-MM-DD');

    // try to find the formattedValue in answer array
    const idx = this.value.indexOf(formattedDate);

    // if already selected, remove it
    if (idx !== -1) {
      this.value.splice(idx, 1);
    } else {
      this.value.push(formattedDate);
    }

    this.onChange(this.value);

    this.calendars.map((calendar) => calendar.updateTodaysDate());
  }

  public writeValue(value: any[]): void {
    this.value = value;
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  public setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
    this.oicService.isDisabled = isDisabled;
  }

  public highlightSelectedDates = (
    date: Date | Moment,
    view: 'month' | 'year' | 'multi-year'
  ) => {
    if (!Array.isArray(this.value)) {
      this.value = [];
    }

    if (this.isDate(date)) {
      date = moment(date);
    }

    const formattedDate = (date as Moment).format('YYYY-MM-DD');
    if (this.value.indexOf(formattedDate) !== -1) {
      return 'inline-calendar__date--selected';
    }

    return null;
  };

  private setupCalendars(): void {
    this.calendarInstances = [];

    for (let i = 0; i < this.totalCalendars; i++) {
      this.calendarInstances.push({
        id: `cal-${i}`,
        startAt: this.getDateForMonth(i),
      });
    }
  }

  private getDateForMonth(idx): Date {
    const middleIdx = Math.floor(this.totalCalendars / 2);

    const nextMonth = new Date(this.startAt.getTime());
    nextMonth.setDate(1);
    nextMonth.setMonth(nextMonth.getMonth() + (idx - middleIdx));

    return nextMonth;
  }

  private isDate(value: any): boolean {
    return value instanceof Date && !isNaN(value.valueOf());
  }
}
