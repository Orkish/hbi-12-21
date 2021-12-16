import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyCQCjLDGtgodtPB6Ob4FVBxuFJaqIzgcKQ",
  authDomain: "hbi-db.firebaseapp.com",
  projectId: "hbi-db",
  storageBucket: "hbi-db.appspot.com",
  messagingSenderId: "371567567526",
  appId: "1:371567567526:web:758e4ad0f145c7ef064a67",
  measurementId: "G-14STHKDZVT"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
