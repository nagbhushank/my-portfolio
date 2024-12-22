import React from "react";
import { Container } from "react-bootstrap";
import "./Skills.css";

const SkillComponent = (props) => {
  //   console.log(props);
  const { image, value } = props.sikllsList;
  return (
    <div>
      <Container>
        <ul className="list-item">
          <li className="card-wrapper list-unstyled">
            {image}
            <p>{value}</p>
          </li>
        </ul>
      </Container>
    </div>
  );
};

export default SkillComponent;
