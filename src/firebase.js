import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDj4jK-2P3h5nNZmBU-Ts6-56lpq7_JtUQ",
  authDomain: "clone-ec4b1.firebaseapp.com",
  projectId: "clone-ec4b1",
  storageBucket: "clone-ec4b1.appspot.com",
  messagingSenderId: "135076260735",
  appId: "1:135076260735:web:46e4869b59ab40fe4fc84a",
  measurementId: "G-Y80MHGLNL4"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export {db, auth};