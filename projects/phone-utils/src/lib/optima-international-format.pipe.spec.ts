import { TestBed } from '@angular/core/testing';
import { OptimaInternationalFormatPipe } from './optima-international-format.pipe';
import { OptimaPhoneUtilsService } from './optima-phone-utils.service';

describe('OptimaInternationalFormatPipe', () => {
  let phoneUtilService: OptimaPhoneUtilsService;
  let pipe: OptimaInternationalFormatPipe;

  beforeEach(() => {
    phoneUtilService = TestBed.inject(OptimaPhoneUtilsService);
    pipe = new OptimaInternationalFormatPipe(phoneUtilService);
  });

  describe('transform', () => {
    it('should return the input value when it is not recognized as a phone number from selected country', () => {
      expect(pipe.transform('1', 'BG')).toBe('1');
    });

    it('should return the formatted value when it is recognized as a phone number from selected country', () => {
      expect(pipe.transform('029732121', 'BG')).toBe('+359 2 973 2121');
    });
  });
});
