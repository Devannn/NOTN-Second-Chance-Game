import React from "react";
import "./Event.css";

const Event = ({ eventData, onWearFromCloset, onBuyItem }) => {
  if (!eventData) return null;

  return (
    <div className="card-container-event">
      <div className="card-event">
        <div className="front-content-event" id={`front-content-event-${eventData.eventId}`}>
        </div>
        <div className="content-event">
          <p className="heading-event">{eventData.eventName}</p>
          <p className="text-event">{eventData.eventText}</p>
          <div className="event-buttons">
            {/* Checks if event 7, 9 or 10 are shown. When shown hide the wear from closet button */}
            {eventData.eventId !== 7 && eventData.eventId !== 9 && eventData.eventId !== 10 && (
              <button className="primary-button" onClick={onWearFromCloset}>
                <span>Wear from Closet</span>
              </button>
            )}
            <button className="primary-button" onClick={onBuyItem}>
              <span>Buy Item</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;