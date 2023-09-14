// Run the code here, no problems?

function getPriceWithTax(amount, rate) {
	const price = amount.toFixed(2)
	const tax = price * rate
	return (price + tax)
}

const answer = getPriceWithTax(23.99, 9.5)
console.log(answer)

// Run the code here and look at the results
// Does it look right? 
// What went wrong?

// When I ran 'node example-1.js', the result was 23.99227.90499999999997.
// The amount parameter is being converted to a string when we use the toFixed(2) method.
