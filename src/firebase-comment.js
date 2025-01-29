import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { collection, addDoc } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAUNZoh-CgN4Yfwn76TTEf6TLLm1845Zig",
    authDomain: "portofolioadi-8f0be.firebaseapp.com",
    projectId: "portofolioadi-8f0be",
    storageBucket: "portofolioadi-8f0be.firebasestorage.app",
    messagingSenderId: "79188580990",
    appId: "1:79188580990:web:49c320c3bab63f09a5962f",
};

// Initialize with a unique name
const app = initializeApp(firebaseConfig, 'comments-app');
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage, collection, addDoc };