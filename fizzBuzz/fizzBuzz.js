/*
    Write a program that prints the numbers from 1 to n. But for 
    multiples of three print “Fizz” instead of the number and for 
    the multiples of five print “Buzz”. For numbers which are 
    multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      console.log('fizzbuzz');
    } else if (i % 3 === 0) {
      console.log('fizz');
    } else if (i % 5 === 0) {
      console.log('buzz');
    } else {
      console.log(i);
    }
  }
}

module.exports = fizzBuzz;

/* //PREP//
p -> number with no funny business
r -> all nums, fizz if div by 3, fizzbuzz if div by 5 or 3 or buzz if div by 5
e -> fizzBuzz(6) -> 1,2,fizz,4,buzz,6
p -> create a loop starting from 1 to n 
  -> conditionals checking for each potential result 
      -> fizz if div by 3, fizzbuzz if div by 5 or 3 or buzz if div by 5
      -> !IMPORTANT: much check for fizzbuzz first! 
*/