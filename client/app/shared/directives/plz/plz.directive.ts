import {
  Attribute,
  Directive,
  forwardRef
} from '@angular/core';
import * as postcode from 'postcode-validator';
import {
  FormControl,
  NG_VALIDATORS,
  Validator,
  ValidationErrors
} from '@angular/forms';

@Directive({
  selector: '[appPLZ]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PlzDirective,
      multi: true
    }
  ]
})
export class PlzDirective implements Validator {

  constructor(@Attribute('appPLZ') public appPLZ: string) {}

  validate(c: FormControl): ValidationErrors {
    const value = c.value;
    if (!postcode.validate(value, 'DE')) {
      return {
        'plz': {
          'message': 'Keine gültige Postleitzahl'
        }
      };
    }
    return null;
  }
}
