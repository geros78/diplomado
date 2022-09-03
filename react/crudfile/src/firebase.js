import firebase from "firebase/app";
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBPgjBr0-YoEAkJjV1RZ0p9jYoaIzWkcso",
  authDomain: "crudfile.firebaseapp.com",
  projectId: "crudfile",
  storageBucket: "crudfile.appspot.com",
  messagingSenderId: "227518763608",
  appId: "1:227518763608:web:32c416500d73d71534f02d"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export{firebase}