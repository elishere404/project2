import React from 'react';
import '../App.css';

const Card = ({ name, price, quantity, description, color = '#fff', photo }) => {
  return (
    <div className="card" style={{ backgroundColor: color }}>
      <img src={photo} alt={name} className="card-image" />
      <h2>{name}</h2>
      <p>{description}</p>
      <p>Price: ${price}</p>
      <p>Quantity: {quantity}</p>
    </div>
  );
};

export default Card;
