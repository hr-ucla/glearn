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
  content: String
});

const Module = mongoose.model('Module', moduleSchema);

module.exports = {
  Module,
  connection,
};