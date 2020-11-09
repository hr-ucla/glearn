const valuesVSreferences = [
  {
    id: 1,
    title: 'Value vs Reference Checkpoint',
    numOfQuestions: 10,
    questions: [
      {
        questionId: 1,
        question: 'After the following code runs, what will be the value of x?',
        code: "var x = 2;\nvar y = x;\ny = 3;",
        multipleChoice: [
          {
            id: 1,
            choice: '2',
          },
          {
            id: 2,
            choice: '3',
          },
          {
            id: 3,
            choice: 'Not sure',
          },
        ],
        answerId: 1,
      },
      {
        questionId: 2,
        question: 'After the following code runs, what will be the value of x.foo?',
        code: "var x = { foo: 3 };\nvar y = x;\ny.foo = 2;",
        multipleChoice: [
          {
            id: 4,
            choice: '2',
          },
          {
            id: 5,
            choice: '3',
          },
          {
            id: 6,
            choice: 'Not sure',
          },
        ],
        answerId: 4,
      },
      {
        questionId: 3,
        question: 'After the following code runs, what will be the value of x.foo?',
        code: "var x = { foo: 3 };\nvar y = x;\ny = 2;",
        multipleChoice: [
          {
            id: 7,
            choice: '2',
          },
          {
            id: 8,
            choice: '3',
          },
          {
            id: 9,
            choice: 'undefined',
          },
          {
            id: 10,
            choice: 'Reference Error',
          },
        ],
        answerId: 8,
      },
      {
        questionId: 4,
        question: 'After the following code runs, what will be the value of myArray?',
        code: "var myArray = [2, 3, 4, 5];\nvar ourArray = myArray;\nourArray = [];",
        multipleChoice: [
          {
            id: 11,
            choice: '[]',
          },
          {
            id: 12,
            choice: '[2, 3, 4, 5]',
          },
          {
            id: 13,
            choice: 'undefined',
          },
        ],
        answerId: 12,
      },
      {
        questionId: 5,
        question: 'After the following code runs, what will be the value of myArray?',
        code: "var myArray = [2, 3, 4, 5];\nvar ourArray = myArray;\nourArray[2] = 25;\nourArray = undefined;",
        multipleChoice: [
          {
            id: 14,
            choice: '[]',
          },
          {
            id: 15,
            choice: '[2, 3, 4, 5]',
          },
          {
            id: 16,
            choice: 'undefined',
          },
          {
            id: 17,
            choice: '[2, 3, 25, 4, 5]',
          },
          {
            id: 18,
            choice: '[2, 3, 25, 5]',
          }
        ],
        answerId: 18,
      },
      {
        questionId: 6,
        question: 'After the following code runs, what will be the value of myArray?',
        code: "var myArray = [2, 3, 4, 5];\nfunction doStuff(arr) {\narr[2] = 25;\n}\n\ndoStuff(myArray);",
        multipleChoice: [
          {
            id: 19,
            choice: '[]',
          },
          {
            id: 20,
            choice: '[2, 3, 4, 5]',
          },
          {
            id: 21,
            choice: 'undefined',
          },
          {
            id: 22,
            choice: '[2, 3, 25, 4, 5]',
          },
          {
            id: 23,
            choice: '[2, 3, 25, 5]',
          }
        ],
        answerId: 23,
      },
      {
        questionId: 7,
        question: 'After the following code runs, what will be the value of myArray?',
        code: "var myArray = [2, 3, 4, 5];\nfunction doStuff(arr) {\narr = [];\n}\n\ndoStuff(myArray);",
        multipleChoice: [
          {
            id: 24,
            choice: '[]',
          },
          {
            id: 25,
            choice: '[2, 3, 4, 5]',
          },
          {
            id: 26,
            choice: 'undefined',
          },
          {
            id: 27,
            choice: '[2, 3, 25, 4, 5]',
          },
          {
            id: 28,
            choice: '[2, 3, 25, 5]',
          }
        ],
        answerId: 25,
      },
      {
        questionId: 8,
        question: 'After the following code runs, what will be the value of player.score?',
        code: "var player = { score: 3 };\nfunction doStuff(obj) {\nobj.score = 2;\nobj = undefined;\n}\n\ndoStuff(player);",
        multipleChoice: [
          {
            id: 29,
            choice: '2',
          },
          {
            id: 30,
            choice: '3',
          },
          {
            id: 31,
            choice: 'undefined',
          },
          {
            id: 32,
            choice: 'Not sure',
          }
        ],
        answerId: 29,
      },
      {
        questionId: 9,
        question: 'After the following code runs, what will be the value of player?',
        code: "var player = { score: 3 };\n\nfunction doStuff(obj) {\nobj = {};\n}\n\nplayer = doStuff(player);",
        multipleChoice: [
          {
            id: 33,
            choice: '{ score: 3 }',
          },
          {
            id: 34,
            choice: '{}',
          },
          {
            id: 35,
            choice: 'undefined',
          },
          {
            id: 36,
            choice: 'Not sure',
          }
        ],
        answerId: 35,
      },
      {
        questionId: 10,
        question: 'After the following code runs, what will be the value of example?',
        code: "var obj = { \ninner: { x: 10 }\n};\nvar example = obj.inner;\nobj.inner   = undefined;",
        multipleChoice: [
          {
            id: 37,
            choice: '{ inner: { x: 10 } }',
          },
          {
            id: 38,
            choice: '{ x: 10 }',
          },
          {
            id: 39,
            choice: '10',
          },
          {
            id: 40,
            choice: 'undefined',
          },
          {
            id: 41,
            choice: 'Not sure',
          }
        ],
        answerId: 38,
      }
    ]
  }
];

module.exports = valuesVSreferences;