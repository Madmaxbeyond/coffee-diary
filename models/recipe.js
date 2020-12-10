const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema ({
    content: {
        type: String,
        required: true
    },
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    userName: String,
    userAvatar: String
}, {
    timestamps: true
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
    title: {
        type: String,
        default: 'New Coffee Recipe'
    },
    waterType: String,
    waterTemp: Number,
    coffeeType: String,
    coffeeBrand: String,
    grindType: String,
    brewTime: String,
    brewType: String,
    notes: [noteSchema],
    reviews: [reviewSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('Recipe', recipeSchema);