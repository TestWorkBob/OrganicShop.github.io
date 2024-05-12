// CartItem.js
import React from 'react';
import { useCart } from './CartContext';
import QuantitySelector from './QuantitySelector'; // This is your quantity selector component

function CartItem({ item, removeFromCart }) {
  const { addToCart, decreaseQuantity } = useCart();

  const handleIncreaseQuantity = () => addToCart(item);
  const handleDecreaseQuantity = () => {
    if (item.quantity > 1) {
      decreaseQuantity(item.id);
    }
  };

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} className="item-image" />
      <div className="item-info">
        <h3>{item.name}</h3>
        <QuantitySelector
          quantity={item.quantity}
          onIncrement={handleIncreaseQuantity}
          onDecrement={handleDecreaseQuantity}
        />
        <p>Price per unit: {item.price.toFixed(2)} €</p>
        <p>Total price: {(item.quantity * item.price).toFixed(2)} €</p>
        <button onClick={() => removeFromCart(item.id)} className="remove-item">Remove</button>
      </div>
    </div>
  );
}

export default CartItem;
