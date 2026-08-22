import React from "react";

function MealCard({ meal }) {
  return (
    <div className="meal-card">

      <h3>{meal.name}</h3>

      <p>Calories: {meal.calories} kcal</p>

      <p>Protein: {meal.protein} g</p>

      <p>Carbs: {meal.carbs} g</p>

      <p>Fat: {meal.fat} g</p>

    </div>
  );
}

export default MealCard;