import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineCalendarsComponent } from './inline-calendars.component';

describe('InlineCalendarsComponent', () => {
  let component: InlineCalendarsComponent;
  let fixture: ComponentFixture<InlineCalendarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InlineCalendarsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InlineCalendarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
