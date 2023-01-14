const ReviewModel = require('./../models/review.model')


module.exports.Create_review = async (req, res) => {
    // console.log(req.body)
    let data = new ReviewModel(req.body)
    try {
        let result = await data.save();
        res.status(200).send(result)
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports.Get_all_reviews = async (req, res) => {
    try {
        const data = await ReviewModel.find();
        res.status(200).json({
            msg: "get all reviews from db",
            data: data
        })
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports.Get_reviews_by_recipeid = async (req, res) => {
    try {
        const id = req.params.id
        let user = await ReviewModel.find({ recipe_id: id })
        res.status(201).send(user)

    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports.Delete_review_by_id = async (req, res) => {
    try {
        const id = req.params.id
        let re = await ReviewModel.deleteOne({ _id: id })
        res.status(201).send(re)

    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports.Update_review_by_id = async (req, res) => {
    try {
        const id = req.params.id
        let re = await ReviewModel.findByIdAndUpdate(id, req.body, { new: true });
        res.status(201).send(re)

    } catch (error) {
        res.status(500).send(error)
    }
}