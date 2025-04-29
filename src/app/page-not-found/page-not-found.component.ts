import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  imports: [],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.css'
})
export class PageNotFoundComponent {
  attemptedUrl: string = '';

  constructor(public router: Router) {}

  ngOnInit(): void {
    this.attemptedUrl = this.router.url;
  }
}
