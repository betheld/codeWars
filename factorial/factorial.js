/*
Write a function that returns the factorial of 
the provided integer(n). E.g
    factorial(5) // should return 120
*/

function factorial(n) {
  let result = 1;
  if (n === 0 || n === 1) {
    return result;
  } else {
    for (let i = n; i >= 1; i--) {
      result *= i;
    }
    return result;
  }
}

// ALSO VALID
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

module.exports = factorial;

/*
p: number - no funny business no negatives
r: number -> factorial of given number
e: factorial(5) // should return 120 (5*4*3*2*1)
p: factorials are n*(n-1)(n-2)....
  -> if n is 0 or 1 then factorial is naturally 1
  -> use a loop that decrements to n to 1 
  -> multiplying each time 
  -> need a variable to store these products 
    -> variable must start at one since we are multiplying
  -> in the loop we simply resign result to itself * n (as it decreases)
      -> 5*4 -> result = 20
      -> 20*3 -> result = 60
      -> 60*2 -> result = 120
      -> 120*1 -> result = 120
  -> return result
*/
