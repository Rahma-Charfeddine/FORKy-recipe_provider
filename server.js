const express = require('express')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
require("dotenv").config({ path: ".env" })

const app = express()

app.use(express.json())
app.use(cookieParser())

mongoose.connect(process.env.DBURI, (err) => {
    console.log("db connected successfully")
})


const defaultroutes = require("./routes/defaultroutes")
const userroutes = require("./routes/user.routes")
const reviewroutes = require("./routes/review.routes")
const reciperoutes = require("./routes/recipe.routes")
const ingredientroutes = require("./routes/ingredients.routes")
const categoryroutes = require("./routes/category.routes")
const { checkuser } = require('./services/auth.services')

app.use("/", defaultroutes)
app.use("/user", checkuser, userroutes)
app.use("/review", checkuser, reviewroutes)
app.use("/recipe", checkuser, reciperoutes)
app.use("/ingredient", checkuser, ingredientroutes)
app.use("/category", checkuser, categoryroutes)

app.listen(process.env.PORT, () => {
    console.log("app is running successfully on port : " + process.env.PORT);
    console.log("http://127.0.0.1:" + process.env.PORT);
})