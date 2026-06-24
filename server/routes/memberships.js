const express = require('express');
const router = express.Router();
const Membership = require('../models/Membership');

// Get all memberships
router.get('/', async (req, res) => {
  try {
    const memberships = await Membership.find().populate('user', 'name email');
    res.json(memberships);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new membership
router.post('/', async (req, res) => {
  try {
    const { plan, price, startDate, endDate, user } = req.body;
    const newMembership = new Membership({ plan, price, startDate, endDate, user });
    const savedMembership = await newMembership.save();
    res.status(201).json(savedMembership);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
