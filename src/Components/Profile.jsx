import React from "react";
import logo from "../Assets/profile-pic.png";
import "./Profile.css";
import Figure from "react-bootstrap/Figure";
import { ExternalLink } from "react-external-link";

export default class Profile extends React.Component {
  render() {
    return (
      <Figure className="align-middle" id="profile">
        <Figure.Image
          className="profile-pic"
          // width={250}
          // height={200}
          alt="sagar"
          src={logo}
        />
        <Figure.Caption className="px-4 py-4 align-middle">
          <p>
            Hi I am Sagar Raut, a 25 year old Web developer. Living in{" "}
            <ExternalLink href="https://goo.gl/maps/eVxnda7CMtBV6yfX7">
              PCMC, Pune, India.
            </ExternalLink>{" "}
            I am a Computer Application Graduate, currently working with{" "}
            <ExternalLink href="https://www.wipro.com/">Wipro</ExternalLink> and
            looking for new opportunites. &#x1F600;
          </p>
          <p className="mb-0">
            Have a look at my{" "}
            <ExternalLink href="https://github.com/2sagarraut2">
              Github
            </ExternalLink>
            , skills or just connect with me on{" "}
            <ExternalLink href="https://www.linkedin.com/in/sagar-raut-624344189">
              LinkedIn
            </ExternalLink>
            . I am always excited to enhance my knowledge.
          </p>
          <br />
          {/* <span style={{ fontsize: "10%" }} > */}
          <span className="social-links">
            <ExternalLink href="mailto:2sagarraut2@gmail.com?Subject=Hello,%20I%20will%20like%20to%20connect%20with%20you.">
              <i className="fas fa-envelope"></i>
            </ExternalLink>
            <ExternalLink href="https://www.linkedin.com/in/sagar-raut-624344189">
              <i className="fab fa-linkedin"></i>
            </ExternalLink>
            <ExternalLink href="https://github.com/2sagarraut2">
              <i className="fab fa-github"></i>
            </ExternalLink>
            <ExternalLink href="https://api.whatsapp.com/send?phone=+919604848364&text=Hello!%20I%20will%20like%20to%20connect%20to%20with%20you!.">
              <i className="fab fa-whatsapp"></i>
            </ExternalLink>
          </span>
          {/* </span> */}
        </Figure.Caption>
      </Figure>
    );
  }
}
