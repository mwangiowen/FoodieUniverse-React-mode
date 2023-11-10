import React from 'react';
import FoodCard from './FoodCard'; // New component

function FoodCardList({ meals }) {
  return (
    <ul className="food-card-container">
      {meals.map((meal) => (
        <FoodCard key={meal.idMeal} meal={meal} />
      ))}
    </ul>
  );
}

export default FoodCardList;
