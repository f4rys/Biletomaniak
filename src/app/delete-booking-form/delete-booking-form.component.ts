import { Component } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-delete-booking-form',
  templateUrl: './delete-booking-form.component.html',
  styleUrls: ['./delete-booking-form.component.scss']
})
export class DeleteBookingFormComponent {
  constructor(private firebase_service: FirebaseService, private router: Router) {}

  booking_id!: string;
  errorMessage: string | null = null;

  async onSubmit() {
    try {
      const data = await this.firebase_service.getBooking(this.booking_id);
      this.router.navigate(['/show-booking'], { queryParams: data });
      this.errorMessage = null;
    } catch (error) {
      this.errorMessage = 'Nie odnaleziono rezerwacji. Sprawdź poprawność identyfikatora lub skontaktuj się z administracją.';
    }
  }
}
