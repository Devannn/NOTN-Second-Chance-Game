import React from "react";
import "./WardrobeUpdate.css";
import DeadClothing from "./DeadClothing";
import ButtonForNext from "../Buttons/ButtonForNext";

export default function WardrobeUpdate() {
  return (
    <div className="wardrobe-bg-wrapper">
      <h1>Wardrobe update</h1>
      <div className="wardrobe-info-container">
        <div className="first-textbox">
          <h3>Oh no!</h3>
          <p>
            Some of your clothes have reached their limit and are completely
            worn out.
          </p>
        </div>
        <DeadClothing></DeadClothing>
        <p>Check your wardrobe to plan your next move!</p>
      </div>
      <div className="button-continue">
        <ButtonForNext label="Continue" color="#F1EAE0"></ButtonForNext>
      </div>
    </div>
  );
}
