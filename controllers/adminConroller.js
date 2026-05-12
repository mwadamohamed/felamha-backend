const jwt = require("jsonwebtoken");

const Admin = require("../models/Admin");
const User = require("../models/User");
const Place = require("../models/Place");
const Review = require("../models/Review");
const Discount = require("../models/Discount");

exports.adminLogin = async (req, res) => {

  try {

    const { email, password } = req.body;

    const admin = await Admin.findOne({ email });

    if (!admin) {
      return res.status(404).json({
        message: "Admin not found",
      });
    }

    const isMatch = await admin.comparePassword(password);

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid credentials",
      });
    }

    const token = jwt.sign(
      {
        id: admin._id,
        role: "admin",
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    res.status(200).json({
      message: "Admin logged in successfully",
      token,
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};



exports.getStats = async (req, res) => {

  try {

    const usersCount = await User.countDocuments();

    const placesCount = await Place.countDocuments();

    const reviewsCount = await Review.countDocuments();

    const discountsCount = await Discount.countDocuments();

    res.status(200).json({
      users: usersCount,
      places: placesCount,
      reviews: reviewsCount,
      discounts: discountsCount,
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};
