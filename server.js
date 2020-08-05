// ===== IMPORTS
const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const path = require('path');
const session = require('express-session');
// require('dotenv').config()
// need to install dotenv

const app = express();
const port = process.env.PORT || 4000;

// ===== VIEW ENGINE
app.set('view engine', 'ejs');

// ===== CONTROLLERS
const authController = require('./controllers/authController');
const clientController = require('./controllers/clientController');

// ===== MIDDLEWARE
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));

// ===== ROUTES
// Project home page
app.get('/', (req, res) => {
  res.render('index', {
    title: 'Home',
  });
});

// User Controller
app.use('/signup', authController);

// Client Controller
app.use('/client', clientController);

// ===== SERVER LISTENER
app.listen(port, () => {
  console.log('Server running on port', port);
});