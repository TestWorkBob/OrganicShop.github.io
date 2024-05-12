import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import MainPage from './MainPage';
import AboutPage from './AboutPage';
import BlogPage from './BlogPage';
import BlogPost from './BlogPost'; // Ensure you have this component created
import RecipePage from './RecipePage';
import RecipeDetails from './RecipeDetails'; // Ensure you have this component created
import Shop from './Shop';
import ShoppingCart from './ShoppingCart';
import ProductDetails from './ProductDetails';
import { CartProvider } from './CartContext';
import './App.css';

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:postId" element={<BlogPost />} />
          <Route path="/recipes" element={<RecipePage />} />
          <Route path="/recipes/:recipeId" element={<RecipeDetails />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          {/* ...other routes */}
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
