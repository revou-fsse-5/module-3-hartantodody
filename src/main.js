const recipe = {
  title: "Spaghetti Carbonara",
  instructions: "1. Cook spaghetti according to package instructions. 2. In a separate pan, cook pancetta until crispy. 3. In a bowl, whisk eggs and grated cheese. 4. Combine spaghetti, pancetta, and egg mixture, stirring quickly. 5. Serve immediately with additional cheese and black pepper.",
  image: "https://www.themealdb.com/images/media/meals/llcbn01574260722.jpg",
};

const getRecipeBtn = document.querySelector("#getRecipeBtn");
const recipeTitle = document.querySelector(".recipe-title");
const recipeImage = document.querySelector(".recipe-image");
const recipeInstructions = document.querySelector(".recipe-instruction");

function setRandomRecipe() {
  recipeTitle.innerText = recipe.title;
  recipeImage.setAttribute("src", recipe.image);
  recipeImage.setAttribute("width", "200px");
  recipeInstructions.innerText = recipe.instructions;
  getRecipeBtn.remove();
}

getRecipeBtn.addEventListener("click", setRandomRecipe);
