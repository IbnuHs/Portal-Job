// routes/categoryRoutes.js
const express = require('express');
const { createCategory, getAllCategories } = require('../controllers/categoryController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

// Create Category
router.post('/categories', authMiddleware, createCategory);

// Get All Categories
router.get('/categories', authMiddleware, getAllCategories);

module.exports = router;