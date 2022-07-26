import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBrpm9wb4UlF5sdLaqXJUxcdrfRcNp5HTk",
    authDomain: "linkedin-clone-53959.firebaseapp.com",
    projectId: "linkedin-clone-53959",
    storageBucket: "linkedin-clone-53959.appspot.com",
    messagingSenderId: "76799183535",
    appId: "1:76799183535:web:991538cd9ef3d58a60225a"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};