import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  student = {
    name: 'Pravin Sharma',
    age: 22,
    rollNumber: 'CS202501',
    department: 'Computer Engineering',
    email: 'pravin.sharma@example.com',
    phone: '9876543210',
    address: {
      city: 'Pune',
      state: 'Maharashtra',
      country: 'India'
    },
    isEnrolled: true
  };
  

  constructor(private route: Router){}
  navigateToProfile(student: any) {
    const studentString = JSON.stringify(student);
    this.route.navigate(['profile'], {
      queryParams: { data: studentString }
    });
  }




  // dynamic routing
  users =[
    {
      id: 1,
      name: 'Alex',
      age : 24
    },
    {
      id: 2,
      name: 'Bob',
      age : 24
    },
    {
      id: 3,
      name: 'Mathew',
      age : 35
    },
    {
      id: 4,
      name: 'BoB Marli',
      age : 24
    },
  ]

  
  
}
