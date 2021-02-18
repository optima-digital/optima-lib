import { DOCUMENT } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Inject,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import {
  DateAdapter,
  MatDateFormats,
  MAT_DATE_FORMATS,
} from '@angular/material/core';
import { MatCalendar } from '@angular/material/datepicker';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { InlineCalendarsService } from '../inline-calendars.service';

@Component({
  selector: 'optima-inline-calendar-header',
  templateUrl: './inline-calendar-header.component.html',
  styleUrls: ['./inline-calendar-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InlineCalendarHeaderComponent<D> implements OnInit, OnDestroy {

  public dataset: {id: number, first: boolean, last: boolean};
  private destroy$ = new Subject<void>();

  constructor(
    private calendar: MatCalendar<D>,
    private dateAdapter: DateAdapter<D>,
    @Inject(MAT_DATE_FORMATS) private dateFormats: MatDateFormats,
    cdr: ChangeDetectorRef,
    private element: ElementRef,
    private icService: InlineCalendarsService,
  ) {
    calendar.stateChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => cdr.markForCheck());
  }

  ngOnInit() {

    this.parseDataSet();

    this.icService.nextMonthChanged$.pipe(takeUntil(this.destroy$)).subscribe((d) => {
      if (!this.dataset.last) {
        this.calendar.activeDate = this.dateAdapter.addCalendarMonths(this.calendar.activeDate, 1)
      }
    });

    this.icService.prevMonthChanged$.pipe(takeUntil(this.destroy$)).subscribe((d) => {
      if (!this.dataset.first) {
        this.calendar.activeDate = this.dateAdapter.addCalendarMonths(this.calendar.activeDate, -1)
      }
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  get periodLabel() {
    return this.dateAdapter
      .format(
        this.calendar.activeDate,
        this.dateFormats.display.monthYearLabel
      )
      .toLocaleUpperCase();
  }

  previousClicked(mode: 'month' | 'year') {
    this.calendar.activeDate =
      mode === 'month'
        ? this.dateAdapter.addCalendarMonths(this.calendar.activeDate, -1)
        : this.dateAdapter.addCalendarYears(this.calendar.activeDate, -1);

    this.icService.prevMonthChanged$.next(this.calendar.activeDate);
  }

  nextClicked(mode: 'month' | 'year') {
    this.calendar.activeDate =
      mode === 'month'
        ? this.dateAdapter.addCalendarMonths(this.calendar.activeDate, 1)
        : this.dateAdapter.addCalendarYears(this.calendar.activeDate, 1);

    this.icService.nextMonthChanged$.next(this.calendar.activeDate);
  }

  private parseDataSet(): void {
    const ds = this.element.nativeElement.parentElement.dataset;
    this.dataset = {
      id: +ds.idx,
      first: ds.first === 'true',
      last: ds.last === 'true'
    };
  }
}
