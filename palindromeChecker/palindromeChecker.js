/* CHALLENGE
Given a string of text, return true or false indicating whether or not the text is a palindrome.
e.g palindromeChecker('racecar') // will return true
*/

function palindromeChecker(x) {
  const str = x.toLowerCase();
  let pali = x.toLowerCase().split('').reverse().join('');
  if (pali === str) {
    return true;
  } else {
    return false;
  }
}

module.exports = palindromeChecker;

/* //PREP
PARAMS: a string -> case sensitive.
RETURN: boolean
EXAMPLE: -> palindromeChecker('racecar') // will return true
         -> palindromeChecker('travis scott is a nice guy') // will return false
PSEUDO: -> convert string to lowerCase()
        -> create a reverse version of our string
        -> check if they're === 
        -> return boolean
*/
