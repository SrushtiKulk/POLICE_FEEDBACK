                  
const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
    questionIndex: {
        type: Number,
        required: true,
    },
    selectedOption: {
        type: String,
        required: true,
    },
    // location: {
    //     type: String,
    //     required: true,
    // },
}, {
    timestamps: true,
});

module.exports = mongoose.model('feedback', feedbackSchema);

