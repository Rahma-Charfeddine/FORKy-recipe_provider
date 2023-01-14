const IngredientModel = require('./../models/ingredient.model')

module.exports.Create_ingredient = async (req, res) => {
    // console.log(req.body)
    let data = new IngredientModel(req.body)
    try {
        let result = await data.save();
        res.status(200).send(result)
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports.Get_all_ingredients = async (req, res) => {
    try {
        const data = await IngredientModel.find();
        res.status(200).json({
            msg: "get all ingredients from db",
            data: data
        })
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports.Get_ingredient_by_id = async (req, res) => {
    try {
        const id = req.params.id
        let result = await IngredientModel.find({ _id: id })
        res.status(201).send(result)
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports.Get_ingredient_by_name = async (req, res) => {
    try {
        const name = req.params.name
        let result = await IngredientModel.find({ ingredient_name: name })
        res.status(201).send(result)
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports.Get_ingredients_by_type = async (req, res) => {
    try {
        const type = req.params.type
        let result = await IngredientModel.find({ type: type })
        res.status(201).send(result)
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports.Update_ingredient_by_id = async (req, res) => {
    try {
        const id = req.params.id
        let result = await RecipeModel.findByIdAndUpdate(id, { ingredient_name: req.body.name }, { new: true });
        res.status(201).send(result)

    } catch (error) {
        res.status(500).send(error)
    }
}