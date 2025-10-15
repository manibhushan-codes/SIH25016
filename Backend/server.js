const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb://127.0.0.1:27017/attendance-db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('✅ Connected to MongoDB'))
.catch((err) => console.error('❌ MongoDB connection error:', err));

// ✅ This line must match the file name exactly (authRoutes.js)
const authRoutes = require("./routes/authroutes")

app.use('/api/auth', authRoutes);

// Optional: root endpoint
app.get('/', (req, res) => {
    res.send('Attendance Monitoring System Backend is Running 🚀');
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
