/* CHALLENGE
Given a two strings, write an algorithm to check if they are anagrams
of each other. Return true if the pass the test and false if they
don't. E.g
    isAnagram('silent', 'listen') // should return true
*/

function isAnagram(stringA, stringB) {
  if (stringB.length !== stringA.length) {
    return false;
  }
  let str1 = stringA.split('').sort().join('');
  let str2 = stringB.split('').sort().join('');
  if (str1 === str2) {
    return true;
  } else {
    return false;
  }
}

module.exports = isAnagram;

/* //!PREP 
PARAMS: two strings -> always a string, no funny business
RETURN: true if anagram, false if not
EXAMPLE: -> isAnagram('silent', 'listen') // should return true
         -> isAnagram('catdog', 'listen') // should return false
PSEUDO:
  -> we can eliminate one case by checking length -> if not same != anagram
  -> use split/sort/join to sort letters in a string then compare using strict comparison operator 
*/
