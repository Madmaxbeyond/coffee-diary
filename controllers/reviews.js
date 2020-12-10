const Recipe = require('../models/recipe');
const recipes = require('./recipes');

module.exports = {
    create,
    delete: deleteReview
}

function create(req, res) {
    Recipe.findById(req.params.recipeId, function(err, recipe) {
        req.body.user = req.user._id;
        req.body.userName = req.user.name;
        req.body.userAvatar = req.user.avatar;

        recipe.reviews.push(req.body);
        recipe.save(function(err) {
            res.redirect(`/recipes/${recipe._id}`);
        });
    });
}

function deleteReview(req, res) {
    Recipe.findById(req.params.reviewId, function(err, recipe) {
        recipe.reviews.remove(req.params.id);
        recipe.save(function(err) {
            res.redirect(`/reviews/${review._id}`)
        });
    });
}