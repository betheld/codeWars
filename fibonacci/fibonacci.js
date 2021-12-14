/*
Write a function to return the nth element in Fibonacci sequence,
where the sequence is:
    [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, …]
*/

function fibonacci(n) {
  let fib = [1, 1];
  for (i = 0; i < n - 1; i++) {
    fib.push(fib[i] + fib[i + 1]);
  }
  return fib[fib.length - 1];
}

module.exports = fibonacci;

/* //PREP//
p: number, no funny business no 0
r: the nth element in the the sequence. 
e: fibonacci(4) //return 3
   fibonacci(6) //return 8
p: fibbonaci is just the addition of previous two nums in the sequence 
  -> first two nums are 1, so we can store that in an array 
  -> loop through the array adding each number to the previous and push to previous array
      -> because of our array storing 1,1 we can start adding from index 0
  -> return the last number in the array 
  -> NOTE: this solution would return one extra element in array, thus we use n-1 in loop 
*/
