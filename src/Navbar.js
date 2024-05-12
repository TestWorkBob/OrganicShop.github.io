import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaSearch, FaShoppingBag } from 'react-icons/fa';
import { useCart } from './CartContext'; // Припустимо, що це хук, який ви створили для доступу до стану кошика

function Navbar() {
  const navigate = useNavigate();
  const { cart } = useCart(); // Отримуємо кошик з контексту
  const itemCount = cart.reduce((total, item) => total + item.quantity, 0); // Рахуємо кількість товарів

  const handleCartClick = () => {
    navigate('/cart');
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src="/images/OS-logo.png" alt="Logo" />
        </Link>
        <div className="navbar-links">
          <Link to="/shop">Our Shop</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/recipes">Recipes</Link>
          <Link to="/about">About Us</Link>
        </div>
        <div className="navbar-icons">
          <FaSearch />
          <div onClick={handleCartClick} style={{ position: 'relative', cursor: 'pointer' }}>
            <FaShoppingBag />
            {itemCount > 0 && (
              <span style={{
                position: 'absolute',
                top: '-8px',
                right: '-8px',
                backgroundColor: 'red',
                color: 'white',
                borderRadius: '50%',
                padding: '2px 6px',
                fontSize: '0.75rem',
                fontWeight: 'bold',
              }}>
                {itemCount}
              </span>
            )}
          </div>
          <button className="login-button">Login</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
