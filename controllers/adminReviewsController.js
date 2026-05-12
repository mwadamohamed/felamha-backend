const Review = require('../models/Review');

// ================== GET ALL REVIEWS ==================
const getAllReviews = async (req, res) => {
    try {
        const reviews = await Review.find()
            .populate('userId', 'name photo')
            .populate('placeId', 'name');
        res.json(reviews);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// ================== DELETE REVIEW ==================
const deleteReview = async (req, res) => {
    try {
        const review = await Review.findByIdAndDelete(req.params.id);
        if (!review) return res.status(404).json({ message: 'Review not found' });
        res.json({ message: 'Review deleted successfully' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

module.exports = { getAllReviews, deleteReview };
