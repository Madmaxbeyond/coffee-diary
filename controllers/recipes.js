const Recipe = require('../models/recipe');


module.exports = {
    index,
    show,
    new: newRecipe,
    create,
    update,
    delete: deleteRecipe,
    edit,
    allRecipes
}

function index(req, res) {
    Recipe.find(
        {user: req.user._id}, 
        function(err, recipes) {
        res.render('recipes/index', { title: 'My Recipes', recipes });
    });
}

function allRecipes(req, res) {
    const query = req.query.include ? {} : {user: {$ne: req.user._id}};
    Recipe.find(
        query, 
        function(err, recipes) {
        res.render('recipes/index', { title: 'All Recipes', recipes });
    });
}

function show(req, res) {
    Recipe.findById(req.params.id, function(err, recipe) {
        res.render('recipes/show', {title: 'My Recipe', user: req.user._id, recipe});
    });
}

function newRecipe(req, res) {
    res.render('recipes/new', { title: 'New Recipe' });
}

function create(req, res) {
    const recipe = new Recipe(req.body);
    recipe.user = req.user._id;
    recipe.userName = req.user.name;
    recipe.save(function(err) {
        if (err) return res.redirect('recipes/new');
        res.redirect(`recipes/${recipe._id}`);
    });
}

function update(req, res) {
    Recipe.findByIdAndUpdate(req.params.id, req.body, function(err, oldRecipe) {
        res.redirect(`/recipes/${req.params.id}`);
    });
}

function edit(req, res) {
    Recipe.findById(req.params.id, function(err, recipe) {
        res.render('recipes/edit', { title: 'Update Recipe', recipe });
    });
}

function deleteRecipe(req, res) {
    Recipe.findByIdAndDelete(req.params.id, function(err, deletedRecipe) {
        res.redirect('/recipes');
    });
}