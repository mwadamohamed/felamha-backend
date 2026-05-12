const express = require("express");

const router = express.Router();

const {
  adminLogin,
  getStats,
  getAllUsers
} = require("../controllers/adminController");

const adminMiddleware = require("../middleware/adminMiddleware");



router.post("/login", adminLogin);



router.get("/stats", adminMiddleware, getStats);

router.get('/users',    adminMiddleware, getAllUsers);
module.exports = router;
