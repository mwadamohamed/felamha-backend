const mongoose = require('mongoose');

const placeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        enum: ['restaurant', 'cafe', 'landmark'],
        required: true
    },
    location: {
        type: String,
        required: true
    },
    images: {
        type: [String],
        validate: v => v.length <= 4
    },
    description: {
        type: String,
        required: true
    },
    hasDiscounts: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

module.exports = mongoose.model('Place', placeSchema);