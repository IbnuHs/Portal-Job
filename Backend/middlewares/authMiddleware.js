// middlewares/authMiddleware.js
const { verifyToken } = require('../utils/jwtUtils');

const authMiddleware = (req, res, next) => {
  // Ambil token dari header
  const token = req.header('Authorization');

  // Jika token tidak ada
  if (!token) {
    return res.status(401).json({ message: 'Akses ditolak. Token tidak ditemukan.' });
  }

  try {
    // Verifikasi token
    const decoded = verifyToken(token.replace('Bearer ', '')); // Hilangkan 'Bearer ' dari token
    req.user = decoded; // Simpan data user yang di-decode ke request object
    next(); // Lanjut ke route handler
  } catch (error) {
    res.status(400).json({ message: 'Token tidak valid.' });
  }
};

module.exports = authMiddleware;