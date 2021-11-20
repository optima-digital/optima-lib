import { Pipe, PipeTransform } from '@angular/core';
import { OptimaPhoneUtilsService } from './optima-phone-utils.service';

@Pipe({
  name: 'nationalFormat',
})
export class OptimaNationalFormatPipe implements PipeTransform {
  constructor(private optimaPhoneUtilsService: OptimaPhoneUtilsService) {}

  transform(value: string, ...args: string[]): string {
    return this.optimaPhoneUtilsService.getNational(value, args[0]);
  }
}
