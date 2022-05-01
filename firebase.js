 // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCr7WyQIkToTmCU1i-KB8RqiVuvyrFPC1A",
  authDomain: "i-fine-ecf4f.firebaseapp.com",
  projectId: "i-fine-ecf4f",
  storageBucket: "i-fine-ecf4f.appspot.com",
  messagingSenderId: "737382860885",
  appId: "1:737382860885:web:eef2d91184dc20e4182cdc",
  measurementId: "G-8KS8G94KRH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
// const analytics = getAnalytics(app);