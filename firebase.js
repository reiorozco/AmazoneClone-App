import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCK7651_Lo9CmbakzcW9mdJJHosRM43_uQ",
  authDomain: "amaclone--bd653.firebaseapp.com",
  projectId: "amaclone--bd653",
  storageBucket: "amaclone--bd653.appspot.com",
  messagingSenderId: "661034000559",
  appId: "1:661034000559:web:a5f161d60edcbf19e9b45a",
  measurementId: "G-YH1MWLRDZ3",
};

const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);
export const auth = getAuth();
