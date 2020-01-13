import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCdkBbMbHQDWmyPT4mZqsLg92YfrGAiOzg",
  authDomain: "ude-commerse.firebaseapp.com",
  databaseURL: "https://ude-commerse.firebaseio.com",
  projectId: "ude-commerse",
  storageBucket: "ude-commerse.appspot.com",
  messagingSenderId: "765759206705",
  appId: "1:765759206705:web:ca3cf7ebb4ae4f4831ec10",
  measurementId: "G-6E6LLT2EPB"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup();

export default firebase;
