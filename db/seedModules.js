const mongoose = require('mongoose');
const db = require('./index.js');
const sample = require('../moduleData.js');

const modulesSeeder = () => {
  db.Module.insertMany(sample, (err, results) => {
    if (err) {
      console.error(err);
    } else {
      db.connection.close();
      console.log('Modules seed successful!');
    }
  });
};

modulesSeeder();
