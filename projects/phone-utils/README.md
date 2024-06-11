# OptimaLib Phone Utils

This an Angular library (and can be used with Angular projects only).

It uses [libphonenumber-js](https://gitlab.com/catamphetamine/libphonenumber-js) to provide developers with the angular way of formatting and validating phone numbers.

## Versions grid

| Angular | OptimaLib |
| ------- | --------- |
| 17.x    | 17.x      |
| 16.x    | 16.x      |
| 15.x    | 15.x      |
| 14.x    | 14.x      |
| 13.x    | 13.x      |

## Install

```
npm install --save @optima-lib/phone-utils
```

## OptimaPhoneUtilsService

### Usage

```
import { OptimaPhoneUtilsService } from '@optima-lib/phone-utils';

// Inject in your component or service:
constructor(private phoneUtils: OptimaPhoneUtilsService) { }
```

### Methods

- **getInternational(value: string, country: string): string** - Transform a given phone number to international format

  | Param   | Description              |
  | ------- | ------------------------ |
  | value   | Phone numer              |
  | country | Two-letters country code |

- **getNational(value: string, country: string): string** - Transform a given phone number to its national format

  | Param   | Description              |
  | ------- | ------------------------ |
  | value   | Phone numer              |
  | country | Two-letters country code |

- **getPlain(value: string, country: string): string** - International format without inner spaces (PNF.E164)

  | Param   | Description              |
  | ------- | ------------------------ |
  | value   | Phone numer              |
  | country | Two-letters country code |

- **isValid(value: string, country: string): boolean** - General purpose validator. Use in conjunction with other services
  and components. The method will return true when arguments relates to a phone number from the selected country.

  | Param   | Description              |
  | ------- | ------------------------ |
  | value   | Phone numer              |
  | country | Two-letters country code |

- **isValidFormControl(country: string): boolean** - Reactive form validator. It will set **phoneInvalid** property
  in related form control error's object.

  | Param   | Description               |
  | ------- | ------------------------- |
  | country | Two-letters country code. |

  Usage:

```
// app.component.ts
constructor(public phoneValidatorService: OptimaPhoneValidatorService) { }

public getForm() {
  this.form = new FormGroup({
    phone: new FormControl('', [
      Validators.required,
      this.phoneValidatorService.isValidPhone('BG')
    ])
  });
}

// app.component.html
<span *ngIf="form.get('phone')?.errors?.phoneInvalid">{{ 'FORM.ERROR.PHONE_FORMAT.INVALID' | translate }}</span>
```

## OptimaInternationalFormatPipe

### Usage

Import **OptimaInternationalFormatPipe** in the component where you want to use it:

```
import { OptimaInternationalFormatPipe } from '@optima-lib/phone-utils';

@Component({
  imports: [
    ...,
    OptimaInternationalFormatPipe
  ]
})
export class UserComponent() { }
```

And then it can be used as:

```
{{ '02 1234567' | internationalFormat : 'BG' }}
```

which will produce:

```
+359 2 123 4567
```

## OptimaNationalFormatPipe

### Usage

Import **OptimaNationalFormatPipe** in the component where you want to use it:

```
import { OptimaNationalFormatPipe } from '@optima-lib/phone-utils';

@Component({
  imports: [
    ...,
    OptimaNationalFormatPipe
  ]
})
export class UserComponent() { }
```

And then it can be used as:

```
{{ '02 1234567' | nationalFormat : 'BG' }}
```

which will produce:

```
02 123 4567
```
