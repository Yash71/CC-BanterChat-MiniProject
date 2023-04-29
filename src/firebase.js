// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdDYCTQXNwUWLgis4rzcThdUPWm8G2ISY",
  authDomain: "cc-chat-e372e.firebaseapp.com",
  projectId: "cc-chat-e372e",
  storageBucket: "cc-chat-e372e.appspot.com",
  messagingSenderId: "565402696548",
  appId: "1:565402696548:web:207c07a2335642bd7e9871"
};

// Initialize Firebase


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()