import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirebaseService } from '../firebase.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-show-booking',
  templateUrl: './show-booking.component.html',
  styleUrls: ['./show-booking.component.scss']
})
export class ShowBookingComponent implements OnInit {

  booking_data_dict: any;
  constructor(private firebase_service: FirebaseService, private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit() {
      this.activatedRoute.queryParams.subscribe((data) => {
      this.booking_data_dict = data;
      });
  }

  async delete(){
    await this.firebase_service.deleteBooking(this.booking_data_dict.id).then(() => {
    this.router.navigate(['/success'])
    });
  }
  
}