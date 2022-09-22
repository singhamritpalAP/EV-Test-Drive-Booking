import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ExpPipe } from './exp.pipe';
import { PrenamePipe } from './prename.pipe';
import { AgePipe } from './age.pipe';
import { HeaderComponent } from './header/header.component';
import { ProductsComponent } from './products/products.component';
import { RouterModule } from '@angular/router';
import { LogoutComponent } from './logout/logout.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { BookingComponent } from './booking/booking.component';
import { TeslaComponent } from './tesla/tesla.component';
import { BmwComponent } from './bmw/bmw.component';
import { BugattiComponent } from './bugatti/bugatti.component';
import { PorscheComponent } from './porsche/porsche.component';
import { MercedesComponent } from './mercedes/mercedes.component';
import { LamboComponent } from './lambo/lambo.component';
import { ShowusersComponent } from './showusers/showusers.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { MybookingsComponent } from './mybookings/mybookings.component';
import { Header2Component } from './header2/header2.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ExpPipe,
    PrenamePipe,
    AgePipe,
    HeaderComponent,
    LogoutComponent,
    RegisterComponent,
    ProductsComponent,
    BookingComponent,
    TeslaComponent,
    BmwComponent,
    BugattiComponent,
    PorscheComponent,
    MercedesComponent,
    LamboComponent,
    ShowusersComponent,
    MyprofileComponent,
    MybookingsComponent,
    Header2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
