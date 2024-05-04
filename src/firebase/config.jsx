// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2o6MmKPoz45lBYqtKJjC5TzDOsJknbSY",
  authDomain: "coder-ceramicas.firebaseapp.com",
  projectId: "coder-ceramicas",
  storageBucket: "coder-ceramicas.appspot.com",
  messagingSenderId: "130105071549",
  appId: "1:130105071549:web:63a65d4e7075168e3164d4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)