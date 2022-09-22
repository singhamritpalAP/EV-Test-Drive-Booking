import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { BmwComponent } from './bmw/bmw.component';
import { BookingComponent } from './booking/booking.component';
import { BugattiComponent } from './bugatti/bugatti.component';
import { LamboComponent } from './lambo/lambo.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { MercedesComponent } from './mercedes/mercedes.component';
import { MybookingsComponent } from './mybookings/mybookings.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { PorscheComponent } from './porsche/porsche.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';
import { ShowusersComponent } from './showusers/showusers.component';
import { TeslaComponent } from './tesla/tesla.component';

const routes: Routes = [
  {path: 'login', component:LoginComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'booking',canActivate:[AuthGuard], component:BookingComponent}, 
  {path: 'myBookings',canActivate:[AuthGuard], component:MybookingsComponent}, 
  {path: 'profile',canActivate:[AuthGuard], component:MyprofileComponent}, 
  {path: 'product', component:ProductsComponent},
  {path: 'logout', canActivate:[AuthGuard], component: LogoutComponent},
  {path: '',  redirectTo: '/login', pathMatch: 'full' },
  //{path: '**',  redirectTo: '/tesla', pathMatch: 'full' },
  {path: 'tesla', component:TeslaComponent},
  {path: 'bmw', component:BmwComponent},
  {path: 'bugatti', component:BugattiComponent},
  {path: 'lambo', component:LamboComponent},
  {path: 'mercedes', component:MercedesComponent},
  {path: 'porsche', component:PorscheComponent},
  {path: 'showUser', canActivate:[AuthGuard], component:ShowusersComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
