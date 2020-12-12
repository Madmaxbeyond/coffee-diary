const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../controllers/reviews');
const recipesCtrl = require('../controllers/recipes');

const isLoggedIn = require('../config/auth');

router.get('/', recipesCtrl.index);
router.get('/all', isLoggedIn, recipesCtrl.allRecipes);
router.get('/new', isLoggedIn, recipesCtrl.new);
router.get('/:id', isLoggedIn, recipesCtrl.show);
router.post('/', isLoggedIn, recipesCtrl.create);
router.get('/:id/edit', isLoggedIn, recipesCtrl.edit);
router.put('/:id', isLoggedIn, recipesCtrl.update);
router.delete('/:id', recipesCtrl.delete);

router.post('/:recipeId/reviews', isLoggedIn, reviewsCtrl.create);
router.delete('/reviews/:id', isLoggedIn, reviewsCtrl.delete);


module.exports = router;