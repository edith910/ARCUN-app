// firebaseConfig.ts
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database'; // para Realtime Database


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
const database = getDatabase(app);

export { database };
