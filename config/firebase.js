// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxGn-Aru4znAoMjcZQJ9du7wnN4gJ_Djc",
  authDomain: "falque-8a6d7.firebaseapp.com",
  projectId: "falque-8a6d7",
  storageBucket: "falque-8a6d7.appspot.com",
  messagingSenderId: "725424729563",
  appId: "1:725424729563:web:29568b0b6946f4ba744bfe",
  measurementId: "G-VE7D1M67D7"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);;
export default db