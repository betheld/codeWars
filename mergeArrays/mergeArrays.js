/*
 Given two or more arrays, write a function that combines
 their elements into one array without any repetition. 
 E.g mergeArrays([1,2,3,3,3], [1,4,5,2]) // should return [1,2,3,4,5]
*/

function mergeArrays(...arrays) {
  let jointArray = [];
  arrays.forEach(array => {
    jointArray = [...jointArray, ...array];
  });
  return [...new Set([...jointArray])];
}

module.exports = mergeArrays;

/* //!PREP
 PARAMS: multiple arrays -> always an array 
 RETURN: one array made of all unique elements from parameter arrays
 EXAMPLE: mergeArrays([1,2,3,3,3], [1,4,5,2]) // should return [1,2,3,4,5]
 PSEUDO: -> loop through our arrays where for each array we add to a previously defined jointArray
         -> we can use spread syntax to on jointArray and the current array to simply put them into a new array literal 
         -> then we use a Set (which only accepts unique values)
         -> store values in a new array and return
*/
