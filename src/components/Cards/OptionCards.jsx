import React from "react";
import "./OptionCards.css";

export default function OptionCards(props) {
  return (
    <div
      onClick={props.onClick}
      className={props.disabled ? "rectangle-disabled" : "rectangle"} // dynamically changes the className when given the props- "disabled "
    >
      {props.label}
    </div>
  );
}  