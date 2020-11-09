const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/glearn', {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });

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

const deliverableSchema = new mongoose.Schema({
  title: String,
  data: [
    {
      id: { type: Number },
      title: { type: String },
      dueDate: { type: String },
      completed: { type: Boolean },
      percentage: { type: Number },
      numOfQuestions: { type: Number },
      timeLimit: { type: Number },
      numOfAttempts: { type: String },
      description: { type: String },
      numOfCorrect: { type: Number }
    }
  ],
});

const quizSchema = new mongoose.Schema({
  id: Number,
  title: String,
  numOfQuestions: Number,
  questions: [
    {
      questionId: { type: Number },
      question: { type: String },
      code: { type: String },
      multipleChoice: [
        {
          id: { type: Number },
          choice: { type: String },
        }
      ],
      answerId: { type: Number },
    }
  ]
});

const Module = mongoose.model('Module', moduleSchema);
const Deliverable = mongoose.model('Deliverable', deliverableSchema);
const Quiz = mongoose.model('Quiz', quizSchema);

module.exports = {
  Module,
  Deliverable,
  Quiz,
  connection,
};
