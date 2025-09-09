import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDhksSLw91FBSDwNg7BPXQOsqFneozxx00",
  authDomain: "myportfolio-90db2.firebaseapp.com",
  projectId: "myportfolio-90db2",
  storageBucket: "myportfolio-90db2.firebasestorage.app",
  messagingSenderId: "851861221190",
  appId: "1:851861221190:web:d1ed513f942b6c528a7f47",
  measurementId: "G-BLVP9PMB16"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
