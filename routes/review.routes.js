const { Create_review, Get_all_reviews, Get_reviews_by_recipeid, Delete_review_by_id, Update_review_by_id } = require('../services/review.services');

const router = require('express').Router();


router.post("/", Create_review);
router.get("/", Get_all_reviews);
router.get("/getreviewsbyrecipeid/:id", Get_reviews_by_recipeid);
router.delete("/:id", Delete_review_by_id);
router.put("/:id", Update_review_by_id);




module.exports = router;