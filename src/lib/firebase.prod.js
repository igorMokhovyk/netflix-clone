import Firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';


const config = {
  apiKey: "AIzaSyABYerpHor04jG8YWxHSqctGa7AeBqMJOs",
  authDomain: "net-watch-8116f.firebaseapp.com",
  projectId: "net-watch-8116f",
  storageBucket: "net-watch-8116f.appspot.com",
  messagingSenderId: "679542952281",
  appId: "1:679542952281:web:2e252ee23c4c859dadbc48"
};

const firebase = Firebase.initializeApp(config);


export {firebase};
