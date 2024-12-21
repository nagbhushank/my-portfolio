import React from "react";
import Image from "react-bootstrap/Image";
import foot from "../Assets/foot.jpg";

const Footer = () => {
  return <Image src={foot} fluid loading="lazy" />;
};

export default Footer;
