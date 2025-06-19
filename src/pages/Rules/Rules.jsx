import React, { useState } from "react";
import "./Rules.css";
import InfoCircle from "../../components/Cards/InfoCircle";
import ProgressBar from "../../components/Event/ProgressBar.jsx";
import Receipt from "../../components/Receipt/Receipt.jsx";
import logo from "../../assets/logo.jpeg";

const currentDate = new Date().toLocaleDateString();

function Rules() {
  const [showWardrobe, setShowWardrobe] = useState(false);

  const toggleWardrobe = () => {
    setShowWardrobe((prevState) => !prevState);
  };

  const [isHelpVisible, setHelpVisible] = useState(true); // Initial state is true (visible)

  const toggleHelpVisibility = () => {
    setHelpVisible(false); // Hide the receipt-help div on click
  };

  return (
    <>
      <ProgressBar />
      <main className="game-main">
        <div className="rules_game">
          <InfoCircle />
        </div>

        {/* Wardrobe Section */}
        {showWardrobe && (
          <section className="container-wardrobe">
            <div className="wardrobe wardrobe-rules" id="wardrobe">
              <h1>Wardrobe</h1>
              <div className="product">
                <div className="product-image-container">
                  <img
                    className="product-image"
                    src="/src/assets/clothes_for_game/chillwaves_sweater.png"
                    alt="ChillWaves Sweater"
                  />
                  <div className="product-hover-container">
                    <h3>ChillWaves Sweater</h3>
                    <div className="product-hover-container-p">
                        <p>Type: <b>Tops</b></p>
                        <p>Durability: <b>40</b></p>
                        <p>Price: <b>12$</b></p>
                        <p>Source: <b>Fast Fashion</b></p>
                      </div>
                    <button>Wear</button>
                  </div>
                </div>
              </div>

              <div className="product">
                <div className="product-image-container">
                  <img
                    className="product-image"
                    src="/src/assets/clothes_for_game/h&n_skinny_jeans.png"
                    alt="ChillWaves Sweater"
                  />
                  <div className="product-hover-container">
                    <h3>H&N Skinny Jeans</h3>
                    <div className="product-hover-container-p">
                        <p>Type: <b>Bottoms</b></p>
                        <p>Durability: <b>100</b></p>
                        <p>Price: <b>50$</b></p>
                        <p>Source: <b>Reliable Brand</b></p>
                      </div>
                    <button>Wear</button>
                  </div>
                </div>
              </div>

              <div className="product">
                <div className="product-image-container">
                  <img
                    className="product-image"
                    src="/src/assets/clothes_for_game/timeless_flannel_shirt.png"
                    alt="ChillWaves Sweater"
                  />
                  <div className="product-hover-container">
                    <h3>Timeless Flannel Shirt</h3>
                      <div className="product-hover-container-p">
                        <p>Type: <b>Tops</b></p>
                        <p>Durability: <b>85</b></p>
                        <p>Price: <b>60$</b></p>
                        <p>Source: <b>Second Hand</b></p>
                      </div>
                    <button>Wear</button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Receipt Section */}
        <section className="container-receipt">
          <div
            className="receipt"
            id="receipt"
            onClick={() => {
              toggleWardrobe();
              toggleHelpVisibility();
            }}
          >
            <div className="receipt-logo">
              <img src={logo} alt="Logo" />
            </div>
            <p style={{ marginTop: "20px" }}>
              <span>
                Lost Media - Eindhoven <br /> Phone - +31 6 12345678
              </span>
            </p>
            <p className="date-and-number" style={{ marginTop: "20px" }}>
              <span>{currentDate}</span>
              <span>User 1</span>
            </p>
            <p className="items-header">
              <span>Item Name</span>
              <span>Source</span>
            </p>
            <p>
              <span>----------------------</span>
            </p>
            <div className="items" id="receipt-items">
              <div className="item">
                <p>
                  <span className="scrollable-text">ChillWaves Sweater</span>
                  <span className="scrollable-text">FF</span>
                </p>
                <p>
                  <span className="scrollable-text">H&N Skinny Jeans</span>
                  <span className="scrollable-text">RB</span>
                </p>
                <p>
                  <span className="scrollable-text">Timeless Flannel Shirt</span>
                  <span className="scrollable-text">SH</span>
                </p>
              </div>
            </div>
            <p>
              <span>----------------------</span>
            </p>
            <p>
              <span>TOTAL ITEMS</span>
              <span id="item-count">3</span>
            </p>
          </div>
           {/* Conditionally render the receipt-help div */}
      {isHelpVisible && (
        <div className="receipt-help">
          Click me
        </div>
      )}
        </section>
      </main>
    </>
  );
}

export default Rules;