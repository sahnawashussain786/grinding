const express = require('express');
const router = express.Router();
const Trainer = require('../models/Trainer');

// Get all trainers
router.get('/', async (req, res) => {
  try {
    const trainers = await Trainer.find();
    res.json(trainers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new trainer (admin only, maybe add auth later)
router.post('/', async (req, res) => {
  try {
    const { name, role, specialty, bio, imageUrl } = req.body;
    const newTrainer = new Trainer({ name, role, specialty, bio, imageUrl });
    const savedTrainer = await newTrainer.save();
    res.status(201).json(savedTrainer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
