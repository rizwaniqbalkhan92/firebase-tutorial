// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth}   from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7btuIrgnpg1MvkOcKILhcp11obo7DnTs",
  authDomain: "fir-rizcode92.firebaseapp.com",
  projectId: "fir-rizcode92",
  storageBucket: "fir-rizcode92.appspot.com",
  messagingSenderId: "366358791297",
  appId: "1:366358791297:web:b1c4d6440c34d4e0727980"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);