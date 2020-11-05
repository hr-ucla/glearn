const quizContentData = {
  id: 1,
  numOfQuestions: 6,
  question: 'What message will eventually be alerted? After how long?'
  code: 'var name = "Window";\n var alice = {\n name: "Alice",\nsayHi: function() {\n alert(this.name + " says hi");\n }\n };\n var bob = { name: "Bob" };\n setTimeout(function() {\n alice.sayHi();\n }, 1000);'
  choices: [1, 2, 3, 4, 5],
  answer: 1,
  score: 0,
}