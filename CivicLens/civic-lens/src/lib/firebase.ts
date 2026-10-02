"use client";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAllhxvVsXsWqZPJfnmFFCmIMwcQeUa1_o",
  authDomain: "frameai-22c7e.firebaseapp.com",
  projectId: "frameai-22c7e",
  storageBucket: "frameai-22c7e.firebasestorage.app",
  messagingSenderId: "870602768625",
  appId: "1:870602768625:web:43ec80e7d771f82d84a950",
  measurementId: "G-K0Y37MVQD7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, app };
