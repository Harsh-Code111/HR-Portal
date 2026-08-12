import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/hr-portal';

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database Connection
mongoose.connect(MONGODB_URI)
  .then(() => console.log('MongoDB connected successfully'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running', timestamp: new Date() });
});

// Employee Routes
app.get('/api/employees', (req, res) => {
  res.json({ message: 'Get all employees', data: [] });
});

app.post('/api/employees', (req, res) => {
  res.json({ message: 'Create employee' });
});

// Leave Routes
app.get('/api/leave', (req, res) => {
  res.json({ message: 'Get leave requests', data: [] });
});

app.post('/api/leave', (req, res) => {
  res.json({ message: 'Create leave request' });
});

// Attendance Routes
app.get('/api/attendance', (req, res) => {
  res.json({ message: 'Get attendance records', data: [] });
});

// Payroll Routes
app.get('/api/payroll', (req, res) => {
  res.json({ message: 'Get payroll', data: [] });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(err.status || 500).json({
    error: err.message || 'Internal Server Error',
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
