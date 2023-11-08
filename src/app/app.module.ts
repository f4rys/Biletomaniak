import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { BookFormComponent } from './book-form/book-form.component';
import { DeleteBookingFormComponent } from './delete-booking-form/delete-booking-form.component';
import { StartComponent } from './start/start.component';
import { SuccessComponent } from './success/success.component';
import { ShowBookingComponent } from './show-booking/show-booking.component';
import { BookingSuccessComponent } from './booking-success/booking-success.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContactFormComponent,
    BookFormComponent,
    DeleteBookingFormComponent,
    StartComponent,
    SuccessComponent,
    ShowBookingComponent,
    BookingSuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
