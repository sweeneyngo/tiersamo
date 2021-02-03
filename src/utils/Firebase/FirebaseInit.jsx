import firebase from "firebase";
import "firebase/auth";
import "firebase/app";
import FirebaseConfig from "./FirebaseConfig";

firebase.initializeApp(FirebaseConfig);
firebase.analytics();
firebase.auth();

export default firebase;
