// controllers/jobController.js
const { Job, User, Category } = require('../models');

// Post Job
const postJob = async (req, res) => {
  try {
    const { title, description, categoryId } = req.body;
    const userId = req.user.id; // Ambil userId dari token (melalui authMiddleware)

    // Buat job baru
    const job = await Job.create({ title, description, userId, categoryId });

    res.status(201).json({ message: 'Job berhasil diposting', job });
  } catch (error) {
    res.status(500).json({ message: 'Terjadi kesalahan', error: error.message });
  }
};

// Get All Jobs
const getAllJobs = async (req, res) => {
  try {
    // Ambil semua job beserta data user dan kategori
    const jobs = await Job.findAll({
      include: [
        {
          model: User,
          attributes: ['id', 'username', 'email'], // Hanya ambil beberapa field user
        },
        {
          model: Category,
          attributes: ['id', 'name'], // Hanya ambil beberapa field kategori
        },
      ],
    });

    res.status(200).json({ message: 'Berhasil mendapatkan semua job', jobs });
  } catch (error) {
    res.status(500).json({ message: 'Terjadi kesalahan', error: error.message });
  }
};

module.exports = { postJob, getAllJobs };