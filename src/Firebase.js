import firebase from "firebase";

const firebaseConfig = {
   apiKey: "AIzaSyDVEudPRzpQCN2OdLNJHddcd0xb1YjOWpc",
   authDomain: "sabcategorychat.firebaseapp.com",
   databaseURL: "https://sabcategorychat.firebaseio.com",
   projectId: "sabcategorychat",
   storageBucket: "sabcategorychat.appspot.com",
   messagingSenderId: "324207504513",
   appId: "1:324207504513:web:09785c1c4033f419a77180",
   measurementId: "G-V1Y13SM12F",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth,provider };
export default db;
