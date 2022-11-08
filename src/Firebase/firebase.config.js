// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwHtvEYXwqeFKitxwrgNJv2eo3fpnytpw",
  authDomain: "psycare-auth.firebaseapp.com",
  projectId: "psycare-auth",
  storageBucket: "psycare-auth.appspot.com",
  messagingSenderId: "867324419656",
  appId: "1:867324419656:web:9103b7693776155ebe427d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;