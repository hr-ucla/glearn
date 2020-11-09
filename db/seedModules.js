const mongoose = require('mongoose');
const db = require('./index.js');
const sample = require('../moduleData.js');
const deliverablesData = require('../dummyData/deliverablesData.js');
const quizData = require('../dummyData/valuesVSreferences.js');

const dataSeeder = () => {
  db.Module.insertMany(sample, (err, results) => {
    if (err) {
      console.error(err);
    } else {
      console.log('Modules seeded successfully!');
    }
  });

  db.Deliverable.insertMany(deliverablesData, (err, results) => {
    if (err) {
      console.error(err);
    } else {
      console.log('Deliverables seeded successfully!');
    }
  });

  db.Quiz.insertMany(quizData, (err, results) => {
    if (err) {
      console.error(err);
    } else {
      console.log('Quizzes seeded successfully!');
      db.connection.close();
    }
  });


};

dataSeeder();
