// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore as getFirestoreSDK } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const firestoreDB = getFirestoreSDK(firebaseApp);

// Analytics can be initialized here if needed
// const analytics = getAnalytics(firebaseApp);

export default function getFirestore() {
  return firestoreDB;
}
// Import the functions you need from the SDKs you need
// import { initializeApp, getApps } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// let firebaseApp;
// let firestoreDB;

// if (typeof window !== 'undefined') {
//   const firebaseConfig = {
//     apiKey: process.env.FIREBASE_API_KEY,
//     authDomain: process.env.FIREBASE_AUTH_DOMAIN,
//     projectId: process.env.FIREBASE_PROJECT_ID,
//     storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
//     appId: process.env.FIREBASE_APP_ID,
//     measurementId: process.env.FIREBASE_MEASUREMENT_ID,
//   };

//   if (!firebaseApp) {
//     firebaseApp = initializeApp(firebaseConfig);
//     firestoreDB = getFirestore(firebaseApp);
//   }
// }

// export default function getFirestore() {
//   return firestoreDB;
// }





// const firebaseConfig = {
//   apiKey: process.env.FIREBASE_API_KEY,
//   authDomain: process.env.FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.FIREBASE_PROJECT_ID,
//   storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.FIREBASE_APP_ID,
//   measurementId: process.env.FIREBASE_MEASUREMENT_ID,
// };

// new changes
// Initialize Firebase
// let app;
// let db;

// if (typeof window !== "undefined") {
//   // Check if Firebase app already exists to avoid re-initialization
//   if (!getApps().length) {
//     app = initializeApp(firebaseConfig);
//     // db = getFirestore(app);
//   } else {
//     app = getApps()[0];
//   }
//   db = getFirestore(app);
// }

// // old edits
// // const app = initializeApp(firebaseConfig);
// // const analytics = getAnalytics(app);
// // const db = getFirestore(app);
// // vineet's change
// export default db;