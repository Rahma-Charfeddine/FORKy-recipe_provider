const { Create_ingredient_recipe, Create_many, Get_all_ingredient_recipes, Get_recipes_by_ingredient_id, delete_by_id, Get_ingredients_by_recipe_id } = require('../services/ingredient-recipe.services');
const { Create_ingredient, Get_all_ingredients, Get_ingredient_by_id, Get_ingredient_by_name, Get_ingredients_by_type, Update_ingredient_by_id } = require('../services/ingredient.services');

const router = require('express').Router();


router.post("/", Create_ingredient);
router.get("/", Get_all_ingredients);
router.get("/:id", Get_ingredient_by_id);
router.get("/getingredientbyname/:name", Get_ingredient_by_name);
router.get("/getingredientsbytype/:type", Get_ingredients_by_type);
router.put("/:id", Update_ingredient_by_id);


// ------------------------------
// ingredient - recipe
// ------------------------------

router.post("/createingredientrecipe", Create_ingredient_recipe);
router.post("/createmanyingredientrecipe", Create_many);
router.get("/getallingredientrecipes", Get_all_ingredient_recipes);
router.get("/getingredientsbyrecipeid/:id", Get_ingredients_by_recipe_id);
router.get("/getrecipesbyingredient/:id", Get_recipes_by_ingredient_id);
router.delete("/deleteingredientfromrecipe/:id",delete_by_id)

module.exports = router;