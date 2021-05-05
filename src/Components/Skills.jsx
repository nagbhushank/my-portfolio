import React from "react";
import "./Skills.css";
import { Container, Button } from "react-bootstrap";

export default function Skills()
{
    return(
      <div id="skills">
        <p className="title p-3">Skills</p>
        <Container className="skills">
          <span>
            <p>HTML</p>
            <i class="fab fa-html5"></i>
          </span>
          <span>
            <p>css</p>
            <i class="fab fa-css3-alt"></i>
          </span>
          <span>
            <p>JavaScript</p>
            <i class="fab fa-js"></i>
          </span>
          <span>
            <p>Java</p>
            <i class="fab fa-java"></i>
          </span>
          <span>
            <p>Reactjs</p>
            <i class="fab fa-react"></i>
          </span>
        </Container>
      </div>
    )
}
