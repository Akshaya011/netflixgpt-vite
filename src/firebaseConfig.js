// src/firebaseConfig.js

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// Add other Firebase services you need

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCErjGxixjX8s_xUn-0FIPcQZuNiXV_dgg",
    authDomain: "netflixgpt-vite.firebaseapp.com",
    projectId: "netflixgpt-vite",
    storageBucket: "netflixgpt-vite.appspot.com",
    messagingSenderId: "186579961809",
    appId: "1:186579961809:web:8572568b2dce934b7842f0",
    measurementId: "G-K2QQTN0HD5"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { auth };
