export async function fetchRecipes(filter) {
    const { query, limit } = filter;
  
    const url = `https://api.edamam.com/search?q=${query}&app_id=294ca669&app_key=d8870943c9ab507a7e8b8a0111ff1c69&from=0&to=${limit}`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data)
      return data?.hits;
    } catch (error) {
      console.error("Error fetching recipes:", error);
      return null;
    }
  }

export async function fetchRecipe(id){
const url = `https://api.edamam.com/api/recipes/v2/${id}?type=public&app_id=294ca669&app_key=d8870943c9ab507a7e8b8a0111ff1c69`

const response = await fetch(url)

const data = await response.json();

return data.recipe;
}