const mongoose = require('mongoose');
const MONGO_URL = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("✅ Connected to MongoDB");
  } catch (err) {
    console.error(("❌ MongoDB connection error:", err));
    process.exit(1);
  }
};

module.exports = connectDB;