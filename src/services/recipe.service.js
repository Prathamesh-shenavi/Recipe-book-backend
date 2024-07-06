import {Recipe} from "../models/recipe.model.js";

const addRecipeDB = async (recipe) => {
  try {
    const newRecipe = await Recipe.create(recipe);
    return newRecipe;
  } catch (e) {
    throw new Error(`[Database Error] Recipe is not added: ${e}`);
  }
};

const getAllRecipesDB = async () => {
  try {
    const recipes = await Recipe.find();
    return recipes;
  } catch (e) {
    throw new Error(`[Database Error] Recipes are not fetched: ${e}`);
  }
};

const getRecipeByIdDB = async (id) => {
  try {
    const recipe = await Recipe.findById(id);
    return recipe;
  } catch (e) {
    throw new Error(`[Database Error] Recipe is not fetched By Id ${id}: ${e}`);
  }
};
const getRecipesByAuthorDB = async (author) => {
  try {
    const recipes = await Recipe.find({author: author});
    return recipes;
  } catch (error) {
    throw new Error(
      `[Database Error] Recipes are not fetched By Author ${author}: ${e}`
    );
  }
};
const deleteRecipeDB = async (id) => {
  try {
    const recipe = await Recipe.findByIdAndDelete(id);
    return recipe;
  } catch (e) {
    throw new Error(`[Database Error] Recipe is not deleted: ${id}: ${e}`);
  }
};
const updateRecipeDB = async (id, recipe) => {
  try {
    const updatedRecipe = await Recipe.findByIdAndUpdate(
      id,
      {$set: recipe},
      {new: true}
    );
    return updatedRecipe;
  } catch (e) {
    throw new Error(`[Database Error] Recipe is not updated: ${id}: ${e}`);
  }
};
export {
  addRecipeDB,
  getAllRecipesDB,
  getRecipeByIdDB,
  getRecipesByAuthorDB,
  deleteRecipeDB,
  updateRecipeDB,
};
