
const mongoose = require('mongoose');
const Schema = new mongoose.Schema(
    {
        category_name: {
            type: String,
            required: true,
            minlength: 2,
            maxlength: 32,
            unique: true,
        },
        
    },
    {
        timestamps: true,
    }
);


const CategoryModel = mongoose.model("category", Schema);

module.exports = CategoryModel;