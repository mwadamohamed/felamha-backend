const Place = require('../models/Place');


const getAllPlaces = async (req, res) => {
    try {
        const filter = {};
        if (req.query.category) filter.category = req.query.category;
        if (req.query.location) filter.location = req.query.location;

        const places = await Place.find(filter);
        res.json(places);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};


const getSinglePlace = async (req, res) => {
    try {
        const place = await Place.findById(req.params.placeId);
        if (!place) return res.status(404).json({ message: 'Place not found' });
        res.json(place);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

module.exports = { getAllPlaces, getSinglePlace };