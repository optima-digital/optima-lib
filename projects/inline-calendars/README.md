# Angular Material multiple inline calendars

This package will help you display and maname multiple inline calendars, based on Angular Material Datepicker.

![Inline calendars](./docs/inline-calendars.png)


## Install

```
npm install @optima-digital/inline-calendars
```

## Usage

Import the module to your `app.module.ts`
```
import { OptimaInlineCalendarsModule } from '@optima-digital';
```

Add the inline calendar components to your view:

```
<optima-inline-calendars></optima-inline-calendars>
```

The following inputs are available at the moment:

* **__totalCalendars__** - number of calendars to be displayed. Default is 3.
* **__startAt__** - The date to be considered as start date. This will be the date on which the calendar in the middle position will be set. Defaults to todays date.
* **__formControlName__** - use this component as custom form control in any reactive form.
