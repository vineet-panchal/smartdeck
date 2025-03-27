// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACtXOGgInug-Pw0DPrNSjxkulxdhvoHNc",
  authDomain: "smartdeck-draft.firebaseapp.com",
  projectId: "smartdeck-draft",
  storageBucket: "smartdeck-draft.firebasestorage.app",
  messagingSenderId: "438446216141",
  appId: "1:438446216141:web:6a19620c789504809cea84",
  measurementId: "G-0SGN9MTP4G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export default db;