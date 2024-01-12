const mongoose =require('mongoose');
const feedbackSchema = new mongoose.Schema({
    question1:String,
    question2:String,
    rating1:String,
    rating2:String,
    userId: String
});

module.exports =mongoose.model("feedbacks",feedbackSchema);