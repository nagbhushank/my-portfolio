import React from "react";
import "./Skills.css";
import { Container, Image } from "react-bootstrap";
import C from "../Assets/c-programming.png";
import sql from "../Assets/Database-mysql.svg.png";
import spring from "../Assets/spring.png"

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
      image: <Image src={sql} loading="lazy" />,
    },
    {
      key: 6,
      value: "C",
      image: <Image src={C} loading="lazy" />,
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
  ];

  return (
    <div id="skills">
      <p className="title p-3">Technical Skills</p>
      <Container className="skills">
        {sikllsOptions.map((item) => {
          return (
            <div key={item.key}>
              <div className="card-wrapper">
                {item.image}
                <p>{item.value}</p>
              </div>
            </div>
          );
        })}
      </Container>
    </div>
  );
}
