import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-control',
  imports: [ReactiveFormsModule],
  templateUrl: './form-control.component.html',
  styleUrl: './form-control.component.css'
})
export class FormControlComponent {
  name = new FormControl('')
  password = new FormControl('')
  handleFormData(e: Event){
    e.preventDefault()
      console.log(
        {
          name: this.name.value,
          password : this.password.value
        }
      );
      
  }
}
