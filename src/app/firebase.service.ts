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

      const event_date = eventSnap.get("date").toDate()

      let day = event_date.getDate()
      let month = event_date.getMonth() + 1
      let year = event_date.getFullYear()
      let hours = event_date.getHours()
      let minutes = event_date.getMinutes()

      day = this.formatDayTime(day)
      month = this.formatDayTime(month)
      hours = this.formatDayTime(hours)
      minutes = this.formatDayTime(minutes)
      
      const event_date_formatted = day + '.' + month + '.' + year.toString() + ' ' + hours + ':' + minutes

      booking_data_dict["event_date"] = event_date_formatted

      return booking_data_dict;
      
    } else {
      console.log("No such document!");
      return;
    }
  }

  async getEvents() {
    const querySnapshot = await getDocs(collection(db, "events"));
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
    });
  }

  async addBooking(first_name: string, last_name: string, ) {
    const docRef = await addDoc(collection(db, "messages"), {
    });
  }

  async deleteBooking(id: string) {
    await deleteDoc(doc(db, "bookings", id));
  }

  formatDayTime(number: any){
    if(number < 10){
      return '0' + number.toString()
    }
    else{
      return number.toString()
    }
  }
}
