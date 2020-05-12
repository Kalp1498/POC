import { Directive } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
    selector: '[appNoSpaceValidator]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: NoSpaceValidatorDirective,
        multi: true
    }]
})

export class NoSpaceValidatorDirective implements Validator {
    validate(control: AbstractControl): { [key: string]: any } | null {
        if (control.value) {
            if ((control.value as string).indexOf(' ') >= 0) {
                return { cannotContainSpace: true };
            } 
            return null
        }
    }
}