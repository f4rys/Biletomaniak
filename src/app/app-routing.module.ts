import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BookFormComponent } from './book-form/book-form.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { DeleteBookingFormComponent } from './delete-booking-form/delete-booking-form.component';
import { StartComponent } from './start/start.component';
import { ContactSuccessComponent } from './contact-success/contact-success.component';

const routes: Routes = [
  { path: '', component: StartComponent },
  { path: 'contact-success', component: ContactSuccessComponent },
  { path: 'book-form-component', component: BookFormComponent },
  { path: 'contact-form-component', component: ContactFormComponent },
  { path: 'delete-booking-form-component', component: DeleteBookingFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
