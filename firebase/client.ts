// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps} from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXZ0y4uo54CfemewY2lg-vGzciEKe_PGk",
  authDomain: "preptalk-f0e0c.firebaseapp.com",
  projectId: "preptalk-f0e0c",
  storageBucket: "preptalk-f0e0c.firebasestorage.app",
  messagingSenderId: "456646255964",
  appId: "1:456646255964:web:69941293b0e9e57dbe8d99",
  measurementId: "G-30Q8QM0CN2"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);