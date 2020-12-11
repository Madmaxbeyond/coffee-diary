const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../controllers/reviews');
const isLoggedIn = require('../config/auth');


router.post('/recipes/:id/reviews', isLoggedIn, reviewsCtrl.create);
// DELETE /reviews/:id
router.delete('/reviews/:id', isLoggedIn, reviewsCtrl.delete);

// router.post('/:recipeId/reviews', isLoggedIn, reviewsCtrl.create);
// router.delete('/:reviewId/reviews/delete', isLoggedIn, reviewsCtrl.delete);

// router.post('/recipes/:id/reviews', reviewsCtrl.create);
// router.delete('/reviews/:id', reviewsCtrl.delete);


module.exports = router;