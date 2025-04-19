// routes/user.js
const express = require('express');
const router = express.Router();
const User = require('../models/User');
const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');

// GET /users?role=admin
router.get('/users', authMiddleware, roleMiddleware('admin'), async (req, res) => {
  const role = req.query.role || 'user'; // default to 'user' if no role provided

  try {
    const users = await User.find({ role }).select('-password'); // exclude password field

    res.json({
      count: users.length,
      users
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch users.' });
  }
});

module.exports = router;
