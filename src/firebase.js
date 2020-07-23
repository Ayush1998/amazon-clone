import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAoSRoifv-ssoHqoJx8EFCp9Jq7bLENr18",
  authDomain: "clone-6b6ea.firebaseapp.com",
  databaseURL: "https://clone-6b6ea.firebaseio.com",
  projectId: "clone-6b6ea",
  storageBucket: "clone-6b6ea.appspot.com",
  messagingSenderId: "878059109582",
  appId: "1:878059109582:web:52aca1fb10d4af06aba49f",
  measurementId: "G-8ZRHLJ070L",
});

const auth = firebase.auth();

export { auth };
