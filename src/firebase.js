import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage";
import { collection, addDoc, getDocs } from "@firebase/firestore"; // Perbarui ini


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFC9hm_NyYRI8prAhSIkbRatUHC_EXUAA",
  authDomain: "adi-portofolio.firebaseapp.com",
  projectId: "adi-portofolio",
  storageBucket: "adi-portofolio.firebasestorage.app",
  messagingSenderId: "656958630305",
  appId: "1:656958630305:web:f2ec9a3c4c963def5ec3e0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app); // Inisialisasi storage

export { db, collection, addDoc };
