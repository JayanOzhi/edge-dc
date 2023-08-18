// Import the functions you need from the SDKs you need


import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";  // <-- Add this import

// TODO: Add SDKs for Firebase products that you want to use
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyOLG-FKDby4ikwmYbOJ80HcdQJdI8qP4",
  authDomain: "arduino-98c1c.firebaseapp.com",
  databaseURL: "https://arduino-98c1c.firebaseio.com",
  projectId: "arduino-98c1c",
  storageBucket: "arduino-98c1c.appspot.com",
  messagingSenderId: "843318646252",
  appId: "1:843318646252:web:01481aaea6259c94205cc9",
  measurementId: "G-N3Y22M2B3L"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getDatabase(app);  // <-- Initialize the database

export default firebaseConfig;