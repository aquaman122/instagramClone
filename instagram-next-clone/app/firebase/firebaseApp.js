import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArDw8WiVGqNlkPeJnGzFi80pO_Vrpr41I",
  authDomain: "instagram-clone-83e02.firebaseapp.com",
  databaseURL: "https://instagram-clone-83e02-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "instagram-clone-83e02",
  storageBucket: "instagram-clone-83e02.appspot.com",
  messagingSenderId: "392930073967",
  appId: "1:392930073967:web:d65ea67f7cbc213814dc9a",
  measurementId: "G-R1T339SWNB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };

export const initFirebase = () => {
  return app;
}