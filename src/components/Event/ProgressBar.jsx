import React from "react";
import "./ProgressBar.css";
import logo from "../../assets/logo-white.png";

function ProgressBar() {
  return (

    <header className="game-header">
        <nav className="game-nav">
          <div className="logo-container">
            <img src={logo} alt="Logo" />
          </div>
          <div className="timeline-container">
            <div className="timeline">
              <div className="circle">
                <p>Event 1</p>
              </div>
              <div className="dash"></div>
              <div className="circle">
                <p>Event 2</p>
              </div>
              <div className="dash"></div>
              <div className="circle">
                <p>Event 3</p>
              </div>
              <div className="dash"></div>
              <div className="circle">
                <p>Event 4</p>
              </div>
              <div className="dash"></div>
              <div className="circle">
                <p>Event 5</p>
              </div>
              <div className="dash"></div>
              <div className="circle">
                <p>Event 6</p>
              </div>
              <div className="dash"></div>
              <div className="circle">
                <p>Event 7</p>
              </div>
              <div className="dash"></div>
              <div className="circle">
                <p>Event 8</p>
              </div>
              <div className="dash"></div>
              <div className="circle">
                <p>Event 9</p>
              </div>
              <div className="dash"></div>
              <div className="circle">
                <p>Event 10</p>
              </div>   
            </div>
          </div>
          <div className="balance-container">
            <p className="balance">
              <span>€</span>
              100
            </p>
          </div>
        </nav>
      </header>
  );
}

export default ProgressBar;
