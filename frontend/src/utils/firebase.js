
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewai-66ba1.firebaseapp.com",
  projectId: "interviewai-66ba1",
  storageBucket: "interviewai-66ba1.firebasestorage.app",
  messagingSenderId: "758680924020",
  appId: "1:758680924020:web:3ba20efee8a293aa450621"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export {auth , provider}