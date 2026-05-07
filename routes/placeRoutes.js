const express = require('express');
const router = express.Router();
const { getAllPlaces, getSinglePlace } = require('../controllers/placeController');

router.get('/',          getAllPlaces);
router.get('/:placeId',  getSinglePlace);

module.exports = router;