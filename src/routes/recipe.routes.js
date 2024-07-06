import {Router} from "express";
import {
  addRecipe,
  getAllRecipes,
  getRecipeById,
  getRecipesByAuthor,
  deleteRecipe,
  updateRecipe,
} from "../controllers/recipe.controller.js";
const router = Router();

router.get("/", (req, res, next) => {
  if (Object.keys(req.query).length === 0) {
    getAllRecipes(req, res);
  } else {
    next(); // Pass to the next route handler
  }
});
router.get("/", getRecipesByAuthor);
router.get("/:id", getRecipeById);

router.post("/", addRecipe);
router.delete("/:id", deleteRecipe);
router.put("/:id", updateRecipe);
export default router;
