import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  userForm: FormGroup;
  constructor(public fb: FormBuilder) {
    this.createForm();
    this.logLastNameChange();
  }

  ngOnInit() {
    this.userForm.reset();
    this.userForm.setValue({
      lastName: 'test lastName',
      firstName: 'test firstName',
      profession: 'test profession',
    });
  }
  createForm() {
    this.userForm = this.fb.group({
      lastName: ['', [Validators.required, this.validateSyncLastName]],
      firstName: ['', Validators.required],
      profession: ['', Validators.required]
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
}
