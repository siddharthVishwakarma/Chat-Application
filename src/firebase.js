import firebase from "firebase/app";
import "firebase/auth";

// Firebase configuration
export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyAlx85cMuU5von6CYPyu51abtXRL1h-Ybo",
    authDomain: "chatmates-f5746.firebaseapp.com",
    projectId: "chatmates-f5746",
    storageBucket: "chatmates-f5746.appspot.com",
    messagingSenderId: "553022842299",
    appId: "1:553022842299:web:53828e1967f41ad2ea909e",
  })
  .auth();
