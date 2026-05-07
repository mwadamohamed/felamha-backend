const Review = require("../models/Review");

exports.getReviews = async (req, res) => {
  try {
    const reviews = await Review.find({ placeId: req.params.placeId }).populate(
      "userId",
      "name photo"
    );
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.addReview = async (req, res) => {
  try {
    const { placeId, rating, comment } = req.body;

    const review = await Review.create({
      placeId,
      userId: req.user.id,
      rating,
      comment,
    });

    res.status(201).json(review);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteReview = async (req, res) => {
  try {
    await Review.findByIdAndDelete(req.params.id);
    res.json({ message: "deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};