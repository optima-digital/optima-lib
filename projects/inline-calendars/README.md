# Angular Material multiple inline calendars

Based on `MatCalendar`, the component under Angular Material Datepicker, this package will help you display and manage multiple inline calendars. Its main purpose is to be used as custom form control in reactive forms.

**Features**
- list multuple months;
- multiple dates selection;
- navigation to next/previous month;

![Inline calendars](./docs/inline-calendars.png)

## Versions grid

| Angular | OptimaLib |
| --- | --- |
| 17.x | 17.x |
| 16.x | 16.x |
| 15.x | 15.x |
| 14.x | 14.x |
| 13.x | 13.x |
| 12.x | 0.1.0 |
| 11.x | 0.0.7 |

## Install

```
npm install @optima-lib/inline-calendars
```

## Usage

Import **OptimaInlineCalendarsComponent** in the component where you want to use it:
```
import { OptimaInlineCalendarsComponent } from '@optima-lib/inline-calendars';

@Component({
  imports: [
    ...,
    OptimaInlineCalendarsComponent
  ]
})
export class UserComponent() { }
```

Add the inline calendar components to your view:

```
<optima-inline-calendars></optima-inline-calendars>
```

The following inputs are available at the moment:

* **__totalCalendars__** - number of calendars to be displayed. Default is 3.
* **__startAt__** - The date to be considered as start date. This will be the date on which the calendar in the middle position will be set. Defaults to todays date.
* **__formControlName__** - use this component as custom form control in any reactive form.
