import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4QHFC7D_QtvtlTnXcEBza540fcBWwodA",
  authDomain: "ecommerce-react-86ae6.firebaseapp.com",
  projectId: "ecommerce-react-86ae6",
  storageBucket: "ecommerce-react-86ae6.appspot.com",
  messagingSenderId: "1057786854627",
  appId: "1:1057786854627:web:903335c255a7882df299d6",
  measurementId: "G-0RYS2KKV1L",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
