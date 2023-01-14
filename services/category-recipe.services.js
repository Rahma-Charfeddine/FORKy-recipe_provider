const CategoryRecipeModel = require("../models/category-recipe.model");
const RecipeModel = require("../models/recipe.model");

module.exports.Create_category_recipe = async (req, res) => {
    // {
    //     recipe_id:"rtyukl",
    //     category_id:"5641fff"
    // }
    let data = new CategoryRecipeModel(req.body)
    try {
        let result = await data.save();
        res.status(200).send(result)
    } catch (error) {
        res.status(500).send(error)
    }
}



module.exports.Get_recipes_by_category_id = async (req, res) => {
    try {
        const id = req.params.id
        let elements = await CategoryRecipeModel.find({ category_id: id })
        let result = []
        for (const index in elements) {
            result.push(await RecipeModel.findById(elements[index].recipe_id))
        }
        // console.log(result)
        res.status(200).send(result)
    } catch (error) {
        res.status(500).send(error)
    }
}


module.exports.delete_by_id = async (req, res) => {
    try {
        const id = req.params.id
        let result = await CategoryRecipeModel.deleteOne({ _id: id })
        res.status(201).send(result)
    } catch (error) {
        res.status(500).send(error)
    }
}
