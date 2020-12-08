const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema ({
    content: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        min: 1,
        max: 5,
        defaut: 5
    },
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    userName: String,
    userAvatar: String
});

const noteSchema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    userName: String,
    content: String
}, {
    timestamps: true
});


const recipeSchema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    userName: String,
    title: String,
    waterType: String,
    waterTemp: Number,
    coffeeType: String,
    coffeeBrand, String,
    grindType: {
        type: String,
        enum: ['coarse', 'medium', 'fine'],
        default: 'coarse',
    },
    brewTime: Number,
    brewType: {
        type: String,
        enum: ['AeroPress', 'AeroPress Inverted', 'French Press', 'Moka', 'Chemex', 'Cold Brew'],
    },
    rating: {
        type: Number,
        min: 1,
        max: 5,
        default: 5
    },
    notes: [noteSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('Recipe', recipeSchema);