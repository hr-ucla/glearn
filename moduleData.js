const sampleModules = [
  {
    moduleId: 1,
    moduleName: 'Exercise: Recursion Review',
    keywords: ['exercise', 'recursion', 'review', 'sprint', 'recursive', 'pomander', 'mocha', 'chai', 'test', 'framework', 'hackreactor', 'introduction', 'welcome', 'slides', 'video', 'lecture', 'overview', 'schedule', 'metrics', 'success'],
    content: `<text>Recursion is a technique for solving problems wherein a function makes calls to itself. By doing so, it can complete a small amount of the processing, and delegate the rest of the problem to the recursive calls.\n\nConsider the following function:</text><codesnippet>var eat = function(meal){\n  console.log('meal before bite:', meal);\n  console.log('now eating', meal.pop());\n  if(meal.length){\n    eat(meal);\n  } else {\n    console.log('done with the meal!');\n  }\n}</codesnippet><text>Which produces this output:</text><codesnippet>eat(['soup', 'potatoes', 'fish']);\n// => meal before bite: ["soup", "potatoes", "fish"]\n// => now eating fish\n// => meal before bite: ["soup", "potatoes"]\n// => now eating potatoes\n// => meal before bite: ["soup"]\n// => now eating soup\n// => done with the meal!</codesnippet><text>You can use recursion on problems where smaller parts of the problem look the same as the larger problem as a whole.\n\nIn this sprint, you'll be reimplementing parts of the browser that involve recursion. In so doing, don't use the things you're reimplementing, or any other built-in shortcuts that make these problems trivial. (You'll probably know if you're cheating, but feel free to ask us if you're not sure.)\n\nIn this sprint, you'll be reimplementing parts of the browser that involve recursion. In so doing, don't use the things you're reimplementing, or any other built-in shortcuts that make these problems trivial. (You'll probably know if you're cheating, but feel free to ask us if you're not sure.)\n\n(Curious fact: many browsers don't have any of these functions in them, and people do need to reimplement them. When we reimplement new browser functionality in older browsers, it's called a "polyfill".)</text><title1>New for the Review Sprint</title1><title2>Review Sprint Repo</title2><text><b>The repo you will be working out of will be a different repo from Precourse.</b> Look on Github for <code>recursion-review</code> instead of <code>recursion</code>. Work on this from scratch and do not reference code from Precourse.</text><title2>Pomander</title2><text>To ensure your work is of the highest quality, we've created Pomander, a tool that checks your code for syntax errors and violations against the style guide before each commit.\n\nInstall it by navigating to this repository in Terminal and running the following command:</text><codesnippet>curl -s https://raw.githubusercontent.com/reactorcore/pomander/master/bin/install | bash</codesnippet><text>Pomander uses a pre-commit hook to run staged files through <code>eslint</code> before each commit. <code>eslint</code> is a linter that will block your commit should you have any syntax errors, or, should you violate the Hack Reactor style guide. There are some preferred whitespace style rules that will give warnings but not block your commit. If the linter gives you any funny bugs, these bugs are not intentional, and you should feel free to skip using it during commits with the <code>--no-verify</code> option.</text>`,
  },
];

module.exports = sampleModules;