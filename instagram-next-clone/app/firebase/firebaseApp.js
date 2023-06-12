import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDG-TeRiVffOdguhmaoMf84LkzTesxCLwo",
  authDomain: "instagram-clone-nextjs-f15e5.firebaseapp.com",
  projectId: "instagram-clone-nextjs-f15e5",
  storageBucket: "instagram-clone-nextjs-f15e5.appspot.com",
  messagingSenderId: "113439342497",
  appId: "1:113439342497:web:6220afc3e3cc4bc89255e0",
  measurementId: "G-7NF6BX60GN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics();
const db = getFirestore(app);
const auth = getAuth();
const storage = getStorage();

export { app, analytics, db, auth, storage};

export const initFirebase = () => {
  return app;
}