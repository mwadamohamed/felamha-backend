const User = require("../models/User");

// ================= GET PROFILE =================
const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ================= UPDATE PROFILE =================
const updateProfile = async (req, res) => {
  try {
    const { name, photo, location } = req.body;
    const updatedUser = await User.findByIdAndUpdate(
      req.user.id,
      { name, photo, location },
      { new: true }
    ).select("-password");
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ================= TOGGLE FAVOURITE =================
const toggleFavourite = async (req, res) => {
  try {
    const { placeId } = req.body;
    const user = await User.findById(req.user.id);
    const exists = user.favourites.includes(placeId);
    if (exists) {
      user.favourites = user.favourites.filter(
        (id) => id.toString() !== placeId
      );
    } else {
      user.favourites.push(placeId);
    }
    await user.save();
    res.status(200).json({ favourites: user.favourites });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getProfile, updateProfile, toggleFavourite };