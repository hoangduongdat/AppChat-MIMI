import firebase from 'firebase/compat/app';

import 'firebase/compat/analytics'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDnR7p9WmyFOAIC3Jn6FI09TxKT7h4v3p4",
    authDomain: "chat-app-e1b79.firebaseapp.com",
    projectId: "chat-app-e1b79",
    storageBucket: "chat-app-e1b79.appspot.com",
    messagingSenderId: "792161784553",
    appId: "1:792161784553:web:2759eca9438f97f9cbd678",
    measurementId: "G-62VQQE6ZHQ"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  const auth = firebase.auth()
  const db = firebase.firestore()
  
  // auth.useEmulator('http://localhost:9099')
  
  // if(window.location.hostname==='localhost'){
  //   db.useEmulator('localhost','8070')
  // }

  export { db, auth };

  export default firebase;