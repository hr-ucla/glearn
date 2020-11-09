const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const path = require('path');

const dbHelpers = require('../db/dbhelper.js');

// Server
const app = express();

// Middleware
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(cors());

// Route to get one module
app.get('/api/module/:name', (req, res) => {
  dbHelpers.getModule(req.params.name, (err, results) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).json(results);
    }
  });
});

// Route to search for keywords
app.get('/api/search/keywords/:term', (req, res) => {
  dbHelpers.searchModule(req.params.term, (err, results) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).json(results);
    }
  });
});

app.get('/api/deliverables', (req, res) => {
  dbHelpers.getDeliverables((err, results) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).json(results);
    }
  });
});

app.get('/api/quiz/:id', (req, res) => {
  dbHelpers.getQuiz(req.params.id, (err, results) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).json(results);
    }
  });
});

// Port and connection
let port = 3000;
app.listen(port, () => console.log(`Connected and listening at port ${port}`));