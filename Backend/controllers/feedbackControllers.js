// feedbackController.js
const Feedback = require('../models/Feedback');

const isValidAnswer = (answer) => {
    return (
        answer &&
        typeof answer.questionIndex === 'number' &&
        typeof answer.selectedOption === 'string'
    );
};

const storeFeedbackController = async (req, res) => {
    try {
        const { answers } = req.body;
        console.log(answers);

        // Validate the format of the answers array
        if (!Array.isArray(answers) || answers.length === 0 || !answers.every(isValidAnswer)) {
            return res.status(400).json({ error: 'Invalid format for feedback answers' });
        }

        // Store feedback answers in the database using insertMany
        const ans = await Feedback.insertMany(answers);

        res.status(200).json({ message: 'Feedback answers stored successfully.' , ans});
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error', details: error.message });
    }
};

module.exports = { storeFeedbackController };
