// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkOwWNPPHto0aMiGmtUmh2o7eei-yb0xY",
  authDomain: "brand-shop-b4dfc.firebaseapp.com",
  projectId: "brand-shop-b4dfc",
  storageBucket: "brand-shop-b4dfc.appspot.com",
  messagingSenderId: "630578485358",
  appId: "1:630578485358:web:17612c2c062d005015ae7f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);