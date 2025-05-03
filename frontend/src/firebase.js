// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCQepQfeMttVW-AawAtPcHZvjVbyT7bcfU",
    authDomain: "nextchapte.firebaseapp.com",
    projectId: "nextchapte",
    storageBucket: "nextchapte.firebasestorage.app",
    messagingSenderId: "255152143751",
    appId: "1:255152143751:web:0be31538833e72699e6722"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);