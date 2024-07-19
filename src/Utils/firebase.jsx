// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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