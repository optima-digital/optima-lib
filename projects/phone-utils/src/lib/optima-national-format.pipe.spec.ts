import { TestBed } from '@angular/core/testing';
import { OptimaNationalFormatPipe } from './optima-national-format.pipe';
import { OptimaPhoneUtilsService } from './optima-phone-utils.service';

describe('OptimaNationalFormatPipe', () => {
  let phoneUtilService: OptimaPhoneUtilsService;
  let pipe: OptimaNationalFormatPipe;

  beforeEach(() => {
    phoneUtilService = TestBed.inject(OptimaPhoneUtilsService);
    pipe = new OptimaNationalFormatPipe(phoneUtilService);
  });

  it('should format a raw phone number into national format', () => {
    expect(pipe.transform('+35929732121', 'BG')).toEqual('02 973 2121');
  });

  it('should format an international phone number into national format', () => {
    expect(pipe.transform('+359 2 973 2121', 'BG')).toEqual('02 973 2121');
  });

  it('should return the input value when it is not recognized as a phone number from selected country', () => {
    expect(pipe.transform('1', 'BG')).toBe('1');
  });
});
