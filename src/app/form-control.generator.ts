import { FormControl, Validators } from '@angular/forms';

/**
 * Holds some factory methods that I will be using to generate different types FormControl.
 * The goal is to go through most of the cases (basically going through
 * https://angular.io/guide/form-validation#reactive-form-validation)
 */
export class FormControlGenerator {

  public static newFormControl(): FormControl {
    return new FormControl();
  }

  public static newFormControlWithValue(initiaValue: string): FormControl {
    return new FormControl(initiaValue);
  }

  public static newFormControlWithSyncRequiredValidator(initialValue?: string): FormControl {
    return new FormControl(initialValue, Validators.required);
  }

  public static newFormControlWithAsyncValidator(): FormControl {
    return new FormControl();
  }
}

