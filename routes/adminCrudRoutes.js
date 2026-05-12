const express = require('express');
const router = express.Router();
const adminMiddleware = require('../middleware/adminMiddleware');

const { getAllPlaces, addPlace, editPlace, deletePlace } = require('../controllers/adminPlacesController');
const { getAllUsers, getSingleUser, deleteUser } = require('../controllers/adminUsersController');
const { getAllReviews, deleteReview } = require('../controllers/adminReviewsController');

// ================== PLACES ROUTES ==================
router.get('/places', adminMiddleware, getAllPlaces);
router.post('/places', adminMiddleware, addPlace);
router.put('/places/:id', adminMiddleware, editPlace);
router.delete('/places/:id', adminMiddleware, deletePlace);

// ================== USERS ROUTES ==================
router.get('/users', adminMiddleware, getAllUsers);
router.get('/users/:id', adminMiddleware, getSingleUser);
router.delete('/users/:id', adminMiddleware, deleteUser);

// ================== REVIEWS ROUTES ==================
router.get('/reviews', adminMiddleware, getAllReviews);
router.delete('/reviews/:id', adminMiddleware, deleteReview);

module.exports = router;
