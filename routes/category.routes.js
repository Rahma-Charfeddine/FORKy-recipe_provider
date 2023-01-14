const { Create_category_recipe, delete_by_id, Get_recipes_by_category_id } = require('../services/category-recipe.services');
const { Create, Get_all_categories, Get_category_by_id, Update_category_by_id, Delete_category_by_id } = require('../services/category.services');

const router = require('express').Router();


router.post("/", Create);
router.get("/", Get_all_categories);
router.get("/:id", Get_category_by_id);
router.put("/:id", Update_category_by_id);
router.delete("/:id", Delete_category_by_id);





// ------------------------------
// cqtegory - recipe
// ------------------------------

router.post("/createcategoryrecipe", Create_category_recipe);
router.get("/getrecipesbycategoryid/:id", Get_recipes_by_category_id);
router.delete("/deletecategoryrecipebyid/:id", delete_by_id);


module.exports = router;