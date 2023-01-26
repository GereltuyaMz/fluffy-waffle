// import * as firebase from 'firebase/app';
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore"
// import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCmDBChF4E7AplUQfSrOoV4nCaA1pqqqSI",
  authDomain: "attendance01-43177.firebaseapp.com",
  projectId: "attendance01-43177",
  storageBucket: "attendance01-43177.appspot.com",
  messagingSenderId: "1021557621021",
  appId: "1:1021557621021:web:96c47eafcb2abdf5ac21f4",
  measurementId: "G-HG3MMLLWY8"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);