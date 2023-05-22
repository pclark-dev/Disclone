import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAMIu2uMTA-sSxuK2tdE5T2OXHgnaDKkLU",
    authDomain: "discordclone-41681.firebaseapp.com",
    projectId: "discordclone-41681",
    storageBucket: "discordclone-41681.appspot.com",
    messagingSenderId: "269304683786",
    appId: "1:269304683786:web:3b7b88f0096329354baef3",
    measurementId: "G-CMN54006FQ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;