import { useState } from "react";

function ProcessCard({ card, isOpen, onClick }) {
  return (
    <button
      className={`process-card ${isOpen ? "active" : ""} `}
      key={card.id}
      onClick={onClick}
    >
      <div className="process-card-selector-div">
        <span className="process-selector-number">0{card.id}</span>
        <h3>{card.name}</h3>
      </div>
      <div className={`process-card-content ${isOpen ? "active" : ""}`}>
        <div className="process-card-text">
          <h3>{card.header}</h3>
          <p>{card.text}</p>
        </div>
        <img src={card.img} className="process-card-img" />
      </div>
    </button>
  );
}

export default ProcessCard;
