const mongoose = require('mongoose');


const Schema = new mongoose.Schema(
    {
        category_id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
        },
        recipe_id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
        },
        
    },
    {
        timestamps: true,
    }
);


const CategoryRecipeModel = mongoose.model("category-recipe", Schema);

module.exports = CategoryRecipeModel;