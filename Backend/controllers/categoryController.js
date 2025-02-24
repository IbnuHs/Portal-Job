// controllers/categoryController.js
const { Category } = require('../models');

// Create Category
const createCategory = async (req, res) => {
  try {
    const { name } = req.body;

    // Cek apakah kategori dengan nama yang sama sudah ada
    const existingCategory = await Category.findOne({ where: { name } });
    if (existingCategory) {
      return res.status(400).json({ 
        message: 'Nama kategori sudah ada. Silakan gunakan nama kategori lain.' 
      });
    }

    // Buat kategori baru
    const category = await Category.create({ name });

    res.status(201).json({ 
      message: 'Kategori berhasil dibuat', 
      category: {
        id: category.id,
        name: category.name,
      }
    });
  } catch (error) {
    res.status(500).json({ 
      message: 'Terjadi kesalahan', 
      error: error.message 
    });
  }
};

// Get All Categories
const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.findAll();
    res.status(200).json({ 
      message: 'Berhasil mendapatkan semua kategori', 
      categories 
    });
  } catch (error) {
    res.status(500).json({ 
      message: 'Terjadi kesalahan', 
      error: error.message 
    });
  }
};

module.exports = { createCategory, getAllCategories };