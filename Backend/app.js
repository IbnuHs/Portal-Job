const express = require('express');
const authRoutes = require('./routes/authRoutes');
const jobRoutes = require('./routes/jobRoutes');
const categoryRoutes = require('./routes/categoryRoutes');

const app = express();

// Middleware untuk parse JSON
app.use(express.json());

// Gunakan route auth dan job
app.use('/api/auth', authRoutes);
app.use('/api', jobRoutes);
app.use('/api', categoryRoutes);

module.exports = app;