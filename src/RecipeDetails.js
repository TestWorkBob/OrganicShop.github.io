import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './RecipeDetails.css'; // Make sure to add your own styles

function RecipeDetails() {
  const [recipe, setRecipe] = useState(null);
  const { recipeId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // Replace this with a real fetch/request to your backend or API
    const fetchRecipe = async () => {
      try {
        // const response = await fetch(`/api/recipes/${recipeId}`);
        // const data = await response.json();
        // setRecipe(data);

        // Mock data
        setRecipe({
          id: recipeId,
          name: 'Fresh Avocado Salad',
          description: 'Full recipe details...',
          imageSrc: 'path-to-recipe-image.jpg',
          // ...other recipe details
        });
      } catch (error) {
        console.error('Error fetching recipe details:', error);
        // Handle errors as appropriate
      }
    };

    fetchRecipe();
  }, [recipeId]);

  if (!recipe) {
    return <p>Loading...</p>; // or a loading spinner or similar component
  }

  return (
    <div className="recipe-details">
      <h1>{recipe.name}</h1>
      <img src={recipe.imageSrc} alt={recipe.name} />
      <p>{recipe.description}</p>
      {/* Add other recipe details here */}
      <button onClick={() => navigate(-1)}>Back to Recipes</button>
    </div>
  );
}

export default RecipeDetails;
