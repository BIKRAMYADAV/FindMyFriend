// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFeFLvo0q9KhNwGH04NqNM_Y6nWnx5EhE",
  authDomain: "findmyfriend-aa9ff.firebaseapp.com",
  projectId: "findmyfriend-aa9ff",
  storageBucket: "findmyfriend-aa9ff.appspot.com",
  messagingSenderId: "358333764482",
  appId: "1:358333764482:web:bbd57ee3101055c776f59b",
  measurementId: "G-516209TVFV",
  databaseURL : "https://findmyfriend-aa9ff-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);