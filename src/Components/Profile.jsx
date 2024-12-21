import React from "react";
import logo from "../Assets/profile-pic.png";
import "./Profile.css";
import Figure from "react-bootstrap/Figure";
import { ExternalLink } from "react-external-link";
import {
  livingIn,
  pcmc,
  workingWith,
  haveALook,
  skills,
  excited,
} from "../utils/utils";

const Profile = () => {
  return (
    <Figure className="align-middle" id="profile">
      <Figure.Image
        className="profile-pic"
        // width={250}
        // height={200}
        loading="lazy"
        alt="sagar"
        src={logo}
      />
      <Figure.Caption className="px-4 py-4 align-middle">
        <p>
          {livingIn}
          <ExternalLink href="https://goo.gl/maps/eVxnda7CMtBV6yfX7">
            {pcmc}
          </ExternalLink>{" "}
          {workingWith}
          <ExternalLink href="https://www.ncs.co/en-sg/">NCS.CO</ExternalLink>.
          &#x1F607;
        </p>
        <p className="mb-0">
          {haveALook}
          <ExternalLink href="https://github.com/2sagarraut2">
            Github
          </ExternalLink>
          {skills}
          <ExternalLink href="https://www.linkedin.com/in/sagar-raut-624344189">
            LinkedIn
          </ExternalLink>
          {excited}
        </p>
        <br />
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
          {/* <ExternalLink href="https://api.whatsapp.com/send?phone=+91&text=Hello!%20I%20will%20like%20to%20connect%20to%20with%20you!.">
              <i className="fab fa-whatsapp"></i>
            </ExternalLink> */}
        </span>
      </Figure.Caption>
    </Figure>
  );
};

export default Profile;
