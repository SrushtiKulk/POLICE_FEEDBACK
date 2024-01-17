const Opinion = require('../models/Opinion');

const submitOpinion = async (req, res) => {
  try {
    const { wantToAddOpinion, opinion } = req.body;

    if (wantToAddOpinion && opinion) {
      // Save the opinion to the database
      const newOpinion = new Opinion({ content: opinion });
      await newOpinion.save();

      res.json({ success: true, message: 'Opinion submitted successfully!' });
    } else {
      res.status(400).json({ success: false, message: 'Invalid request parameters.' });
    }
  } catch (error) {
    console.error('Error submitting opinion:', error.message);
    res.status(500).json({ success: false, message: 'Internal server error.' });
  }
};

module.exports = {
  submitOpinion,
};