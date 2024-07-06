import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  author: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  category: {
    type: String,
    require: true,
  },
  ingredients: {
    type: [String],
    require: true,
  },
  instructions: {
    type: [String],
    require: true,
  },
  prep_time: {
    type: Number,
    require: true,
  },
  cook_time: {
    type: Number,
    require: true,
  },
  total_time: {
    type: Number,
    require: true,
  },
  servings: {
    type: Number,
    require: true,
  },
});

export const Recipe = mongoose.model("Recipe", recipeSchema);
