// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBEo6rlfdYpWWXptCALnEApz3f75hfRtZ0",
  authDomain: "netflix-b0ff4.firebaseapp.com",
  projectId: "netflix-b0ff4",
  storageBucket: "netflix-b0ff4.appspot.com",
  messagingSenderId: "646105337670",
  appId: "1:646105337670:web:304fb9f28293200bfe9f47",
  measurementId: "G-EJ573HQR15"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth= getAuth()