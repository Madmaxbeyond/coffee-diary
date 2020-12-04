const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const noteSchema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    userName: String,
    content: String
}, {
    timestamps: true
});


const recipeSchema = new Schema({
    

    notes: [noteSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('Recipe', recipeSchema);