import React from "react";
import { Jumbotron, Container } from "react-bootstrap";
import "./Title.css";
import Typical from "react-typical";

export default function Title() {
  return (
    <Container className="m-0 p-0 mw-100">
      <Jumbotron fluid className="p-0 m-auto">
        <Container
          id="cloud-intro"
          className="cloud-container m-auto h-100 p-0"
        >
          <div className="main-div">
            <p className="name">Sagar Raut</p>
            {/* <p className="sub-name">Software Engineer</p> */}
            <Typical
              className="sub-name"
              steps={[
                "Software Engineer",
                1000,
                "Web developer",
                500,
                "Proud Indian",
                500,
              ]}
              loop={Infinity}
              wrapper="p"
            />
            <a href="#contact">
              <button className="btn outlined-white m-3" href="#contact">
                let's connect
              </button>
            </a>
          </div>
        </Container>
      </Jumbotron>
    </Container>
  );
}
