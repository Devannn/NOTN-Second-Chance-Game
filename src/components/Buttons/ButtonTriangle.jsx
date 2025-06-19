import React from "react";
import "./ButtonTriangle.css";
import { Link } from "react-router-dom";

const ButtonTriangle = (props) => {
  return (
    <Link
      to={props.link}
      onClick={props.onClick}
      className={props.left ? "button-triangle left" : "button-triangle"}
    ></Link>
  );
};

export default ButtonTriangle;
