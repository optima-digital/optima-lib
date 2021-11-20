import { OptimaNationalFormatPipe } from './optima-national-format.pipe';
import { TestBed } from '@angular/core/testing';
import { OptimaPhoneUtilsService } from './optima-phone-utils.service';

describe('OptimaNationalFormatPipe', () => {
  const optimaPhoneUtilService = TestBed.inject(OptimaPhoneUtilsService);
  const pipe = new OptimaNationalFormatPipe(optimaPhoneUtilService);

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should format a raw phone number into national format', () => {
    expect(pipe.transform('+359876386851')).toEqual('087 63 86 851');
  });

  it('should format an international phone number into national format', () => {
    expect(pipe.transform('+359 87 63 86 851')).toEqual('087 63 86 851');
  });
});
