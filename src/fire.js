import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyA2NUgOutZGgcYyXMY63wqPzd4wAqCQOAM",
  authDomain: "react-login-97a9d.firebaseapp.com",
  projectId: "react-login-97a9d",
  storageBucket: "react-login-97a9d.appspot.com",
  messagingSenderId: "52198908257",
  appId: "1:52198908257:web:a86881c364056f564d2520",
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
