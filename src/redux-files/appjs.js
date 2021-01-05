import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions/index";

import "./App.css";
import fire from "./fire";
import Login from "./Login";
import firebase from "firebase";
import Home from "./Home";
import "./config/.env";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";

function App() {
  // const [user, setUser] = useState("");
  // const [password, setPassword] = useState("");
  // const [email, setEmail] = useState("");
  // const [emailError, setEmailError] = useState("");
  // const [passwordError, setPasswordError] = useState("");
  // const [hasAccount, setHasAccount] = useState(false);
  // const titleKey = process.env.REACT_APP_KEY;
  // const googleSubmit = () => {
  //   var provider = new firebase.auth.GoogleAuthProvider();
  //   fire
  //     .auth()
  //     .signInWithPopup(provider)
  //     .then(function (result) {
  //       // This gives you a Google Access Token. You can use it to access the Google API.
  //       var token = result.credential.accessToken;
  //       // The signed-in user info.
  //       var user = result.user;
  //       // ...
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // };
  // const clearInput = () => {
  //   setEmail("");
  //   setPassword("");
  // };

  // const clearError = () => {
  //   setEmailError("");
  //   setPasswordError("");
  // };

  // const handleLogin = () => {
  //   clearError();
  //   fire
  //     .auth()
  //     .signInWithEmailAndPassword(email, password)
  //     .catch((err) => {
  //       switch (err.code) {
  //         case "auth/invalid-email":
  //         case "auth/user-disabled":
  //         case "auth/user-not-found":
  //           setEmailError(err.message);
  //           break;
  //         case "auth/wrong-password":
  //           setPasswordError(err.message);
  //       }
  //     });
  // };

  // const handleSignUp = () => {
  //   clearError();
  //   fire
  //     .auth()
  //     .createUserWithEmailAndPassword(email, password)
  //     .catch((err) => {
  //       switch (err.code) {
  //         case "auth/invalid-email":
  //         case "auth/email-already-in-use":
  //           setEmailError(err.message);
  //           break;
  //         case "auth/weak-password":
  //           setPasswordError(err.message);
  //       }
  //     });
  // };

  // const handleLogout = () => {
  //   fire.auth().signOut();
  // };

  // const authListener = () => {
  //   fire.auth().onAuthStateChanged((user) => {
  //     if (user) {
  //       setUser(user);
  //       clearInput();
  //     } else {
  //       setUser("");
  //     }
  //   });
  // };

  // useEffect(() => {
  //   authListener();
  // }, []);
  const dispatch = useDispatch();
  const [inputdata, setinputdata] = useState(null);
  const counter = useSelector((state) => state.counterReducer);
  const submitHandler = (e) => {
    e.preventDefault();

    // dispatch(increment(inputdata));
  };
  return (
    <div className="app">
      <h1>Hello</h1>
      <Card />
      <Card.Img></Card.Img>
      <Card.Body>
        <Card.title>This is the card title</Card.title>
      </Card.Body>

      {/* <h1>hello</h1>
      <h1>counter:{counter.data}</h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          value={inputdata}
          onChange={(e) => {
            setinputdata(e.target.value);
          }}
        />
        <input type="submit" value="submit" />
      </form>
      <button onClick={() => dispatch(increment(parseInt(inputdata)))}>
        INCREMENT
      </button>
      <button onClick={() => dispatch(decrement(inputdata))}>DECREMENT</button> */}
    </div>
    // <div className="App">
    //   <h1>{process.env.REACT_APP_NAME}</h1>
    //   {user ? (
    //     <Home handleLogout={handleLogout} />
    //   ) : (
    //     <Login
    //       email={email}
    //       setEmail={setEmail}
    //       password={password}
    //       setPassword={setPassword}
    //       handleLogin={handleLogin}
    //       handleSignUp={handleSignUp}
    //       hasAccount={hasAccount}
    //       setHasAccount={setHasAccount}
    //       emailError={emailError}
    //       passwordError={passwordError}
    //       clearInput={clearInput}
    //       clearError={clearError}
    //       googleSubmit={googleSubmit}
    //     />
    //   )}
    // </div>
  );
}

export default App;
