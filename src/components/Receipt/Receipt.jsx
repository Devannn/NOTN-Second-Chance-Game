import React from "react";
import "./Receipt.css";
import logo from "../../assets/logo.jpeg";

const currentDate = new Date().toLocaleDateString();

const Receipt = ({ wardrobeData, onReceiptClick }) => {
  return (
    <section className="container-receipt">
      <div className="receipt" id="receipt" onClick={onReceiptClick}>
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
          {wardrobeData.map((item) => (
            <div className="item" key={item.id}>
              <p>
                <span className="scrollable-text">{item.name}</span>
                <span className="scrollable-text">{item.source}</span>
              </p>
            </div>
          ))}
        </div>
        <p>
          <span>----------------------</span>
        </p>
        <p>
          <span>TOTAL ITEMS</span>
          <span id="item-count">{wardrobeData.length}</span>
        </p>
      </div>
    </section>
  );
};

export default Receipt;