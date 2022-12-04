// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmDBChF4E7AplUQfSrOoV4nCaA1pqqqSI",
  authDomain: "attendance01-43177.firebaseapp.com",
  projectId: "attendance01-43177",
  storageBucket: "attendance01-43177.appspot.com",
  messagingSenderId: "1021557621021",
  appId: "1:1021557621021:web:96c47eafcb2abdf5ac21f4",
  measurementId: "G-HG3MMLLWY8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);