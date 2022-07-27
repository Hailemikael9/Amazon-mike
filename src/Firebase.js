// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import "firebase/compat/auth"
import "firebase/compat/firestore"
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxULnE3_vOAFtkU3APB8L-67yq4JFsekE",
  authDomain: "mike-f6b2f.firebaseapp.com",
  projectId: "mike-f6b2f",
  storageBucket: "mike-f6b2f.appspot.com",
  messagingSenderId: "270513854335",
  appId: "1:270513854335:web:999784411b6013cc2cec4a",
  measurementId: "G-ZWDV6QXJ7W"
};
    
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  export { db, auth };







