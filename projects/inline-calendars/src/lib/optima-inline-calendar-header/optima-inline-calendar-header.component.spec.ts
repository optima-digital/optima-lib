import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DateAdapter, MatNativeDateModule } from '@angular/material/core';
import { MatCalendar, MatDatepickerModule } from '@angular/material/datepicker';
import { Subject } from 'rxjs';

import { OptimaInlineCalendarHeaderComponent } from './optima-inline-calendar-header.component';

describe('OptimaInlineCalendarHeaderComponent', () => {
  let component: OptimaInlineCalendarHeaderComponent<any>;
  let fixture: ComponentFixture<OptimaInlineCalendarHeaderComponent<any>>;

  const MockMatCalendar = {
    stateChanges: new Subject(),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        OptimaInlineCalendarHeaderComponent,
        MatDatepickerModule,
        MatNativeDateModule,
      ],
      providers: [{ provide: MatCalendar, useValue: MockMatCalendar }],
    })
      .overrideComponent(OptimaInlineCalendarHeaderComponent, {
        set: { template: '' },
      })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OptimaInlineCalendarHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
