import { Component} from '@angular/core';
import { FirebaseService } from '../firebase.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
})
export class ContactFormComponent {
  constructor(private firebase_service: FirebaseService, private router: Router) {}
    
  email!: string;
  message!: string;

  onSubmit() {
    this.firebase_service.addMessage(this.email, this.message).then(() => {
    this.router.navigate(['/contact-success'])
    });
  }
}
