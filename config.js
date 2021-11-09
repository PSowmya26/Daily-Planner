import * as firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyCYAXxEl_gqFtq7mVeu-0AtnbUOUOOTRyI",
  authDomain: "timetable-7b324.firebaseapp.com",
  databaseURL: "https://timetable-7b324-default-rtdb.firebaseio.com",
  projectId: "timetable-7b324",
  storageBucket: "timetable-7b324.appspot.com",
  messagingSenderId: "501162381490",
  appId: "1:501162381490:web:4e6a5e664e885fb05a39ab"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase.database();
