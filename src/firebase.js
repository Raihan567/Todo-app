// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdC4bFqBE-pI5PdY29jGSuY9wN4YazInw",
  authDomain: "todo-firebase-app-58963.firebaseapp.com",
  projectId: "todo-firebase-app-58963",
  storageBucket: "todo-firebase-app-58963.appspot.com",
  messagingSenderId: "668047365791",
  appId: "1:668047365791:web:b4e0b483ddcc2e76e2b4aa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
