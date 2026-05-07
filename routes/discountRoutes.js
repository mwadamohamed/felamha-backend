const express = require('express');
const router = express.Router();
const discountController = require('../controllers/discountController');
const { protect } = require('../middleware/authMiddleware');
const { adminProtect } = require('../middleware/adminMiddleware');

router.get('/', discountController.getAllDiscounts);
router.post('/', adminProtect, discountController.addDiscount);
router.delete('/:id', adminProtect, discountController.deleteDiscount);

module.exports = router;