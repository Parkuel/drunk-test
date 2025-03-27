import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, GoogleAuthProvider, signInAnonymously } from "firebase/auth";
import { getFirestore, Timestamp } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDjR39QjYjC6ZhaiWvCArHv004gHAYfH8w",
    authDomain: "drunktest-122b0.firebaseapp.com",
    projectId: "drunktest-122b0",
    storageBucket: "drunktest-122b0.firebasestorage.app",
    messagingSenderId: "227892030595",
    appId: "1:227892030595:web:29b180e7b5cb5133f03fb6",
    measurementId: "G-VTVJCL8WD3"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// Track the logged-in user
const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    onAuthStateChanged(auth, (user) => {
      resolve(user);
    }, reject);
  });
};

// Function for anonymous sign-in
const signInAnonymouslyUser = () => signInAnonymously(auth);

export { db, auth, googleProvider, signInAnonymouslyUser, getCurrentUser, Timestamp };
