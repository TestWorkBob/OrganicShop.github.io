// QuantitySelector.js
import React from 'react';

function QuantitySelector({ quantity, onDecrement, onIncrement }) {
  return (
    <div className="quantity-selector">
      <button onClick={onDecrement} disabled={quantity <= 1} className="quantity-button">-</button>
      <span>{quantity}</span>
      <button onClick={onIncrement} className="quantity-button">+</button>
    </div>
  );
}

export default QuantitySelector;
