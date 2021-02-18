import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineCalendarHeaderComponent } from './inline-calendar-header.component';

describe('InlineCalendarHeaderComponent', () => {
  let component: InlineCalendarHeaderComponent;
  let fixture: ComponentFixture<InlineCalendarHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InlineCalendarHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InlineCalendarHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
