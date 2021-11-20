import { TestBed } from '@angular/core/testing';
import { OptimaPhoneUtilsService } from './optima-phone-utils.service';

describe('AngularPhoneUtilsLibService', () => {
  let service: OptimaPhoneUtilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OptimaPhoneUtilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
