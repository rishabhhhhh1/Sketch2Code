// 📂 FILE: frontend/lib/firebase.ts
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// 👇👇👇 PASTE THE "firebaseConfig" OBJECT YOU COPIED FROM GOOGLE BELOW 👇👇👇
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD32DdkoT_gjZ-98QyRc2nXjA0fbBkoV9w",
  authDomain: "sketch2kode.firebaseapp.com",
  projectId: "sketch2kode",
  storageBucket: "sketch2kode.firebasestorage.app",
  messagingSenderId: "1091549457312",
  appId: "1:1091549457312:web:4b2094650aafc66a1f92c5",
  measurementId: "G-1L7XXDGV9G"
};
// 👆👆👆 END OF CONFIG 👆👆👆

// Initialize Firebase (This "Singleton" pattern prevents Next.js errors)
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Export the tools so the rest of your app can use them
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);