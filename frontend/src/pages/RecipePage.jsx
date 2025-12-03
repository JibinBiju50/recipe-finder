import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getRecipeDetails } from '../service/recipeAPI';
import Ingredient from '../components/Ingredient';

export default function RecipePage() {
    //get recipe id from url
    const {recipeId} = useParams();
    console.log("recipe id:", recipeId);

    const [recipe, setRecipe] = useState(null);
    const [isloading, setIsloading] = useState(false);
    const [error, setError] = useState(null);
    
    useEffect(()=>{
        const fetchDetails = async () =>{
            setIsloading(true);
            setError(null);
            try{
                const data = await getRecipeDetails(recipeId);
                setRecipe(data);
            } catch(error) {
                console.log("Failed to load recipe details!", error);
                setError("Could not fetch recipe details! Please try again later..");
            } finally {
                setIsloading(false);
            }
        }
        fetchDetails();
    },[recipeId])
    
    if(isloading){
        return <div className="flex justify-center items-center min-h-screen"><p className="text-blue-600 text-lg font-semibold">Loading...</p></div>
    }
    if(error){
        console.log("error:", error);
        return <div className="flex justify-center items-center min-h-screen"><p className="text-red-500 text-lg">{error}</p></div>
    }
    return (
        recipe && (
            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 mt-10 mb-10">
                <h2 className="text-3xl font-bold text-blue-700 mb-4 text-center">{recipe.title}</h2>
                <img src={recipe.image} alt={recipe.title} className="w-full h-72 object-cover rounded-lg shadow mb-6" />

                <div className="mb-8">
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">Ingredients</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {recipe.extendedIngredients.map(ingredient =>
                            <li key={ingredient.id}>
                                <Ingredient ingredient={ingredient}/>
                            </li>
                        )}
                    </ul>
                </div>

                <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">How to cook</h4>
                    <div className="prose max-w-none" dangerouslySetInnerHTML={{__html: recipe.summary}} />
                </div>
            </div>  
        )
    )
}
