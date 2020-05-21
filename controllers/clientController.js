// ==== IMPORTS
const express = require('express');
const router = express.Router();

// ==== MODELS
const db = require('../models');

// ==== ROUTES
router.get('/', async (req, res) => {
  const allUsers = await db.User.find();


  res.render('dashboard', {
    title: 'Dashboard',
    users: allUsers,
  });
});

// ==== EXPORTS
module.exports = router;