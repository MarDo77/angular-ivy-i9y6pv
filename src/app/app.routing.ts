import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home';
import { AboutComponent } from './about';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: AboutComponent },
  { path: 'home', component: HomeComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' },
];

export const appRoutingModule = RouterModule.forRoot(routes);
