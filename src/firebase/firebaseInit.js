import app from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAupGKjbvYQsd3lDj9KeZ9uBFYWCTBQKgY",
  authDomain: "fire-app-fd392.firebaseapp.com",
  databaseURL: "https://fire-app-fd392.firebaseio.com",
  projectId: "fire-app-fd392",
  storageBucket: "fire-app-fd392.appspot.com",
  messagingSenderId: "911986950917",
  appId: "1:911986950917:web:16c0c5a079719d622d6d6c",
  measurementId: "G-LDK5W82M0T"
};

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
    this.auth = app.auth();
    this.db = app.firestore();
    this.googleProvider = new app.auth.GoogleAuthProvider();
    this.facebookProvider = new app.auth.FacebookAuthProvider();
  }

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.doSignInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = (email) => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = (password) => this.auth.updatePassword(password);

  getCurrentUser = () => {
    return this.auth.currentUser;
  };

  doSendEmailVerification = () =>
    this.auth.currentUser.sendEmailVerification({
      url: process.env.REACT_APP_CONFIRMATION_EMAIL_REDIRECT
    });

  /* Firestore functions */
  doAddNewDocument = ({ collection, docId, data }) => {
    if (!docId) {
      return this.db.collection(collection).add(data);
    }
    return this.db.collection(collection).doc(docId).set(data);
  };
}
export default Firebase;
