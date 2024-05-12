// ShoppingCart.js
import React, { useState } from 'react';
import { useCart } from './CartContext';
import './ShoppingCart.css';
import CartItem from './CartItem'; // Make sure you have a CartItem component.

function ShoppingCart() {
  const { cart, removeFromCart } = useCart();
  const [isCheckout, setIsCheckout] = useState(false);

  const totalSum = cart.reduce((sum, item) => sum + item.quantity * item.price, 0).toFixed(2);

  return (
    <div className="shopping-cart">
      <h2>Cart</h2>
      {cart.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          removeFromCart={removeFromCart}
        />
      ))}
      <div className="cart-summary">
        <span>Total amount: {totalSum} €</span>
        <button onClick={() => setIsCheckout(!isCheckout)} className="checkout-button">
        Make an order
        </button>
      </div>
      {isCheckout && (
        <div className="checkout-form">
          <input type="text" placeholder="Name" required />
          <input type="text" placeholder="Phone number" required />
          <input type="text" placeholder="Address" required />
          <button className="confirm-order">Confirm the order</button>
        </div>
      )}
    </div>
  );
}

export default ShoppingCart;
