const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema(
  {
    family_name: {
      type: String, // 
      required: true,
      minlength: 2,
      maxlength: 32,
      uppercase: true,
    },
    name: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 32,
    },
    gender: {
      type: String,
      required: true,
      minlength: 4,
      maxlength: 8,
    },
    nTel: {
      type: String,
      required: true,
      minlength: 8,
      maxlength: 16,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 4,
      maxlength: 256
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    }
  },
  {
    timestamps: true,
  }
);


// pre data treatment : 
userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});



const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;