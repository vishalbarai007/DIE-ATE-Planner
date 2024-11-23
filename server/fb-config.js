// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithRedirect, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRQhfdz24X8gjebMWCmnR15hqR2i7HpFY",
  authDomain: "die-ate.firebaseapp.com",
  projectId: "die-ate",
  storageBucket: "die-ate.firebasestorage.app",
  messagingSenderId: "657182440055",
  appId: "1:657182440055:web:752e04c76377092cf12472",
  measurementId: "G-YQGKP0P2XV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = GoogleAuthProvider(app);
signInWithRedirect(auth, provider);

