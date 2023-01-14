const UserModel = require("../models/user.model");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

const secret = process.env.secret

module.exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await UserModel.findOne({ email: email })
        if (user) {
            const test = await bcrypt.compare(password, user.password)
            if (test) {
                const token = jwt.sign({ id: user.id }, secret, { expiresIn: (30 * 60 * 1000) })
                res.cookie("token", token, { httpOnly: true, maxAge: (30 * 60 * 1000) }).json({ user })
            } else {
                res.status(401)
                    .clearCookie("token")
                    .send("not authorized : invalid password")
            }
        } else {
            res.status(401)
                .clearCookie("token")
                .send("not authorized : email not found")
        }
    } catch (error) {
        res.status(401)
    }
}

module.exports.checkuser = (req, res, next) => {
    const token = req.cookies.token || false
    if (!token) {
        res.status(403).send()
    }
    else {
        jwt.verify(token, secret, (err, dectoken) => {
            if (err) {
                res.status(403).send()
            } else {
                return next()
            }
        })
    }
}

module.exports.logout = (req, res) => {
    res.status(200)
        .clearCookie("token")
        .send("log out")
}