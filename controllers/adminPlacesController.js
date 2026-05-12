const Place = require('../models/Place');

// ================== GET ALL PLACES ==================
const getAllPlaces = async (req, res) => {
    try {
        const places = await Place.find();
        res.json(places);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// ================== ADD PLACE ==================
const addPlace = async (req, res) => {
    try {
        const place = await Place.create(req.body);
        res.status(201).json(place);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// ================== EDIT PLACE ==================
const editPlace = async (req, res) => {
    try {
        const place = await Place.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!place) return res.status(404).json({ message: 'Place not found' });
        res.json(place);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// ================== DELETE PLACE ==================
const deletePlace = async (req, res) => {
    try {
        const place = await Place.findByIdAndDelete(req.params.id);
        if (!place) return res.status(404).json({ message: 'Place not found' });
        res.json({ message: 'Place deleted successfully' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

module.exports = { getAllPlaces, addPlace, editPlace, deletePlace };
