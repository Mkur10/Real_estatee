// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "dreamheaven-feb5c.firebaseapp.com",
  projectId: "dreamheaven-feb5c",
  storageBucket: "dreamheaven-feb5c.appspot.com",
  messagingSenderId: "121230541377",
  appId: "1:121230541377:web:89e9046c1df79f531bbcc0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);