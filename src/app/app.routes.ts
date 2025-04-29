import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileComponent } from './profile/profile.component';
import { DynamicRoutingUserByIdComponent } from './dynamic-routing-user-by-id/dynamic-routing-user-by-id.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Default route
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'profile', component: ProfileComponent },
  // !All about dynamic routing 
  { path: 'user/:id/:name', component: DynamicRoutingUserByIdComponent },
  
  { path: '**',component: PageNotFoundComponent, pathMatch: 'full' },






];
