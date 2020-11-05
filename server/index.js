const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const path = require('path');

const dbHelpers = require('../db/dbhelper.js');

// Server
const app = express();

// Serve static files
// app.use(express.static(path.join(__dirname, '../client/dist')));

// Middleware
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(cors());

// Route to search for locations by city
app.get('/api/module/:term', (req, res) => {
  dbHelpers.searchModule(req.params.term, (err, results) => {
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