const { login, logout } = require('../services/auth.services');

const router = require('express').Router();


router.get("/",(req , res)=>{
    res.status(200).json({
        msg:"hello rahma"
    })
})

router.get("/logout",logout);

router.post("/login",login);



module.exports = router;