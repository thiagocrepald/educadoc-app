// v9 compat packages are API compatible with v8 code
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage'

const firebaseConfig = {
  apiKey: "AIzaSyCllXLKpnkiP_gkMN-H_W_u9YG4ywFJhRE",
  authDomain: "dbeduca-app.firebaseapp.com",
  projectId: "dbeduca-app",
  storageBucket: "dbeduca-app.appspot.com",
  messagingSenderId: "944438572585",
  appId: "1:944438572585:web:fd3f3eb948d351fe720e38"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}
export { firebase }