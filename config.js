import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
 //Add configuration here
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional

  apiKey: "AIzaSyB-aWavRtFzwDNC7gA7fW1QheF5Uy2VTqw",
  authDomain: "cycle-ride-5963c.firebaseapp.com",
  databaseURL: "https://cycle-ride-5963c-default-rtdb.firebaseio.com",
  projectId: "cycle-ride-5963c",
  storageBucket: "cycle-ride-5963c.appspot.com",
  messagingSenderId: "468614486300",
  appId: "1:468614486300:web:31921ae94cf6f65d47c2d9",
  measurementId: "G-5P693QV8EV"

 
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

