const Place = require('../models/Place');

const getAllPlaces = async (req, res) => {
    try {
        const places = await Place.find({});
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

const addPlace = async (req, res) => {
    try {
        const { name, category, location, description, hasDiscounts } = req.body;

        const images = req.files ? req.files.map(f => f.filename) : [];

        const place = await Place.create({
            name, category, location,
            description, hasDiscounts,
            images
        });

        res.status(201).json(place);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const editPlace = async (req, res) => {
    try {
        const { name, category, location, description, hasDiscounts } = req.body;

        const updateData = { name, category, location, description, hasDiscounts };

        if (req.files && req.files.length > 0) {
            updateData.images = req.files.map(f => f.filename);
        }

        const updated = await Place.findByIdAndUpdate(
            req.params.placeId,
            updateData,
            { new: true, runValidators: true }
        );

        if (!updated) return res.status(404).json({ message: 'Place not found' });
        res.json(updated);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const deletePlace = async (req, res) => {
    try {
        const deleted = await Place.findByIdAndDelete(req.params.placeId);
        if (!deleted) return res.status(404).json({ message: 'Place not found' });
        res.json({ message: 'Place deleted successfully' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

module.exports = { getAllPlaces, getSinglePlace, addPlace, editPlace, deletePlace };