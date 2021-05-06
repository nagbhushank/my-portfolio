import React from "react";
import "./Skills.css";
import { Container, Image } from "react-bootstrap";
import C from '../Assets/c-programming.png';

export default function Skills() {
  return (
    <div id="skills">
      <p className="title p-3">Skills</p>
      <Container className="skills">
        <span>
          <Image src={C}/>
          <p>C programming</p>
        </span>
        <span>
          <i className="fab fa-html5"></i>
          <p>HTML</p>
        </span>
        <span>
          <i className="fab fa-css3-alt"></i>
          <p>CSS</p>
        </span>
        <span>
          <i className="fab fa-js"></i>
          <p>JavaScript</p>
        </span>
        <span>
          <i className="fab fa-java"></i>
          <p>Java</p>
        </span>
        <span>
          <i className="fab fa-react"></i>
          <p>React</p>
        </span>
      </Container>
    </div>
  );
}
