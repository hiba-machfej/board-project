import * as firebase from 'firebase';
import 'firebase/database';

  var firebaseConfig = {
    apiKey: "AIzaSyAmMURj6ApMQcXmPHXIz0PTP5ZXtMiZbX4",
    authDomain: "board-project-81479.firebaseapp.com",
    databaseURL: "https://board-project-81479.firebaseio.com",
    projectId: "board-project-81479",
    storageBucket: "board-project-81479.appspot.com",
    messagingSenderId: "150920688414",
    appId: "1:150920688414:web:2c9c0584567ca84c038f0f"
  };

  
 // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();