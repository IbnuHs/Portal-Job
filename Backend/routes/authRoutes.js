// routes/authRoutes.js
const express = require('express');
const { register, login } = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

// Register route
router.post('/register', register);

// Login route
router.post('/login', login);

// Route yang dilindungi (memerlukan token)
router.get('/profile', authMiddleware, (req, res) => {
  res.json({ message: 'Anda berhasil mengakses route yang dilindungi', user: req.user });
});

module.exports = router;