import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SeasonalPicks.css';
import products from '../productsData'; // Adjust the import path as necessary

const getSeasonalItems = (allProducts, excludedItemsIds) => {
  return allProducts.filter(product => !excludedItemsIds.includes(product.id));
};

const excludedIds = [1, 2, 3]; // IDs of the best sellers
const seasonalItems = getSeasonalItems(products, excludedIds).slice(0, 3);

const SeasonalPicks = () => {
  const navigate = useNavigate();

  const handleItemClick = (itemId) => {
    navigate(`/product/${itemId}`); // Navigate to ProductDetails page
  };

  return (
    <section id="seasonal-picks" className="section-seasonal-picks">
      <div className="container">
        <h2 className="section-title">Seasonal Picks</h2>
        <div className="products-grid">
          {seasonalItems.map((item) => (
            <div key={item.id} className="product-card">
              <img src={item.image} alt={item.name} className="product-image" />
              <div className="product-info">
                <h3 className="product-title">{item.name}</h3>
                <p className="product-description">{item.description}</p>
                <button
                  className="product-button"
                  onClick={() => handleItemClick(item.id)}
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
};

export default SeasonalPicks;
