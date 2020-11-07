const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/glearn', {useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.on('error', console.error.bind(console, 'connection error:'));
connection.once('open', function() {
  console.log('Connected to db');
});

const moduleSchema = new mongoose.Schema({
  moduleId: Number,
  moduleName: String,
  keywords: [{ type: String }],
  video: String,
  content: String,
});

const userSchema = new mongoose.Schema({
  userId: String,
  password: String,
});

const Module = mongoose.model('Module', moduleSchema);
const User = mongoose.model('User', userSchema);

module.exports = {
  Module,
  User,
  connection,
};
