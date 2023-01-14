const { Create_user, Get_all_users, Get_user_by_id, Delete_user_by_id, Update_user_by_id } = require('../services/user.services');

const router = require('express').Router();


router.post("/",Create_user);
router.get("/",Get_all_users);
router.get("/:id",Get_user_by_id);
router.delete("/:id",Delete_user_by_id);
router.put("/:id",Update_user_by_id);




module.exports = router;