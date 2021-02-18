import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InlineCalendarsService {
  public nextMonthChanged$ = new Subject();
  public prevMonthChanged$ = new Subject();
}
