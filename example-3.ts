// Add types here. Be sure to set the types for: 
// - variables
// - function parameters
// - function return

function printCopy(str: string, n: number): string {
  let result: string = '';
  for (let i: number = 0; i < n; i += 1) {
    result += str + '\n';
  }
  return result;
}

console.log(printCopy('hello', 3));

// Compile the code and check what type script says: 
// tsc example-3.ts

export {
  printCopy
};

// typescript-intro-main git:(main) ✗ node example-3.js
// hello
// hello
// hello