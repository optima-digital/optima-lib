import { Pipe, PipeTransform } from '@angular/core';
import { OptimaPhoneUtilsService } from './optima-phone-utils.service';

@Pipe({
  name: 'nationalFormat',
  standalone: true,
})
export class OptimaNationalFormatPipe implements PipeTransform {
  constructor(private optimaPhoneUtilsService: OptimaPhoneUtilsService) {}

  transform(value: string, countryCode: string): string {
    return this.optimaPhoneUtilsService.getNational(value, countryCode);
  }
}
