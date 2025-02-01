import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { collection, addDoc } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDOtjsyhgduN-0NevU07VvHlwfqFToMS1g",
  authDomain: "adi-portofolio-f8655.firebaseapp.com",
  projectId: "adi-portofolio-f8655",
  storageBucket: "adi-portofolio-f8655.firebasestorage.app",
  messagingSenderId: "1075409911375",
  appId: "1:1075409911375:web:ca9c7fb6cd5d72916bb43a",
};

// Initialize with a unique name
const app = initializeApp(firebaseConfig, 'comments-app');
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage, collection, addDoc };
