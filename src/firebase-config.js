// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from 'firebase/auth'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API,
  authDomain: process.env.REACT_APP_AUTH,
  projectId: process.env.REACT_APP_PROJ,
  storageBucket: process.env.REACT_APP_STOR,
  messagingSenderId:process.env.REACT_APP_MESS,
  appId: process.env.REACT_APP_APP,
  measurementId: process.env.REACT_APP_MEAS
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app) //pass authentication to app; export across project