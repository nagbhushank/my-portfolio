import React from "react";
import "./Skills.css";
import { Image } from "react-bootstrap";
import spring from "../Assets/spring.png";
import SkillComponent from "./SkillComponent";

const Skills = () => {
  const sikllsOptions = [
    {
      key: 6,
      value: "C",
      image: <i className="fas fa-copyright"></i>,
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
      key: 2,
      value: "JavaScript",
      image: <i className="fab fa-js"></i>,
    },
    {
      key: 1,
      value: "ReactJS",
      image: <i className="fab fa-react"></i>,
    },   
    {
      key: 5,
      value: "MYSQL",
      image: <i className="fas fa-database"></i>,
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
    <section id="skills" className="skills-section">
      <h2 className="title p-3">Technical Skills</h2>
      <div className="skills">
        {sikllsOptions.map((item) => {
          return <SkillComponent key={item.key} sikllsList={item} />;
        })}
      </div>
    </section>
  );
};

export default Skills;
