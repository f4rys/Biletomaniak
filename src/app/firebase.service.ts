import { Injectable } from '@angular/core';
import { collection, addDoc } from "firebase/firestore"; 
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

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
}
