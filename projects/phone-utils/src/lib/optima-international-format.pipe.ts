import { Pipe, PipeTransform } from '@angular/core';
import { OptimaPhoneUtilsService } from './optima-phone-utils.service';

@Pipe({
  name: 'internationalFormat',
})
export class OptimaInternationalFormatPipe implements PipeTransform {
  constructor(private optimaPhoneUtilsService: OptimaPhoneUtilsService) {}

  transform(value: string, countryCode: string): string {
    return this.optimaPhoneUtilsService.getInternational(value, countryCode);
  }
}
