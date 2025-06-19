import React from "react";
import "./ButtonForNext.css";
import { Link } from "react-router-dom";

const ButtonForNext = (props) => {
  return (
    <Link
      to={props.link}
      className="next-button"
      onClick={props.onClick}
      //sets a default color of black if another color is not stated in the props
      style={{ color: props.color ? props.color : "#000" }}
    >
      {props.label}
    </Link>
  );
};

export default ButtonForNext;
