// ===== IMPORTS
const mongoose = require('mongoose');

// ===== CONFIG
const connectionString = process.env.mLAB_MONGODB_URI || 'mongodb://heroku_bth7j429:5mELFOVxA0yHP2lg@cluster-bth7j429-shard-00-00.jtnc5.mongodb.net:27017,cluster-bth7j429-shard-00-01.jtnc5.mongodb.net:27017,cluster-bth7j429-shard-00-02.jtnc5.mongodb.net:27017/heroku_bth7j429?replicaSet=atlas-fn1uro-shard-0&ssl=true&authSource=admin';
// 'mongodb://localhost:27017/collabathon';

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
