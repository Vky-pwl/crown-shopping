import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {

};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

// TODO: https://github.com/firebase/firebase-js-sdk/issues/1190
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
