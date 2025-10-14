const Attendance = require('../models/Attendance');

const getAttendance = async (req, res) => {
  try {
    const attendance = await Attendance.find({ student: req.user._id });
    res.json(attendance);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getAttendance };