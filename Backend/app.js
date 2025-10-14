const express = require('express');
const dotenv = require('dotenv');
const studentRoutes = require('./routes/studentRoutes');
const staffRoutes = require('./routes/staffRoutes');
const adminRoutes = require('./routes/adminRoutes');
const errorHandler = require('./middleware/errorHandler');

dotenv.config();

const app = express();

app.use(express.json());

app.use('/api/students', studentRoutes);
app.use('/api/staff', staffRoutes);
app.use('/api/admin', adminRoutes);

app.use(errorHandler);

module.exports = app;