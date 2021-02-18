import { TestBed } from '@angular/core/testing';

import { InlineCalendarsService } from './inline-calendars.service';

describe('InlineCalendarsService', () => {
  let service: InlineCalendarsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InlineCalendarsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
