const express = require('express');
const router = express.Router();
const { getAttendance } = require('../controllers/studentControllers');
const { protect } = require('../middleware/authMiddleware');

router.get('/attendance', protect, getAttendance);

module.exports = router;