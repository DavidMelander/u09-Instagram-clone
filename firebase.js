// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-PC6sp8peY-1DldQEQnjs3aV8nv_fcIg",
  authDomain: "u09-insta.firebaseapp.com",
  projectId: "u09-insta",
  storageBucket: "u09-insta.appspot.com",
  messagingSenderId: "613279352854",
  appId: "1:613279352854:web:004827d5606481ab9d4d37",
  measurementId: "G-3FD8ENNXW2"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();


export { app, db, storage };