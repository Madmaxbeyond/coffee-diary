const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../controllers/reviews');
const isLoggedIn = require('../config/auth');


router.post('/recipes/:id/reviews', isLoggedIn, reviewsCtrl.create);

router.delete('/:reviewId/reviews/delete', isLoggedIn, reviewsCtrl.delete);

module.exports = router;