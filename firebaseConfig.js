import { initializeApp } from "firebase/app";
import {addDoc, collection, doc, getFirestore, onSnapshot, query} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAjRXa8x097C0uFrHM2S4FH1nCJymEyDCE",
    authDomain: "earthy-392113.firebaseapp.com",
    projectId: "earthy-392113",
    storageBucket: "earthy-392113.appspot.com",
    messagingSenderId: "191723511562",
    appId: "1:191723511562:web:53da1381abfeea27ffa4f3",
    measurementId: "G-WSVP70JL6Y"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);