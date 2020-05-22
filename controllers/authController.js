// ==== IMPORTS
const express = require('express');
const router = express.Router();

// ==== MODELS
const db = require('../models');

// ==== ROUTES
// GET Register New
router.get('/', (req, res) => {
    res.render('signup', {
        title: 'Sign up',
    });
});


// POST Register Create (User)
router.post('/', async (req, res) => {
    // Validating
    console.log('New User Obj = ', req.body);
    try {
      // Create A New User
      const user = await db.User.findOne({username: req.body.username, email: req.body.email});
  
      // Check If We Got A User Object Back From The Database
      if (user) {
        return res.send('<h1>Already signed up</h1>');
      }
  
      // TODO: Hash Password
  
      const userData = {
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
      }
  
      // Creating the new user
      await db.User.create(userData);
  
      // Redirect to client page
      res.redirect('signup/confirmation');
    } catch (err) {
      res.send(err);
    }
  });


// GET Register Confirmation
router.get('/confirmation', (req, res) => {
  res.render('confirmation', {
      title: 'Confirmation',
  });
});


// ==== EXPORTS
module.exports = router;