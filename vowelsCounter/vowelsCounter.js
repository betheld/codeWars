/* CHALLENGE
Given a string of text, return the number of vowels found within the text
e.g vowelsCounter('anehizxcv') // will return 3
*/

//checked
function vowelsCounter(text) {
  let count = 0;
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let arr = text
    .toLowerCase()
    .split('')
    .map(el => {
      if (vowels.includes(el)) {
        count++;
      }
    });
  return count;
}

module.exports = vowelsCounter;

/* //PREP//
params -> a string -- no funny business -- case sensitive
return -> total number of vowels in the string
example -> vowelsCounter('anehizxcv') // will return 3
        -> vowelsCounter('bethel') // will return 2
pseudo -> ensure string is lower case, then split by letter and loop 
       -> declare an array with all vowels to compare to each letter in our loop 
       -> increase a count variable each time a vowel is found 
       -> return the count
*/
