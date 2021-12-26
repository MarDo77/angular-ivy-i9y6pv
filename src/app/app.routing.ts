import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { MyCoinsComponent } from './coins';
import { CoinDetailComponent } from './coins/coin';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'home', component: HomeComponent },
  { path: 'coins', component: MyCoinsComponent },
  //  { path: 'coin/:id', component: AboutComponent },
  { path: 'coin/:id', component: CoinDetailComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' },
];

export const appRoutingModule = RouterModule.forRoot(routes);
