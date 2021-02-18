import { TestBed } from '@angular/core/testing';

import { OptimaInlineCalendarsService } from './optima-inline-calendars.service';

describe('OptimaInlineCalendarsService', () => {
  let service: OptimaInlineCalendarsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OptimaInlineCalendarsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
