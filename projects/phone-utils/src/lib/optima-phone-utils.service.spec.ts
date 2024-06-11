import { TestBed } from '@angular/core/testing';
import { FormControl } from '@angular/forms';
import { OptimaPhoneUtilsService } from './optima-phone-utils.service';

describe('AngularPhoneUtilsLibService', () => {
  let service: OptimaPhoneUtilsService;

  beforeEach(() => {
    service = TestBed.inject(OptimaPhoneUtilsService);
  });

  describe('getInternational', () => {
    it('should return the input value when it is not recognized as a phone number from selected country', () => {
      expect(service.getInternational('1', 'BG')).toBe('1');
    });

    it('should return the formatted value when it is recognized as a phone number from selected country', () => {
      expect(service.getInternational('029732121', 'BG')).toBe(
        '+359 2 973 2121'
      );
    });
  });

  describe('getNational', () => {
    it('should return the input value when it is not recognized as a phone number from selected country', () => {
      expect(service.getNational('1', 'BG')).toBe('1');
    });

    it('should return the formatted value when it is recognized as a phone number from selected country', () => {
      expect(service.getNational('+35929732121', 'BG')).toBe('02 973 2121');
    });

    it('should format an international phone number into national format', () => {
      expect(service.getNational('+359 2 973 2121', 'BG')).toEqual(
        '02 973 2121'
      );
    });
  });

  describe('getPlain', () => {
    it('should return just the digit from a phone number', () => {
      expect(service.getPlain('+359 2 973 2121', 'BG')).toEqual('+35929732121');
    });

    it('should return the value without white spaces when not recognized as valid number', () => {
      expect(service.getPlain('+1 555 233 556633', 'BG')).toEqual('+1555233556633');
    })
  });

  describe('isValid', () => {
    it('should return false when the provided phone number is not valid in the selected country', () => {
      expect(service.isValid('+1 555 233 556633', 'BG')).toBeFalse();
    });

    it('should return true when the provided phone number is valid in the selected country', () => {
      expect(service.isValid('+359 2 973 2121', 'BG')).toBeTrue();
    });
  });

  describe('isValidFormControl', () => {
    it('should return phoneInvalid:true when provided form control value is invalid phone number', () => {
      const formControl = new FormControl('phone');
      formControl.setValue('+1 555 233 556633');

      expect(service.isValidFormControl('BG')(formControl)).toEqual({
        phoneInvalid: true,
      });
    });

    it('should return null when provided form control value is valid phone number', () => {
      const formControl = new FormControl('phone');
      formControl.setValue('+359 2 973 2121');

      expect(service.isValidFormControl('BG')(formControl)).toBeNull();
    });

    it('should return null when form control value is empty', () => {
      const formControl = new FormControl('phone');
      formControl.reset();

      expect(service.isValidFormControl('BG')(formControl)).toBeNull();
    });
  });
});
