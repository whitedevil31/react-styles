import React from "react";
import { Button } from "@material-ui/core";
import "./App.css";
import logo from "./logo.jpg";

function App() {
  return (
    <div className="container">
      <div className="header">
        <div className="header-logo">
          <img className="logo" src={logo} />
        </div>

        <div className="header-left">
          <a target="_blank" href="https://www.w3schools.com">
            CONTACT US{" "}
          </a>
          <Button variant="contained" color="secondary">
            REGISTER
          </Button>
          <Button variant="contained" color="secondary">
            ABOUT US
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
