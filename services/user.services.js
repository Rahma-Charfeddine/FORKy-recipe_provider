const UserModel = require('./../models/user.model')


module.exports.Create_user = async (req, res) => {
    // console.log(req.body)
    let data = new UserModel(req.body)
    try {
        let result = await data.save();
        res.status(200).send(result)
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports.Get_all_users = async (req, res) => {
    try {
        const data = await UserModel.find().select('-password ');
        res.status(200).json({
            msg: "get all users from db",
            data: data
        })
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports.Get_user_by_id = async (req, res) => {
    try {
        const id = req.params.id
        let user = await UserModel.findById(id)
        res.status(201).send(user)

    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports.Delete_user_by_id = async (req, res) => {
    try {
        const id = req.params.id
        let re = await UserModel.deleteOne({ _id: id })
        res.status(201).send(re)

    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports.Update_user_by_id = async (req, res) => {
    try {
        const id = req.params.id
        let re = await UserModel.findByIdAndUpdate(id, req.body, { new: true });
        res.status(201).send(re)

    } catch (error) {
        res.status(500).send(error)
    }
}