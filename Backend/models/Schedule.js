const mongoose = require('mongoose');

const scheduleSchema = new mongoose.Schema({
  staff: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  subject: { type: String, required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  // Add more fields as needed
}, { timestamps: true });

module.exports = mongoose.model('Schedule', scheduleSchema);