import React from 'react';
import { Link } from 'react-router-dom'; // Убедитесь, что этот импорт остается

function ProductCard({ product, onAddToCart }) {
  const { id, name, price, originalPrice, image, isOnSale } = product;

  // Функция для обработки добавления товара в корзину
  const handleAddToCartClick = (e) => {
    e.stopPropagation(); // Останавливаем всплытие события, чтобы не перейти по ссылке при клике на кнопку
    onAddToCart(product); // Вызываем функцию добавления в корзину
  };

  return (
    <div className={`product-card ${isOnSale ? 'sale-item' : ''}`}>
      {isOnSale && <div className="sale-badge">Sale</div>}
      {/* Только изображение обернуто в Link, чтобы перейти на страницу продукта */}
      <Link to={`/product/${id}`}>
        <img src={image} alt={name} />
      </Link>
      <div className="product-info">
        {/* Название - простой текст */}
        <h3>{name}</h3>
        {isOnSale && <p className="original-price">€{originalPrice}</p>}
        <p className="price">€{price}</p>
      </div>
      {/* Кнопка добавления товара в корзину */}
      <button className="add-to-cart-btn" onClick={handleAddToCartClick}>
        Add to cart
      </button>
    </div>
  );
}

export default ProductCard;
