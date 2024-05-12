import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './ProductDetails.module.css'; // Импортируем CSS модуль
import products from './productsData'; // Убедись, что путь к файлу данных верный
import { useCart } from './CartContext';

function ProductDetails() {
  let { productId } = useParams();
  const { addToCart } = useCart();
  const product = products.find(p => p.id.toString() === productId);

  // Функция для добавления продукта в корзину
  const handleAddToCart = () => {
    addToCart(product);
  };

  // Проверяем наличие данных о продукте
  if (!product) {
    return <div>Продукт не найден</div>;
  }

  // Если данные о продукте есть, отображаем детали продукта
  return (
    <div className={styles.productContainer}>
      <div className={styles.productImage}>
        <img src={product.image} alt={product.name} />
      </div>
      <div className={styles.productContent}>
        <div className={styles.productHeader}>
          <h1>{product.name}</h1>
          {/* Здесь могут быть иконки или другие элементы */}
        </div>
        <div className={styles.productPrice}>
          {product.isOnSale && <span className={styles.oldPrice}>${product.originalPrice}</span>}
          <span className={styles.newPrice}>${product.price}</span>
          {product.isOnSale && (
            <span className={styles.discount}>- {((1 - product.price / product.originalPrice) * 100).toFixed(0)}%</span>
          )}
        </div>
        <button className={styles.addToCartBtn} onClick={handleAddToCart}>
          Добавить в корзину
        </button>
        <p className={styles.productDescription}>{product.description || "Описание продукта временно недоступно."}</p>
        {/* Здесь могут быть дополнительные детали о продукте */}
      </div>
    </div>
  );
}

export default ProductDetails;
