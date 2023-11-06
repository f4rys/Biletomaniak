import { Injectable } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, addDoc, getDoc, getDocs, deleteDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCU2r-Gedzm4j55AAEQO2y-CGnoVXjw9F0",
  authDomain: "biletomaniak.firebaseapp.com",
  projectId: "biletomaniak",
  storageBucket: "biletomaniak.appspot.com",
  messagingSenderId: "154003107113",
  appId: "1:154003107113:web:39333f9e56c16d76321b38",
  measurementId: "G-CQGRQZL70E"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  constructor() {}

  async addMessage(email: string, message: string) {
    const docRef = await addDoc(collection(db, "messages"), {
      email: email,
      message: message
    });
  }

  async getBooking(id: string) {
    const docRef = doc(db, "bookings", id);
    const docSnap = await getDoc(docRef);

    const eventRef = doc(db, "events", docSnap.get("event").id);
    const eventSnap = await getDoc(eventRef);
    
    if (docSnap.exists()) {

      const booking_data_dict: Record<string, string> = {};

      booking_data_dict["id"] = docSnap.id
      booking_data_dict["first_name"] = docSnap.get("first_name")
      booking_data_dict["last_name"] = docSnap.get("last_name")
      booking_data_dict["phone_number"] = docSnap.get("phone_number")
      booking_data_dict["email"] = docSnap.get("email")
      booking_data_dict["event_title"] = eventSnap.get("title")
      booking_data_dict["event_city"] = eventSnap.get("city")
      booking_data_dict["event_date"] = this.formatDateTime(eventSnap.get("date"))

      return booking_data_dict;
      
    } else {
      console.log("No such document!");
      return;
    }
  }

  async getEvents() {
    const querySnapshot = await getDocs(collection(db, "events"));
    let events: { id: string, description: string }[] = [];
    querySnapshot.forEach((doc) => {
      let event: { id: string; description: string } = {
        id: doc.id,
        description: doc.get("title") + " (" + doc.get("city") + ", " + this.formatDateTime(doc.get("date")) + ")"
      };
      events.push(event);
    });
    return events;
  }

  async addBooking(first_name: string, last_name: string, email: string, phone_number: string, event_id: string) {
    const eventRef = doc(db, "events", event_id);
    const docRef = await addDoc(collection(db, "bookings"), {
      first_name: first_name,
      last_name: last_name,
      email: email,
      phone_number: phone_number,
      event: eventRef
    });
    return docRef.id
  }

  async deleteBooking(id: string) {
    await deleteDoc(doc(db, "bookings", id));
  }

  addLeadingZero(number: any){
    if(number < 10){
      return '0' + number.toString()
    }
    else{
      return number.toString()
    }
  }

  formatDateTime(date: any){
    date = date.toDate()

    let day = date.getDate()
    let month = date.getMonth() + 1
    let year = date.getFullYear()
    let hours = date.getHours()
    let minutes = date.getMinutes()

    day = this.addLeadingZero(day)
    month = this.addLeadingZero(month)
    hours = this.addLeadingZero(hours)
    minutes = this.addLeadingZero(minutes)
    
    const date_formatted = day + '.' + month + '.' + year.toString() + ' ' + hours + ':' + minutes

    return date_formatted;
  }
}
