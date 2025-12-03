
const API_URL = "https://api.spoonacular.com/recipes/";

const API_KEY = import.meta.env.VITE_SPOONACULAR_API_KEY;

export const SearchRecipies = async (query) => {
  const url = `${API_URL}/complexSearch?query=${query}&apiKey=${API_KEY}`
  try {
    const response = await fetch(url);

    if(!response.ok){
      throw new Error(`HTTP error! Status${response.status}`);
    }

    const data = await response.json();

    return data.results;

  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

export const getRecipeDetails = async (recipeId) => {
  const url = `${API_URL}${recipeId}/information?apiKey=${API_KEY}`
  console.log("fetching details from ", url);
  
  try {
    const response = await fetch(url);

    if(!response.ok){
      throw new Error(`HTTP error! Status${response.status}`);
    }

    const data = await response.json();
    return data;

  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}




