const express = require('express');
const router = express.Router();
const { getAllUsers } = require('../controllers/adminControllers');
const { protect, admin } = require('../middleware/authMiddleware');

router.get('/users', protect, admin, getAllUsers);

module.exports = router;