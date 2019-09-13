import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyC9AyUAW7gAqF_qv1XQU0KVtrtcsz40IL4",
  authDomain: "wholesalesite-ryley.firebaseapp.com",
  databaseURL: "https://wholesalesite-ryley.firebaseio.com",
  projectId: "wholesalesite-ryley",
  storageBucket: "",
  messagingSenderId: "377071757346",
  appId: "1:377071757346:web:26c841d6edb72560f2827b"
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const db = firebase.firestore();
