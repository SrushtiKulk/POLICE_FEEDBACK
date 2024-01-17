const mongoose = require('mongoose');

const opinionSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
});

module.exports= mongoose.model('opinion', opinionSchema);