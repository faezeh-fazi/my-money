import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDpPaqUIQ8uYd-NSMjvTYbwKA7XkXajK7M",
  authDomain: "mymoney-b3cc4.firebaseapp.com",
  projectId: "mymoney-b3cc4",
  storageBucket: "mymoney-b3cc4.appspot.com",
  messagingSenderId: "147985555118",
  appId: "1:147985555118:web:e2ea8f5ea8abad1b58d73f",
};

//   init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore , projectAuth, timestamp};
