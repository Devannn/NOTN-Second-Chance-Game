import React from "react";
import "./DeadClothing.css";
import Clothing from "./Clothing";
import cargoPants from "../../assets/clothes_for_game/cargo_pants.png";
import chillwavesSweater from "../../assets/clothes_for_game/chillwaves_sweater.png";

export default function DeadClothing() {
  const images = [
    cargoPants,
    chillwavesSweater
  ];

  return (
    <div className="dead-clothing-wrapper">
      {/* <Clothing imgSrc={cargoPants} />
      <Clothing imgSrc={chillwavesSweater} /> */}

      {images.map((element, index) => (
        <Clothing key={index} imgSrc={element} />
      ))}
    </div>
  );
}
