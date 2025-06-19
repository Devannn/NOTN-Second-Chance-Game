import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

// const Button = ({ label, onClick, type = "button" }) => {
//   return (
//     <button className="primary-button" onClick={onClick} type={type} >
//       {label}
//     </button>
//   );
// };

const Button = (props) => {
  return (
    <Link to={props.link} className="primary-button" onClick={props.onClick}>
      {props.label}
    </Link>

    //Added to this button the props of linking to different pages with their route, and a label prop for
    //dynamically changing the button's text
  );
};

export default Button;
