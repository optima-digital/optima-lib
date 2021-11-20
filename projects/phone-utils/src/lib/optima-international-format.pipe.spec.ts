import { OptimaInternationalFormatPipe } from './optima-international-format.pipe';
import { TestBed } from '@angular/core/testing';
import { OptimaPhoneUtilsService } from './optima-phone-utils.service';

describe('OptimaInternationalFormatPipe', () => {
  const phoneUtilService = TestBed.inject(OptimaPhoneUtilsService);
  const pipe = new OptimaInternationalFormatPipe(phoneUtilService);

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
});
