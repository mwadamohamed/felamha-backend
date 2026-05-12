const express = require('express');
const router = express.Router();
const adminMiddleware = require('../middleware/adminMiddleware');
const upload = require('../middleware/uploadMiddleware');

const { getAllPlaces, addPlace, editPlace, deletePlace } = require('../controllers/adminPlacesController');
const { getAllUsers, getSingleUser, deleteUser } = require('../controllers/adminUsersController');
const { getAllReviews, getReviewsByPlace,deleteReview } = require('../controllers/adminReviewsController');

// ================== PLACES ROUTES ==================
router.get('/places',               adminMiddleware, getAllPlaces);
router.post('/places',              adminMiddleware, upload.array('images', 4), addPlace);
router.put('/places/:placeId',      adminMiddleware, upload.array('images', 4), editPlace);
router.delete('/places/:placeId',   adminMiddleware, deletePlace);
// ================== USERS ROUTES ==================
router.get('/users', adminMiddleware, getAllUsers);
router.get('/users/:id', adminMiddleware, getSingleUser);
router.delete('/users/:id', adminMiddleware, deleteUser);

// ================== REVIEWS ROUTES ==================
router.get('/reviews', adminMiddleware, getAllReviews);
router.delete('/reviews/:id', adminMiddleware, deleteReview);
router.get('/reviews/:placeId',             adminMiddleware, getReviewsByPlace);
module.exports = router;
