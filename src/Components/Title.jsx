import React from "react";
import { Jumbotron, Container } from "react-bootstrap";
import "./Title.css";
import Typical from "react-typical";
import DownloadResumeButton from "./DownloadResumeButton";
import { connectButton, nagbhushanK } from "../utils/utils";

const Title = () => {
  return (
    <Container className="m-0 p-0 mw-100">
      <Jumbotron fluid className="p-0 m-auto">
        <Container
          id="cloud-intro"
          className="cloud-container m-auto h-100 p-0"
        >
          <div className="main-div">
            <p className="name">{nagbhushanK}</p>
            <Typical
              className="sub-name"
              steps={[
                "Software Engineer",
                1000,
                "Back-end developer",
                1000,
                "Proud Indian",
                500,
              ]}
              loop={Infinity}
              wrapper="p"
            />
            <a href="#contact">
              <button className="btn outlined-white m-3" href="#contact">
                {connectButton}
              </button>
            </a>
            <DownloadResumeButton />
          </div>
        </Container>
      </Jumbotron>
    </Container>
  );
};

export default Title;
