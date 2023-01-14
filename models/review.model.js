const mongoose = require('mongoose');


const reviewSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    recipe_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    rating: {
      type: Number, // 
      required: true,
      min_value: 1,
      max_value: 5,
    },
    comment: {
      type: String,
      required: true,
      minlength: 8,
      maxlength: 150,
    },
  },
  {
    timestamps: true,
  }
);




const ReviewModel = mongoose.model("review", reviewSchema);

module.exports = ReviewModel;