import React from "react";
import { Image, Jumbotron, Container } from "react-bootstrap";
import Helicopter from "../Assets/plane.gif";
import "./Title.css";
// import { Nav } from "react-bootstrap";

export default function Title() {

  return (
    <Container className="m-0 p-0 mw-100">
      <Jumbotron fluid className="p-0 m-auto">
        <Container
          id="cloud-intro"
          className="cloud-container m-auto h-100 p-0"
        >
          <Image
            className="title-img m-0 pt-3"
            src={Helicopter}
            alt="Helicopter"
            fluid
          />

          <div style={{ width: "fit-content", margin: "auto" }}>
            <p className="name">Sagar Raut</p>
            <p className="sub-name">
              I am a <b>Software Engineer</b>
            </p>
            <a href="#contact">
              <button className="btn outlined-white m-3" href="#contact">
                WORK WITH ME
              </button>
            </a>
          </div>
        </Container>
      </Jumbotron>
    </Container>
  );
}
