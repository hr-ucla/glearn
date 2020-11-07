const mongoose = require('mongoose');
const db = require('./index.js');

module.exports = {
  getModule: (moduleName, callback) => {
    db.Module.findOne({
      'moduleName': moduleName
    }).exec((err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    });
  },

  searchModule: (searchTerm, callback) => {
    db.Module.find({
      'keywords': { '$regex': searchTerm, '$options': 'i' }
    }).limit(5).exec((err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    });
  },
};
