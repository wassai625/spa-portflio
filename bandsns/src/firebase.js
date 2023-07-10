// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzLHqMEGu4wKo84kNpkBBDvZ2QezHdsiQ",
  authDomain: "bandsns-c039b.firebaseapp.com",
  projectId: "bandsns-c039b",
  storageBucket: "bandsns-c039b.appspot.com",
  messagingSenderId: "173294159265",
  appId: "1:173294159265:web:505681fee23fa243dcf7e0",
  measurementId: "G-4E7RS06Z9G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;