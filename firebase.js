// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5-wZgxKjbrB7Fg8ktpNx5l-8aVmfcVtc",
  authDomain: "inventory-management-92679.firebaseapp.com",
  projectId: "inventory-management-92679",
  storageBucket: "inventory-management-92679.appspot.com",
  messagingSenderId: "424429862122",
  appId: "1:424429862122:web:071e33e053ae8e6b3aeb93",
  measurementId: "G-JBMQT7ZLLC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export {firestore};