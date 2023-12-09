// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyD5j8O7gdQhAAwpM9eenD9fHrOAiDMdPUY",
  authDomain: "airbnb-12d13.firebaseapp.com",
  projectId: "airbnb-12d13",
  storageBucket: "airbnb-12d13.appspot.com",
  messagingSenderId: "217035749954",
  appId: "1:217035749954:web:54decb3fd99a3396020bdb",
  measurementId: "G-E0181KKBDV"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);