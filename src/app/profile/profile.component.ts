import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent {
  userName: string | null = '';
  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    const data = this.route.snapshot.queryParamMap.get('data');
    if (data) {
      const student = JSON.parse(data);
      console.log('Received student:', student);
    }
  }
}
