import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDg7EpU3cj_fHO963tUmxXdbkdZgBtch5w",
    authDomain: "firegram-7aa14.firebaseapp.com",
    projectId: "firegram-7aa14",
    storageBucket: "firegram-7aa14.appspot.com",
    messagingSenderId: "578104974355",
    appId: "1:578104974355:web:504350d6a4d0a2628df3e6"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFireStore = firebase.firestore();
  const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

  export {projectFireStore, projectStorage, timeStamp};