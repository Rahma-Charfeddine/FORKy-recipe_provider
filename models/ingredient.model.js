
const mongoose = require('mongoose');
const ingredientSchema = new mongoose.Schema(
    {
        ingredient_name: {
            type: String,
            required: true,
            minlength: 2,
            maxlength: 32,
            unique: true,
        },
        type: {
            type: String,
            enum :['FRESH','PANTRY'],
            required: true,
        }
    },
    {
        timestamps: true,
    }
);





const IngredientModel = mongoose.model("ingredient", ingredientSchema);

module.exports = IngredientModel;