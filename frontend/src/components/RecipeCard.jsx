import React from 'react'
import { Link } from 'react-router-dom';

export default function RecipeCard({ recipe }) {


  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 w-full max-w-xs mx-auto flex flex-col items-center p-4">
      <Link to={`/recipe/${recipe.id}`}>
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-40 object-cover rounded-lg"
        />
        <div className="w-full flex flex-col items-center">
        <p className="text-lg font-semibold text-gray-800 text-center line-clamp-2 mt-1">{recipe.title}</p>
      </div>
      </Link>
    </div>
  );
}

