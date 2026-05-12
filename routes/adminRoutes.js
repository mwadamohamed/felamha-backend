const express = require("express");

const router = express.Router();

const {
  adminLogin,
  getStats,
} = require("../controllers/adminController");

const adminMiddleware = require("../middleware/adminMiddleware");



router.post("/login", adminLogin);



router.get("/stats", adminMiddleware, getStats);


module.exports = router;
