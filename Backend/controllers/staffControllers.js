const Attendance = require('../models/Attendance');

const markAttendance = async (req, res) => {
  const { studentId, date, status } = req.body;
  try {
    const attendance = new Attendance({
      student: studentId,
      date,
      status,
    });
    await attendance.save();
    res.status(201).json(attendance);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { markAttendance };