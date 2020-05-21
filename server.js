// ===== IMPORTS
const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const session = require('express-session');

const app = express();
const port = process.env.PORT || 4000;

// ===== VIEW ENGINE
app.set('view engine', 'ejs');

// ===== CONTROLLERS

// ===== MIDDLEWARE
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));

// ===== ROUTES
app.get('/', (req, res) => {
  res.send('<h1>Avocados Anonymous</h1>')
})

// ===== SERVER LISTENER
app.listen(port, () => {
  console.log('Server running on port', port);
})