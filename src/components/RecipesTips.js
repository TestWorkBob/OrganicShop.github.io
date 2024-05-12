// RecipesTips.js
import React from 'react';
import './RecipesTips.css'; // Ensure to create this CSS file

// Dummy data for recipes and tips, replace with actual data from your database or API
const recipes = [
  {
    id: 1,
    title: 'Classic Tomato Spaghetti',
    description: 'This simple pasta recipe is a perfect midweek dinner.',
    imageSrc: '/images/tomato-spaghetti.jpg',
  },
  {
    id: 2,
    title: 'Grilled Salmon with Avocado Salad',
    description: 'A quick but healthy recipe loaded with Omega-3s.',
    imageSrc: '/images/grilled-salmon.jpg',
  },
  {
    id: 3,
    title: 'Ultimate Chocolate Cake',
    description: 'Indulge in the rich and moist chocolate cake for dessert.',
    imageSrc: '/images/chocolate-cake.jpg',
  },
  // Add more recipes as needed
];

const RecipesTips = () => {
  return (
    <section id="recipes-tips" className="section-recipes-tips">
      <div className="container">
        <h2 className="section-title">Recipes & Tips</h2>
        <div className="recipes-grid">
          {recipes.map((recipe) => (
            <div key={recipe.id} className="recipe-card">
              <img src={recipe.imageSrc} alt={recipe.title} className="recipe-image" />
              <div className="recipe-info">
                <h3 className="recipe-title">{recipe.title}</h3>
                <p className="recipe-description">{recipe.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecipesTips;
