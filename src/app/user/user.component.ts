import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
 @Input() userData : any
 
 onInit(){
  console.log("dsd",this.userData);
  
 }
}
