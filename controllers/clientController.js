// ==== IMPORTS
const express = require('express');
const router = express.Router();

// ==== MODELS
const db = require('../models');

// ==== ROUTES
router.get('/', async (req, res) => {
  try {
    const allUsers = await db.User.find();
    const usersSortedByName = await db.User.find().sort('name');
    const usersSortedByUsername = await db.User.find().sort('username');
    const usersSortedByEmail = await db.User.find().sort('email');

    res.render('dashboard', {
      title: 'Dashboard',
      users: allUsers,
      usersSortedByName: usersSortedByName,
    });
  } catch (err) {
    return res.send(err);
  }
});

// ==== EXPORTS
module.exports = router;