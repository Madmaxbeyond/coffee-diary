const Recipe = require('../models/recipe');


module.exports = {
    index,
    show,
    new: newRecipe,
    create
}

function index(req, res) {
    Recipe.find({}, function(err, movies) {
        res.render('recipes/index', { title: 'All Recipes', recipes });
    });
}

function show(req, res) {
    Recipe.findById(req.params.id, function(err, recipe) {
        res.render('recipes/show', {title: 'Recipe Details', recipe});
    });
}

function newRecipe(req, res) {
    res.render('recipes/new', { title: 'New Recipe' });
}

function create(req, res) {
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
    }
    const recipe = new Recipe(req.body);
    recipe.save(function(err) {
        if (err) return res.redirect('/recipes/new');
        res.redirect(`/recipes/${recipe._id}`);
    });
}