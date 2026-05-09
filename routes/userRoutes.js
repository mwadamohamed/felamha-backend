const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {
  getProfile,
  updateProfile,
  toggleFavourite,
} = require("../controllers/userController");


// ===== GET PROFILE =====

router.get(
  "/profile",
  authMiddleware,
  getProfile
);


// ===== UPDATE PROFILE =====

router.put(
  "/profile",
  authMiddleware,
  updateProfile
);


// ===== TOGGLE FAVOURITE =====

router.put(
  "/favourites",
  authMiddleware,
  toggleFavourite
);


module.exports = router;