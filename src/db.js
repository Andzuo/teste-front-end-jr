// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBwoAkd-MnF4cALbX8bxXxSjEAi9jihEuM",
  authDomain: "chat-882f1.firebaseapp.com",
  projectId: "chat-882f1",
  storageBucket: "chat-882f1.appspot.com",
  messagingSenderId: "32275209258",
  appId: "1:32275209258:web:a8ae724dfa4f252a6b3753",
  measurementId: "G-B29RL262Z5"
};

const db = initializeApp(firebaseConfig);
export default db;