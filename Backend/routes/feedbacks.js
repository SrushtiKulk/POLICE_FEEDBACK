// feedbackRoutes.js
const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const { storeFeedbackController } = require("../controllers/feedbackControllers");

// mongoose.connect("mongodb://localhost:27017/feedbacks", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

const answerSchema = new mongoose.Schema({
  questionIndex: Number,
  selectedOption: String,
});

const Answer = mongoose.model("Answer", answerSchema);

router.use(bodyParser.json());
router.use(cors());

router.post("/feedback", storeFeedbackController);

module.exports = router;


// const express = require("express");
// const router1 = express.Router();
// // const bodyParser = require("body-parser");
// // const cors = require("cors");
// // const mongoose = require("mongoose");
// const { storeFeedbackController } = require("../controllers/feedbackControllers");


// // // Create a model for feedback answers
// // const answerSchema = new mongoose.Schema({
// //     questionIndex: Number,
// //     selectedOption: String,
// // });

// // const Answer = mongoose.model("Answer", answerSchema);

// // // Middleware
// // router.use(bodyParser.json());
// // router.use(cors());

// // Route for storing feedback answers
// router1.post("/feedback", storeFeedbackController);

// module.exports = router1;









