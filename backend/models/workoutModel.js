const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//schema defines how a document in our collection will look
const workoutSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    reps: {
        type: Number,
        required: true
    },
    load: {
        type: Number,
        required: true
    }
},{timestamps : true})

module.exports = mongoose.model('Workout', workoutSchema);