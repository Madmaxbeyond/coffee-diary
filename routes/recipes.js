const express = require('express');
const router = express.Router();
const moviesCtrl = require('../controllers/movies');
const isLoggedIn = require('../config/auth');

router.get('/', recipesCtrl.index);
router.get('/new', isLoggedIn, recipesCtrl.new);
router.get('/:id', recipesCtrl.show);
router.post('/', isLoggedIn, recipesCtrl.create);

module.exports = router;