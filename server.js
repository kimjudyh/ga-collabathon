// ===== IMPORTS
const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const path = require('path');
const session = require('express-session');

const app = express();
const port = process.env.PORT || 4000;

// // ===== temp database
// const db = require('./models');

// ===== VIEW ENGINE
app.set('view engine', 'ejs');

// ===== CONTROLLERS
const authController = require('./controllers/authController');

// ===== MIDDLEWARE
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));

// ===== ROUTES
app.get('/', (req, res) => {
  res.send('<h1>Avocados Anonymous</h1>')
})

app.use('/signup', authController);

// ===== SERVER LISTENER
app.listen(port, () => {
  console.log('Server running on port', port);
})