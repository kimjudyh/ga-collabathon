// ==== IMPORTS
const express = require('express');
const router = express.Router();

// ==== MODELS
const db = require('../models');

// ==== ROUTES
router.get('/', async (req, res) => {
  res.render('dashboard', {
    title: 'Dashboard',
  });
});

// ==== EXPORTS
module.exports = router;