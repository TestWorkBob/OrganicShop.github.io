import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BestSellers.css';
import products from '../productsData'; // Adjust the import path as necessary

function BestSellers() {
  const navigate = useNavigate();
  const bestSellers = products.slice(0, 3);

  const handleButtonClick = (productId) => {
    navigate(`/product/${productId}`); // Navigate to ProductDetails page
  };

  return (
    <section id="best-sellers" className="best-sellers-section">
      <div className="container">
        <h2 className="section-title">Best Sellers</h2>
        <div className="product-grid">
          {bestSellers.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} className="product-image" />
              <div className="product-details">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-price">${product.price}</p>
                {product.isOnSale && <p className="original-price">${product.originalPrice}</p>}
                <button
                  className="product-button"
                  onClick={() => handleButtonClick(product.id)}
                >
                  View Product
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BestSellers;
