/* CHALLENGE
Given a string of text, find and return the most recurring character. 
e.g maxRecurringChar('aabacada') // will return 'a'
*/

function maxRecurringChar(text) {
  //TEST DOES NOT CARE ABOUT CAPITAL LETTER
  let arr = text.split('');
  let textObj = arr.reduce((allLetters, letters) => {
    if (letters in allLetters) {
      allLetters[letters]++;
    } else {
      allLetters[letters] = 1;
    }
    return allLetters;
  }, {});

  let count = 0;
  let bigLetter = '';
  for (let letter in textObj) {
    if (textObj[letter] > count) {
      count = textObj[letter];
      bigLetter = letter;
    }
  }

  return bigLetter;
}

module.exports = maxRecurringChar;

// PREP //
// PARAMETERS: take in a string of text | Will it be an empty string?
// does it care about casing? No | does it care about letter being of equal amounts? no -> return last.
// RETURN: returning the most recurring character.
// EXAMPLE: ('Gabby') // will return 'b'.
/* PSEUDO: 
1. function with one parameter (string of text)
2. convert text to an array containing each letter
3. reduce method -> set initial value to object so we can count recurring chars
4. if/else conditionals
5. check -> if element (letters) is in allLetters then increment that value by one
6. if value is not, then we add that value as property of allLetters and assign it 1
7. declare a variable called count that assigns to 0, bigLetter is assigned to an empty string.
8. for loop: declare letter in textObj containing count of letters
9. if a letters count is greater than our declared count 
    -> reassign (replace) count to that properties value
    -> reassign (replace) bigLetter to that letter (property of textObj)
10. finally we return big letter
*/
