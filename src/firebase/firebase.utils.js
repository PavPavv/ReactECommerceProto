import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAvXvp-5H2p0f0VuVS_A_Q7vdaDe9k1wZM",
  authDomain: "react-ztm-pav-1.firebaseapp.com",
  projectId: "react-ztm-pav-1",
  storageBucket: "react-ztm-pav-1.appspot.com",
  messagingSenderId: "917127566714",
  appId: "1:917127566714:web:f82553f0863fbb2b3032c3",
  measurementId: "G-6BRJXDDWH7"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      })
    } catch (err) {
      console.log('Creating user error', err.message)
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account'
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;


