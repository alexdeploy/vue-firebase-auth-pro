// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdwOmWOb9q2VNPtFNQ-XQAhbPyX305OeY",
  authDomain: "vue-firebase-auth-pro.firebaseapp.com",
  projectId: "vue-firebase-auth-pro",
  storageBucket: "vue-firebase-auth-pro.appspot.com",
  messagingSenderId: "177557538338",
  appId: "1:177557538338:web:c5c1a5ee4d03a76db72c7b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app