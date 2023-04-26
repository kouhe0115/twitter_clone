// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCjhpN4ZWSQezqe5KerYsZ6bP4kA1R4c_0",
    authDomain: "twitter-clone-1265c.firebaseapp.com",
    projectId: "twitter-clone-1265c",
    storageBucket: "twitter-clone-1265c.appspot.com",
    messagingSenderId: "366884315082",
    appId: "1:366884315082:web:741e13fb5d2a9cadf83933"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default db;