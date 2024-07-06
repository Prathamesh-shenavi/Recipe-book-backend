import {
  addRecipeDB,
  getAllRecipesDB,
  getRecipeByIdDB,
  getRecipesByAuthorDB,
  deleteRecipeDB,
  updateRecipeDB,
} from "../services/recipe.service.js";
import {asyncHandler} from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js";
import {ApiResponse} from "../utils/ApiResponse.js";

const addRecipe = asyncHandler(async (req, res) => {
  const recipe = req.body;
  if (!recipe) {
    throw new ApiError(404, `Invalid Recipe inputs`, []);
  }
  const recipeDB = await addRecipeDB(recipe);
  if (!recipeDB) {
    throw new ApiError(500, "Error while creating recipe");
  }
  return res
    .status(201)
    .send(new ApiResponse(201, {redipe: recipeDB}, "Recipe created"));
});

const getAllRecipes = asyncHandler(async (req, res) => {
  const recipes = await getAllRecipesDB();
  return res
    .status(200)
    .send(new ApiResponse(200, recipes, "All Recipes are fetched"));
});

const getRecipeById = asyncHandler(async (req, res) => {
  const {id} = req.params;
  if (!id) {
    throw new ApiError(404, `id is required`, []);
  }
  const recipe = await getRecipeByIdDB(id);
  if (!recipe) {
    throw new ApiError(404, `Recipe with id ${id} is not found`);
  }
  return res
    .status(200)
    .send(new ApiResponse(200, recipe, `Recipe is fetched by Id ${id}`));
});

const getRecipesByAuthor = asyncHandler(async (req, res) => {
  const author = req.query.author;
  if (!author) {
    throw new ApiError(404, `author is required`, []);
  }
  const recipes = await getRecipesByAuthorDB(author);
  if (!recipes) {
    throw new ApiError(404, `Recipes with author: ${author} are not found`);
  }
  return res
    .status(200)
    .send(
      new ApiResponse(200, recipes, `Recipes are fetched by Author ${author}`)
    );
});

const deleteRecipe = asyncHandler(async (req, res) => {
  const {id} = req.params;
  if (!id) {
    throw new ApiError(404, `id is required`, []);
  }
  const deletedRecipe = await deleteRecipeDB(id);
  if (!deletedRecipe) {
    throw new ApiError(404, `Recipe with id: ${id} is not found`);
  }
  return res
    .status(200)
    .send(new ApiResponse(200, deletedRecipe, `Recipe deleted by id ${id}`));
});

const updateRecipe = asyncHandler(async (req, res) => {
  const recipe = req.body;
  const {id} = req.params;
  if (!recipe || !id) {
    throw new ApiError(404, `Invalid Recipe inputs`, []);
  }
  const updatedRecipe = await updateRecipeDB(id, recipe);
  if (!updatedRecipe) {
    throw new ApiError(500, "Error while updating recipe");
  }
  return res
    .status(201)
    .send(new ApiResponse(200, {redipe: updatedRecipe}, "Recipe updated"));
});

export {
  addRecipe,
  getAllRecipes,
  getRecipeById,
  getRecipesByAuthor,
  deleteRecipe,
  updateRecipe,
};
