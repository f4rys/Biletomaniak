import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirebaseService } from '../firebase.service';
import { Router } from '@angular/router';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-booking-success',
  templateUrl: './booking-success.component.html',
  styleUrls: ['./booking-success.component.scss']
})
export class BookingSuccessComponent implements OnInit {
  booking_id: any;
  copyMessage = "Kopiuj";
  
  constructor(
    private firebase_service: FirebaseService, 
    private activatedRoute: ActivatedRoute, 
    private router: Router, 
    private clipboard: Clipboard
  ) {}

  ngOnInit() {
    this.activatedRoute.queryParamMap.subscribe((params) => {
      this.booking_id = params.get('booking_id');
    });
  }

  copyBookingID() {
    this.clipboard.copy(this.booking_id);
    this.copyMessage = "Skopiowano";
  }
}
