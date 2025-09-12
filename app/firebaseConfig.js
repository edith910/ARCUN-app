// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAd2z1igkCS_HH1RCF4oqDsSgyqpq_qmm4",
  authDomain: "bitarcun.firebaseapp.com",
  projectId: "bitarcun",
  storageBucket: "bitarcun.firebasestorage.app",
  messagingSenderId: "949008430377",
  appId: "1:949008430377:web:3ea8111aa072b23c2e7338"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);