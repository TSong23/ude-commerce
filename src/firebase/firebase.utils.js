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

export const createUserProfileDocument = async (userAuth, addtionalData) => {
  // google OAuth return null when signing out. 
  // check that sign button when clicked returns an object

  if (!userAuth) return; 

  //if userAuth returns, query the firebase data to see if it exists.
  // if not save to db

  // firebase returns two types of objs. references and snapshots
  // both types can be document or collection versions

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  // following the auth path, the userAuth will receive uid
  // check if that userAuth.uid exists

  // snapShot will have a .exists property that shows if there is anydata there
  // if it doesn't exist, POST to database
  // firebase requires that you use documentRef objs to perform CRUD
  const snapShot = await userRef.get();  
  if (!snapShot.exists) {
    // spread out data we need from props userAuth and JS Date method
    const { displayName, email, } = userAuth;
    const createdAt = new Date ();
    // userRef.set => firebase method to perform PUT action
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ... addtionalData
      })
    } catch (error){
      console.log('error creating user')
    }
  }  
  return userRef;
}



firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
