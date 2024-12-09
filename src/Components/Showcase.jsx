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
      <section id="showcase" class="card-section p-1">
        <div class="d-flex justify-content-center">
          <article
            class="card text-center mx-5 my-4"
            style="width: 18rem; height: 35rem;"
          >
            <img
              src="Image1"
              alt="Weather App Card Image"
              class="card-img-top p-2"
            />
            <div class="card-body">
              <h3 class="card-title">Weather App</h3>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a
                href="https://github.com/2sagarraut2/weather-app"
                class="btn btn-primary"
              >
                Go to repository
              </a>
            </div>
          </article>

          <article
            class="card text-center mx-5 my-4"
            style="width: 18rem; height: 35rem;"
          >
            <img
              src="Image2"
              alt="Simple Calculator Card Image"
              class="card-img-top p-2"
            />
            <div class="card-body">
              <h3 class="card-title">Simple Calculator</h3>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a
                href="https://github.com/2sagarraut2/Simple-Calculator"
                class="btn btn-primary"
              >
                Go to repository
              </a>
            </div>
          </article>
        </div>
      </section>
    );
  }
}
