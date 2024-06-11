import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Inject,
  OnDestroy,
  OnInit,
} from '@angular/core';
import {
  DateAdapter,
  MatDateFormats,
  MAT_DATE_FORMATS,
} from '@angular/material/core';
import { MatCalendar, MatDatepickerModule } from '@angular/material/datepicker';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { OptimaInlineCalendarsService } from '../optima-inline-calendars.service';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'optima-inline-calendar-header',
  templateUrl: './optima-inline-calendar-header.component.html',
  styleUrls: ['./optima-inline-calendar-header.component.scss'],
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatDatepickerModule, MatIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OptimaInlineCalendarHeaderComponent<D>
  implements OnInit, OnDestroy
{
  public disabled = false;
  public dataset: { id: number; first: boolean; last: boolean };
  public nextArrowTop = false;
  private destroy$ = new Subject<void>();

  constructor(
    private calendar: MatCalendar<D>,
    private dateAdapter: DateAdapter<D>,
    @Inject(MAT_DATE_FORMATS) private dateFormats: MatDateFormats,
    cdr: ChangeDetectorRef,
    private element: ElementRef,
    private oicService: OptimaInlineCalendarsService
  ) {
    calendar.stateChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => cdr.markForCheck());
  }

  public ngOnInit(): void {
    this.disabled = this.oicService.isDisabled;
    this.parseDataSet();

    if (!this.disabled) {
      this.onNextMonth();
      this.onPrevMonth();
    }

    this.nextArrowTop = this.dataset.last && screen.availWidth < 768;
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public onNextMonth(): void {
    this.oicService.nextMonthChanged$
      .pipe(takeUntil(this.destroy$))
      .subscribe((d) => {
        if (!this.dataset.last) {
          this.calendar.activeDate = this.dateAdapter.addCalendarMonths(
            this.calendar.activeDate,
            1
          );
        }
      });
  }

  public onPrevMonth(): void {
    this.oicService.prevMonthChanged$
      .pipe(takeUntil(this.destroy$))
      .subscribe((d) => {
        if (!this.dataset.first) {
          this.calendar.activeDate = this.dateAdapter.addCalendarMonths(
            this.calendar.activeDate,
            -1
          );
        }
      });
  }

  get periodLabel(): string {
    return this.dateAdapter
      .format(this.calendar.activeDate, this.dateFormats.display.monthYearLabel)
      .toLocaleUpperCase();
  }

  public previousClicked(mode: 'month' | 'year'): void {
    this.calendar.activeDate =
      mode === 'month'
        ? this.dateAdapter.addCalendarMonths(this.calendar.activeDate, -1)
        : this.dateAdapter.addCalendarYears(this.calendar.activeDate, -1);

    this.oicService.prevMonthChanged$.next(this.calendar.activeDate);
  }

  public nextClicked(mode: 'month' | 'year'): void {
    this.calendar.activeDate =
      mode === 'month'
        ? this.dateAdapter.addCalendarMonths(this.calendar.activeDate, 1)
        : this.dateAdapter.addCalendarYears(this.calendar.activeDate, 1);

    this.oicService.nextMonthChanged$.next(this.calendar.activeDate);
  }

  private parseDataSet(): void {
    const ds = this.element.nativeElement.parentElement.dataset;
    this.dataset = {
      id: +ds.idx,
      first: ds.first === 'true',
      last: ds.last === 'true',
    };
  }
}
