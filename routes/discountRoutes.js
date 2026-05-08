const express = require('express');
const router = express.Router();
const { getAllDiscounts, addDiscount, deleteDiscount } = require('../controllers/discountController');
const adminMiddleware = require('../middleware/adminMiddleware');

router.get('/',                getAllDiscounts);
router.post('/',               adminMiddleware, addDiscount);
router.delete('/:discountId',  adminMiddleware, deleteDiscount);

module.exports = router;