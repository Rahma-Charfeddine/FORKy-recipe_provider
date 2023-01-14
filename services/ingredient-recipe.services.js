const IngredientRecipeModel = require('./../models/ingredient-recipe.model')

module.exports.Create_ingredient_recipe = async (req, res) => {
    // {
    //     recipe_id:"rtyukl",
    //     ingredient_id:"5641fff"
    // }
    let data = new IngredientRecipeModel(req.body)
    try {
        let result = await data.save();
        res.status(200).send(result)
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports.Create_many = async (req, res) => {
    // console.log(req.body)
    // {
    //     recipe_id:"rtyukl",
    //     ingredients:["5641fff","dffdb885g8","5e8z8g5z"]
    // }
    try {
        let result = []
        req.body.ingredients.forEach(async (element) => {
            let data = await IngredientRecipeModel.create({
                ingredient_id: element,
                recipe_id: req.body.recipe_id
            })
            result.push(data)
        });
        res.status(200).send(result)
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports.Get_all_ingredient_recipes = async (req, res) => {
    try {
        const data = await IngredientRecipeModel.find();
        res.status(200).json({
            msg: "get all ingredient-recipe from db",
            data: data
        })
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports.Get_ingredients_by_recipe_id = async (req, res) => {
    try {
        const id = req.params.id
        let result = await IngredientRecipeModel.find({ recipe_id: id })
        res.status(201).send(result)
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports.Get_recipes_by_ingredient_id = async (req, res) => {
    try {
        const id = req.params.id
        let result = await IngredientRecipeModel.find({ ingredient_id: id })
        res.status(201).send(result)
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports.delete_by_id = async (req, res) => {
    try {
        const id = req.params.id
        let result = await IngredientRecipeModel.deleteOne({ _id: id })
        res.status(201).send(result)
    } catch (error) {
        res.status(500).send(error)
    }
}
