// controllers/authController.js
const { User } = require('../models');
const { generateToken } = require('../utils/jwtUtils');

// Register
const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Cek apakah email sudah terdaftar
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ 
        message: 'Email sudah terdaftar. Silakan gunakan email lain.' 
      });
    }

    // Cek apakah username sudah terdaftar (opsional)
    const existingUsername = await User.findOne({ where: { username } });
    if (existingUsername) {
      return res.status(400).json({ 
        message: 'Username sudah terdaftar. Silakan gunakan username lain.' 
      });
    }

    // Buat user baru
    const user = await User.create({ username, email, password });

    res.status(201).json({ 
      message: 'User berhasil didaftarkan', 
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
      }
    });
  } catch (error) {
    res.status(500).json({ 
      message: 'Terjadi kesalahan', 
      error: error.message 
    });
  }
};

// Login
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Cari user berdasarkan email
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(400).json({ 
        message: 'Email atau password salah' 
      });
    }

    // Bandingkan password (tanpa enkripsi untuk sementara)
    if (password !== user.password) {
      return res.status(400).json({ 
        message: 'Email atau password salah' 
      });
    }

    // Generate token JWT
    const token = generateToken(user.id);

    res.status(200).json({ 
      message: 'Login berhasil', 
      token 
    });
  } catch (error) {
    res.status(500).json({ 
      message: 'Terjadi kesalahan', 
      error: error.message 
    });
  }
};

module.exports = { register, login };