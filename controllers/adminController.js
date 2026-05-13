const Admin = require('../models/Admin');
const User = require('../models/User');
const Place = require('../models/Place');
const Review = require('../models/Review');
const Discount = require('../models/Discount');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const adminLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        const admin = await Admin.findOne({ email });
        if (!admin) return res.status(400).json({ message: 'Invalid credentials' });

        const isMatch = await bcrypt.compare(password, admin.password);
        if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

        const token = jwt.sign(
            { id: admin._id, role: 'admin' },
            'secret123',
            { expiresIn: '7d' }
        );

        res.json({ token });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const getStats = async (req, res) => {
    try {
        const totalUsers       = await User.countDocuments();
        const totalPlaces      = await Place.countDocuments();
        const totalRestaurants = await Place.countDocuments({ category: 'restaurant' });
        const totalCafes       = await Place.countDocuments({ category: 'cafe' });
        const totalLandmarks   = await Place.countDocuments({ category: 'landmark' });
        const totalReviews     = await Review.countDocuments();
        const totalDiscounts   = await Discount.countDocuments();

        res.json({
            totalUsers,
            totalPlaces,
            totalRestaurants,
            totalCafes,
            totalLandmarks,
            totalReviews,
            totalDiscounts
        });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({}).select('-password');
        res.json(users);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

module.exports = { adminLogin, getStats, getAllUsers };