/* 
//  Given two or more arrays, write a function that combines
//  their elements into one array without any repetition. 
//  E.g  mergeArrays([1,2,3,3,3], [1,4,5,2]) // should return [1,2,3,4,5]
given an array and a number, chunk that array down to smaller arrays of size = number
*/

function chunkArray(array, size) {
  let chunked = [];
  let chunker = [];
  let chunkist = [];
  while (array.length > size) {
    if (array.length > size) {
      chunked.push(array.splice(0, size));
    }
  }
  chunkist = array;
  console.log(chunkist);
  chunked.push(chunkist);
  return chunked;
}

module.exports = chunkArray;

/* //PREP//
p -> array and chunk size 
r -> chunked array
e -> chunkArray([1,2,3,4], 2) //return [[1,2],[3,4]]
p -> we want to loop through the given array
      -> check if arrays length is > chunk size 
          -> if true: we splice the array from 0 to size 
          -> push that array into our another array that will contain all chunked arrays
  -> store remaining array in another array and then push it to our chunked array
      -> loop will not iterate through an array that's less than the size
  -> return the chunked array
*/
