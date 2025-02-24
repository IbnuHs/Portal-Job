// routes/jobRoutes.js
const express = require('express');
const { postJob, getAllJobs } = require('../controllers/jobController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

// Post Job (hanya user yang login bisa post job)
router.post('/jobs', authMiddleware, postJob);

// Get All Jobs (bisa diakses oleh siapa saja)
router.get('/jobs',authMiddleware, getAllJobs);

module.exports = router;