import React from "react";
import "./Skills.css";
import { Container, Image } from "react-bootstrap";
import spring from "../Assets/spring.png";

export default function Skills() {
  const sikllsOptions = [
    {
      key: 1,
      value: "ReactJS",
      image: <i className="fab fa-react"></i>,
    },
    {
      key: 2,
      value: "JavaScript",
      image: <i className="fab fa-js"></i>,
    },
    {
      key: 3,
      value: "Java",
      image: <i className="fab fa-java"></i>,
    },
    {
      key: 4,
      value: "Spring Boot",
      image: <Image src={spring} loading="lazy" />,
    },
    {
      key: 5,
      value: "SQL",
      image: <i className="fas fa-database"></i>,
    },
    {
      key: 6,
      value: "C",
      image: <i className="fas fa-copyright"></i>,
    },
    {
      key: 7,
      value: "HTML",
      image: <i className="fab fa-html5"></i>,
    },
    {
      key: 8,
      value: "CSS",
      image: <i className="fab fa-css3-alt"></i>,
    },
    {
      key: 9,
      value: "NodeJS",
      image: <i className="fab fa-brands fa-node-js"></i>,
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <h2 className="title p-3">Technical Skills</h2>
      <Container className="skills">
        {sikllsOptions.map((item) => {
          return (
            // looping through skillsOptions to show skills section
            <ul key={item.key} className="list-item">
              <li className="card-wrapper list-unstyled">
                {item.image}
                <p>{item.value}</p>
              </li>
            </ul>
          );
        })}
      </Container>
    </section>
  );
}
