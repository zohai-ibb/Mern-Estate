// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsSVZHLTni0K64nxRrpIilW7LTPTFCTS0",
  authDomain: "mern-estate-86b32.firebaseapp.com",
  projectId: "mern-estate-86b32",
  storageBucket: "mern-estate-86b32.appspot.com",
  messagingSenderId: "628582879708",
  appId: "1:628582879708:web:e4e99c35d6378411403f19"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);