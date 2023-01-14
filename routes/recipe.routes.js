const { Create_recipe, Get_all_recipes, Get_recipe_by_id, Delete_recipe_by_id, Update_recipe_by_id } = require('../services/recipe.services');

const router = require('express').Router();


router.post("/", Create_recipe);
router.get("/", Get_all_recipes);
router.get("/:id", Get_recipe_by_id);
router.delete("/:id", Delete_recipe_by_id);
router.put("/:id", Update_recipe_by_id);




module.exports = router;