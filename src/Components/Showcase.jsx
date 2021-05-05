import React from "react";
import { ExternalLink } from "react-external-link";

import { Button, Card } from "react-bootstrap";
import Image1 from "../Assets/weather-app.png";
import Image2 from "../Assets/calculator-app.png";

import "./Showcase.css";

export default class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      user: null,
      password: null,
    };
  }

  Submit() {
    alert("User: " + this.state.user + "Password: " + this.state.password);
  }

  render() {
    return (
      <div className="card-div p-1" id="showcase">
        <div className="d-flex justify-content-center">
          <Card
            style={{ width: "18rem", height: "35rem" }}
            className="text-center mx-5 my-4"
          >
            <Card.Img
              variant="top"
              src={Image1}
              alt="card-image"
              className="p-2"
            />
            <Card.Body>
              <Card.Title>Weather App</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">
                <ExternalLink href="https://github.com/2sagarraut2/weather-app">
                  Go to repository
                </ExternalLink>
              </Button>
            </Card.Body>
          </Card>

          <Card
            style={{ width: "18rem", height: "35rem" }}
            className="text-center mx-5 my-4"
          >
            <Card.Img
              variant="top"
              src={Image2}
              alt="card-image"
              className="p-2"
            />
            <Card.Body>
              <Card.Title>Simple Calculator</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">
                <ExternalLink href="https://github.com/2sagarraut2/Simple-Calculator">
                  Go to repository
                </ExternalLink>
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  }
}
