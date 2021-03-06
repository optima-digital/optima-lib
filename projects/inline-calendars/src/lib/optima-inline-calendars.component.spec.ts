import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptimaInlineCalendarsComponent } from './optima-inline-calendars.component';

describe('OptimaInlineCalendarsComponent', () => {
  let component: OptimaInlineCalendarsComponent;
  let fixture: ComponentFixture<OptimaInlineCalendarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptimaInlineCalendarsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OptimaInlineCalendarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
