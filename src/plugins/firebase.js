import firebase from 'firebase/app';

var firebaseConfig = {
  apiKey: "AIzaSyBykRxI__UMa43UFW3Io35SQS3-mNlTrdE",
  authDomain: "chat-f1709.firebaseapp.com",
  databaseURL: "https://chat-f1709.firebaseio.com",
  projectId: "chat-f1709",
  storageBucket: "chat-f1709.appspot.com",
  messagingSenderId: "220091852643",
  appId: "1:220091852643:web:45bf3449160ae5fb521556"
};
firebase.initializeApp(firebaseConfig);

export default firebase;