// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAL676yxbaQFDiBbdb2qsHxaNbVxKMRGQ4",
  authDomain: "medassist-6564b.firebaseapp.com",
  projectId: "medassist-6564b",
  storageBucket: "medassist-6564b.appspot.com",
  messagingSenderId: "568738602944",
  appId: "1:568738602944:web:1ed2e7b000fb57f495b225"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();