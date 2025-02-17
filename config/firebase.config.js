// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAnalytics} from "firebase/analytics"
import { get } from "http";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "resumegenius-472f8.firebaseapp.com",
  projectId: "resumegenius-472f8",
  storageBucket: "resumegenius-472f8.appspot.com",
  messagingSenderId: "955766132444",
  appId: "1:955766132444:web:1d2fe85e8740a6fe5dae19"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app)