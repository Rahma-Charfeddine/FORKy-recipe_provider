const mongoose = require('mongoose');


const recipeSchema = new mongoose.Schema(
    {
        recipe_name: {
            type: String,
            required: true,
            minlength: 2,
            maxlength: 32,
            unique: true,
            uppercase: true,
        },
        time: {
            type: Number,
            required: true,
            min_value: 5,
            max_value: 240,
        },
        origin: {
            type: String,
            required: true,
            minlength: 4,
            maxlength: 16,
        },
        Difficulty: {
            type: String,
            enum :['HARD','MEDIUM','EASY'],
            required: true,
            
        },
        Instructions: {
            type: String,
            minlength: 10,
            maxlength: 250,
            required: true,
        }
    },
    {
        timestamps: true,
    }
);





const RecipeModel = mongoose.model("recipe", recipeSchema);

module.exports = RecipeModel;