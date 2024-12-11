import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./Contact.css";
import { ExternalLink } from "react-external-link";
// import Message from "./Message";
import { excitedWords, help, sagarraut, findMe } from "../utils/utils";

export default class Contact extends React.Component {
  render() {
    return (
      <section id="contact" className="contact">
        <p className="sub-text p-3">{excitedWords}</p>
        {/* send me a message will go here */}
        {/* <Message /> */}
        <Container className="p-4 details">
          <Row>
            <Col>
              <p>
                <b>No &#169; copyright issues.</b>
              </p>
              <p>{help}</p>
            </Col>
            <Col>
              <p className="sign">{sagarraut}</p>
              <p>
                Made with <i className="fas fa-heart"></i> in India
              </p>
            </Col>
            <Col className="social-links">
              {findMe}
              <br />
              <ExternalLink href="mailto:2sagarraut2@gmail.com?Subject=Hello,%20I%20will%20like%20to%20connect%20with%20you.">
                <i className="fas fa-envelope"></i>
              </ExternalLink>
              <ExternalLink href="https://www.linkedin.com/in/sagar-raut-624344189">
                <i className="fab fa-linkedin"></i>
              </ExternalLink>
              <ExternalLink href="https://github.com/2sagarraut2">
                <i className="fab fa-github"></i>
              </ExternalLink>
              {/* <ExternalLink href="https://api.whatsapp.com/send?phone=+91&text=Hello!%20I%20will%20like%20to%20connect%20to%20with%20you!.">
                <i className="fab fa-whatsapp"></i>
              </ExternalLink> */}
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}
