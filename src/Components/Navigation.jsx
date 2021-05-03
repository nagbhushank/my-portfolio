import React from "react";
import { Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import style from "./Navigation.css"

export default class Navigation extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" variant="dark">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="m-auto">
              <Nav.Link className="px-5" href="#home">Home</Nav.Link>
              <Nav.Link className="px-5" href="#profile">Profile</Nav.Link>
              <Nav.Link className="px-5" href="#showcase">Showcase</Nav.Link>
              <Nav.Link className="px-5" href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
