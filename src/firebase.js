import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage";
import { collection, addDoc, getDocs } from "@firebase/firestore"; // Perbarui ini


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUNZoh-CgN4Yfwn76TTEf6TLLm1845Zig",
  authDomain: "portofolioadi-8f0be.firebaseapp.com",
  projectId: "portofolioadi-8f0be",
  storageBucket: "portofolioadi-8f0be.firebasestorage.app",
  messagingSenderId: "79188580990",
  appId: "1:79188580990:web:d55c15bbad1e7c4ca5962f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app); // Inisialisasi storage

export { db, collection, addDoc };
