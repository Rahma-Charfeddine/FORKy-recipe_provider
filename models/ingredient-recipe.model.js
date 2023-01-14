const mongoose = require('mongoose');


const Schema = new mongoose.Schema(
    {
        ingredient_id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
        },
        recipe_id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
        },
        quantity: {
            type: Number,
        }
        
    },
    {
        timestamps: true,
    }
);





const IngredientRecipeModel = mongoose.model("ingredient-recipe", Schema);

module.exports = IngredientRecipeModel;