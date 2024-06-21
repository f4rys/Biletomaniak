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
  id!: any;
  first_name!: string | null;
  last_name!: string | null;
  phone_number!: string | null;
  email!: string | null;
  event_title!: string | null;
  event_city!: string | null;
  event_date!: string | null;
  constructor(private firebase_service: FirebaseService, private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.activatedRoute.queryParamMap.subscribe((params) => { 
        this.id = params.get('id');
        this.first_name = params.get('first_name');
        this.last_name = params.get('last_name');
        this.phone_number = params.get('phone_number');
        this.email = params.get('email');
        this.event_title = params.get('event_title');
        this.event_city = params.get('event_city');
        this.event_date = params.get('event_date');
    });
  }
  async delete(){
    await this.firebase_service.deleteBooking(this.id).then(() => {
    this.router.navigate(['/success'])
    });
  }

}