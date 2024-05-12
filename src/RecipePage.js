import React from 'react';
import { useNavigate } from 'react-router-dom';
import './RecipePage.css';

function RecipePage() {
  const navigate = useNavigate();
  const recipes = [
    {
      id: 1,
      name: 'Fresh Avocado Salad',
      description: 'A delightful mix of ripe avocados, cherry tomatoes, and fresh greens.',
      imageSrc: 'path-to-recipe-image-1.jpg',
    },
    // ...more recipes
  ];

  const viewRecipe = (id) => {
    navigate(`/recipes/${id}`); // This navigates to /recipes/1 for the first recipe
  };

  return (
    <div className="recipe-page">
      <header className="recipe-header">
        <h1>Delicious Organic Recipes</h1>
        <p>Nourish your body with our collection of healthy and wholesome recipes.</p>
      </header>
      <section className="recipe-gallery">
        {recipes.map((recipe) => (
          <article key={recipe.id} className="recipe-card">
            <img src={recipe.imageSrc} alt={recipe.name} className="recipe-image" />
            <div className="recipe-info">
              <h3 className="recipe-title">{recipe.name}</h3>
              <p className="recipe-description">{recipe.description}</p>
              <button onClick={() => viewRecipe(recipe.id)} className="view-recipe-btn">
                View Recipe
              </button>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}

export default RecipePage;
