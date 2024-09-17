// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getDatabase} from "firebase/database";
import {getStorage,ref} from '@react-native-firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRVY2pVmf3EoeSYytefEVyvcT85WngmB8",
  authDomain: "tester-3bddf.firebaseapp.com",
  databaseURL: "https://tester-3bddf-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "tester-3bddf",
  storageBucket: "tester-3bddf.appspot.com",
  messagingSenderId: "809130676815",
  appId: "1:809130676815:web:5657fa7bf477816dc7903a",
  measurementId: "G-WNX72LX9ZX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export var BASE_URL = 'https://8c8adf8ec634-8753033307259823618.ngrok-free.app/images/';

//Initialize database
// export const db = getDatabase(app);