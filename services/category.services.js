const CategoryRecipeModel = require("../models/category-recipe.model");
const CategoryModel = require("../models/category.model");


module.exports.Create = async (req, res) => {
    // console.log(req.body)
    let data = new CategoryModel(req.body)
    try {
        let result = await data.save();
        res.status(200).send(result)
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports.Get_all_categories = async (req, res) => {
    try {
        const data = await CategoryModel.find();
        res.status(200).json({
            msg: "get all categories from db",
            data: data
        })
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports.Get_category_by_id = async (req, res) => {
    try {
        const id = req.params.id
        let result = await CategoryModel.find({ _id: id })
        res.status(201).send(result)

    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports.Delete_category_by_id = async (req, res) => {
    try {
        const id = req.params.id
        await CategoryModel.deleteOne({ _id: id })
        await CategoryRecipeModel.deleteMany({ category_id: id })
        res.status(201).send()

    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports.Update_category_by_id = async (req, res) => {
    try {
        const id = req.params.id
        let result = await CategoryModel.findByIdAndUpdate(id, { category_name: req.body.name }, { new: true });
        res.status(201).send(result)

    } catch (error) {
        res.status(500).send(error)
    }
}