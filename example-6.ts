// Snack type defines a tuple type. Use for 
// all the tuples below. 
// Set the other types. 

type Snack = [string, number];

const snack1: Snack = ['Seaweed', 142];
const snack2: Snack = ['Strawberries', 234];
const snack3: Snack = ['Chips', 105];

function displayNutrition(food: Snack): string {
  return `Item: ${food[0]} Calories: ${food[1]}`;
}

console.log(displayNutrition(snack1));
console.log(displayNutrition(snack2));
console.log(displayNutrition(snack3));

// Compile the code and check what type script says: 
// tsc example-6.ts

export {
  displayNutrition
};

// ➜  typescript-intro-main git:(main) ✗ node example-6.js
// Item: Seaweed Calories: 142
// Item: Strawberries Calories: 234
// Item: Chips Calories: 105