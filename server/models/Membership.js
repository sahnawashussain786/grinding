const mongoose = require('mongoose');

const MembershipSchema = new mongoose.Schema({
  plan: {
    type: String,
    enum: ['Basic', 'Premium', 'Elite'],
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  startDate: {
    type: Date,
    default: Date.now
  },
  endDate: {
    type: Date,
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  active: {
    type: Boolean,
    default: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Membership', MembershipSchema);
