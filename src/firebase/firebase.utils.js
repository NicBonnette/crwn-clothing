import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD8SPL3C1TwmgKrWXEnnnrA-ot11BXO-iM",
    authDomain: "crwn-db-f9f10.firebaseapp.com",
    databaseURL: "https://crwn-db-f9f10.firebaseio.com",
    projectId: "crwn-db-f9f10",
    storageBucket: "crwn-db-f9f10.appspot.com",
    messagingSenderId: "136022691688",
    appId: "1:136022691688:web:3363ed3a0c2b3f75d650dd",
    measurementId: "G-PZR1WLCCYB"
  };

  firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;