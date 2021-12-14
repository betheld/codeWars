/* CHALLENGE
Given a sentence containing two or more words, 
return the equivalent of the sentence when capitalised. E.g
  capSentence('the tales of scotch!') // would return 'The Tales Of Scotch!' 
*/

function capSentence(str) {
  let strArr = str.split(' ');
  let result = strArr.map(el => {
    console.log(el.slice(1));
    return el[0].toUpperCase() + el.slice(1).toLowerCase();
  });
  return result.join(' ');
}

module.exports = capSentence;

/* /PREP/
p: string -> no funny business
r: string but with every first letter capped and the rest lowercase
e: capSentence('the tales of scotch!') // would return 'The Tales Of Scotch!'
  -> capSentence('my Dog iS coOl') // would return 'My Dog Is Cool'
p: split our string into an array of words and loop 
  -> in each word, we convert the first letter [0] toUpperCase
  -> concat with remaining word from splice method starting at idx 1 .topLowerCase()
  -> join(' ') to return a string
*/
