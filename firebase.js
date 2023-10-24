// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxwDEnzYF3alIjrDdbpPPm1pjGEA9tqLI",
  authDomain: "itgirlstests.firebaseapp.com",
  projectId: "itgirlstests",
  storageBucket: "itgirlstests.appspot.com",
  messagingSenderId: "698007698567",
  appId: "1:698007698567:web:8d6f58ea3acb78f4a9cc22",
  measurementId: "G-Q0M7GHY3SR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);