import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BookFormComponent } from './book-form/book-form.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { DeleteBookingFormComponent } from './delete-booking-form/delete-booking-form.component';
import { StartComponent } from './start/start.component';
import { SuccessComponent } from './success/success.component';
import { ShowBookingComponent } from './show-booking/show-booking.component';

const routes: Routes = [
  { path: '', component: StartComponent },
  { path: 'show-booking', component: ShowBookingComponent },
  { path: 'success', component: SuccessComponent },
  { path: 'book-form-component', component: BookFormComponent },
  { path: 'contact-form-component', component: ContactFormComponent },
  { path: 'delete-booking-form-component', component: DeleteBookingFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
