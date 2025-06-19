import React from "react";
import "./Winner.css";
import OptionCards from "../../components/Cards/OptionCards.jsx";
import { useNavigate, useLocation } from "react-router-dom";

export default function Winner() {
  const location = useLocation();
  const { state: stats } = location;
  const navigate = useNavigate(); // Use navigate to handle redirection
  
  const handleRestart = () => {
    navigate("/game"); // Use navigate to redirect to the game page
  };

  return (
    <main>
      <div className="title-wrapper">
        <h2>Winner Winner Chicken Dinner</h2>
        <h3>You have passed the game, good job!</h3>
        <div className="stats-container">
          <ul className="stats-ul">
            <li>Items Bought: <b>{stats.itemsBought}</b></li>
            <li>Days Played: <b>{stats.daysPassedTotal}</b></li>
            <li>Remaining Balance: <b>€{stats.balance}</b></li>
            <li>Items in Wardrobe: <b>{stats.wardrobe.length}</b></li>
          </ul>
        </div>
      </div>
      <div className="options-wrapper">
        <OptionCards label={"Restart Game"} onClick={handleRestart} />
      </div>
    </main>
  );
}