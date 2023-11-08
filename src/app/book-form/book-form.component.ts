import { Component } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent {
  constructor(private firebase_service: FirebaseService, private router: Router) {}

  events: any

  first_name!: string;
  last_name!: string;
  phone_number!: string;
  email!: string;
  event_id!: string;
  
  async ngOnInit() {
    this.events = await this.firebase_service.getEvents()
    console.log(this.events)
    };

  async onSubmit() {
      const booking_id = await this.firebase_service.addBooking(this.first_name, this.last_name, this.email, this.phone_number, this.event_id)
      this.router.navigate(['/booking-success'], { queryParams: {booking_id} });
    }

}
