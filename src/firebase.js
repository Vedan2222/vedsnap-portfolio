// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// ✅ Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCWuLVf1Q2tZKrkNw7rsI5E7acDXr094F4",
  authDomain: "vedsnap-portfolio.firebaseapp.com",
  projectId: "vedsnap-portfolio",
  storageBucket: "vedsnap-portfolio.appspot.com", // ✅ corrected
  messagingSenderId: "499661647582",
  appId: "1:499661647582:web:30ac213d87017f43ad9c4f"
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Export services
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
