require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');

const app = express();
const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV || 'development';

// --------------------------
// PRODUCTION SECURITY MIDDLEWARE
// --------------------------
app.use(helmet()); // Set security HTTP headers

// Rate limiting to prevent brute force attacks
const limiter = rateLimit({
  max: 100, // Max 100 requests per window
  windowMs: 60 * 60 * 1000, // 1 hour
  message: { message: 'Too many requests from this IP, please try again later!' }
});
app.use('/api', limiter); // Apply to all API routes

// Sanitize user input to prevent NoSQL injection
app.use(mongoSanitize());

// Sanitize user input to prevent XSS attacks
app.use(xss());

// CORS configuration - whitelist only your frontend domain in production
const corsOptions = {
  origin: NODE_ENV === 'production' 
    ? [process.env.FRONTEND_URL || 'https://yourgymwebsite.com'] // Replace with your frontend domain
    : ['http://localhost:5173', 'http://localhost:5174'], // Allow local dev
  credentials: true,
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

app.use(express.json({ limit: '10kb' })); // Limit request body size

// --------------------------
// MONGODB CONNECTION
// --------------------------
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log(`Connected to MongoDB successfully! (${NODE_ENV})`);
  }).catch((err) => {
    console.error('MongoDB connection error:', err);
  });

// --------------------------
// ROUTES
// --------------------------
// Test route
app.get('/', (req, res) => {
  res.json({ 
    message: 'Welcome to GRIND Gym API!',
    environment: NODE_ENV
  });
});

// Import routes
const authRoutes = require('./routes/auth');
const membershipRoutes = require('./routes/memberships');
const contactRoutes = require('./routes/contact');
const trainerRoutes = require('./routes/trainers');
const adminRoutes = require('./routes/admin');

// Use routes
app.use('/api/auth', authRoutes);
app.use('/api/memberships', membershipRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/trainers', trainerRoutes);
app.use('/api/admin', adminRoutes);

// --------------------------
// ERROR HANDLING MIDDLEWARE
// --------------------------
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.statusCode || 500).json({
    message: NODE_ENV === 'production' ? 'Something went wrong!' : err.message
  });
});

// Handle undefined routes
app.all('*', (req, res) => {
  res.status(404).json({ message: `Can't find ${req.originalUrl} on this server!` });
});

// --------------------------
// START SERVER
// --------------------------
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} (${NODE_ENV})`);
});
