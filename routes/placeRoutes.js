const express = require('express');
const router = express.Router();
const { getAllPlaces, getSinglePlace, addPlace, editPlace, deletePlace } = require('../controllers/placeController');
const adminMiddleware = require('../middleware/adminMiddleware');
const upload = require('../middleware/uploadMiddleware');

router.get('/',             getAllPlaces);
router.get('/:placeId',     getSinglePlace);
router.post('/',            adminMiddleware, upload.array('images', 4), addPlace);
router.put('/:placeId',     adminMiddleware, upload.array('images', 4), editPlace);
router.delete('/:placeId',  adminMiddleware, deletePlace);

module.exports = router;