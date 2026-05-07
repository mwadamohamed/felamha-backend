const Discount = require('../models/Discount');
const Place = require('../models/Place');

exports.getAllDiscounts = async (req, res) => {
  try {
    const discounts = await Discount.find({ isActive: true })
      .populate('placeId', 'name category location images');

    res.status(200).json({
      status: 'success',
      results: discounts.length,
      data: { discounts },
    });
  } catch (err) {
    res.status(500).json({ status: 'error', message: err.message });
  }
};

exports.addDiscount = async (req, res) => {
  try {
    const { placeId, details, expiresAt } = req.body;

    const place = await Place.findById(placeId);
    if (!place) {
      return res.status(404).json({ status: 'fail', message: 'Place not found' });
    }

    const discount = await Discount.create({ placeId, details, expiresAt });
    await Place.findByIdAndUpdate(placeId, { hasDiscounts: true });

    res.status(201).json({
      status: 'success',
      data: { discount },
    });
  } catch (err) {
    res.status(400).json({ status: 'error', message: err.message });
  }
};

exports.deleteDiscount = async (req, res) => {
  try {
    const discount = await Discount.findByIdAndDelete(req.params.id);
    if (!discount) {
      return res.status(404).json({ status: 'fail', message: 'Discount not found' });
    }

    const remaining = await Discount.countDocuments({
      placeId: discount.placeId,
      isActive: true,
    });
    if (remaining === 0) {
      await Place.findByIdAndUpdate(discount.placeId, { hasDiscounts: false });
    }

    res.status(204).json({ status: 'success', data: null });
  } catch (err) {
    res.status(500).json({ status: 'error', message: err.message });
  }
};