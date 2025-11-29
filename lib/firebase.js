// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaeSZxEgDvdNCae-G-S-dkUHt62SG6Xlg",
  authDomain: "cranmarket-f4877.firebaseapp.com",
  projectId: "cranmarket-f4877",
  storageBucket: "cranmarket-f4877.firebasestorage.app",
  messagingSenderId: "66771253484",
  appId: "1:66771253484:web:3d92fa610581672c820dc9"
};

// Initialize Firebase only on client side
let app;
let db;

if (typeof window !== 'undefined') {
  app = initializeApp(firebaseConfig);
  db = getFirestore(app);
}

export { db };