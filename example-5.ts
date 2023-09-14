// This example has some tuples. 
// These are arrays with mixed types. 
// Define a tuple type for each. 
// Add the types for the variables and function

// Define the type for a tuple like this: 
// const things: [string, number]

// https://www.typescriptlang.org/docs/handbook/2/objects.html#tuple-types

const snack1: [string, number] = ['Seaweed', 142];
const snack2: [string, number] = ['Strawberries', 234];
const snack3: [string, number] = ['Chips', 105];

function displayNutrition(food: [string, number]): string {
  return `Item: ${food[0]} Calories: ${food[1]}`;
}

console.log(displayNutrition(snack1));
console.log(displayNutrition(snack2));
console.log(displayNutrition(snack3));

// Compile the code and check what type script says: 
// tsc example-5.ts

export {
  displayNutrition
};

// ➜  typescript-intro-main git:(main) ✗ node example-5.js
// Item: Seaweed Calories: 142
// Item: Strawberries Calories: 234
// Item: Chips Calories: 105