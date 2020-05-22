// ===== IMPORTS
const mongoose = require('mongoose');

// ===== CONFIG
const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/collabathon';
const configOptions = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false
};

// ===== CONNECT
mongoose.connect(connectionString, configOptions)
  .then(() => {
    console.log('Connected to mongoDB at collabathon db');
  })
  .catch((err) => {
    console.log(err);
  })

// ===== EXPORTS
module.exports = { 
  User: require('./User')
};
