import React from "react";
import { Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import "./Navigation.css";

export default class Navigation extends React.Component {
  render() {
    return (
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="dark"
        id="home"
        defaultactivekey="/home"
      >
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="navbar" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link className="px-5" href="#home">
              Home
            </Nav.Link>
            <Nav.Link className="px-5" href="#profile">
              Profile
            </Nav.Link>
            <Nav.Link className="px-5" href="#skills">
              Skills
            </Nav.Link>
            <Nav.Link className="px-5" href="#contact">
              Let's Talk
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
