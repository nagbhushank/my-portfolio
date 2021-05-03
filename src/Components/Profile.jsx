import React from "react";
import logo from "../Assets/sagar.jpeg";
import "./Profile.css";
import { Button } from "react-bootstrap";
import Figure from "react-bootstrap/Figure";
import { ExternalLink } from 'react-external-link';

export default class Profile extends React.Component {
  render() {
    return (
      <div id="profile">
        <Figure className="m-5 px-5 align-middle">
          <Figure.Image
            className="profile-pic"
            width={250}
            height={200}
            alt="171x180"
            src={logo}
          />
          <Figure.Caption className="px-4 py-4 align-middle">
            <p>
              Hi I am Sagar Raut, a 25 year old Web developer. Living in Pune,
              India.
            </p>
            <br />
            <span style={{ fontsize: "10%"}}>
              <span style={{ color: "Mediumslateblue" }}>
              <ExternalLink href="https://mail.google.com/"><i class="fas fa-envelope"></i></ExternalLink>
              <ExternalLink href="https://www.linkedin.com/in/sagar-raut-624344189"><i class="fab fa-linkedin"></i></ExternalLink>
              <ExternalLink href="https://www.facebook.com/sagar.raut.3517"><i class="fab fa-facebook"></i></ExternalLink>
              <ExternalLink href="https://www.instagram.com/2sagarraut2/"><i class="fab fa-instagram"></i></ExternalLink>
              <ExternalLink href="https://api.whatsapp.com/send?phone=+919604848364&text=Hello!%20I%20will%20like%20to%20connect%20to%20with%20you!."><i class="fab fa-whatsapp"></i></ExternalLink>

        
                
                
                
              </span>
            </span>
          </Figure.Caption>
        </Figure>
      </div>
    );
  }
}
