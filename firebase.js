// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACzJFn0Uog187Ov1MBvFDaBqxZrb2luiU",
  authDomain: "my-fresh-fruit.firebaseapp.com",
  projectId: "my-fresh-fruit",
  storageBucket: "my-fresh-fruit.appspot.com",
  messagingSenderId: "460914559845",
  appId: "1:460914559845:web:ca8b67b85fe7781f616f8c"
};

let app;

if(getApps().length === 0){
  app = initializeApp(firebaseConfig);
} else {
  app = getApp();
}


const db = getFirestore();
const auth = getAuth();

export {db, auth}