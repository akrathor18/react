// src/Card.js
import React from 'react';

const Card = ({ card, onClick }) => {
  return (
    <div className="card" onClick={() => onClick(card)}>
      <h3>{card.title}</h3>
    </div>
  );
};

export default Card;
