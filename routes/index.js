const express = require('express');
// const passport = require('passport');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Coffee Babe - A Coffee Brew Diary' });
});

// router.get('/', function(req, res, next) {
//   res.redirect('/');
// })

module.exports = router;
