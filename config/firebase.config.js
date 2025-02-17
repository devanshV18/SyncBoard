// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "syncboard-6c28e.firebaseapp.com",
  projectId: "syncboard-6c28e",
  storageBucket: "syncboard-6c28e.firebasestorage.app",
  messagingSenderId: "14758827953",
  appId: "1:14758827953:web:ac85577d0cd9c6ff358f90",
  measurementId: "G-03903FW25G"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);