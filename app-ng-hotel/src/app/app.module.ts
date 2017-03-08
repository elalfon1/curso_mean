import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DatepickerModule } from 'angular2-material-datepicker';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { BookingComponent } from './booking/booking.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';

import { AppRoutes } from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    BookingComponent,
    AdminComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DatepickerModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
