const express = require('express');
const router = express.Router();
const { markAttendance } = require('../controllers/staffControllers');
const { protect } = require('../middleware/authMiddleware');

router.post('/attendance', protect, markAttendance);

module.exports = router;