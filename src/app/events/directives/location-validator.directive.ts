import { Directive } from '@angular/core';
import { Validator, FormGroup, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[locationValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: LocationValidatorDirective, multi: true}]
})
export class LocationValidatorDirective implements Validator {

  constructor() { }

  validate(fg: FormGroup): {[key: string]: any} {
    const addressControl = fg.controls['address'];
    const cityControl = fg.controls['city'];
    const countryControl = fg.controls['country'];
    const onlineUrlControl = (<FormGroup>fg.root).controls['onlineUrl'];

    if ((addressControl && addressControl.value
        && cityControl && cityControl.value
        && countryControl && countryControl.value) || (onlineUrlControl && onlineUrlControl.value)) {
      return null;
    } else {
      return {'validateLocation': false};
    }
  }

}
