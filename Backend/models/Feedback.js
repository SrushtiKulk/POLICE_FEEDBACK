// const express = require("express");
// const mongoose = require("mongoose");
// const bodyParser = require("body-parser");
// const cors = require("cors");

// const app = express();


// mongoose.connect("mongodb://localhost:27017/feedbacks", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const answerSchema = new mongoose.Schema({
//   questionIndex: Number,
//   selectedOption: String,
// });

// const Answer = mongoose.model("Answer", answerSchema);

// app.use(bodyParser.json());
// app.use(cors());

// app.post("/api/storeAnswers", async (req, res) => {
//   try {
//     const { answers } = req.body;

//     // Use the create method to insert many documents
//     await Answer.create(answers);

//     res.status(200).json({ message: "Answers stored successfully." });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });                   


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
}, {
    timestamps: true,
});

module.exports = mongoose.model('feedbacks', feedbackSchema);

