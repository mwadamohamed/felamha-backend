const Place = require("../models/Place");

// ================== GET ALL PLACES ==================
exports.getAllPlaces = async (req, res) => {
  try {
    const places = await Place.find();
    res.status(200).json({
      message: "Places fetched successfully",
      places,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ================== GET SINGLE PLACE ==================
exports.getSinglePlace = async (req, res) => {
  try {
    const place = await Place.findById(req.params.id);
    if (!place) {
      return res.status(404).json({ message: "Place not found" });
    }
    res.status(200).json({
      message: "Place fetched successfully",
      place,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ================== ADD PLACE (admin) ==================
exports.addPlace = async (req, res) => {
  try {
    const { name, category, location, description, hasDiscounts } = req.body;

    // لو فيه صور اتبعتت عن طريق multer
    const images = req.files ? req.files.map((file) => file.filename) : [];

    const place = await Place.create({
      name,
      category,
      location,
      images,
      description,
      hasDiscounts,
    });

    res.status(201).json({
      message: "Place added successfully",
      place,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ================== EDIT PLACE (admin) ==================
exports.editPlace = async (req, res) => {
  try {
    const place = await Place.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!place) {
      return res.status(404).json({ message: "Place not found" });
    }

    res.status(200).json({
      message: "Place updated successfully",
      place,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ================== DELETE PLACE (admin) ==================
exports.deletePlace = async (req, res) => {
  try {
    const place = await Place.findByIdAndDelete(req.params.id);

    if (!place) {
      return res.status(404).json({ message: "Place not found" });
    }

    res.status(200).json({
      message: "Place deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
