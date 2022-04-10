import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./Project.css";
import fin from "../Assets/4-fin-logo.png";

export default class Project extends React.Component {
  render() {
    return (
      <div id="clients" className="contact">
        <p className="title p-3">Clients</p>
        <Container className="details">
          <Row>
            <Col>
              <Container className="card-container">
                <div>
                  <div className="client-card">
                      <img className="logo-image" src={fin} alt="4fin" />
                      <h4>4Fin Technologies Pvt. Ltd.</h4>
                  </div>
                </div>
              </Container>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
