// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1mFLw6xM5jwRd-Evp57pW_6mUvPghUt4",
  authDomain: "gg-store-fd532.firebaseapp.com",
  projectId: "gg-store-fd532",
  storageBucket: "gg-store-fd532.appspot.com",
  messagingSenderId: "258201073129",
  appId: "1:258201073129:web:e9c23ee0a37ca29f168778",
  measurementId: "G-LNQ4E2JFRH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);