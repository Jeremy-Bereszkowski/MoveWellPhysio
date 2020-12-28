import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const admin = require("firebase-admin");
const serviceAccount = require('./serviceAccount.json');

try {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://movewellphysio.firebaseio.com"
  });
} catch(err){
  if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error', err.stack)}
}

const fire = admin
export default fire
