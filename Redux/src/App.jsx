// src/App.js
import React, { useState } from 'react';
import Card from './Card';
import './App.css';

const App = () => {
  const [cards] = useState([
    { id: 1, title: 'Card 1', description: 'This is card 1 .hello i am cread 1' },
    { id: 2, title: 'Card 2', description: 'This is card 2.hello i am cread 2' },
    { id: 3, title: 'Card 3', description: 'This is card 3.hello i am cread 3' },
  ]);

  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };
console.log(selectedCard);
console.log(cards);
  return (
    <div className="app">
      <div className="card-list">
        {cards.map((card) => (
          <Card key={card.id} card={card} onClick={handleCardClick} />
        ))}
      </div>
      {selectedCard && (
        <div className="card-details">
          <h2>{selectedCard.title}</h2>
          <p>{selectedCard.description}</p>
        </div>
      )}
    </div>
  );
};

export default App;
