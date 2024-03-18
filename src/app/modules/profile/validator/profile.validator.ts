import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const checkValidName= (): ValidatorFn => {
    return (control: AbstractControl): ValidationErrors| null => {
      const error = /\d/.test(control.value);
      return error ? { hasNumbers : { value: control.value } } : null;
    };
  };

export const checkValidEmail = () :ValidatorFn => {
    return (control: AbstractControl): ValidationErrors| null => {
        const email = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const checkEmail = email.test(control.value);
        return checkEmail ? null : { invalidEmail: { value: control.value } };
      };
}