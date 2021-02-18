import { Component, Input, OnInit } from '@angular/core';
import { InlineCalendarHeaderComponent } from './inline-calendar-header/inline-calendar-header.component';

@Component({
  selector: 'optima-inline-calendars',
  templateUrl: './inline-calendars.component.html',
  styleUrls: ['./inline-calendars.component.scss'],
})
export class InlineCalendarsComponent implements OnInit {
  @Input() public startAt: Date | null;
  @Input() public totalCalendars = 3;

  public calendarInstances: any[] = [];
  public customHeader;

  constructor() {}

  ngOnInit(): void {

    if (!this.startAt) {
      this.startAt = new Date();
    }

    this.customHeader = InlineCalendarHeaderComponent;
    this.setupCalendars();
  }

  private setupCalendars(): void {
    for (let i = 0; i < this.totalCalendars; i++) {
      this.calendarInstances.push({
        id: `cal-${i}`,
        startAt: this.getDateForMonth(i)
      });
    }
  }

  private getDateForMonth(idx): Date {
    const middleIdx = Math.floor(this.totalCalendars/2);

    const nextMonth = new Date(this.startAt.getTime());
    nextMonth.setDate(1);
    nextMonth.setMonth(nextMonth.getMonth() + (idx - middleIdx));

    return nextMonth;
  }

}
