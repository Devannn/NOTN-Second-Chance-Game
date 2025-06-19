import React from "react";
import "./Store.css";

const Store = ({ storeData, onBuyItem }) => (
  <section className="store">
    <div className="carousel">
          {storeData.map(item => (
            <div className="card-container" key={item.id}>
              <div className="card">
                <div className="front-content">
                  <img src={item.image} alt={item.image} />
                </div>
                <div className="content">
                  <p className="heading">{item.name}</p>
                  <p className="price-text">€ {item.price}</p>
                  <div className="content-more-info">
                    {/* If dress is shown do not show type and source */}
                    {item.id !== 31 && item.id !== 32 && item.id !== 33 && (
                      <>
                        <p>Type: <span>{item.type}</span></p>
                        <p>Source: <span>{item.sourceLong}</span></p>
                      </>
                    )}
                  </div>
                  <div>
                    <button
                      className="primary-button" id="store-button"
                      onClick={() => onBuyItem(item.id)}
                    >
                      PURCHASE
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
  </section>
);

export default Store;