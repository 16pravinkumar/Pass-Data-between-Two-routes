import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  imports: [FormsModule,NgIf],
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.css'
})
export class TemplateDrivenFormComponent {

  

  handleUserData(form: NgForm) {
    if (form.valid) {
      console.log('Form Submitted:', form.value);
    } else {
      console.warn('Form is invalid!');
      form.control.markAllAsTouched(); // Highlights all invalid fields
    }
  }
  
}
