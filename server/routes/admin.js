const express = require('express');
const router = express.Router();
const { authMiddleware, adminMiddleware } = require('../middleware/admin');
const User = require('../models/User');
const Trainer = require('../models/Trainer');
const Membership = require('../models/Membership');
const Contact = require('../models/Contact');

// Get all users
router.get('/users', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const users = await User.find().select('-password').populate('membership');
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update user role
router.put('/users/:id/role', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const { role } = req.body;
    const user = await User.findByIdAndUpdate(
      req.params.id,
      { role },
      { new: true }
    ).select('-password');
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete user
router.delete('/users/:id', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create trainer
router.post('/trainers', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const trainer = new Trainer(req.body);
    await trainer.save();
    res.status(201).json(trainer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update trainer
router.put('/trainers/:id', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const trainer = await Trainer.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    
    if (!trainer) {
      return res.status(404).json({ message: 'Trainer not found' });
    }
    
    res.json(trainer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete trainer
router.delete('/trainers/:id', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const trainer = await Trainer.findByIdAndDelete(req.params.id);
    
    if (!trainer) {
      return res.status(404).json({ message: 'Trainer not found' });
    }
    
    res.json({ message: 'Trainer deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get all contact messages
router.get('/contacts', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete contact message
router.delete('/contacts/:id', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);
    
    if (!contact) {
      return res.status(404).json({ message: 'Contact message not found' });
    }
    
    res.json({ message: 'Contact message deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get all memberships
router.get('/memberships', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const memberships = await Membership.find().populate('user', '-password');
    res.json(memberships);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update membership status
router.put('/memberships/:id', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const membership = await Membership.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    ).populate('user', '-password');
    
    if (!membership) {
      return res.status(404).json({ message: 'Membership not found' });
    }
    
    res.json(membership);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
