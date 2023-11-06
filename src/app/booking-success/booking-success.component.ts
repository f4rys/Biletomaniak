import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirebaseService } from '../firebase.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-booking-success',
  templateUrl: './booking-success.component.html',
  styleUrls: ['./booking-success.component.scss']
})
export class BookingSuccessComponent {
  booking_id: any;
  constructor(private firebase_service: FirebaseService, private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit() {
      this.activatedRoute.queryParams.subscribe((booking_id) => {
      this.booking_id = booking_id
      });
  }
}
