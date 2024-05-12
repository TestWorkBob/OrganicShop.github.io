import React, { useState } from 'react';
import { useCart } from './CartContext';
import ProductList from './ProductList';
import products from './productsData';
import './Shop.css';
import Notification from './Notification';

function Shop() {
    const { addToCart } = useCart();
    const [notifications, setNotifications] = useState([]);

    const handleAddToCart = (product) => {
        addToCart(product);
        const newNotification = {
            id: Math.random(), // Простой способ генерации уникального ID
            message: `${product.name} додано у кошик!`
        };
        setNotifications((prevNotifications) => [...prevNotifications, newNotification]);

        setTimeout(() => {
            setNotifications((prevNotifications) =>
                prevNotifications.filter(notif => notif.id !== newNotification.id)
            );
        }, 3500); // Время, в течение которого уведомление будет видно
    };

    return (
        <div className="shop-container">
            <h1 className="shop-title">Our Shop</h1>
            <ProductList products={products} onAddToCart={handleAddToCart} />
            {notifications.map((notif) => (
                <Notification key={notif.id} message={notif.message} />
            ))}
        </div>
    );
}

export default Shop;
