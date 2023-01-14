const CategoryRecipeModel = require('../models/category-recipe.model');
const IngredientRecipeModel = require('../models/ingredient-recipe.model');
const ReviewModel = require('../models/review.model');
const RecipeModel = require('./../models/recipe.model')


module.exports.Create_recipe = async (req, res) => {
    // console.log(req.body)
    let data = new RecipeModel(req.body)
    try {
        let result = await data.save();
        res.status(200).send(result)
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports.Get_all_recipes = async (req, res) => {
    try {
        const data = await RecipeModel.find();
        res.status(200).json({
            msg: "get all recipes from db",
            data: data
        })
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports.Get_recipe_by_id = async (req, res) => {
    try {
        const id = req.params.id
        let result = await RecipeModel.find({ _id: id })
        res.status(201).send(result)

    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports.Delete_recipe_by_id = async (req, res) => {
    try {
        const id = req.params.id
        await RecipeModel.deleteOne({ _id: id })
        await ReviewModel.deleteMany({recipe_id:id})
        await CategoryRecipeModel.deleteMany({recipe_id:id})
        await IngredientRecipeModel.deleteMany({recipe_id:id})
        res.status(201).send()

    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports.Update_recipe_by_id = async (req, res) => {
    try {
        const id = req.params.id
        let result = await RecipeModel.findByIdAndUpdate(id, req.body, { new: true });
        res.status(201).send(result)

    } catch (error) {
        res.status(500).send(error)
    }
}