const mongoose = require('mongoose');

const discountSchema = new mongoose.Schema(
  {
    placeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Place',
      required: [true, 'Discount must belong to a place'],
    },
    details: {
      type: String,
      required: [true, 'Discount details are required'],
      trim: true,
    },
    expiresAt: {
      type: Date,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Discount', discountSchema);