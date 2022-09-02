import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC3JBbOiwHiQ0cCShtE0Lz9sRa5yyGB-fw",
  authDomain: "fir-auth-1234.firebaseapp.com",
  projectId: "fir-auth-1234",
  storageBucket: "fir-auth-1234.appspot.com",
  messagingSenderId: "159170902784",
  appId: "1:159170902784:web:89a291cdd2387995e791e5",
  measurementId: "G-T77WX2TLFT"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth};