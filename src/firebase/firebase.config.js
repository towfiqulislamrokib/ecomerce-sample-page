// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzBpa8e3PsHPcfkK4r1hhRe8XdwXS58Bk",
  authDomain: "ecomerce-sample-page.firebaseapp.com",
  projectId: "ecomerce-sample-page",
  storageBucket: "ecomerce-sample-page.appspot.com",
  messagingSenderId: "605168028196",
  appId: "1:605168028196:web:cd44316b0ab566c7b9a6b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;