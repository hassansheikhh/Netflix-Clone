import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyBArFY2R2frX9A4bNxYM62XqR8g95wMA2A",
  authDomain: "react-imdb-clone.firebaseapp.com",
  projectId: "react-imdb-clone",
  storageBucket: "react-imdb-clone.appspot.com",
  messagingSenderId: "21505516362",
  appId: "1:21505516362:web:edbb6685016c6bf32057b3",
  measurementId: "G-Y92DLCL75W"
};


const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);