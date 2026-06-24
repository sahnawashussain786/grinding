const mongoose = require('mongoose');

const TrainerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  },
  specialty: {
    type: String,
    required: true
  },
  bio: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String
  }
}, { timestamps: true });

module.exports = mongoose.model('Trainer', TrainerSchema);
