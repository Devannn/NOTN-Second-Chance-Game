import React from "react";
import "./Wardrobe.css";
import { Link } from "react-router-dom";
import image from "../../assets/inventory-item.png";

const Wardrobe = ({ wardrobeData, onWearItem }) => {
  const isWardrobeEmpty = wardrobeData.length === 0;

  return (
    <section className="container-wardrobe">
      <div className="wardrobe" id="wardrobe">
        <h1>Wardrobe</h1>

        {isWardrobeEmpty ? (
          <div className="empty-wardrobe">
            <h3>Your wardrobe is empty!</h3>
            <p>Visit the store to buy some items and start filling it up.</p>
          </div>
        ) : (
          wardrobeData.map((item) => (
            <div key={item.id} className="product">
              <div className="product-image-container">
                <img
                  className="product-image"
                  src={item.image !== "[location]" ? item.image : image}
                  alt={item.name}
                />
                <div className="product-hover-container">
                  <h3>{item.name}</h3>
                  <div className="product-hover-container-p">
                    <p>Type: <b>{item.type}</b></p>
                    <p>Durability: <b>{item.durability}</b></p>
                    <p>Price: <b>{item.price}$</b></p>
                    <p>Source: <b>{item.sourceLong}</b></p>
                  </div>
                  <button onClick={() => onWearItem(item)}>Wear</button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default Wardrobe;