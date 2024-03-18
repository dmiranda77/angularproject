import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

export const checkHasNumberValidator = (): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors | null => {
    const error = /\d/.test(control.value);
    return error ? { hasNumbers: { value: control.value } } : null;
  };
};