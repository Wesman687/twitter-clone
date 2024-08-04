// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAekZECmcvUYwq-ff_2_3eQyYGKuLPvmYY",
  authDomain: "twitter-clone-ee2f2.firebaseapp.com",
  projectId: "twitter-clone-ee2f2",
  storageBucket: "twitter-clone-ee2f2.appspot.com",
  messagingSenderId: "276948197996",
  appId: "1:276948197996:web:16cd05a146d537e5ad6e49"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage()