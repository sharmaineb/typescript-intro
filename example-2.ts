// Take a look at the code here. Notice the VSCode will 
// provide errors!

// typescript-intro-main git:(main) ✗ tsc example-2.ts
// example-2.ts:9:8 - error TS2322: Type 'string' is not assignable to type 'number'.

// 9  const price: number = amount.toFixed(2)
//          ~~~~~

// example-2.ts:11:2 - error TS2322: Type 'number' is not assignable to type 'string'.

// 11  return price + tax
//     ~~~~~~


// Found 2 errors in the same file, starting at: example-2.ts:9

// Compile the code and check what type script says: 
// tsc example-2.ts

function getPriceWithTax(amount: number, rate: number): number {
	const price: number = parseFloat(amount.toFixed(2)); 
	const tax: number = price * rate;
	return price + tax;
  }
  
  const answer = getPriceWithTax(23.99, 9.5);
  console.log(answer);
  
  export { 
	getPriceWithTax 
};
  

