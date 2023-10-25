import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { BookFormComponent } from './book-form/book-form.component';
import { DeleteBookingFormComponent } from './delete-booking-form/delete-booking-form.component';
import { StartComponent } from './start/start.component';

const routes: Routes = [];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContactFormComponent,
    BookFormComponent,
    DeleteBookingFormComponent,
    StartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
