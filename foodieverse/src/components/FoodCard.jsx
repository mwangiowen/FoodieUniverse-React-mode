// FoodCard.js
import React from 'react';
import { FaYoutube } from 'react-icons/fa';

function FoodCard({ meal }) {
  return (
    <li key={meal.idMeal} className="food-card">
      <img src={meal.strMealThumb} alt={meal.strMeal} />
      <h2>{meal.strMeal}</h2>
      <p>{meal.strInstructions}</p>
      <p>Category: {meal.strCategory}</p>
      <p>Area: {meal.strArea}</p>
      {meal.strTags && <p>Tags: {meal.strTags}</p>}
      {meal.strYoutube && (
        <a
          className="youtube-link"
          href={meal.strYoutube}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="youtube-card">
            <FaYoutube size={24} />
            <span>Watch on YouTube</span>
          </div>
        </a>
      )}
    </li>
  );
}

export default FoodCard;
