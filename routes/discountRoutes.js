const express = require('express');
const router = express.Router();
const discountController = require('../controllers/discountController');
const { protect } = require('../middleware/authMiddleware');
const { adminProtect } = require('../middleware/adminMiddleware');

router.get('/', discountController.getAllDiscounts);
router.post('/', protect,adminProtect, discountController.addDiscount);
router.delete('/:id',protect, adminProtect, discountController.deleteDiscount);

module.exports = router;