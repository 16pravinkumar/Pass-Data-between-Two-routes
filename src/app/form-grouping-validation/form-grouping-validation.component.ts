import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-form-grouping-validation',
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './form-grouping-validation.component.html',
  styleUrl: './form-grouping-validation.component.css',
})
export class FormGroupingValidationComponent {
  userData = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(5)]),
    email: new FormControl('', [
      Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$")
  
    ]),
    password: new FormControl(''),
  });

  // handleFormGroupData(e:Event){
  //  console.log(this.userData.value)

  // }
  handleFormGroupData(e: Event): void {
    e.preventDefault(); // prevent page reload

    // Optional: Check if the form is valid before proceeding
    if (this.userData.valid) {
      // Submit logic here
      console.log(this.userData.value);
    } else {
      // Touch all controls to trigger validation messages
      alert('Fill the data');
      this.userData.markAllAsTouched();
    }
  }

  //? getter for name show in form-group......html we dont write this this.userData.get('name') every where we can just write name

  get name() {
    return this.userData.get('name');
  }
  get email() {
    return this.userData.get('email');
  }

  updateProfile() {
    this.userData.patchValue({
      name: 'Welcoem',
    });
  }
}
