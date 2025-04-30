import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child-to-paratent-data',
  imports: [],
  templateUrl: './child-to-paratent-data.component.html',
  styleUrl: './child-to-paratent-data.component.css',
})
export class ChildToParatentDataComponent {
  @Output() getDetails = new EventEmitter();
  userDetail = [
    { id: 1, name: 'Alex', package: '20' },
    { id: 2, name: 'Bob', package: '20' },
    { id: 3, name: 'John', package: '20' },
  ];


  showData(){
    this.getDetails.emit(this.userDetail)

  }
}
