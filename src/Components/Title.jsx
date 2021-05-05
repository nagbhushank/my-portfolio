import React from "react";
import { Image, Jumbotron, Container } from "react-bootstrap";
import Helicopter from "../Assets/plane.gif";
import "./Title.css";

export default function Title() {
  return (
      <Jumbotron fluid className="p-0 m-0" >
        <Container id="cloud-intro" className="cloud-container m-0 mw-100 h-100 p-0">
          <Image
            className="title-img m-0 pt-3"
            src={Helicopter}
            alt="Helicopter"
            fluid
          />
          
          <h1 className="p-2 name">Sagar Raut</h1>
          <h4 className="sub-name">I am a <b>Developer</b></h4>
          <button className="outlined-white m-3">WORK WITH ME</button>
        </Container>
      </Jumbotron>
  );
}
