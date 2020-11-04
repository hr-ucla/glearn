export default sampleModule = {
  moduleId: 1,
  moduleName: 'Welcome to Hack Reactor',
  keywords: ['hackreactor', 'introduction', 'welcome', 'slides', 'video', 'lecture', 'overview', 'schedule', 'metrics', 'success'],
  contents: [
    {
      id: 1,
      text: 'Recursion is a technique for solving problems wherein a function makes calls to itself. By doing so, it can complete a small amount of the processing, and delegate the rest of the problem to the recursive calls.'
    },
    {
      id: 2,
      text: 'Consider the following function:'
    },
    {
      id: 3,
      code: `var eat = function(meal){\n  console.log('meal before bite:', meal);\n  console.log('now eating', meal.pop());\n  if(meal.length){\n    eat(meal);\n  } else {\n    console.log('done with the meal!');\n  }\n}`
    },
    {
      id: 4,
      text: 'Which produces this output:'
    },
    {
      id: 5,
      code: `eat(['soup', 'potatoes', 'fish']);\n// => meal before bite: ["soup", "potatoes", "fish"]\n// => now eating fish\n// => meal before bite: ["soup", "potatoes"]\n// => now eating potatoes\n// => meal before bite: ["soup"]\n// => now eating soup\n// => done with the meal!`
    },
    {
      id: 6,
      text: 'You can use recursion on problems where smaller parts of the problem look the same as the larger problem as a whole.'
    },
    {
      id: 7,
      text: `In this sprint, you'll be reimplementing parts of the browser that involve recursion. In so doing, don't use the things you're reimplementing, or any other built-in shortcuts that make these problems trivial. (You'll probably know if you're cheating, but feel free to ask us if you're not sure.)`
    },
  ],
};