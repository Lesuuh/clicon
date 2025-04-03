// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCuHfVWdU_WgCE66BEYZ7FPNDIxGaW9X5E",
  authDomain: "uk-clicon.firebaseapp.com",
  projectId: "uk-clicon",
  storageBucket: "uk-clicon.firebasestorage.app",
  messagingSenderId: "759563009503",
  appId: "1:759563009503:web:d5a196d12624709cb0d86a",
  measurementId: "G-2FV77NR5S8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore(app);
export default app;
