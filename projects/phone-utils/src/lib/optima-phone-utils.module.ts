import { NgModule } from '@angular/core';
import { OptimaInternationalFormatPipe } from './optima-international-format.pipe';
import { OptimaNationalFormatPipe } from './optima-national-format.pipe';

@NgModule({
  declarations: [OptimaInternationalFormatPipe, OptimaNationalFormatPipe],
  exports: [OptimaInternationalFormatPipe, OptimaNationalFormatPipe],
})
export class OptimaPhoneUtilsModule {}
