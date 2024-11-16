// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8kp-KvP1M9NM22eR91okOwtG_M2-5veg",
  authDomain: "dashboard-8c38b.firebaseapp.com",
  projectId: "dashboard-8c38b",
  storageBucket: "dashboard-8c38b.appspot.com",
  messagingSenderId: "813591625536",
  appId: "1:813591625536:web:a62a8b66c4c6664d5304a5",
  measurementId: "G-BDBFGVHTQF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);