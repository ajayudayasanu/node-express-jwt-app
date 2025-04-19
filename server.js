const express = require('express');
require('dotenv').config();
connectDB = require('./db'); // Import the database connection function

// Routes
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');

const app = express();
app.use(express.json()); // for parsing application/json

// MongoDB connection
connectDB()


app.use('/api', authRoutes); // now /api/register is available
app.use('/api', userRoutes); // now /api/users is available

// Server start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
