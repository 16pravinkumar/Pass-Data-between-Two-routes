import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dynamic-routing-user-by-id',
  imports: [],
  templateUrl: './dynamic-routing-user-by-id.component.html',
  styleUrl: './dynamic-routing-user-by-id.component.css'
})
export class DynamicRoutingUserByIdComponent {
  constructor(private route: ActivatedRoute){}
  ngOnInit(){
    console.log(this.route);
    
    this.route.params.subscribe((data)=>{
      console.log(data);
      
    })
  }
}
