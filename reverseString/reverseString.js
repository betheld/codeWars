/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/

function reverseString(text) {
  return text.split('').reverse().join('');
}

module.exports = reverseString;

/* //PREP//
params-> a string with no funny business
return-> reversed string
example-> reverseString('algorithms') // should return 'smhtirogla'
       -> reverseString('cat') // should return 'tac'
pseudo-> split word into array of letter 
      -> use reverse method 
      -> use join('') to change back to string and return
*/
