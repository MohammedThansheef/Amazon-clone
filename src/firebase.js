import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCIQ2MgvmSxXwYfi1-Bv42bohajux_Gtag",
  authDomain: "clone-11b21.firebaseapp.com",
  databaseURL: "https://clone-11b21.firebaseio.com",
  projectId: "clone-11b21",
  storageBucket: "clone-11b21.appspot.com",
  messagingSenderId: "971859038380",
  appId: "1:971859038380:web:9739d55a91c8257ec54f09",
});

const auth = firebase.auth();

export { auth };
