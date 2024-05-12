import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaShoppingBag } from 'react-icons/fa';

function CartIcon() {
  const navigate = useNavigate();

  const handleOpenCart = () => {
    navigate('/cart');
  };

  return (
    <img src={cartIcon} alt="Cart" onClick={handleOpenCart} style={{ cursor: 'pointer' }} />
  );
}

export default CartIcon;
