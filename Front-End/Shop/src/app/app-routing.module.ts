import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { CartComponent } from './feature/cart/cart.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  { 
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
  {
    path: 'auth', 
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule)
  },
  {
    path: 'product', 
    loadChildren: () => import('./feature/feature.module').then((m) => m.FeatureModule)
  },
  {
    path: 'cart', component: CartComponent
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
