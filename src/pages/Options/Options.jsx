import React from "react";
import "./Options.css";
import OptionCards from "../../components/Cards/OptionCards.jsx";

export default function Options() {
  return (
    <main>
      <div className="title-wrapper">
        <h2>First day of school is around the corner...</h2>
        <h3>What do you do?</h3>
      </div>
      <div className="options-wrapper">
        <OptionCards
          disabled 
          label={"Wear from closet"}
          className={"rectangle"}
        ></OptionCards>
        <OptionCards label={"Buy"}></OptionCards>
      </div>
    </main>
  );
}
