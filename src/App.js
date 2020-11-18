import React from "react";
import { Button } from "@material-ui/core";
import "./App.css";
import logo from "./logo.jpg";
import { Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

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
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Dropdown Button
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </div>
  );
}

export default App;
