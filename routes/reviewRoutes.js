const express = require("express");
const router = express.Router();

const {
  getReviews,
  addReview,
  deleteReview,
} = require("../controllers/reviewController");

const authMiddleware = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");

router.get("/:placeId", getReviews);

router.post("/", authMiddleware, addReview);

router.delete("/:id", authMiddleware, adminMiddleware, deleteReview);

module.exports = router;
