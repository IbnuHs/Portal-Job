// controllers/categoryController.js
const { Category } = require('../models');

// Create Category
const createCategory = async (req, res) => {
  try {
    const { name } = req.body;

    // Buat kategori baru
    const category = await Category.create({ name });

    res.status(201).json({ message: 'Kategori berhasil dibuat', category });
  } catch (error) {
    res.status(500).json({ message: 'Terjadi kesalahan', error: error.message });
  }
};

// Get All Categories
const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.findAll();
    res.status(200).json({ message: 'Berhasil mendapatkan semua kategori', categories });
  } catch (error) {
    res.status(500).json({ message: 'Terjadi kesalahan', error: error.message });
  }
};

module.exports = { createCategory, getAllCategories };