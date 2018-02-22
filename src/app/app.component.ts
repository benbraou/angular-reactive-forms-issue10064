import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, AsyncValidatorFn } from '@angular/forms';
import {ProfessionService} from './prefession.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  userForm: FormGroup;
  constructor(public fb: FormBuilder, private professionService: ProfessionService) {
    this.createForm();
    this.logLastNameChange();
  }

  ngOnInit() {
    this.userForm.reset();
    this.userForm.patchValue({
      lastName: 'test lastName',
      firstName: 'test firstName'
    });
  }
  createForm() {
    this.userForm = this.fb.group({
      lastName: ['', [Validators.required, this.validateSyncLastName]],
      firstName: ['', Validators.required],
      profession: ['', Validators.required, this.validateProfessionAsync.bind(this)]
    });
  }

  logLastNameChange() {
    const lastNameControl = this.userForm.get('lastName');
    lastNameControl.valueChanges.forEach(
      (value: string) => console.log(value));
  }

  validateSyncLastName(control: AbstractControl) {
    if (!control.value || !control.value.includes('custom')) {
      return {
        validLastName: true
      };
    }
    return null;
  }

  validateProfessionAsync(control: AbstractControl): Observable<{ professionIsKnown: boolean}> {
    return this.professionService.checkProfessionInKnown(this.userForm.get('profession').value).pipe(
      map(isKnown => isKnown ? null : {professionIsKnown: true}));
  }
}
