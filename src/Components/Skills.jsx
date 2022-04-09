import React from "react";
import "./Skills.css";
import { Container, Image } from "react-bootstrap";
import C from "../Assets/c-programming.png";

export default function Skills() {
  const sikllsOptions = [
    {
      key: 1,
      value: "C",
      image: <Image src={C} />,
    },
    {
      key: 2,
      value: "HTML",
      image: <i className="fab fa-html5"></i>,
    },
    {
      key: 3,
      value: "CSS",
      image: <i className="fab fa-css3-alt"></i>,
    },
    {
      key: 4,
      value: "JavaScript",
      image: <i className="fab fa-js"></i>,
    },
    {
      key: 5,
      value: "Java",
      image: <i className="fab fa-java"></i>,
    },
    {
      key: 6,
      value: "ReactJS",
      image: <i className="fab fa-react"></i>,
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
