import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptimaInlineCalendarHeaderComponent } from './optima-inline-calendar-header.component';

describe('OptimaInlineCalendarHeaderComponent', () => {
  let component: OptimaInlineCalendarHeaderComponent<any>;
  let fixture: ComponentFixture<OptimaInlineCalendarHeaderComponent<any>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptimaInlineCalendarHeaderComponent ]
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
