import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirebaseService } from '../firebase.service';
import { Router } from "@angular/router";
import {Clipboard} from '@angular/cdk/clipboard';

@Component({
  selector: 'app-booking-success',
  templateUrl: './booking-success.component.html',
  styleUrls: ['./booking-success.component.scss']
})
export class BookingSuccessComponent {
  booking_id: any;
  copyMessage = "Kopiuj"
  constructor(private firebase_service: FirebaseService, private activatedRoute: ActivatedRoute, private router: Router, private clipboard: Clipboard) {}

  ngOnInit() {
      this.activatedRoute.queryParams.subscribe((booking_id) => {
      this.booking_id = booking_id
      });
  }

  copyBookingID() {
    this.clipboard.copy(this.booking_id.booking_id);
    this.copyMessage = "Skopiowano"
  }

}
